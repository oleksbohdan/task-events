window.addEventListener('keydown', function (event) {
    let item = document.getElementById('span');
    let input = document.getElementById('input');
    if(event.altKey  && event.code === 'KeyA') {
        if(!input){
            input = document.createElement('input');
            input.type = 'text';
            input.id = 'input';
            document.getElementById('main').insertBefore(input, item);
        }
        if(input.style.display === `inline-block`) return;
        input.value = item.innerText;
        input.style.display = `inline-block`;
        item.style.display = `none`;
    }
    if(event.shiftKey && event.code === 'KeyS'){
        if(item.style.display === `inline-block`) return;
        item.innerText = input.value;
        input.style.display = `none`;
        item.style.display = `inline-block`;
    }

    let modal = document.getElementById('modal');
    if(event.altKey  && event.code === 'KeyO'){
        if(modal.style.display === 'flex') return;
        modal.style.display = 'flex';
    }

    if(event.altKey  && event.code === 'KeyC'){
        if(modal.style.display === 'none') return;
        modal.style.display = 'none';
    }
});

window.addEventListener('resize', function () {
   if(window.innerWidth < 600){
       console.log('We are using mobile version');
   }
   else{
       console.log('We are using desktop version');
   }
});

let input = document.createElement('input');
input.id = 'input-volatile';
input.style.marginTop = `25px`;
document.getElementById('main').append(input);
input.addEventListener('input', function () {
    console.log(input.value);
});
input.addEventListener('change', function () {
    alert(input.value);
});