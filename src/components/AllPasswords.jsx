import { useSelector, useDispatch } from "react-redux";
import {
  deleteRecord,
  updateRecord,
  enterEditMode,
} from "../store/slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { toast } from "react-toastify";

const AllPasswords = () => {
  const records = useSelector((state) => state.PassOP.records);

  const dispatch = useDispatch();

  const editMode = useSelector((state) => state.PassOP.editMode);

  const handleEdit = (record) => {
    if (!editMode) {
      dispatch(enterEditMode());
      dispatch(updateRecord(record));
    }
  };

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleDelete = (record) => {
    dispatch(deleteRecord(record));

    toast.success("Record deleted!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return records.length === 0 ? (
    <div className="text-center mt-10 text-2xl">
      You have no saved passwords. Start adding some now!
    </div>
  ) : (
    records.map((record) => {
      return (
        <div
          className="record-container record flex flex-col xl:flex-row items-center my-10"
          key={record.id}
        >
          <div className="website flex flex-col w-3/4 mx-5">
            <label htmlFor="record-website">Website: </label>
            <div className="flex justify-between py-2">
              <input
                type="text"
                id="record-website"
                value={record.website}
                className="record-field"
                disabled
              />
              <span>
                <a href={record.website} target="_blank">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </span>
            </div>
          </div>
          <div className="username flex flex-col w-3/4 mx-5">
            <label htmlFor="record-username">Username: </label>
            <div className="flex justify-between py-2">
              <input
                type="text"
                name="record-username"
                value={record.username}
                className="record-field"
                disabled
              />
              <button
                onClick={() => copyText(record.username)}
                className="w-fit"
              >
                <FontAwesomeIcon icon={faCopy} />
              </button>
            </div>
          </div>
          <div className="password flex flex-col w-3/4 mx-5">
            <label htmlFor="record-password">Password: </label>
            <div className="flex justify-between py-2">
              <input
                type="text"
                id={record.id}
                name="record-password"
                value={record.password}
                className="record-field"
                disabled
              />
              <button
                onClick={() => copyText(record.password)}
                className="w-fit"
              >
                <FontAwesomeIcon icon={faCopy} />
              </button>
            </div>
          </div>
          <div className="record-btns flex justify-center gap-2 w-full px-10 text-white my-5 lg:w-3/4 xl:h-10">
            <button className="bg-blue-700 hover:bg-blue-800 hover:cursor-pointer w-1/2" onClick={() => handleEdit(record)}>
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            <button className="bg-red-500 hover:bg-red-600 hover:cursor-pointer w-1/2" onClick={() => handleDelete(record)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
      );
    })
  );
};

export default AllPasswords;
