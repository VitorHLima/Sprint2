process.env.AMBIENTE_PROCESSO = "desenvolvimento";
// process.env.AMBIENTE_PROCESSO = "producao";

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 8080;

var app = express();

var indexRouter = require("./src/routes/index");
<<<<<<< HEAD
var usuarioRouter = require("./src/routes/usuarios");
var medidasRouter = require("./src/routes/medidas");
var aquariosRouter = require("./src/routes/aquarios");
var enderecoRouter = require("./src/routes/endereco");
=======
// var usuarioRouter = require("./src/routes/usuarios");
// var medidasRouter = require("./src/routes/medidas");
// var aquariosRouter = require("./src/routes/aquarios");
var enderecoRouter = require("./src/routes/enderecos");
>>>>>>> e1e9c3275c40c65fa75809eb2a1142ec3f5b5de0
var empresasRouter = require("./src/routes/empresas");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
<<<<<<< HEAD
app.use(express.static(path.join(__dirname, "Página Inicial")));
app.use(express.static(path.join(__dirname, "cadastro-empresa")));
app.use(express.static(path.join(__dirname, "endereco")));
app.use(express.static(path.join(__dirname, "login")));
app.use(express.static(path.join(__dirname, "sistemaSensor")));
app.use(express.static(path.join(__dirname, "img")));
=======
app.use(express.static(path.join(__dirname, "public/Site/Página Inicial")));
app.use(express.static(path.join(__dirname, "public/Site")));
app.use(express.static(path.join(__dirname, "public")));
>>>>>>> e1e9c3275c40c65fa75809eb2a1142ec3f5b5de0

app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/enderecos", enderecoRouter);
app.use("/medidas", medidasRouter);
app.use("/aquarios", aquariosRouter);
app.use("/empresas", empresasRouter);

app.listen(PORTA, function () {
    console.log(`Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${PORTA} \n
    Você está rodando sua aplicação em Ambiente de ${process.env.AMBIENTE_PROCESSO} \n
    \t\tSe "desenvolvimento", você está se conectando ao banco LOCAL (MySQL Workbench). \n
    \t\tSe "producao", você está se conectando ao banco REMOTO (SQL Server em nuvem Azure) \n
    \t\t\t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'`);
});
