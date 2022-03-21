import React from 'react';

import classes from './AddCardContainer.module.css';

const AddCardContainer = (props) => {
	return (
		<div className={classes['add-card-container']}>
			<textarea placeholder='Enter a title for the card...' />
			<button>Add Card</button>
		</div>
	);
};

export default AddCardContainer;
