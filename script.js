function setupEventListener() {
  // map for image to audio
  const identifierAudioMap = new Map();
  identifierAudioMap.set("pipe", "Sounds/Metal_pipe.mp3");
  identifierAudioMap.set("rizzmon", "Sounds/Rizzzzzzz.mp3");
  identifierAudioMap.set("rizzler", "Sounds/Rizzzzzzz.mp3");
  identifierAudioMap.set("dirt block", "Sounds/Ooga.mp3");
  identifierAudioMap.set("block", "Sounds/Ooga.mp3");
  identifierAudioMap.set("huge", "Sounds/BabaBooey sound.mp3");
  var audio = new Audio();
  // onload -> add event listener to input holder
  const element = document.getElementById("buttonHolder");
  element.addEventListener("click", function (e) {
    // console.log(e.target);
    let path;
    if (e.target.tagName === "IMG") {
      path = identifierAudioMap.get(e.target.alt);
    } else {
      path = identifierAudioMap.get(e.target.id);
    }
    // stop music altogether
    if (window.location.origin + "/" + path === audio.src) {
      audio.pause();
      return;
    }

    audio.src = path;
    audio.volume = 0.2;
    audio.pause();
    audio.play();
  });
}
