import {  todoItem, setTitle, setDescr, setDate, setPriority  } from './logic';
import {  setSide  } from './dom';
import { compareAsc, format } from 'date-fns'

// format(new Date(2014, 1, 11), 'yyyy-MM-dd')
// const dates = [
//     new Date(1995, 6, 2),
//     new Date(1987, 1, 11),
//     new Date(1989, 6, 10),
//   ] 
//   dates.sort(compareAsc);

//todo structure: title, description, dueDate, priority

console.log('Webpack Loaded');

let jeff = todoItem('jeff', 'getJeff', 'March 20', 'Low');

