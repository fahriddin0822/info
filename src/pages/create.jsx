import { useSelector, useDispatch } from "react-redux";
import { createData, editData } from "../store/infoSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const CreateWork = () => {
  const initState = {
    title: "",
    info: "",
  };
  const [data, setData] = useState(initState);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, editedData } = useSelector((state) => state.info);

  function handleChange(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }

  function sendData(e) {
    e.preventDefault();
    if (status === "created") {
      dispatch(createData({ id: Math.random(), ...data }));
    } else {
      dispatch(editData({ ...data }));
    }
    setData(initState);
    navigate("/info");
  }

  useEffect(() => {
    if (status === "updated") {
      setData({
        ...editedData,
      });
    }
  }, []);
  return (
    <div className="pt-12">
      <h1 className="text-2xl font-bold mb-4 text-center">Create info</h1>

      <div className="w-1/3 mx-auto">
        <form onSubmit={sendData} className="flex flex-col w-full gap-3">
          <input
            type="text"
            placeholder="title"
            name="title"
            value={data.title}
            onChange={handleChange}
            required
            className="py-2 px-4 rounded-md border border-gray-200 outline-none"
          />
          <textarea
            className="resize-y w-full h-[100px] py-2 px-4 rounded-md border border-gray-200 outline-none"
            placeholder="info"
            name="info"
            value={data.info}
            onChange={handleChange}
            required
          ></textarea>
          <input
            type="submit"
            placeholder="title"
            value={status === "created" ? "Create" : "Update"}
            className="py-2 px-4 rounded-md bg-green-700 text-white outline-none"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateWork;
