import React from 'react';

import classes from './AddCardContainer.module.css';

const AddCardContainer = () => {
	return (
		<div className={classes['add-card-container']}>
			<textarea />
			<button>Add Card</button>
		</div>
	);
};

export default AddCardContainer;
