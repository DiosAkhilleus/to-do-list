import Swal from 'sweetalert2';

const showHelp = () => { //displays app info in the form of an alert
    Swal.fire({
        Title: 'Welcome to δα',
        imageUrl: 'https://i.ibb.co/8gkxk3n/help-newest.png',
        showCancelButton: false,
    })
}

export {  showHelp  };