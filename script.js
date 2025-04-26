const dynamicText = document.getElementById('dynamic-text');
const changeTextButton = document.getElementById('change-text-button');
const styledTextButton = document.getElementById('styled-text-button');
const changeColorButton = document.getElementById('change-color-button');
const addelementButton = document.getElementById('add-element-button');
const removeElementButton = document.getElementById('remove-element-button');
const dynamicelementButton = document.getElementById('dynamic-element-button');
changeTextButton.addEventListener('click', () => {
    dynamicText.textContent = 'Text changed dynamically!';
});
changeColorButton.addEventListener('click', () => {
    dynamicText.style.color = 'green';
});
addelementButton.addEventListener('click', () => {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'New paragraph!';
});
    dynamicelementButton.appendChild(newParagraph);
removeElementButton.addEventListener('click', () => {
    if (dynamicelementButton.children.length > 0) {
        dynamicelementButton.removeChild(dynamicelementButton.lastChild);
    }
});