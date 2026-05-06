import { BsTrash3Fill } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
export const TodoList = ({ data, onDelete, checked, onChecked }) => {
	return (
		<>
			<li className="itemList" >

				<div className="name">
					<label htmlFor={data} className="checkbox">
						<span className={checked ? "checkList" : "notChecklist"}>{data}</span>

					</label>
				</div>
				<div className="btnCnt">
					<button className="checkBtn" onClick={() => onChecked(data)}>
						<FaCheckCircle />
					</button>

					<button className="removeBtn" onClick={() => onDelete(data)}>
						<BsTrash3Fill />
					</button>
				</div>



			</li>
		</>
	)
}