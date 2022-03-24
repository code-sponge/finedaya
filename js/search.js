const searchForm = document.querySelector('#search-form');
const searchInput = searchForm.querySelector('input');
const searchBtn = searchForm.querySelector('button');

function onSubmit(e) {
  e.preventDefault();
  search();
  searchInput.value = '';
}

function showInput(e) {
  console.log(e);
  const InputClass = searchInput.classList;
  if (!InputClass.contains('visible')) {
    e.preventDefault();
    InputClass.add('visible');
  } else if (InputClass.contains('visible') && !searchInput.value) {
    if (!e.pointerType) {
      return;
    } else {
      e.preventDefault();
      InputClass.remove('visible');
    }
  }
}

function search() {
  const q = searchInput.value;
  window.open(`http://google.com/search?q=${q}`);
}

searchForm.addEventListener('submit', onSubmit);

searchBtn.addEventListener('click', showInput);
