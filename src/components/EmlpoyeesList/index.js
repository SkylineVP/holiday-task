import {createCardEmployees} from "./EmlpoyeesCard";

export default function ( employees ) {
  const listContainer = document.createElement("div");
  listContainer.classList.add("teamContainer");
  employees.forEach(employee => {
    listContainer.appendChild(createCardEmployees(employee))
  });
  return listContainer;
}