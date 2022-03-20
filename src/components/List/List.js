import React from 'react';
import ListTitle from './ListTitle';
import CardList from '../Card/CardList';

import classes from './List.module.css';

const List = () => {
    return <div className={classes.list}>
        <ListTitle />
        <CardList />
    </div>
}

export default List;