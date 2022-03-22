import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import classes from './Card.module.css';

const Card = (props) => {
	return (
		<Draggable draggableId={props.id} index={props.index}>
			{(provided) => (
				<div
					ref={provided.innerRef}
					{...provided.dragHandleProps}
					{...provided.draggableProps}>
					<div className={classes.card} key={props.id}>
						{props.title}
					</div>
				</div>
			)}
		</Draggable>
	);
};

export default Card;
