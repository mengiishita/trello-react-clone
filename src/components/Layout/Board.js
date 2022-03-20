import React from 'react';
import List from '../List/List';

import classes from './Board.module.css'

const Board = () => {
	return (
		<div className={classes.board}>
            Project Trello
			<List />
		</div>
	);
};

export default Board;
