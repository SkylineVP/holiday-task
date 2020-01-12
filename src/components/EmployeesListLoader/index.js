import {loadJson} from "../../utils";
import createListEmployees from './../EmlpoyeesList';

const parentContainer = document.querySelector("#team>.container");

loadJson('./data/employees.json')
  .then(employees => {
    parentContainer.appendChild(createListEmployees(employees));
  })
  .catch(console.error);