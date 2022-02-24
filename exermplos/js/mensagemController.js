
const mensagemController = {

    enviar: function() {
        //1° pegar os dados
    mensagem.atualizar(
        document.getElementById("nome").value,
        document.getElementById("email").value,
        document.getElementById("tel").value,
        document.getElementById("texto").value,
    );
       //2° enviar os dados
       
    if (mensagem.enviar()) {
        alert("Mensagem foi enviada!"); 

    } else {
        alert("Erro ao enviar a mensagem!");
    }
  }
};