const toggleIcon = document.querySelector('[data-icon="checkbox"]');
const checkbox = document.querySelector('[data-input="checkbox"]');

const checkValid = () => {
  if (checkbox.checked) {
    toggleIcon.classList.remove('book__checkbox-icon--hide');
  } else {
    toggleIcon.classList.add('book__checkbox-icon--hide');
  }

};

const changeIcon = () => {
  checkbox.addEventListener('change', checkValid);
};

export {changeIcon};
