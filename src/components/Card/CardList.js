import React from 'react';
import Card from './Card';

import classes from './CardList.module.css';

const CardList = (props) => {
	const cardList = props.cards.map((card) => {
		return <Card id={card.id} title={card.title} key={card.id} />;
	});

	return <ul className={classes['card-list']}>{cardList}</ul>;
};

export default CardList;
