/* eslint-disable no-undef */
import { checkButtonExistence } from './buildingPage';
import { addButton } from './buildingPage';
import { checkQuantityExistence } from './buildingPage';
import { uploadButtons } from './buildingPage';

describe('checkButtonExistence function', () => {
  it('Значение, если div кнопок не существует', () => {
    expect(checkButtonExistence('Any button')).toBe(true);
  });

  it('Значение, если кнопка существует', () => {
    const buttonsDiv = document.createElement('div');
    buttonsDiv.id = 'buttons';
    const button = document.createElement('button');
    button.textContent = 'Existing button';
    buttonsDiv.appendChild(button);
    document.body.appendChild(buttonsDiv);

    expect(checkButtonExistence('Existing button')).toBe(false);
  });
});

describe('addButton function', () => {
  it('Проверка добавляется ли кнопка с заданными параметрами', () => {
    
    const buttonName = 'Test Button';
    const buttonsDiv = document.querySelector('#buttons');
    buttonsDiv.innerHTML = ''; 
    addButton(buttonName);
    const buttons = buttonsDiv.querySelectorAll('button');
    expect(buttons.length).toBe(1);
    expect(buttons[0].textContent).toBe(buttonName);
    expect(buttons[0].className).toBe('button');
  });
});

describe('checkQuantityExistence function', () => {
  it('Проверка количества кнопок', () => {
    expect(checkQuantityExistence()).toBe(false);
  });
});

describe('uploadButtons function', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('Проверка, что функция uploadButtons корректно добавляет обработчики событий к кнопкам', () => {
    const buttons = [
      document.createElement('button'),
      document.createElement('button'),
      document.createElement('button'),
    ]

    buttons.forEach((button) => {
      button.textContent = `Кнопка ${buttons.indexOf(button) + 1}`;
    });
  
    document.querySelectorAll = jest.fn(() => buttons);
  
    buttons.forEach((button) => {
      jest.spyOn(button, 'addEventListener');
    });

    uploadButtons();

    buttons.forEach((button) => {
      expect(button.addEventListener).toHaveBeenCalledTimes(1);
      expect(button.addEventListener).toHaveBeenCalledWith('click', expect.any(Function));
    });
  });
});