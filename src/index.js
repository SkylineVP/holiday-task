import './assets/css/reset.css';
import './assets/scss/layout.scss';
import './assets/scss/styles.scss';
import './assets/js/work.js';
import './assets/js/navigation.js';
//import './assets/js/team.js';
import './assets/js/testimotials.js';
import {loadJson} from "./utils";
import createListEmployees from './components/EmlpoyeesList';

const parentContainer = document.querySelector("#team>.container");

loadJson('./data/employees.json')
    .then(employees => {
        parentContainer.appendChild(createListEmployees(employees));
    })
    .catch(console.error);





