let cep = document.querySelector('#cep');

cep.value = '01001000';

cep.addEventListener('blur', function(e){
    let cep = e.target.value;
    let script = document.createElement('script');
    script.src = 'viacep.com.br/ws/01001000/json/?callback=popularForm';
    document.body.appendChild(script);
});

function popularForm(respostaConsulta) {
    
}