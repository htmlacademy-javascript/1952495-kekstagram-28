const DESCRIPTION_PHOTO = [
  'Тут я кормлю кота',
  'Тут я забрал у кота рыбу',
  'Тут я убегаю от кота',
  'Это я на рыбалке',
  'Это я в Дубае и я ща отдыхаю'
];

const AUTHOR_COMMENT = [
  'Оксана',
  'Миша',
  'Леша',
  'Никита',
  'Вова'
];

const AUTHOR_COMMENT_TEXT = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getFinallyComments = () => ({
  id: getRandomInteger(0, 100000),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(AUTHOR_COMMENT_TEXT),
  name: getRandomArrayElement(AUTHOR_COMMENT),
});

const allCommets = () => [Array.from({length: 3}, getFinallyComments)];

const getFinallyObject = (_, idCounter) => ({
  id: idCounter + 1,
  url: `photos/${idCounter + 1}.jpg.`,
  description: getRandomArrayElement(DESCRIPTION_PHOTO),
  likes: getRandomInteger(15, 200),
  comments: allCommets(),
});

const allObjects = Array.from({length: 25}, getFinallyObject);

allObjects(); // для линтера
