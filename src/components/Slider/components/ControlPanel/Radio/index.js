import createSlide from "../../Slide";

export default function ( index, slides ) {
  const radio = document.createElement("input");
  radio.setAttribute("type", "radio");
  radio.setAttribute("name", 'buttonSelectSlide');
  radio.setAttribute("value", index);

  radio.onclick = ( event ) => {
    const activeSlide = document.getElementsByClassName("activeSlide")[0];
    if (activeSlide) {
      activeSlide.classList.remove("activeSlide");
    }
    const desiredSlide = document.querySelector(`.slide[numberSlide=\'${event.currentTarget.value}\']`);
    desiredSlide.classList.add('activeSlide');


    document.getElementsByName('buttonSelectSlide').forEach(button => {
      button.classList.remove('activeRadioButton')
    });
    radio.classList.add('activeRadioButton');

  };

  return radio;
}