import React from "react";
import { useState } from "react";
import "./../styles/App.css";

function App() {
	const [input, setInput] = useState("")
	const [list, setList] = useState([])
	function handleinput(e) {
		e.preventDefault()
		return (setList([...list, input]), setInput(""))
	}
	function handleDelete(ele) {
		const del = list.filter(e => e != ele)
		return (setList(del))
	}
	function handleEdit(ele) {
		const ed = document.getElementById("task")
		return (<input type="text" />)
	}
	return (
		<div id="main">
			<h1>Todo List</h1>
			<form onSubmit={handleinput}>
				<input type="text" id="task" onChange={(e) => setInput(e.target.value)} value={input} required />
				<button id="btn" type="submit" >Add task</button>
			</form>
			<div className="content">
				{
					list.map((ele, i) => {
						return (
							<div key={i} className="list">
								<h3 >{ele}</h3>
								<button className="edit" onClick={() => { handleEdit(ele) }}>Edit</button>
								<button className="delete" onClick={() => { handleDelete(ele) }}> Delete</button>
							</div>
						)
					})
				}
			</div>
		</div>
	);
}


export default App;
