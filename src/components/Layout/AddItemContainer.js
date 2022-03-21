import React, { useState, useContext } from 'react';
import CardContext from '../../store/card-context';

import classes from './AddItemContainer.module.css';

const AddItemContainer = (props) => {
	const [title, setTitle] = useState('');

	const { addCard } = useContext(CardContext);

	const listId = props.listId;

	const titleChangeHandler = (event) => {
		setTitle(event.target.value);
	};

	const titleConfirmHandler = () => {
		addCard(title, listId);
		setTitle('');
	};

	const placeholderContent = `Enter a title for this ${props.type}...`;

	const buttonContent = `Add a ${props.type}`;

	return (
		<div className={classes['add-item-container']}>
			<textarea
				value={title}
				placeholder={placeholderContent}
				onChange={titleChangeHandler}
			/>
			<button onClick={titleConfirmHandler}>{buttonContent}</button>
		</div>
	);
};

export default AddItemContainer;
