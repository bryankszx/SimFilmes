/************************************************************
 * Objetivo: Criar a comunicação com o Banco de Dados para fazer o CRUD de filmes
 * Data: 11/02/2025
 * Autor: Bryan
 * Versão: 1.0
 ************************************************************/

 //import da biblioteca do prisma client para executar os scripts SQL
const{ PrismaClient} = require('@prisma/client')




 //Função para inserir um novo filme
const insertFilme = async function(filme){
    //Instanciar (criar um objeto a ser utilizado) a biblioteca do prisma/client
  const prisma = new PrismaClient

  let sql = `inser into tbl_filme(nome,
                                 duracao,
                                 sinopse,
                                 data_lancamento,
                                 foto_capa,
                                 link_trailer
    )                            
                                values
                                (${filme.nome},
                                 ${filme.duracao},
                                 ${filme.sinopse},
                                 ${filme.data_lancamento},
                                 ${filme.foto_capa},
                                 ${filme.link_trailer}   )`
// Executa o scriptSQL no banco de dados e aguarda o retorno do BD para saber se deu certo
let result = await prisma.$executeRawUnsafe(sql)
if(result)
return true
else 
return false 
                                }

//Função para atualizar um Filme existente
const updateFilme = async function(){

}


// Função para deletar um filme existente 
const deleteFilme = async function(){

}

// Função retorna todos os Filmes Existente
const selectAllFilme = async function(){

}
// Função para buscar um filme pelo id
const selectByIdFilme = async function(){

}

module.exports = {
    insertFilme,
    updateFilme,
    deleteFilme,
    selectAllFilme,
    selectByIdFilme


}