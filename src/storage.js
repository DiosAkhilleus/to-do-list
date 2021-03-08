// const toDoItem = (title, description, dueDate, priority) => {

//     return {  title, description, dueDate, priority  };
// }; 

// const setTitle =    (item, str) => {item.title = str};
// const setDescr =    (item, str) => {item.description = str};
// const setDate =     (item, str) => {item.dueDate = str};
// const setPriority = (item, str) => {item.priority = str};

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
        if(tabs[i].checked === true){
            console.log(tabs[i]);
        }
    }
}


export {  storeSideBar, setSideBar, storeMain  };