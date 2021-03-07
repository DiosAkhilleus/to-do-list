const todoItem = (title, description, dueDate, priority) => {

    return {  title, description, dueDate, priority  };
}; 

const setTitle =    (item, str) => {item.title = str};
const setDescr =    (item, str) => {item.description = str};
const setDate =     (item, str) => {item.dueDate = str};
const setPriority = (item, str) => {item.priority = str};

const storeUserData = () => { // stores sidebar data in localStorage
    let sideBarData = document.getElementById('side-container');
    // eslint-disable-next-line no-undef
    localStorage.setItem(sidebar, sideBarData.outerHTML);
}


export {  todoItem, setTitle, setDescr, setDate, setPriority, storeUserData  };