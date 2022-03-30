const initialState = {
  posts: [
    {
      id: '1',
      title: 'Article title I',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('01-02-2020'),
      author: 'John Doe'
    },
    {
      id: '2',
      title: 'Article title II',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2021'),
      author: 'Thomas Doe'
    },
    {
      id: '3',
      title: 'Article title III',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('03-02-2022'),
      author: 'Rick Doe'
    },
  ],
};

export default initialState;