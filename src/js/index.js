import { TextInput, Form } from './controllersValidator';
import { RequiredValidator } from './validators/requiredValidator';
import { EmailValidator } from './validators/emailValidator';

const contacts = [
    {
      "name": "Piedad",
      "surname": "Dunfee",
      "email": "piedad.dunfee@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "favoritos"
    },
    {
      "name": "Elsie",
      "surname": "Calvery",
      "email": "elsie.calvery@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "favoritos"
    },
    {
      "name": "Rodger",
      "surname": "Pye",
      "email": "rodger.pye@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "amigos"
    },
    {
      "name": "Mohammad",
      "surname": "Pye",
      "email": "mohammad.pacheo@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "favoritos"
    },
    {
      "name": "Emmie",
      "surname": "Derryberry",
      "email": "emmie.derryberry@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "amigos"
    },
    {
      "name": "Lino",
      "surname": "Kottwitz",
      "email": "lino.kottwitz@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "trabajo"
    },
    {
      "name": "Brittney",
      "surname": "Ruddock",
      "email": "brittney.ruddock@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "familia"
    },
    {
      "name": "Jaimie",
      "surname": "Human",
      "email": "jaimie.human@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "amigos"
    },
    {
      "name": "Darleen",
      "surname": "Kesten",
      "email": "darleen.kesten@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "amigos"
    },
    {
      "name": "Georgie",
      "surname": "Hannold",
      "email": "georgie.hannold@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "familia"
    },
    {
      "name": "Doreatha",
      "surname": "Wheeler",
      "email": "doreatha.wheeler@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "favoritos"
    },
    {
      "name": "Christie",
      "surname": "Solum",
      "email": "christie.solum@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "trabajo"
    },
    {
      "name": "Carlita",
      "surname": "Whitmire",
      "email": "carlita.whitmire@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "familia"
    },
    {
      "name": "Luciana",
      "surname": "Jobe",
      "email": "luciana.jobe@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "favoritos"
    },
    {
      "name": "Sade",
      "surname": "Selig",
      "email": "sade.selig@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "amigos"
    },
    {
      "name": "Devon",
      "surname": "Goodridge",
      "email": "devon.goodridge@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "amigos"
    },
    {
      "name": "Bruna",
      "surname": "Starkes",
      "email": "bruna.starkes@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "trabajo"
    },
    {
      "name": "Glynis",
      "surname": "Hudnall",
      "email": "glynis.hudnall@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "favoritos"
    },
    {
      "name": "Anissa",
      "surname": "Leggett",
      "email": "anissa.leggett@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "familia"
    },
    {
      "name": "Moshe",
      "surname": "Moxley",
      "email": "moshe.moxley@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "amigos"
    },
    {
      "name": "Shannon",
      "surname": "Olivieri",
      "email": "shannon.olivieri@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "favoritos"
    },
    {
      "name": "Janel",
      "surname": "Vandever",
      "email": "janel.vandever@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "favoritos"
    },
    {
      "name": "Tashia",
      "surname": "Fontes",
      "email": "tashia.fontes@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "trabajo"
    },
    {
      "name": "Merrilee",
      "surname": "Lynde",
      "email": "merrilee.lynde@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "trabajo"
    },
    {
      "name": "Coral",
      "surname": "Eastin",
      "email": "coral.eastin@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "amigos"
    },
    {
      "name": "Shandi",
      "surname": "Hunsaker",
      "email": "shandi.hunsaker@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "amigos"
    },
    {
      "name": "Wilburn",
      "surname": "Meyer",
      "email": "wilburn.meyer@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "trabajo"
    },
    {
      "name": "Quintin",
      "surname": "Schrom",
      "email": "quintin.schrom@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "trabajo"
    },
    {
      "name": "Claribel",
      "surname": "Sipes",
      "email": "claribel.sipes@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "trabajo"
    },
    {
      "name": "Nevada",
      "surname": "Chappelle",
      "email": "nevada.chappelle@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "amigos"
    }
  ];

const arrayColors = [
    '#d0021b',
    '#02b4d0',
    '#5502d0',
    '#024bd0',
    '#c702d0',
    '#02d0ab',
    '#47d002',
    '#c9d002',
    '#d09202'
];

const nameInputEdit = new TextInput('edit-name', [RequiredValidator]);
const surnameInputEdit = new TextInput('edit-surname', [RequiredValidator]);
const emailInputEdit = new TextInput('edit-email', [RequiredValidator, EmailValidator]);
const phoneInputEdit = new TextInput('edit-phone', [RequiredValidator]);
const groupInputEdit = new TextInput('edit-group', [RequiredValidator]);
const countryInputEdit = new TextInput('edit-country', [RequiredValidator]);
const instanceFormEdit = new Form([nameInputEdit, surnameInputEdit, emailInputEdit, phoneInputEdit, groupInputEdit, countryInputEdit]);

