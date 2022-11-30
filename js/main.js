"use strict";

//Функция, возвращающая случайное целое число из переданного диапазона включительно.

const returnRandomNumber = (min, max) => {
  if (min < 0 || max < 0) {
      console.log("Error!!! Передаваемые значения должны быть положительными!")
      return -1;
    }
  if (max < min) {
    [min, max] = [max,min];
  }
    min = Math.ceil(min); //округление до ближайшего большего целого
    max = Math.floor(max);//округление до ближайшего меньшего целого
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};

console.log(returnRandomNumber(10, 78));

//Функция для проверки максимальной длины строки. Будет использоваться для проверки длины введённого комментария, но должна быть универсальна.

const checkMaxLengthString = (comments, maxLength) => {
  return comments.length <= maxLength;
}

console.log(checkMaxLengthString('ункция для проверки максимальной длины строки. Будет использоваться для проверки длины введённого комментария, но должна быть универсальн', 200));

const getRandomArrayElement = (elements) => {
  return elements[_.random(0, elements.length - 1)];
};

const PHOTO_COUNT = 25;

const Likes = {
  MIN: 15,
  MAX: 200,
};

const Comments = {
  MIN: 1,
  MAX: 5,
};

const Id = {
  MIN: 1,
  MAX: 999,
};

const Avatar = {
  MIN: 1,
  MAX: 6,
};

let photos = [];

const ARR_DESCRIPTION_PHOTO = [
  'Лес',
  'Озеро',
  'Луна',
  'Солнце',
  'Горы',
  'Снежные вершины',
  'Море',
  'Песок',
  'Волны',
  'Шторм',
  'Дождь',
  'Сосны',
  'Березовая роща',
  'Цветочная поляна',
  'Луговые цветы',
  'Барашки пасутся',
  'За грибами!',
  'По ягоды',
  'На рыбалку',
  'Можно вечно смотреть на то как горит костер',
  'Шашлычок',
  'Река',
  'Домик в деревне',
  'Первый урожай',
  'Мои грядки',
];

const COMMENTS_MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const COMMENTS_NAME = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const addComments = () => {
  const comments = [];

  for(let i = 0; i < returnRandomNumber(Comments.MIN, Comments.MAX); i++) {
    comments.push({
      id: returnRandomNumber(Id.MIN, Id.MAX),
      avatar: 'img/avatar-' + returnRandomNumber(Avatar.MIN, Avatar.MAX) + '.svg',
      message: getRandomArrayElement(COMMENTS_MESSAGE),
      name: getRandomArrayElement(COMMENTS_NAME),
    })
  }

  return comments;
};

const addPhotos = () => {
  for (let i = 0; i < PHOTO_COUNT; i++) {
    photos.push({
      id: i + 1,
      url: 'photos/' + (i + 1) + '.jpg',
      description: getRandomArrayElement(ARR_DESCRIPTION_PHOTO),
      likes: returnRandomNumber(Likes.MIN, Likes.MAX),
      comments: addComments(),
    })
  }
};

addPhotos();

console.log(photos);
