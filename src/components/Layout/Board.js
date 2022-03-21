import React, { useState, useEffect } from 'react';
import List from '../List/List';
import useHttp from '../../hooks/use-http';

import classes from './Board.module.css';

const Board = () => {
	const [lists, setLists] = useState([]);

	const { isLoading, error, sendRequest: fetchLists } = useHttp();

	useEffect(() => {
		const transformLists = (listsObj) => {
			const loadedLists = [];

			for (const listKey in listsObj) {
				loadedLists.push({
					id: listKey,
					title: listsObj[listKey].title,
					cards: listsObj[listKey].cards,
				});
			}
			setLists(loadedLists);
		};
		fetchLists(
			{
				url: 'https://react-trello-clone-1de1e-default-rtdb.firebaseio.com/lists.json',
			},
			transformLists
		);
	}, [fetchLists]);

	const listData = lists.map((list) => {
		return <List key={list.id} title={list.title} cards={list.cards} />;
	});

	return (
		<div className={classes.board}>
			Project Trello
			{listData}
		</div>
	);
};

export default Board;
