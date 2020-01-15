import setOnRadioButtonClick from "./setOnRadioButtonClick";

export default function ( index, slides ) {
  const radio = document.createElement("input");
  radio.setAttribute("type", "radio");
  radio.setAttribute("name", 'buttonSelectSlide');
  radio.setAttribute("value", index);

  radio.onclick = setOnRadioButtonClick;

  return radio;
}