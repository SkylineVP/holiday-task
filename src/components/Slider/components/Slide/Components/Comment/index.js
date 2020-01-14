import {createHTMLElementWithClassList, createImage} from "../../../../../../utils";


export default function ( {comment, author} ) {
  const mediaContainer = createHTMLElementWithClassList('div', 'mediaContainer');
  const blockquote = createHTMLElementWithClassList('div', 'blockquote');

  const paragraphElement = document.createElement('p');
  paragraphElement.innerText = comment;
  blockquote.appendChild(paragraphElement);

  const authorElement = createHTMLElementWithClassList('div', 'author');
  authorElement.innerText = `${author.name} ${author.surname}, ${author.position}`
  blockquote.appendChild(authorElement);

  mediaContainer.appendChild(blockquote);


  return mediaContainer;

}