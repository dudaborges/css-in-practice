let h1 = document.querySelector('h1')
h1.style.color = 'red'


let button = document.getElementById('button')

button.addEventListener('click', function(){
    let teste = document.getElementById('teste')

    if(teste.style.display === 'none'){
        teste.style.display = 'block'
    }else{
        teste.style.display = 'none'
    }
})