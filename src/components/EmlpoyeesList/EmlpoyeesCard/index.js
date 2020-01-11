import {createCardContent} from "./addition";
import "./styles.scss";

export function createCardEmployees( employee ) {
  const cardEmployeeContainer = document.createElement("div");
  cardEmployeeContainer.classList.add("mediaPerson");
  cardEmployeeContainer.appendChild(createCardContent(employee));
  return cardEmployeeContainer;
}