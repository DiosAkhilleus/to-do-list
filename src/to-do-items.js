import Swal from 'sweetalert2';

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
      }).then (function(){
          console.log(arr);
      });
}

export {  newToDo  };