const nameInputNew = new TextInput('new-name', [RequiredValidator]);
const surnameInputNew = new TextInput('new-surname', [RequiredValidator]);
const emailInputNew = new TextInput('new-email', [RequiredValidator, EmailValidator]);
const phoneInputNew = new TextInput('new-phone', [RequiredValidator]);
const groupInputNew = new TextInput('new-group', [RequiredValidator]);
const countryInputNew = new TextInput('new-country', [RequiredValidator]);
const instanceFormNew = new Form([nameInputNew, surnameInputNew, emailInputNew, phoneInputNew, groupInputNew, countryInputNew]);

class User {
    constructor(name, surname, email, group, phone, country) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.group = group;
        this.phone = phone;
        this.country = country;
    }
}

let activeContact;

function addToList(contacts) {
    const lists = document.getElementsByClassName('contacts__list');
    const list = lists[0];
    list.innerHTML = "";
    for(let i = 0; i < contacts.length; i++) {
        let btnDelete = document.createElement('button');
        let deleteText = document.createTextNode('X');
        btnDelete.appendChild(deleteText);
        btnDelete.classList = 'btn-delete-contact'
        btnDelete.addEventListener('click', function() {
            deleteContact(contacts[i]);
        });
        let liName = document.createElement('li');
        let textName = document.createTextNode(`${contacts[i].name} ${contacts[i].surname}`);
        liName.appendChild(textName);
        liName.appendChild(btnDelete);
        list.appendChild(liName);
        liName.addEventListener("click", function(){
            dataContacts(i, contacts);
            const ul = liName.parentNode;
            for (let i = 0; i < ul.childNodes.length; i++) {
                ul.childNodes[i].classList.remove('selected');
            }
            liName.classList.add('selected');              
        }); 
    } 
}

function deleteContact(user) {
    let index = contacts.indexOf(user);
    if (index > -1) {
      contacts.splice(index, 1);
      addToList(contacts);
    }
}

function editContact(user, editUser) {
  let index = contacts.indexOf(user);
    if (index > -1) {
      contacts.splice(index, 1, editUser);
      addToList(contacts);
    }
}

function dataContacts(index, contacts) {
    activeContact = contacts[index];
    const headerName = document.getElementById("header-name");
    let texth1 = document.createTextNode(`${contacts[index].name} ${contacts[index].surname}`);
    headerName.innerHTML = "";
    headerName.appendChild(texth1);

    const groupName = document.getElementById("header-group");
    let textGroup = document.createTextNode(`${contacts[index].group}`);
    groupName.innerHTML = "";
    groupName.appendChild(textGroup);

    const headerLogo = document.getElementById("header-letter");
    headerLogo.innerHTML = contacts[index].name.charAt(0);

    const phone = document.getElementById("ppal-phone");
    phone.innerHTML = contacts[index].phone;

    const email = document.getElementById("ppal-email");
    email.innerHTML = contacts[index].email;

    changeBgColor(arrayColors);
}


function changeBgColor (arrayColors) {
    let index = Math.floor((Math.random() * 8));
    let element = document.getElementById("header-logo");
    element.style.backgroundColor = arrayColors[index];
}

function alphabeticOrder (a, b) {
    if (a.name < b.name) {
        return -1;
    } else if (a.name === b.name) {
        return 0;
    } else {
        return 1;
    }
}

function filterByGroup(group){
    return contacts.filter((contact) => contact.group === group);
}

