function addTextBox(){
  var inputBox = document.createElement("input");
  var nextLine = document.createElement("br");
  inputBox.setAttribute("placeholder", "List an option");
  inputBox.setAttribute("class", "option");
  var form = document.getElementById("form");
  form.appendChild(nextLine);
  form.appendChild(inputBox);
}

function chooseRandom(min, max){
  var inputs = document.getElementsByClassName("option");
  // Calculate the number of options
  for (i = 0; i < inputs.length; i++){
    var numberOfInputs = inputs.length
  }
  min = 0;
  max = numberOfInputs-1;
  var paragraphs = document.getElementsByTagName("p").length;
  if (paragraphs != 0){
    resetResults();
    chooseRandom();
  }
  else {
    for (i = paragraphs; i < 1; i++){
      var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      console.log(randomNumber);
      var chosenId = inputs[randomNumber].value;
      var newParagraph = document.createElement("p");
      newParagraph.setAttribute("id", "result");
      document.getElementById('resultcontainer').appendChild(newParagraph);
      newParagraph.append(chosenId);
    }
  }
}

function resetResults(){
  var removeParagraph = document.getElementById("result");
  console.log(removeParagraph);
  removeParagraph.parentNode.removeChild(removeParagraph);
}

function reset(){
  document.location.reload()
}



/* https://teamtreehouse.com/community/mathfloor-mathrandom-max-min-1-min-explanation*/
