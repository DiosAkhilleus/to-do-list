import {  newToDo, setRemove  } from './to-do-items';

// const toDoItem = (title, description, dueDate, priority) => {

//     return {  title, description, dueDate, priority  };
// }; 

// const setTitle =    (item, str) => {item.title = str};
// const setDescr =    (item, str) => {item.description = str};
// const setDate =     (item, str) => {item.dueDate = str};
// const setPriority = (item, str) => {item.priority = str};

const DEFAULT_MAIN_CONTENT = "<button id=\"new-to-do\">+ Add Item</button><button id=\"remove-to-do\">– Remove Items</button>";

const storeSideBar = () => { // stores sidebar data in localStorage
    // let sideBarData = document.getElementById('side-container');
    // eslint-disable-next-line no-undef
    localStorage.setItem(sidebar, document.getElementById('side-container').innerHTML);
}
const setSideBar = () => {
    // eslint-disable-next-line no-undef
    document.getElementById('side-container').innerHTML = localStorage.getItem(sidebar);
}
const storeMain = () => {
    let tabs = document.querySelectorAll('.tab');
    for(let i = 0; i < tabs.length; i++){
        if(tabs[i].previousElementSibling.checked === true){
            let contentID = tabs[i].previousElementSibling.id;
            console.log(contentID);
            localStorage.setItem(`tab${contentID}`, document.getElementById('main-container').innerHTML);
        }
    }
}

const displayMain = () => {
    let tabs = document.querySelectorAll('.tab');
    for(let i = 0; i < tabs.length; i++){
        if(tabs[i].checked === true){
            let contentID = tabs[i].previousElementSibling.id;
            let storageExists = localStorage.getItem(`tab${contentID}`);
            if(storageExists !== null){
                document.getElementById('main-container').innerHTML = localStorage.getItem(`tab${contentID}`);
            }
            if(storageExists === null){
                document.getElementById('main-container').innerHTML = DEFAULT_MAIN_CONTENT;
            }
        }
    }
    document.getElementById('new-to-do').addEventListener('click', newToDo);
    if(document.getElementById('main-container').childElementCount > 2){
        document.getElementById('remove-to-do').addEventListener('click', setRemove);
    }
}


export {  storeSideBar, setSideBar, storeMain, displayMain  };