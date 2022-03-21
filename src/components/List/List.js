import React from 'react';
import ListTitle from './ListTitle';
import CardList from '../Card/CardList';
import AddCardContainer from '../Card/AddCard/AddCardContainer';

import classes from './List.module.css';

const List = (props) => {
	return (
		<div className={classes.list}>
			<ListTitle title={props.title} />
			<CardList cards={props.cards} />
			<AddCardContainer />
		</div>
	);
};

export default List;
