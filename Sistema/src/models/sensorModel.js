var database = require("../database/config");

function publicar(nome, curral) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ");
    var instrucao = `
        INSERT INTO sensor(nomeSensor, fkCurral) VALUES ('${nome}',${curral});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucao = `
    SELECT idSensor, nomeSensor from Sensor;`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function buscarAquariosPorEmpresa(fazenda, curral) {

    instrucaoSql = `SELECT Sensor.nomeSensor, curral.nomeCurral, endFazenda.nomeFazenda FROM Sensor JOIN curral ON fkCurral = idCurral 
    JOIN endFazenda ON fkEndFazenda = idEndereco 
    where endFazenda.idEndereco = ${fazenda} AND curral.idCurral = ${curral};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    publicar,
    listar,
    buscarAquariosPorEmpresa
}