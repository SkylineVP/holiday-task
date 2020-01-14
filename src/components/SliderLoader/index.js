import {loadJson} from "../../utils";
import createSlider from './../Slider';
import setFirtsSlideActive from "./setFirtsSlideActive";
import './styles.scss';
const parentContainer = document.getElementById("testimonials");
loadJson('./data/slides.json')
  .then(slides => {
    parentContainer.appendChild(createSlider(slides));
    setFirtsSlideActive();

  })
  .catch(console.error);