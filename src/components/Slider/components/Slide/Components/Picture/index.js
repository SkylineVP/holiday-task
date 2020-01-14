import {createHTMLElementWithClassList, createImage} from "../../../../../../utils";
import {BACKUP_SLIDE_URL} from "../../../../../../Constants";

export default function ( {imageUrl} ) {
  const mediaContainer = createHTMLElementWithClassList('div', 'mediaContainer');

  const pictureContainer = createHTMLElementWithClassList('div', "avatar");
  pictureContainer.appendChild(createImage(imageUrl, BACKUP_SLIDE_URL));

  mediaContainer.appendChild(pictureContainer);

  return mediaContainer;
}