import React, { useState } from 'react';

import classes from './ListTitle.module.css';

const ListTitle = (props) => {
	const [listTitleEdit, setListTitleEdit] = useState(false);

	const editListTitleHandler = () => {
		setListTitleEdit(!listTitleEdit);
	};

	let listTitleContent = <h3 onClick={editListTitleHandler}>{props.title}</h3>;
	if (listTitleEdit) {
		listTitleContent = (
			<input type='text' onBlur={editListTitleHandler} value={props.title} />
		);
	}

	return <div className={classes.listTitle}>{listTitleContent}</div>;
};

export default ListTitle;
