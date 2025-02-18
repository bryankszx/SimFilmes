/************************************************************
 * Objetivo: Controller responsavel pela regra de negocio referente ao CRUD de Filme
 * Data: 11/02/2025
 * Autor: Bryan
 * Versão: 1.0
 ************************************************************/
// Função para tratar a inserção de um novo filme no DAO
 const inserirFilme = async function(filme){
if(filme.nome == '' || filme.nome == undefined || filme.nome == null || filme.nome.lenght > 80 ||
filme.duracao == '' || filme.duracao == undefined || filme.duracao == null || filme.duracao.lenght > 80||
filme.sinopse == '' || filme.sinopse == undefined || filme.sinopse == null || 
filme.data_lancamento == '' || filme.data_lancamento == undefined || filme.data_lancamento == null || filme.nome.lenght > 10||
filme.foto_capa == ''    || filme.foto_capa.lenght > 200 ||
filme.link_trailer == '' || filme.link_trailer.lenght > 200
)
    
 response.status.code = 400
 response.message = ' Os atributos informados na requisição não estão de acordo.'

 }
// Função para tratar a atualizaçãpo de um filme no DAO
 const atualizarrFilme = async function(){

}
// Função para tratar a exclusão de um filme no DAO
const excluirFilme = async function(){

}
// Função para tratar o retorno de uma lista de filmes do DAO
const listarFilme = async function(){

}
// Função para tratar o retorno de um filme filtrando pelo ID do DAO
const buscarFilme = async function(){

}