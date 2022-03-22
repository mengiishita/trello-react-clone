import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import List from '../List/List';
import data from '../../utils/data.js';
import CardContext from '../../store/card-context';
import AddItemContainer from './AddItemContainer';

import classes from './Board.module.css';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

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
		const { destination, source, draggableId, type } = result;

		if (!destination) {
			return;
		}

		if (type === 'list') {
			const newListIds = content.listIds;
			newListIds.splice(source.index, 1);
			newListIds.splice(destination.index, 0, draggableId);
			const updatedList = {
				...content,
				listIds: newListIds,
			};
			setContent(updatedList);
			return;
		}

		const sourceList = content.lists[source.droppableId];
		const destinationList = content.lists[destination.droppableId];
		const draggingCard = sourceList.cards.filter(
			(card) => card.id === draggableId
		)[0];

		sourceList.cards.splice(source.index, 1);
		destinationList.cards.splice(destination.index, 0, draggingCard);
		let updatedList = {};

		if (source.droppableId === destination.droppableId) {
			updatedList = {
				...content,
				lists: {
					...content.lists,
					[sourceList.id]: destinationList,
				},
			};
		} else {
			updatedList = {
				...content,
				lists: {
					...content.lists,
					[sourceList.id]: sourceList,
					[destinationList.id]: destinationList,
				},
			};
		}
		setContent(updatedList);
	};

	const listData = content.listIds.map((listId, index) => {
		const list = content.lists[listId];
		return <List key={listId} list={list} index={index} />;
	});

	return (
		<CardContext.Provider value={{ addCard, addList, updateListTitle }}>
			<DragDropContext onDragEnd={dragEndHandler}>
				<Droppable droppableId='app' type='list' direction='horizontal'>
					{(provided) => (
						<div
							className={classes.board}
							ref={provided.innerRef}
							{...provided.droppableProps}>
							{listData}
							<AddItemContainer type='list' />
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
		</CardContext.Provider>
	);
};

export default Board;
