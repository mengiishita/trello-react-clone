import React from 'react';

import classes from './Card.module.css';

const Card = (props) => {
	return (
		<li className={classes.card} key={props.id}>
			{props.title}
		</li>
	);
};

export default Card;
