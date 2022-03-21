import React, { useState } from 'react';
import List from '../List/List';
import data from '../../utils/data.js';

import classes from './Board.module.css';

const Board = () => {
	const [lists, setLists] = useState(data);

	const listData = data.listIds.map((listId) => {
		const list = data.lists[listId];
		return <List key={listId} list={list} />;
	});

	return (
		<div className={classes.board}>
			Project Trello
			{listData}
		</div>
	);
};

export default Board;
