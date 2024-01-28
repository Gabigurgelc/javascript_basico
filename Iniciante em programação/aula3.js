var pessoa = {
    id: 9,
    nome: "Mary Rúbia",
    idade: 19
};

var atendeclassificação = pessoa.idade >= 18;

if(atendeclassificação === true) {
    console.log("Tem idade para acessar o conteúdo");
}else{
    console.log("Não tem idade para acessar o conteúdo")
};

