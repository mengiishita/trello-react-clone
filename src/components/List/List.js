import React from 'react';
import ListTitle from './ListTitle';

import classes from './List.module.css';

const List = () => {
    return <div className={classes.list}>
        <ListTitle />
    </div>
}

export default List;