window.onload = function() {

    //Añadimos una función para el evento click del formulario.

    const btnsEdit = document.getElementsByClassName("ppal__btn-edit"); 
    if(btnsEdit.length > 0) {
        btnsEdit[0].addEventListener("click", function() { 
            document.getElementById('form-edit').classList.toggle('visible');
            const inputName = document.getElementById('edit-name');
            const inputSurname = document.getElementById('edit-surname');
            const inputEmail = document.getElementById('edit-email');
            const inputCountry = document.getElementById('edit-country');
            const inputPhone = document.getElementById('edit-phone');
            const inputGroup = document.getElementById('edit-group');

            inputName.value = activeContact.name;
            inputSurname.value = activeContact.surname;
            inputEmail.value = activeContact.email;
            inputCountry.value = activeContact.country;
            inputPhone.value = activeContact.phone;
            inputGroup.value = activeContact.group;
        });
    } 

    const btnsMore = document.getElementsByClassName("ppal__btn-more"); 
    if(btnsMore.length > 0) {
        btnsMore[0].addEventListener("click", function() {
            document.getElementById('form-new').classList.toggle('visible');
        });
    } 


    //Añadimos una función para el botón de cierre del formulario

    const btnCloseEdit = document.getElementById("btn-close-edit");
    btnCloseEdit.addEventListener("click", function(){
      document.getElementById('form-edit').classList.toggle('visible')
    })

    const btnCloseAdd = document.getElementById("btn-close-add");
    btnCloseAdd.addEventListener("click", function(){
      document.getElementById('form-new').classList.toggle('visible')
    })

    //Añadimos los eventos de los botones para los filtrados por grupo
    
    const btnAll = document.getElementById("btn-all");
    btnAll.addEventListener("click", filterAll);

    function filterAll(){
      btnFavorites.classList.remove('selected');
      btnFriends.classList.remove('selected');
      btnFamily.classList.remove('selected');
      btnJob.classList.remove('selected');
      event.target.classList.add('selected');
      addToList(contacts.sort(alphabeticOrder));
    }
  
  
    const btnFavorites = document.getElementById("btn-favorites");
    btnFavorites.addEventListener("click", filterFavorites);

    function filterFavorites() {
      btnAll.classList.remove('selected');
      btnFriends.classList.remove('selected');
      btnFamily.classList.remove('selected');
      btnJob.classList.remove('selected');
      event.target.classList.add('selected');
      let favoritos = filterByGroup('favoritos');
      addToList(favoritos.sort(alphabeticOrder)); 
    }  

    const btnFriends = document.getElementById("btn-friends");
    btnFriends.addEventListener("click", filterFriends);
     
    function filterFriends() {
      btnAll.classList.remove('selected');
      btnFavorites.classList.remove('selected');
      btnFamily.classList.remove('selected');
      btnJob.classList.remove('selected');
      event.target.classList.add('selected');
      let friends = filterByGroup('amigos');
      addToList(friends.sort(alphabeticOrder));
    }

    const btnFamily = document.getElementById("btn-family");
    btnFamily.addEventListener("click", filterFamily);
    
    function filterFamily(){      
      btnAll.classList.remove('selected');
      btnFavorites.classList.remove('selected');
      btnFriends.classList.remove('selected');
      btnJob.classList.remove('selected');
      event.target.classList.add('selected');
      let family = filterByGroup('familia');
      addToList(family.sort(alphabeticOrder));
    }
    
    const btnJob = document.getElementById("btn-job");
    btnJob.addEventListener("click", filterJob);
   
    function filterJob() {      
      btnAll.classList.remove('selected');
      btnFavorites.classList.remove('selected');
      btnFriends.classList.remove('selected');
      btnFamily.classList.remove('selected');
      event.target.classList.add('selected');
      let job = filterByGroup('trabajo');
      addToList(job.sort(alphabeticOrder));    
    }
       
     const updateForm = document.getElementById("form-edit");
    updateForm.addEventListener("submit", function(event) {
        event.preventDefault();
        if (instanceFormEdit.validateForm() === true) {
          const input = instanceFormEdit.getInput();
          const editUser = new User(input['edit-name'], input['edit-surname'], input['edit-email'], input['edit-group'], input['edit-phone'], input['edit-country']);
          editContact(activeContact, editUser);
          dataContacts(0, [editUser])
        } else {
            console.log('Invalid form');
            return false;
        }    
    });

    const newForm = document.getElementById("form-new");
    newForm.addEventListener("submit", function(event) {
        event.preventDefault();
        if (instanceFormNew.validateForm() === true) {
            const input = instanceFormNew.getInput();
            const user = new User(input['new-name'], input['new-surname'], input['new-email'], input['new-group'], input['new-phone'], input['new-country']);
            console.log(user);
            contacts.push(user);
            addToList(contacts.sort(alphabeticOrder)); 
            dataContacts(0, [user]);
            const lists = document.getElementsByClassName('contacts__list');
            const list = lists[0];
            for (let i = 0; i < list.childNodes.length; i++){
              if (list.childNodes[i].innerText === `${user.name} ${user.surname}`){
                list.childNodes[i].classList.add('selected');
              }
            } 

        } else {
          console.log('Invalid form');
          return false;
        }  
    });

    //Inicializamos la agenda
    addToList(contacts.sort(alphabeticOrder));
    const lists = document.getElementsByClassName('contacts__list');
    const list = lists[0];
    const li = list.childNodes[0].classList.add('selected');
    dataContacts(0, contacts);
    btnAll.classList.add('selected');

}
