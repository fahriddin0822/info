import WorkCard from "../components/workcard";
import { useSelector, useDispatch } from "react-redux";
import { saveData, deleteData } from "../store/infoSlice";
import { Link, useNavigate } from "react-router-dom";

const Info = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const works = useSelector((state) => state.info.value);
  console.log(works);

  const removeData = (id) => {
    dispatch(deleteData(id));
  };

  const editData = (data) => {
    dispatch(saveData(data));
    navigate("/create");
  };

  return (
    <div className="container py-4">
      <div className="grid grid-cols-3 gap-4">
        {works.length ? (
          works?.map((item) => (
            <WorkCard
              rm={removeData}
              edit={editData}
              data={item}
              key={item?.id}
            />
          ))
        ) : (
          <>
            <div className=" flex flex-col py-10">
              <span className="text-3xl font-semibold mb-4">No data</span>
              <Link
                to="/create"
                className="py-2 px-4 rounded-lg bg-blue-600 text-white"
              >
                Create work
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Info;
