import React from 'react';
import Card from './Card';

import classes from './CardList.module.css';

const CardList = (props) => {
	const cards = props.cards;
	const loadedCards = [];

	for (const cardKey in cards) {
		loadedCards.push({
			id: cardKey,
			description: cards[cardKey].title,
		});
	}

	const cardList = loadedCards.map((card) => {
		return <Card id={card.id} description={card.description} key={card.id} />;
	});

	return <ul className={classes['card-list']}>{cardList}</ul>;
};

export default CardList;
