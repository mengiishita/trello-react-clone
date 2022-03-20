import React, { useState } from 'react';

const ListTitle = () => {
	const [listTitleEdit, setListTitleEdit] = useState(false);

	const editListTitleHandler = () => {
		setListTitleEdit(!listTitleEdit);
	};

	let listTitleContent = <h3 onClick={editListTitleHandler}>Todo</h3>;
	if (listTitleEdit) {
		listTitleContent = <input type='text' />;
	}

	return <div>{listTitleContent}</div>;
};

export default ListTitle;
