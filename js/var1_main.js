"use strict";

//!!!!! Работает, но очень сложный код написла, переписала

//Функция, возвращающая случайное целое число из переданного диапазона включительно.
//Учтите, что диапазон может быть только положительный, включая ноль. А также придумайте, как функция должна вести себя, если передать значение «до» меньшее, чем значение «от», или равное ему.

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
//Функции

//Создание массива из рандомных чисел в заданном диапазоне, числа в массиве не повторяются

const generateArrayRandomNumber = (min, max) => {
	let totalNumbers 		= max - min + 1,
		arrayTotalNumbers 	= [],
		arrayRandomNumbers 	= [],
		tempRandomNumber;

	while (totalNumbers--) {
		arrayTotalNumbers.push(totalNumbers + min);
	}

	while (arrayTotalNumbers.length) {
		tempRandomNumber = Math.round(Math.random() * (arrayTotalNumbers.length - 1));
		arrayRandomNumbers.push(arrayTotalNumbers[tempRandomNumber]);
		arrayTotalNumbers.splice(tempRandomNumber, 1);
	}

	return arrayRandomNumbers;
};

//Создание массива с рандомным не повторяющимся адресом URL по шаблону

const generateArrayRandomUrl = () => {
  let randomNumber = [] // создаем пустой массив для хранения случайных чисел
  randomNumber = generateArrayRandomNumber(1, 25); //
  //console.log(randomNumber);
  let tempArrUrl = [] // создаем пустой массив для хранения случайных адресов фото
  for (let i = 0; i <= randomNumber.length -1; i++) { //цикл перебирает массив со случайными числами и конкатинирует со строчкой
    tempArrUrl[i] = 'photos/' + randomNumber[i] + '.ipg';
    //console.log(arrUrl);
  }
 return tempArrUrl;
};

//Создание массива с рандомным не повторяющимся адресом URL по шаблону

const generateArrayRandomAvatar = () => {
  let randomNumber = [];
  randomNumber = generateArrayRandomNumber(1, 6);
  let tempArrAvatar = [];
  for (let i = 0; i <= randomNumber.length -1; i++) {
    tempArrAvatar[i] = 'img/avatar-' + randomNumber[i] + '.svg';
  }
 return tempArrAvatar;
};

//Данные для создания массивов объектов

const ARR_ID = generateArrayRandomNumber(1, 25);
console.log(ARR_ID);

const ARR_URL = generateArrayRandomUrl();
console.log(ARR_URL);

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
console.log(ARR_DESCRIPTION_PHOTO);


const LIKES = new Array(25).fill(null).map(() => returnRandomNumber(15,200));
console.log(LIKES);

//const COMMENTS = [];

const COMMENTS_ID = generateArrayRandomNumber(26, 60);
console.log(COMMENTS_ID);

const COMMENTS_AVATAR = generateArrayRandomAvatar();
console.log(COMMENTS_AVATAR);

const COMMENTS_MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
console.log(COMMENTS_MESSAGE);

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
console.log(COMMENTS_NAME);

//Создание объектов

/*
function Comment(id, avatar, message,name) {
  this.id = id;
  this.avatar = avatar;
  this.message = message;
  this.name = name;
}

let myComment = new Comment(12, 'img/avatar-2.svg', 'В целом всё неплохо. Но не всё.', 'Хуан Себастьян');
console.log(myComment);
*/

                                         /*Создание массива с объектами "комментарий"*/

const getRandomArrayElement = (elements) => {
  return elements[_.random(0, elements.length - 1)];
};
const createComments = () => {
  //const randomIdIndex = _.random(0, COMMENTS_ID.length - 1);
  //console.log(randomIdIndex);
  //const randomAvatarIndex = _.random(0, COMMENTS_AVATAR.length - 1);
  //console.log(randomAvatarIndex);
  //const randomMessageIndex = _.random(0, COMMENTS_MESSAGE.length - 1);
  //console.log(randomMessageIndex);
  //const randomNameIndex = _.random(0, COMMENTS_NAME.length - 1);
  //console.log(randomNameIndex);

  return {
    idСommentator: getRandomArrayElement(COMMENTS_ID),
    avatar: getRandomArrayElement(COMMENTS_AVATAR),
    message: getRandomArrayElement(COMMENTS_MESSAGE),
    name: getRandomArrayElement(COMMENTS_NAME),
  };
};

const COMMENTS = new Array(25).fill(null).map(() => createComments());

//console.log(COMMENTS);


                                      /* Создание массива с объектами "описание фото" */

const createDescriptionPhoto = () => {
  return {
    id: getRandomArrayElement(ARR_ID),
    url: getRandomArrayElement(ARR_URL),
    description: getRandomArrayElement(ARR_DESCRIPTION_PHOTO),
    likes: getRandomArrayElement(LIKES),
    comments: getRandomArrayElement(COMMENTS),
  };
};

const DESCRIPTION_PHOTO = new Array(25).fill(null).map(() => createDescriptionPhoto());

console.log(DESCRIPTION_PHOTO);
