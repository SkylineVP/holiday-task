import {createPerson} from "./addition";

export function createCardEmployees(employee) {
    const cardEmployeeContainer = document.createElement("div");
    cardEmployeeContainer.classList.add("mediaPerson");
    cardEmployeeContainer.appendChild(createPerson(employee));
    return cardEmployeeContainer;
}