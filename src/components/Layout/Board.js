import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import List from '../List/List';
import data from '../../utils/data.js';
import CardContext from '../../store/card-context';
import AddItemContainer from './AddItemContainer';

import classes from './Board.module.css';
import { DragDropContext } from 'react-beautiful-dnd';

const Board = () => {
	const [content, setContent] = useState(data);

	const addCard = (title, listId) => {
		const newCardId = uuid();
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

	const addList = (title) => {
		const newListId = uuid();
		const newList = {
			id: newListId,
			title,
			cards: [],
		};
		const updatedList = {
			listIds: [...content.listIds, newListId],
			lists: {
				...content.lists,
				[newListId]: newList,
			},
		};
		setContent(updatedList);
	};

	const updateListTitle = (title, listId) => {
		const list = content.lists[listId];
		list.title = title;

		const updatedList = {
			...content,
			lists: {
				...content.lists,
				[listId]: list,
			},
		};

		setContent(updatedList);
	};

	const dragEndHandler = (result) => {
		const { destination, source, draggableId } = result;

		if (!destination) {
			return;
		}

		const sourceList = content.lists[source.droppableId];
		const destinationList = content.lists[destination.droppableId];
		const draggingCard = sourceList.cards.filter(
			(card) => card.id === draggableId
		)[0];

		if (source.droppableId === destination.droppableId) {
			sourceList.cards.splice(source.index, 1);
			destinationList.cards.splice(destination.index, 0, draggingCard);
			const updatedList = {
				...content,
				lists: {
					...content.lists,
					[sourceList.id]: destinationList,
				},
			};
			setContent(updatedList);
		}
	};

	const listData = content.listIds.map((listId) => {
		const list = content.lists[listId];
		return <List key={listId} list={list} />;
	});

	return (
		<CardContext.Provider value={{ addCard, addList, updateListTitle }}>
			<DragDropContext onDragEnd={dragEndHandler}>
				<div className={classes.board}>
					{listData}
					<AddItemContainer type='list' />
				</div>
			</DragDropContext>
		</CardContext.Provider>
	);
};

export default Board;
