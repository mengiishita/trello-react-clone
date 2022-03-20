import React from 'react';
import Card from './Card';

import classes from './CardList.module.css';

const CardList = () => {
	return (
		<ul className={classes['card-list']}>
			<Card id='1' description='Start Assignment' />
			<Card id='2' description='Complete Assignment' />
		</ul>
	);
};

export default CardList;
