export const images = [
  '/img/c1.avif',
  '/img/c2.avif',
  '/img/c3.avif',
];

export const homeItems = [
  {
    title: '제목이 들어갑니다.',
    type: '팀 아토리',
    text: '상담은 이쪽에서 도와드릴게요',
    author: '찬쓰',
    authorAvatar: '/img/max.jpg',
    image: images[0],
  },
  {
    title: 'Exploring Maui123',
    type: 'Blog',
    text: 'We just got back from a trip to Maui, and we had a great time...',
    author: 'Max Lynch',
    authorAvatar: '/img/max.jpg',
    image: images[0],
  },
  {
    title: 'Arctic Adventures',
    type: 'Blog',
    text:
      'Last month we took a trek to the Arctic Circle. The isolation was just what we needed after...',
    author: 'Max Lynch',
    authorAvatar: '/img/max.jpg',
    image: images[1],
  },
  {
    title: 'Frolicking in the Faroe Islands',
    type: 'Blog',
    text:
      'The Faroe Islands are a North Atlantic archipelago located 320 kilometres (200 mi) north-northwest of Scotland...',
    author: 'Max Lynch',
    authorAvatar: '/img/max.jpg',
    image: images[2],
  },
];

export const notifications = [
  { title: 'New friend request', when: '6 hr' },
  { title: 'Please change your password', when: '1 day' },
  { title: 'You have a new message', when: '2 weeks' },
  { title: 'Welcome to the app!', when: '1 month' },
];

// Some fake lists
export const lists = [
  {
    name: 'Groceries1',
    id: 'groceries',
    items: [{ name: 'Apples' }, { name: 'Bananas' }, { name: 'Milk' }, { name: 'Ice Cream' }],
  },
  {
    name: 'Hardware Store',
    id: 'hardware',
    items: [
      { name: 'Circular Saw' },
      { name: 'Tack Cloth' },
      { name: 'Drywall' },
      { name: 'Router' },
    ],
  },
  { name: 'Work', id: 'work', items: [{ name: 'TPS Report' }, { name: 'Set up email' }] },
  { name: 'Reminders', id: 'reminders' },
];
