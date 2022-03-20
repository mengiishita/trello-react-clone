import React, { useState } from 'react';

import classes from './ListTitle.module.css';

const ListTitle = () => {
	const [listTitleEdit, setListTitleEdit] = useState(false);

	const editListTitleHandler = () => {
		setListTitleEdit(!listTitleEdit);
	};

	let listTitleContent = <h3 onClick={editListTitleHandler}>Todo</h3>;
	if (listTitleEdit) {
		listTitleContent = <input type='text' onBlur={editListTitleHandler}/>;
	}

	return <div className={classes.listTitle}>{listTitleContent}</div>;
};

export default ListTitle;
