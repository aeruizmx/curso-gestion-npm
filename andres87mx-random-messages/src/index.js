const messages = [
  "Oscar",
  "Gerardo",
  "Alex",
  "Alexis",
  "Ana",
  "Nicolas",
  "Jesica",
  "Diego",
  "Andres"
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
}

module.exports = { randomMsg };