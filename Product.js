let state = false; //true = on, false= off
const menuButton = document.getElementById("menu");
const options = document.getElementById("options");
menuButton.addEventListener("click", () => {
  //Check if options is currently NOT visible
  if (!state)
  {
    options.style.visibility = 'visible';
    state = true;
  }
  //Check if options is currently visible
  else
    {
      options.style.visibility = 'hidden';
      state = false;
    }
});