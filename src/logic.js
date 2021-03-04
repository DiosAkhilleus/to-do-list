const todoItem = (title, description, dueDate, priority) => {


    return {  title, description, dueDate, priority  };
}; 

const setTitle = (item, str) => {
    item.title = str;
}

const setDescr = (item, str) => {
    item.description = str;
}

const setDate = (item, str) => {
    item.dueDate = str;
}

const setPriority = (item, level) => {
    item.priority = level;
}

export {  todoItem, setTitle, setDescr, setDate, setPriority  };