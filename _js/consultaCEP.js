let cep = document.querySelector('#cep');
let cidade = document.querySelector('#cidade');
let estado = document.querySelector('#estado');
let rua = document.querySelector('#rua');
let bairro = document.querySelector('#bairro');

cep.value = '01001000';

cep.addEventListener('blur', function(e){
    let cep = e.target.value;
    let script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws/'+cep+'/json/?callback=popularForm';
    document.body.appendChild(script);
});

function popularForm(resposta) {

    if("erro" in resposta) {
        alert("CEP não encontrado");
        return;
    }

    console.log(resposta);
    rua.value = resposta.logradouro;
    bairro.value = resposta.bairro;
    cidade.value = resposta.localidade;
    estado.value = resposta.uf;
}