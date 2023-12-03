const form = document.getElementById('form-atividade');
const nomes = [];
const celulares = [];

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionarLinha();
    atualizarTabela();
});

function adicionarLinha() {
    const inputNome = document.getElementById('nome');
    const inputCelular = document.getElementById('celular');

    const mensagemJaInserida = `A Nome: ${inputNome.value} já foi inserida, por favor insira outra nome.`;

    if(nomes.includes(inputNome.value)){
        const containerMensagem = document.querySelector('.error-message');
        containerMensagem.innerHTML = mensagemJaInserida
        containerMensagem.style.display = 'block';
    }else {
        nomes.push(inputNome.value);
        celulares.push(inputCelular.value);
    
        let linha = "<tr>";
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputCelular.value}</td>`;
        linha += "</tr>";
    
        linhas += linha;

        const containerMensagem = document.querySelector('.error-message');
        containerMensagem.innerHTML = mensagemJaInserida
        containerMensagem.style.display = 'none';
    }

    inputNome.value = '';
    inputCelular.value = '';
}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}


