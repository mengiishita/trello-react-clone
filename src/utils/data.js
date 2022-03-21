const cards = [
    {
      id: 'card-1',
      title: 'Start React Assignment',
    },
    {
      id: 'card-2',
      title: 'Finish React Assignment',
    },
  ];
  
  const data = {
    lists: {
      'list-1': {
        id: 'list-1',
        title: 'Todo',
        cards,
      }
    },
    listIds: ['list-1'],
  };
  
  export default data;