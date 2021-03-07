import {  storeUserData  } from './logic'
import Swal from 'sweetalert2';

const newList = (name) => {
    let count = document.querySelectorAll('#side-container .tab').length;
    let inp = document.createElement('input');
    let lab = document.createElement('label');
    inp.setAttribute('id', `${count+1}`);
    inp.setAttribute('class', 'side-nav');
    inp.setAttribute('type', 'radio');
    lab.setAttribute('class', 'tab');
    lab.setAttribute('for', `${count+1}`)
    lab.setAttribute('id', `lab${count+1}`);
    lab.textContent = name;

    document.getElementById('side-container').appendChild(inp);
    inp.after(lab);
    storeUserData();
}

const toggleRemove = () => {
    let tabs = document.getElementsByClassName('tab');
    console.log(tabs);
    for(let i = 1; i < tabs.length; i++){
        tabs[i].style.color = 'rgb(130, 50, 50)';
        tabs[i].addEventListener('click', remove);
    }
    document.getElementById('remove').removeEventListener('click', toggleRemove);
    document.getElementById('remove').addEventListener('click', resetRemove);
}
const remove = (e) => {
    let targ = e.target.id;
    let rem = document.getElementById(`${targ}`);
    let rem2 = rem.previousElementSibling;
    let rem2ID = rem2.id;
    document.getElementById(`${targ}`).parentElement.removeChild(rem);
    document.getElementById(`${rem2ID}`).parentElement.removeChild(rem2);
}
const resetRemove = () => {
    let fin = document.getElementById('finished');
    document.getElementById('remove').style.backgroundColor = "rgb(63, 79, 79)";
    let tabs = document.getElementsByClassName('tab');
    for(let i = 1; i < tabs.length; i++){
        tabs[i].removeAttribute('style');
        tabs[i].removeEventListener('click', remove);
    }
    document.getElementById('remove').addEventListener('click', toggleRemove);
    document.getElementById('remove').removeEventListener('click', resetRemove); 
    document.getElementById('remove').removeAttribute('style');
    
    storeUserData();
}
const addList = () => {
    Swal.fire({
        title: 'Enter List Name',
        input: 'text',
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return 'Must name list something!'
          }
        }
      }).then(function (value) {
          newList(value.value);
      });
}

const showHelp = () => {
    Swal.fire({
        Title: 'Welcome to δα',
        imageUrl: 'https://i.ibb.co/k14phvL/help.png',
        showCancelButton: false,
    })
}


export {  newList, toggleRemove, remove, resetRemove, addList, showHelp  };