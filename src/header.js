import Swal from 'sweetalert2';

const showHelp = () => { //displays app info in the form of an alert
    Swal.fire({
        Title: 'Welcome to δα',
        imageUrl: 'https://i.ibb.co/k14phvL/help.png',
        showCancelButton: false,
    })
}

export {  showHelp  };