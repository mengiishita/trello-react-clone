import React from 'react';
import ListTitle from './ListTitle';
import CardList from '../Card/CardList';
import AddCardContainer from '../Card/AddCard/AddCardContainer';

import classes from './List.module.css';

const List = () => {
    return <div className={classes.list}>
        <ListTitle />
        <CardList />
        <AddCardContainer />
    </div>
}

export default List;