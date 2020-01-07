getEmployees();

async function getEmployees() {
    try {
        const json = await fetch("./data/employees.json");
        const employees = await json.json();
        employees.forEach(value => {
            createCardEmployees(value);
        })
    } catch (e) {
    }


}

function createCardEmployees(employees) {
    const parentContainer = document.getElementsByClassName("teamContainer")[0];

    const mediaPerson = document.createElement("div");
    mediaPerson.classList.add("mediaPerson");
    mediaPerson.appendChild(createPerson(employees));

    parentContainer.appendChild(mediaPerson);
}

function createPerson(employees) {
    const person = document.createElement("div");
    person.classList.add("person");
    person.appendChild(createProfileImage(employees));
    person.appendChild(createPersonContent(employees));
    person.appendChild(createLink(employees));

    return person
}

function createProfileImage(employees) {
    const img = document.createElement('img');
    img.src = employees.profilePicture;
    return img;

}

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

function createLink(employees) {
    const footerLink = document.createElement("footer");
    footerLink.classList.add("contacts");

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


    footerLink.appendChild(social);

    return footerLink;
}