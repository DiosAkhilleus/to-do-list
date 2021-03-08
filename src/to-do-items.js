import Swal from 'sweetalert2';
import {    } from './logic';

const newToDo = () => {
    let arr = [];
    Swal.fire({
        title: 'New To-Do',
        html:
          '<input id="swal-input1" class="swal2-input" placeholder="Title">' +
          '<input id="swal-input2" class="swal2-input" placeholder="Description">' +
          '<input id="swal-input3" class="swal2-input" placeholder="Due Date">',
        input: 'select',
        inputOptions: {
            low: 'Low',
            medium: 'Medium',
            high: 'High'
        },
        inputPlaceholder: 'Set Priority',
        showCancelButton: true,
        confirmButtonColor: '#3085D6',
        confirmButtonText: 'Add',
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById('swal-input1').value,
            document.getElementById('swal-input2').value,
            document.getElementById('swal-input3').value,
          ]
        },
        inputValidator:(value) => {
            arr = [document.getElementById('swal-input1').value, document.getElementById('swal-input2').value, document.getElementById('swal-input3').value];
            arr.push(value.toString());
            if( arr[0] === '' || arr[1] === '' || arr[2] === '' || arr[3] === ''){
                return "Must fill all fields!"
            }
        }
      }).then((result) => {
          if (result.isConfirmed) {
              createToDo(arr);
          }
      });
      arr = [];
}

const createToDo = (array) => {
    let title = array[0];
    let desc = array[1];
    let due = array[2];
    let imp = array[3];
    console.log(imp);
    // let add = document.getElementById('new-to-do');

    let total = document.getElementById('main-container').childElementCount;
    let todo = document.createElement('div');
    
    todo.setAttribute('class', 'to-do-element');
    todo.setAttribute('id', `${total-1}`);
    document.getElementById('main-container').appendChild(todo);

    let ch = document.createElement('input');
    ch.setAttribute('type', 'checkbox');
    ch.setAttribute('class', 'complete');
    ch.setAttribute('name', 'check');
    ch.setAttribute('id', `check${total-1}`)
    let lab = document.createElement('label');
    lab.setAttribute('for', `check${total-1}`);
    lab.setAttribute('class', 'labelCheck');
    let div1 = document.createElement('div');
    div1.setAttribute('class', 'title');
    div1.textContent = `${title}`;
    let div2 = document.createElement('div');
    div2.setAttribute('class', 'desc');
    div2.textContent = `${desc}`;
    let div3 = document.createElement('div');
    div3.setAttribute('class', 'due-date');
    div3.textContent = `${due}`;
    let div4 = document.createElement('div');
    div4.setAttribute('class', 'prior');
    div4.setAttribute('id', `prior${total-1}`)
    
    

    todo.appendChild(ch);
    ch.after(lab);
    lab.after(div1);
    div1.after(div2);
    div2.after(div3);
    div3.after(div4);

    
    document.getElementById('new-to-do').before(todo);

    if(imp === 'high'){
        document.getElementById(`prior${total-1}`).style.backgroundColor = 'darkred';
    }
    if(imp === 'medium'){
        document.getElementById(`prior${total-1}`).style.backgroundColor = 'orange';
    }
    if(imp === 'low'){
        document.getElementById(`prior${total-1}`).style.backgroundColor = 'olivedrab';
    }

}

const setRemove = () => {
    let items = document.querySelectorAll('.prior');
    for(let i = 0; i < items.length; i++){
        items[i].style.backgroundImage = "url('https://i.ibb.co/TLJL4kr/X.png')"
        items[i].addEventListener('click', deleteToDo);
    }
    document.getElementById('remove-to-do').removeEventListener('click', setRemove);
    createDone();
}

const deleteToDo = (e) => {
    // set swal alert to ask delete confirm
    // if yes, delete
    let targ = e.target.id;
    let parentEl = document.getElementById(`${targ}`).parentElement;
    parentEl.parentElement.removeChild(parentEl); 
}

const createDone = () => {
    let done = document.createElement('button');
    let br = document.createElement('br');
    done.setAttribute('id', 'finished');
    done.textContent = "Finished";
    document.getElementById('main-container').appendChild(done);
    document.getElementById('main-container').appendChild(br);
    document.getElementById('remove-to-do').after(br);
    br.after(done);
    document.getElementById('finished').addEventListener('click', resetRemove);

}

const resetRemove = () => {
    let done = document.getElementById('finished');
    let divs = document.querySelectorAll('.prior');
    for(let i = 0; i < divs.length; i++){
        divs[i].style.backgroundImage = '';
        divs[i].removeEventListener('click', deleteToDo);
    }
    done.removeEventListener('click', resetRemove);
    done.parentElement.removeChild(done);
    document.getElementById('remove-to-do').addEventListener('click', setRemove);

}

export {  newToDo, setRemove  };
