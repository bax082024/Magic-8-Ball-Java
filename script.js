const response = [
  "Yes", "No", "Maybe", "Come back later",
  "Haha! Your funny!", "Go be a painter",
  "Painterman!!", "Not a chance", "Very unlikely",
  "Very likely", "Nope", "Go Away!"
];

function getMagic8BallResponse() {
  const randomIndex = Math.floor(Math.random() * responses.lenght);
  return responses[randomIndex];
}



