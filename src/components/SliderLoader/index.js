import {loadJson} from "../../utils";
import createSlider from './../Slider';

loadJson('./data/slides.json')
  .then(slides => {
    parentContainer.appendChild(createSlider(slides));
  })
  .catch(console.error);