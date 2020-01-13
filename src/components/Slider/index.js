export default function ( slides ) {
  const slider = document.createElement('div');
  slider.classList.add("flexSlider");

  slider.appendChild(createSlide());
  slider.appendChild(crateControlPanel());


  return slider;
}