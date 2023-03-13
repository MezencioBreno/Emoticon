


const emoji = ["😮", "😲", "😴", "🤤", "😪", "😵", "🤐", "🥴", "🤢", "🤮", "🤕", "🥳", "😷", "🤒", "🤕", "🤑", "🤠", "😈", "👿", "👹", "👺", "😿", "😾", "😀", "😃", "😄", "😁", "😆", "😅", "🤣", "😂", "🙂", "💀", "👻", "👽", "🤖", "💩", "😺", "😸", "😹", "😻", "😼", "🤭", "🤫", "🤥", "😶", "😐", "😑", "😬", "🙄", "😯", "😦", "😧"]

const generateBtn = document.getElementById('btn');
document.getElementById("emoji-container").textContent = emoji[0];
generateBtn.addEventListener('click', function () {
    let output = emoji[Math.floor(Math.random() * emoji.length)];
    document.getElementById("emoji-container").textContent = output;
})

//função para parar a animação
function stopRotation() {
    var element = document.getElementById("rotation");
    element.classList.add("stop-rotation");
  }
  
  //função para continuar a animação
  function startRotation() {
    var element = document.getElementById("rotation");
    element.classList.remove("stop-rotation");
  }