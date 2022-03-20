const date = document.querySelector('#date');

function getDate() {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  const today = new Date();
  const formatDay = new Intl.DateTimeFormat('en-Us', options).format(today);
  date.innerText = formatDay;
}

getDate();
