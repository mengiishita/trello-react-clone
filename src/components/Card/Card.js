import React from 'react';

import classes from './Card.module.css';

const Card = (props) => {
	return (
		<li className={classes.card} key={props.id}>
			{props.description}
		</li>
	);
};

export default Card;
