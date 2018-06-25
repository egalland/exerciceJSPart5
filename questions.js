var languagesArrayCreation = function () {
  var table = [ 'Html', 'CSS', 'Java', 'PHP' ];
  return table;
}

var numbersArrayCreation = function () {
    var numbers = [ 0, 1, 2, 3, 4, 5 ];
    return numbers;
}

var ElementReplacement = function (languages) {
  languages[2] = 'Javascript';
  return languages;
}

var AddElementToLanguagesArray = function (languages) {
  languages.push('Ruby', 'Python');
  return languages;
}

var AddElementToNumbersArray = function (numbers) {
  numbers.unshift(-2, -1);
  return numbers;
}

var deleteArrayFirstElement = function (languages) {
  languages.shift();
  return languages;
}

var deleteArrayLastElement = function (languages) {
  languages.pop();
  return languages;
}

var stringToArray = function (socialMediaInString) {
  socialMedia = socialMediaInString.split(',');
  return socialMedia;
}

var arrayToString = function (languages) {
  languageInString = languages.join();
  return languageInString;
}

var arraySort = function (socialMedia) {
  socialMedia = socialMedia.sort();
  return socialMedia;
}

var arrayInvert = function (socialMedia){
  socialMedia = socialMedia.reverse();
  return socialMedia;
}
