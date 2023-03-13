export function getKeyWords() {
  const keyWords = document.getElementById('key_words');

  // очистка стиля ошибок при фокусе
  keyWords.onfocus = function() {
    if (this.classList.contains('invalid')) {
      this.classList.remove('invalid');
      if (keyWords.nextSibling.className = 'invalid_value') {
        keyWords.nextSibling.remove();
      }
    }
  }

  // проверка на валидность
  let messageInvalid = isValidRequest(keyWords);
  if (messageInvalid) {
    createInvalidMessage(messageInvalid);
    return false;
  };


  return keyWords.value;
}

function isValidRequest(words) {
  let keyWords = words.value.trim();
  let invalidMessage;


  if (keyWords.length == 0) {
    words.classList.add('invalid');
    invalidMessage = 'Введите ключевые слова для поиска';
    return invalidMessage;
  }

  if (keyWords.length < 4) {
    words.classList.add('invalid');
    invalidMessage = 'Слишком короткий запрос. Введите хотя-бы 4 символа';
    return invalidMessage;
  }

  if (!/[a-zA-Zа-яА-Яё]/i.test(keyWords)) {
    words.classList.add('invalid');
    invalidMessage = 'Запрос должен включать хотя-бы одну букву';
    return invalidMessage;
  }
}

function createInvalidMessage(textMessage) {
  let invalidValue = document.createElement('div');
  invalidValue.className = 'invalid_value';

  invalidValue.textContent = textMessage;
  let invalidRequest = document.getElementById('key_words');
  if (invalidRequest.nextSibling.className != 'invalid_value') {
    invalidRequest.after(invalidValue);
  }
}