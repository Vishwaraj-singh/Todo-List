import { useState } from "react"

export const TodoForm = ({ onAddItem }) => {
	const [inputValue, setInputValue] = useState({})

	const handelSetInput = (value) => {
		setInputValue({ id: value, content: value, checked: false });
	}

	const handelSubmit = (event) => {
		event.preventDefault();
		onAddItem(inputValue);
		setInputValue({ id: "", content: "", checked: false })
	}
	return (
		<>
			<section className="form-cont">
				<form onSubmit={handelSubmit}>

					<div className="inputCont">
						<input className="input-field"
							type="text"
							autoComplete="off"
							placeholder="Add your task"
							value={inputValue.content}
							onChange={(event) => handelSetInput(event.target.value)} />
					</div>
				</form>

				<div className="btn-cnt">
					<button className="add-Btn" onClick={handelSubmit}>Add</button>
				</div>
			</section>

		</>
	)
}