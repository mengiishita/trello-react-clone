import React from 'react';
import ListTitle from './ListTitle';
import CardList from '../Card/CardList';
import AddItemContainer from '../Layout/AddItemContainer';

import classes from './List.module.css';

const List = (props) => {
	return (
		<div className={classes.list}>
			<ListTitle title={props.list.title} listId={props.list.id} />
			<CardList cards={props.list.cards} />
			<AddItemContainer type='card' listId={props.list.id} />
		</div>
	);
};

export default List;
