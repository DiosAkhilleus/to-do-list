import {  todoItem, setTitle, setDescr, setDate, setPriority  } from './logic';
import {  newList, toggleRemove, remove, resetRemove  } from './dom';
import { compareAsc, format } from 'date-fns';
import Swal from 'sweetalert2';

// format(new Date(2014, 1, 11), 'yyyy-MM-dd')
// const dates = [
//     new Date(1995, 6, 2),
//     new Date(1987, 1, 11),
//     new Date(1989, 6, 10),
//   ] 
//   dates.sort(compareAsc);

//todo structure: title, description, dueDate, priority

document.getElementById('remove').addEventListener('click', toggleRemove);

newList("List 1");
newList("List 2");