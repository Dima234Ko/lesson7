/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
function addButton(buttonName) {
    if (checkButtonExistence(buttonName)){
        if (checkQuantityExistence()){
            const buttonsDiv = document.querySelector("#buttons");
            const buttons = buttonsDiv.querySelectorAll("button");
            buttons[0].remove()
        }
        const button = document.createElement("button");
        button.textContent = buttonName;
        button.className = "button"; 
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

  async function settingCoordinat() {
    var center = Object.values(await main());
    var zoom = 10;
    initYmaps(center, zoom);
    let city = await openweathergeoApi(center);
    await print(city[0].name);
  }
  
  settingCoordinat();


  function uploadButtons(){
    let buttons = document.querySelectorAll('#buttons button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
        // eslint-disable-next-line no-console
        print(button.textContent);
        });
    });
}