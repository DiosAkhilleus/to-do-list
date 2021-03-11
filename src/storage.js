import {  newToDo, setRemove  } from './to-do-items';

// const toDoItem = (title, description, dueDate, priority) => {

//     return {  title, description, dueDate, priority  };
// }; 

// const setTitle =    (item, str) => {item.title = str};
// const setDescr =    (item, str) => {item.description = str};
// const setDate =     (item, str) => {item.dueDate = str};
// const setPriority = (item, str) => {item.priority = str};

const DEFAULT_MAIN_CONTENT = "<div id='place'></div>";
// const DEFAULT_MAIN_CONTENT = "<button id=\"new-to-do\">+ New To-Do</button><button id=\"remove-to-do\">– Remove Items</button>";
const DEFAULT_SIDE_CONTENT = "<input type=\"radio\" class=\"side-nav\" id=\"1\" name=\"side-tabs\"><label for=\"1\" class=\"tab\" id=\"lab1\">Home</label>";

const storeSideBar = () => { // stores sidebar data in localStorage
    // let sideBarData = document.getElementById('side-container');
    // eslint-disable-next-line no-undef
    localStorage.setItem('sidebar', document.getElementById('side-container').innerHTML);
}
const setSideBar = () => {
    // eslint-disable-next-line no-undef
    let side = localStorage.getItem('sidebar');
    if(side !== null){
        document.getElementById('side-container').innerHTML = localStorage.getItem('sidebar');
    }
    if(side === null){
        document.getElementById('side-container').innerHTML = DEFAULT_SIDE_CONTENT;
    }
}
const storeMain = () => {
    console.log('store main');
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
    console.log('disp main');
    let tabs = document.querySelectorAll('.tab');
    for(let i = 0; i < tabs.length; i++){
        if(tabs[i].previousElementSibling.checked === true){
            let contentID = tabs[i].previousElementSibling.id;
            console.log(contentID);
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
const updateHome = () => {
    let tabs = document.querySelectorAll('.tab');
    let str = "";
    for (let i = 2; i <= tabs.length; i++){
        let store = localStorage.getItem(`tab${i}`);
        console.log(store);
        str = str + store;
    }
    console.log(str); 
    localStorage.setItem('tab1', `${str}`);
}


export {  storeSideBar, setSideBar, storeMain, displayMain, updateHome  };