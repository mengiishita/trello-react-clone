import React, { useState, useContext } from 'react';
import CardContext from '../../store/card-context';

import classes from './ListTitle.module.css';

const ListTitle = (props) => {
	const [listTitleEdit, setListTitleEdit] = useState(false);

	const [newTitle, setNewTitle] = useState(props.title);

	const { updateListTitle } = useContext(CardContext);

	const editListTitleHandler = () => {
		updateListTitle(newTitle, props.listId);
		setListTitleEdit(!listTitleEdit);
	};

	const openEditListTitleHandler = () => {
		setListTitleEdit(!listTitleEdit);
	};

	const titleChangeHandler = (event) => {
		setNewTitle(event.target.value);
	};

	let listTitleContent = <h3 onClick={openEditListTitleHandler}>{newTitle}</h3>;
	if (listTitleEdit) {
		listTitleContent = (
			<input
				type='text'
				onBlur={editListTitleHandler}
				value={newTitle}
				onChange={titleChangeHandler}
			/>
		);
	}

	return <div className={classes.listTitle}>{listTitleContent}</div>;
};

export default ListTitle;
