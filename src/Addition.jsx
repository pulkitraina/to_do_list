import React, { useState } from "react";
import $ from 'jquery';

function Addition({list, setList}){
	function updateList(){
		let textarea = $(".new-item");
		var text = textarea.val();
		if(text !== "") setList([...list, {item: text, completed: false}]);
		textarea.val("");
	}

	return (
		<>
			<h2>New Item</h2>
			<input type="text" className="new-item" name = "new-item"/>
			<button className="add-btn" onClick={updateList}>Add Item</button>
		</>
	);
}

export default Addition