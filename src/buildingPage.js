// eslint-disable-next-line no-unused-vars
function addButton(buttonName) {
    if (checkButtonExistence(buttonName)){
        if (checkQuantityExistence()){
            const buttonsDiv = document.querySelector("#buttons");
            const buttons = buttonsDiv.querySelectorAll("button");
            buttons[0].remove()
        }
        const button = document.createElement("button");
        button.textContent = buttonName;
        const buttonsDiv = document.querySelector("#buttons");
        buttonsDiv.appendChild(button);
    }
}

function checkButtonExistence(buttonName) {
    const buttonsDiv = document.querySelector("#buttons");
    if (buttonsDiv) {
      const buttons = buttonsDiv.querySelectorAll("button");
      for (const button of buttons) {
        if (button.textContent === buttonName) {
          return false; 
        }
      }
    }
    return true; 
  }

  function checkQuantityExistence() {
    const buttonsDiv = document.querySelector("#buttons");
    if (buttonsDiv) {
        const buttons = buttonsDiv.querySelectorAll("button");
        if (buttons.length > 9) {
            return true;
        }  else return false;
    }
  }