import {createHTMLElementWithClassList, createImage} from "../../../../utils";
import {BACKUP_PROFILE_URL} from "../../../../Constants";
import createContactLink from "../../../ContactLink";

export function createCardContent( employee ) {
  const content = document.createElement("div");
  content.classList.add("person");

  content.appendChild(createEmployeePicture(employee));
  content.appendChild(createPersonContent(employee));
  content.appendChild(createContacts(employee));

  return content
}


function createEmployeePicture( {profilePicture} ) {
  const pictureContainer = createHTMLElementWithClassList('div', 'pictureContainer');
  pictureContainer.appendChild(createImage(profilePicture, BACKUP_PROFILE_URL))
  return pictureContainer;

}

function createPersonContent( employee ) {
  const personContent = document.createElement('div');
  personContent.classList.add("personContent");

  const fullName = document.createElement("h4");
  fullName.innerText = employee.fullName || "";
  personContent.appendChild(fullName);

  const role = document.createElement("h5");
  role.classList.add("role");
  role.innerText = employee.position || "";
  personContent.appendChild(role);

  const paragraphElement = document.createElement("p");
  paragraphElement.innerText = employee.about || "";
  personContent.appendChild(paragraphElement);

  return personContent;
}

function createContacts( employee ) {
  const contacts = document.createElement("footer");
  contacts.classList.add("contacts");

  const social = document.createElement("ul");
  social.classList.add("social");

  employee.contacts.forEach(( link, index ) => {
    if (index >= 5) {
      return 0;
    }
    const li = document.createElement('li');
    li.appendChild(createContactLink(link));
    social.appendChild(li);
  });


  contacts.appendChild(social);

  return contacts;
}