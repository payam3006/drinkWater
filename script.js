const q = console.log;

const fill = (numberOfGlasses) => {
  let unfilledLitter = (8 - numberOfGlasses) * 12.5;
  document.getElementById("remained").style = `height: ${unfilledLitter}%;`;
  document.getElementById("remNum").innerText = `${
    (2 * unfilledLitter) / 100
  }L`;

  document.getElementById("filled").style = `height: ${100 - unfilledLitter}%;`;
  document.getElementById("filled").innerText = `${100 - unfilledLitter}%`;
  for (let i = 1; i <= 8; i++) {
    document
      .getElementsByClassName("glass")
      [i - 1].classList.remove("fillGlass");
  }
  for (let i = 1; i <= numberOfGlasses; i++) {
    document.getElementsByClassName("glass")[i - 1].classList.add("fillGlass");
  }
};
