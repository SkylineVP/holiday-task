import {createControlPanel} from './components/ControlPanel'
import {createHTMLElementWithClassList} from "../../utils"
import createSlide from '../Slider/components/Slide'

export default function ( slides ) {
  const slider = document.createElement('div');
  slider.classList.add("flexSlider");

  const slidesList = createHTMLElementWithClassList('ul', 'slides');
  slides.forEach(( slide, index ) => {
    if (index > 7) {
      return 0;
    }
    slidesList.appendChild(createSlide(slide, index))
  });
  slider.appendChild(slidesList);
  slider.appendChild(createControlPanel(slides));

  return slider;
}
