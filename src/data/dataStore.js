export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'Short "must visit" list',
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'https://i.postimg.cc/qMCHTFBM/pexels-pierre-blach-3109420.jpg',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: '',
      cards: [
        {
          key: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'The Witcher',
        },
        {
          key: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'Places to visit <sup>soon!</sup>',
    description: 'Interesting places I want to visit!',
    image: 'https://i.postimg.cc/qMCHTFBM/pexels-pierre-blach-3109420.jpg',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'France',
    icon: 'wine-bottle',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'USA',
    icon: 'flag-usa',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Corse',
    icon: 'anchor',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'Fort de Brégançon',
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Bormes-les-Mimosas',
  },
  {
    id: 'card-7',
    columnId: 'column-1',
    title: 'Notre-Dame de Constance - Chapelle',
  },
  {
    id: 'card-3',
    columnId: 'column-1',
    title: 'Le Lavandou',
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Buddy Valastro Foods',
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'Parc naturel régional de Corse',
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Ajaccio',
  },
  {
    id: 'card-8',
    columnId: 'column-3',
    title: 'Plage du Grand Sperone',
  },
];

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;
