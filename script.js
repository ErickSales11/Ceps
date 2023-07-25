function buscarEstados(){
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
    .then(resposta => resposta.json())
    .then(listDeEstados => {
        listDeEstados.forEach(estado => {
            estados.innerHTML +=`
            <option Value="${estado.sigla}">${estado.nome}</option>`
        })
    })
}

buscarEstados()


function buscarCep(){
    if(cep.value.length == 8)
    fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
    .then(resposta => resposta.json())
    .then(endereco => {
        logradouro.value = endereco.logradouro;
        bairro.value = endereco.bairro;
        localidade.value = endereco.localidade;
        estados.value = endereco.uf;
    });
};
