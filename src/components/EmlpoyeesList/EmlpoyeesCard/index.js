import {createCardContent} from "./addition";
import "./styles.scss";

export function createCardEmployees( employee ) {
  const cardEmployee = document.createElement("div");
  cardEmployee.classList.add("mediaPerson");

  cardEmployee.appendChild(createCardContent(employee));

  return cardEmployee;
}