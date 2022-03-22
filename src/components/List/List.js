import React from 'react';
import ListTitle from './ListTitle';
import Card from '../Card/Card';
import AddItemContainer from '../Layout/AddItemContainer';

import classes from './List.module.css';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const List = (props) => {
	const cardContent = props.list.cards.map((card, index) => {
		return <Card key={card.id} id={card.id} title={card.title} index={index} />;
	});
	return (
		<Draggable draggableId={props.list.id} index={props.index}>
			{(provided) => (
				<div ref={provided.innerRef} {...provided.draggableProps}>
					<div className={classes.list} {...provided.dragHandleProps}>
						<ListTitle title={props.list.title} listId={props.list.id} />
						<Droppable droppableId={props.list.id}>
							{(provided) => (
								<div ref={provided.innerRef} {...provided.droppableProps}>
									{cardContent}
									{provided.placeholder}
								</div>
							)}
						</Droppable>
						<AddItemContainer type='card' listId={props.list.id} />
					</div>
				</div>
			)}
		</Draggable>
	);
};

export default List;
