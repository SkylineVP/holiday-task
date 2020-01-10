import {createImage} from "../../../../utils";
import "../../../../assets/js/constants.js";

export function createPerson(employee) {
    const person = document.createElement("div");
    person.classList.add("person");
    person.appendChild(createImage(employee.profilePicture, './assets/images/backup-profile-picture.png'));
    person.appendChild(createPersonContent(employee));
    person.appendChild(createContacts(employee));
    return person
};


function createPersonContent(employees) {
    const personContent = document.createElement('div');
    personContent.classList.add("personContent");

    const name = document.createElement("h4");
    name.innerText = employees.name;
    personContent.appendChild(name);

    const role = document.createElement("h5");
    role.classList.add("role");
    role.innerText = employees.role;
    personContent.appendChild(role);

    const paragraphElement = document.createElement("p");
    paragraphElement.innerText = employees.about;
    personContent.appendChild(paragraphElement);

    return personContent;
}

function createContacts(employees) {
    const contacts = document.createElement("footer");
    contacts.classList.add("contacts");

    const social = document.createElement("ul");
    social.classList.add("social");

    for (let contactsKey in employees.contacts) {
        const li = document.createElement('li');

        const a = document.createElement("a");
        a.href = employees.contacts[contactsKey];

        const span = document.createElement("span");
        span.classList.add("fab");
        span.classList.add(`fa-${contactsKey}`);

        a.appendChild(span);
        li.appendChild(a);
        social.appendChild(li);

    }


    contacts.appendChild(social);

    return contacts;
}