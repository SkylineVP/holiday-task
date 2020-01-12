import {loadJson} from "../../utils";
import createListEmployees from './../EmlpoyeesList';

loadJson('./data/slides.json')
  .then(slides => {
    parentContainer.appendChild(createSlider(slides));
  })
  .catch(console.error);