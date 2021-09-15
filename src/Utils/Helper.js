const limitNumber =  (number, limit) =>{
    if(number !== null){
        number = number.toString();
        if(number.length > limit){
          let numberLimited = '';
          for(let i = 0; i<limit; i++){
            numberLimited += number[i];
          }
          return numberLimited;
        }else{
          return number;
        }
    }else{
        return '0';
    }
}

const convertNumberToMonth = (month) =>{
    month = parseInt(month);
    if(month != null){
        switch(month) {
            case 0:
              return 'January';
            case 1:
              return 'Feburary';
            case 2:
              return 'March';
            case 3:
              return 'April';
            case 4:
              return 'May';
            case 5:
              return 'June';
            case 6:
              return 'July';
            case 7:
              return 'August';
            case 8:
              return 'September';
            case 9:
              return 'October';
            case 10:
              return 'November'
            default:
              return 'December';
          }
    }else{
        return 'January';
    }
}

const SUMMER_BACKGROUND_COLOR = "#e3e3e3";
const SUMMER_WHITE_COLOR = "#fafafa";
const SUMMER_BASE_COLOR = "#ee6f57";
const SUMMER_BASE_COLOR_DARKER = "#cb3737";

const WINTER_BACKGROUND_COLOR = "#d3e0ea";
const WINTER_WHITE_COLOR = "#f6f5f5";
const WINTER_BASE_COLOR = "#1687a7";
const WINTER_BASE_COLOR_DARKER = "#276678";


const animateToSummer = () =>{
  document.querySelector('body').style.backgroundColor = SUMMER_BACKGROUND_COLOR;
  document.querySelector('.application-title').style.color = SUMMER_BASE_COLOR;
  document.querySelector('.season-display').style.backgroundColor = SUMMER_WHITE_COLOR;
  document.querySelector('.season-display-description').style.color = SUMMER_BASE_COLOR_DARKER;
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    input.style.backgroundColor = SUMMER_BACKGROUND_COLOR;
    input.style.border = `2px solid ${SUMMER_BACKGROUND_COLOR}`;
    input.style.color = SUMMER_BASE_COLOR_DARKER;
  });
  const seasonDisplayInputForms = document.querySelectorAll('.season-display-input-form');
  seasonDisplayInputForms.forEach(sdif =>{
    sdif.style.color = SUMMER_BASE_COLOR_DARKER;
  })
  document.querySelector('#input-month').style.backgroundColor = SUMMER_BACKGROUND_COLOR;
  document.querySelector('#input-month').style.border = `2px solid ${SUMMER_BACKGROUND_COLOR}`;
  document.querySelector('#input-month').style.color =SUMMER_BASE_COLOR_DARKER;
  const button =  document.querySelector('button')
  button.style.backgroundColor = SUMMER_BASE_COLOR;
  button.style.border = `2px solid ${SUMMER_BASE_COLOR}`;
  button.addEventListener("mouseover", () =>{
    button.style.backgroundColor = SUMMER_BASE_COLOR_DARKER;
  });
  button.addEventListener("mouseout", () =>{
    button.style.backgroundColor = SUMMER_BASE_COLOR;
  })
  document.querySelector('.season-display-information').style.backgroundColor =SUMMER_BASE_COLOR;
  document.querySelector('.season-display-information').style.color = SUMMER_WHITE_COLOR;
}

const animateToWinter = () =>{
  document.querySelector('body').style.backgroundColor = WINTER_BACKGROUND_COLOR;
  document.querySelector('.application-title').style.color = WINTER_BASE_COLOR;
  document.querySelector('.season-display').style.backgroundColor = WINTER_WHITE_COLOR;
  document.querySelector('.season-display-description').style.color = WINTER_BASE_COLOR_DARKER;
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    input.style.backgroundColor = WINTER_BACKGROUND_COLOR;
    input.style.border = `2px solid ${WINTER_BACKGROUND_COLOR}`;
    input.style.color = WINTER_BASE_COLOR_DARKER;
  });
  const seasonDisplayInputForms = document.querySelectorAll('.season-display-input-form');
  seasonDisplayInputForms.forEach(sdif =>{
    sdif.style.color = WINTER_BASE_COLOR_DARKER;
  })
  document.querySelector('#input-month').style.backgroundColor = WINTER_BACKGROUND_COLOR;
  document.querySelector('#input-month').style.border = `2px solid ${WINTER_BACKGROUND_COLOR}`;
  document.querySelector('#input-month').style.color =WINTER_BASE_COLOR_DARKER;
  const button =  document.querySelector('button')
  button.style.backgroundColor = WINTER_BASE_COLOR;
  button.style.border = `2px solid ${WINTER_BASE_COLOR}`;
  button.addEventListener("mouseover", () =>{
    button.style.backgroundColor = WINTER_BASE_COLOR_DARKER;
  });
  button.addEventListener("mouseout", () =>{
    button.style.backgroundColor = WINTER_BASE_COLOR;
  })
  document.querySelector('.season-display-information').style.backgroundColor =WINTER_BASE_COLOR;
  document.querySelector('.season-display-information').style.color = WINTER_WHITE_COLOR;
}

export {limitNumber, convertNumberToMonth, animateToSummer, animateToWinter}