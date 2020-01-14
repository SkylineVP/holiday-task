import {createHTMLElementWithClassList} from "../../../../utils";
import createPictureContainer from './Components/Picture';
import createCommentContainer from './Components/Comment'
import './styles.scss';
export default function ( slide, index ) {
  const slideElement = createHTMLElementWithClassList('li', 'slide');
  slideElement.setAttribute("numberSlide", index);
  slideElement.appendChild(createPictureContainer(slide));
  slideElement.appendChild(createCommentContainer(slide));

  return slideElement;
}