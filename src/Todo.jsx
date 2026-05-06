import { useState } from "react"
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

const todoKeys = "reactTodo"

export const Todo = () => {

	const [task, setTask] = useState(() => {

		const rawTodo = localStorage.getItem(todoKeys)
		if (!rawTodo) return;

		return JSON.parse(rawTodo);
	});



	const handelForm = (inputValue) => {
		const { id, content } = inputValue;

		//check input field is empty or not 
		if (!content) return;

		//to check if data is already or not 
		const ifTodoChecked = task.find((currTask) => currTask.content === content);

		if (ifTodoChecked) return

		setTask((prev) => [{ id, content }, ...prev])

	}

	//add local storage
	localStorage.setItem(todoKeys, JSON.stringify(task))


	//data remove from list 

	const handelRemove = (value) => {
		const updatedFun = (task.filter((currValue) => currValue.content !== value))
		setTask(updatedFun)

	}

	const handelClear = () => {
		setTask([])
	}

	const handelChecked = (data) => {
		const updateData = task.map((currTask) => {
			if (currTask.content === data) {
				return { ...currTask, checked: !currTask.checked }
			} else {
				return (currTask)
			}
		})
		setTask(updateData)
	}

	return (<>
		<section className="main-cont">
			<div className="todo-cont">
				<header>
					<h1 className="heading">TO DO LIST</h1>
				</header>

				<TodoForm onAddItem={handelForm} />

				<section className="unorderlist">
					<ul >{
						task.map((currTask) => {
							return <TodoList
								key={currTask.id}
								data={currTask.content}
								onDelete={handelRemove}
								onChecked={handelChecked}
								checked={currTask.checked}
							/>
						})
					}

					</ul>
				</section>

				<section className="clearAll-section">
					<button className="clearAll" onClick={handelClear}>
						Clear All
					</button>
				</section>
			</div >
		</section >
	</>)
}