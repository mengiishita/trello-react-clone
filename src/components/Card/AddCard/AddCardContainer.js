import React, { useState, useContext } from 'react';
import CardContext from '../../../store/card-context';

import classes from './AddCardContainer.module.css';

const AddCardContainer = (props) => {
	const [title, setTitle] = useState('');

	const { addCard } = useContext(CardContext);

	const listId = props.listId;

	const titleChangeHandler = (event) => {
		setTitle(event.target.value);
	};

	const addCardHandler = () => {
		addCard(title, listId);
		setTitle('');
	};

	return (
		<div className={classes['add-card-container']}>
			<textarea
				value={title}
				placeholder='Enter a title for the card...'
				onChange={titleChangeHandler}
			/>
			<button onClick={addCardHandler}>Add Card</button>
		</div>
	);
};

export default AddCardContainer;
