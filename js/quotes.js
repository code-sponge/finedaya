const quotes = [
  {
    quote: 'Just keep your cool and your sense of humor.',
    author: 'Smiley Blanton',
  },
  { quote: 'Forget the failures. Keep the lessons.', author: 'Dalai Lama' },
  {
    quote:
      'Our imagination is the only limit to what we can hope to have in future.',
    author: 'Charles Kettering',
  },
  {
    quote:
      'If you think you are not cool enough, you will never be cool enough.',
    author: 'Romy Miller',
  },
  {
    quote:
      'Being cool is being your own self, not doing something that someone else is telling you to do.',
    author: 'Vanessa Hudgens',
  },
  {
    quote:
      'The secret of your success s determined by your daily agenda. It all comes down to what you do today.',
    author: 'John C. Maxwell',
  },
  {
    quote:
      'If you are always trying to be normal, you will never know how amazing you can be',
    author: 'Maya Angelou',
  },
  {
    quote: 'If you run out of ideas follow the road; you will get there.',
    author: 'Edgar Allan Poe',
  },
  {
    quote: "When fate hands us a lemon, let's try to make lemonade.",
    author: 'Dale carnegie',
  },
  {
    quote: 'A problem is a chance for you to do your best',
    author: 'Duke Ellington',
  },
  {
    quote: 'The most wasted of all days is one without laughter',
    author: 'e. e. cummings',
  },
  {
    quote:
      'The purpose of art is washing the dust of daily life off our souls.',
    author: 'Pablo Picasso',
  },
  {
    quote:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success",
    author: 'James Cameron',
  },
];

const quote = document.querySelector('#quote span:first-child');
quote.className = 'quote';
const author = document.querySelector('#quote span:last-child');
author.className = 'author';

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
