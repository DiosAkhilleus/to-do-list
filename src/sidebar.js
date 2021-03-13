import {  storeSideBar, displayMain  } from './storage'
import Swal from 'sweetalert2';

const newList = (name) => { // creates a new list with name passed
    let count = document.querySelectorAll('#side-container .tab').length;
    let inp = document.createElement('input');
    let lab = document.createElement('label');
    inp.setAttribute('id', `${count+1}`);
    inp.setAttribute('class', 'side-nav');
    inp.setAttribute('type', 'radio');
    inp.setAttribute('name', 'side-tabs');
    lab.setAttribute('class', 'tab');
    lab.setAttribute('for', `${count+1}`)
    lab.setAttribute('id', `lab${count+1}`);
    lab.textContent = ` – ${name}`;

    document.getElementById('side-container').appendChild(inp);
    inp.after(lab);
    setTabListeners();
    storeSideBar();
}
const toggleRemove = () => { // toggles the removal state so that elements can be removed from list set, adds done button
    let tabs = document.getElementsByClassName('tab');
    console.log(tabs);
    for(let i = 1; i < tabs.length; i++){
        tabs[i].style.color = 'rgb(130, 50, 50)';
        tabs[i].addEventListener('click', remove);
    }
    document.getElementById('remove').removeEventListener('click', toggleRemove);
    let btn = document.createElement('button');
    btn.setAttribute('id', 'done');
    btn.textContent = "Done";
    document.getElementById('side-container').after(btn);
    document.getElementById('done').addEventListener('click', resetRemove);
}
const remove = (e) => { // removes the target element 
    let targ = e.target.id;
    let rem = document.getElementById(`${targ}`);
    let rem2 = rem.previousElementSibling;
    let rem2ID = rem2.id;
    document.getElementById(`${targ}`).parentElement.removeChild(rem);
    document.getElementById(`${rem2ID}`).parentElement.removeChild(rem2);
    localStorage.removeItem(`tab${rem2ID}`);
    if(document.getElementById('side-container').childElementCount === 2){
        document.getElementById('1').checked = true;
    }
}
const resetRemove = () => { // makes elements in sidebar unremovable, removes done button
    let done = document.getElementById('done');
    let tabs = document.getElementsByClassName('tab');
    for(let i = 1; i < tabs.length; i++){
        tabs[i].removeAttribute('style');
        tabs[i].removeEventListener('click', remove);
    }
    document.getElementById('remove').addEventListener('click', toggleRemove);
    document.getElementById('done').removeEventListener('click', resetRemove); 
    document.getElementById('done').parentElement.removeChild(done);
    if(document.getElementById('side-container').childElementCount === 2){
        setHome();
    }
    storeSideBar();
}
const addList = () => { // creates a new list by firing an alert in which the user can input a name, which is then passed to the newList() function
    Swal.fire({
        title: 'Enter List Name',
        input: 'text',
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return 'List name can\'t be blank!'
          }
        }
      }).then(function (value) {
          newList(value.value);
      });
}
const setTab = (e) => { // checks selected sidebar tab
    let tabs = document.querySelectorAll('.tab');
    for(let i = 0; i < tabs.length; i++){
        tabs[i].previousElementSibling.checked = false;
    }   
    e.target.previousElementSibling.checked = true;
    displayMain();
}
const setTabListeners = () => { // updates sidebar tab click listeners
    let tabs = document.querySelectorAll('.tab');
    for(let i = 0; i < tabs.length; i++){
        tabs[i].addEventListener('click', setTab);
    }
}
const setHome = () => { // sets the tab to "home." Used onload and when all other tabs are deleted
    let tabs = document.querySelectorAll('.tab');
    for(let i = 0; i < tabs.length; i++){
        tabs[i].checked = false;
    }   
    document.getElementById('1').checked = true;
    displayMain();
}


export {  newList, toggleRemove, remove, resetRemove, addList, setTab, setTabListeners, setHome  };