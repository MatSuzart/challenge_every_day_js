// define an array of flashcard objects
var flashcards = [
    {question: "What is the capital of France?", answer: "Paris"},
    {question: "What is the largest planet in our solar system?", answer: "Jupiter"},
    {question: "Who wrote the book 'To Kill a Mockingbird'?", answer: "Harper Lee"}
  ];
  
  // initialize variables for current flashcard and whether the answer is showing
  var currentCard = 0;
  var showingAnswer = false;
  
  // select elements from the HTML
  var questionDiv = document.getElementById("question");
  var flipButton = document.getElementById("flip-button");
  var answerDiv = document.getElementById("answer");
  
  // display the first flashcard's question
  questionDiv.innerHTML = flashcards[currentCard].question;
  
  // add an event listener to the flip button
  flipButton.addEventListener("click", function() {
    // if the answer is currently showing, show the question
    if (showingAnswer) {
      questionDiv.innerHTML = flashcards[currentCard].question;
      flipButton.innerHTML = "Flip";
      showingAnswer = false;
    } else { // otherwise, show the answer
      answerDiv.innerHTML = flashcards[currentCard].answer;
      flipButton.innerHTML = "Next";
      showingAnswer = true;
    }
  });
  