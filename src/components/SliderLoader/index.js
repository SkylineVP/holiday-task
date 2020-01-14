import {loadJson} from "../../utils";
import createSlider from './../Slider';
const parentContainer = document.getElementById("testimonials");
loadJson('./data/slides.json')
  .then(slides => {
    parentContainer.appendChild(createSlider(slides));
  })
  .catch(console.error);