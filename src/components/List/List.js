import React from 'react';
import ListTitle from './ListTitle';
import Card from '../Card/Card';
import AddItemContainer from '../Layout/AddItemContainer';

import classes from './List.module.css';
import { Droppable } from 'react-beautiful-dnd';

const List = (props) => {
	const cardContent = props.list.cards.map((card, index) => {
		return <Card key={card.id} id={card.id} title={card.title} index={index} />;
	});
	return (
		<div className={classes.list}>
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
	);
};

export default List;
