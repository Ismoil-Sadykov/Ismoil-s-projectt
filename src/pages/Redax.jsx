import { useDispatch, useSelector } from "react-redux"
import EditSquareIcon from '@mui/icons-material/EditSquare';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteUser } from "../redux/reducers/todoList";

export default function Redax() {
  const { users } = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <div className="flex justify-around p-5 flex-wrap">
      {users.map((e) => {
        return (
          <div key={e.id} className="w-[270px] shadow-md text-center hover:scale-[105%] transition rounded-[12px] p-5 mb-[50px]">
            <p className="text-[24px] font-bold mb-[20px]">{e.name}</p>
            <p className="text-[18px] text-gray-600 mb-[20px]"><span className="font-bold">Age: </span>{e.age}</p>
            <div className="flex justify-between mb-[10px]">
              <button className="text-red-600 hover:text-red-900 transition cursor-pointer"
                onClick={() => dispatch(deleteUser(e.id))}
              ><DeleteIcon /></button>
              <button className="text-gray-600 hover:text-gray-900 transition cursor-pointer"><EditSquareIcon /></button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
