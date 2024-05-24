import React, { useState } from "react";

function ToDoList({list, setList}){
	function removeItem(inx){
		setList(list.filter((_, i) => i!=inx));
	}

	function handleChange(inx){
		setList(list.map((item, ind) => {
			if(ind == inx){
				return {...item, completed: !item.completed};
			}
			return item;
		}))
	}
	
	function itemCreatorHelper(item, inx){
		return (
			<>
				<div className="to-do-item" key={inx}>
					<input type="checkbox" 
									onChange={ () => handleChange(inx) } 
									checked = {item.completed} />
					<span className={item.completed ? "strikethrough" : ""}> {item.item}</span>
					<button onClick={() => removeItem(inx)} className = "remover">Remove</button>
				</div>
			</>
		);
	}

	function itemCreator(list){
		if(list.length === 0) return (
			<h3>No tasks added yet!</h3>
		);
		
		return list.map((item, index) => itemCreatorHelper(item, index))
	}

	return (
		<>
			<div className="to-do-container">
				<h1>To Do List</h1>
				<div className="to-do-item-container">
					{itemCreator(list)}
				</div>
			</div>
		</>
	);
}

export default ToDoList