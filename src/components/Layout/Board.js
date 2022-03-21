import React, { useState } from 'react';
import List from '../List/List';
import data from '../../utils/data.js';
import CardContext from '../../store/card-context';

import classes from './Board.module.css';

const Board = () => {
	const [content, setContent] = useState(data);

	const addCard = (title, listId) => {
		const newCardId = Math.random();
		const newCard = {
			id: newCardId,
			title,
		};

		const list = content.lists[listId];
		list.cards = [...list.cards, newCard];

		const updatedList = {
			...content,
			lists: {
				...content.lists,
				[listId]: list,
			},
		};
		setContent(updatedList);
	};

	const listData = content.listIds.map((listId) => {
		const list = content.lists[listId];
		return <List key={listId} list={list} />;
	});

	return (
		<CardContext.Provider value={{ addCard }}>
			<div className={classes.board}>
				Project Trello
				{listData}
			</div>
		</CardContext.Provider>
	);
};

export default Board;
