
function newList (name) {
    let count = document.querySelectorAll('#side-container .tab').length;
    let inp = document.createElement('input');
    let lab = document.createElement('label');
    inp.setAttribute('id', `${count+1}`);
    inp.setAttribute('class', 'side-nav');
    inp.setAttribute('type', 'radio');
    lab.setAttribute('class', 'tab');
    lab.setAttribute('for', `${count+1}`)
    lab.setAttribute('id', `lab${count}`);
    lab.textContent = name;

    document.getElementById('side-container').appendChild(inp);
    inp.after(lab);
}

function toggleRemove () {
    let tabs = document.getElementsByClassName('tab');
    console.log(tabs);
    for(let i = 1; i < tabs.length; i++){
        tabs[i].style.color = 'rgb(130, 50, 50)';
        tabs[i].addEventListener('click', remove);
    }
    document.getElementById('remove').style.backgroundColor = "rgb(100, 124, 124)";
    document.getElementById('remove').removeEventListener('click', toggleRemove);
    document.getElementById('remove').addEventListener('click', reset);
}
function remove (e) {
    let targ = e.target.id;
    let rem = document.getElementById(`${targ}`);
    document.getElementById(`${targ}`).parentElement.removeChild(rem);
}
function reset () {
    let fin = document.getElementById('finished');
    document.getElementById('remove').style.backgroundColor = "rgb(63, 79, 79)";
    let tabs = document.getElementsByClassName('tab');
    for(let i = 1; i < tabs.length; i++){
        tabs[i].style.color = 'rgb(109, 109, 109)';
        tabs[i].removeEventListener('click', remove);
    }
    document.getElementById('remove').addEventListener('click', toggleRemove);
    document.getElementById('remove').removeEventListener('click', reset);
}
export {  newList, toggleRemove, remove, reset  };