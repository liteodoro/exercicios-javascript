
const mensagem ={
    nomeUser: "",
    emailUser: "",
    telUser: "",
    texto: "",
    atualizar: function(nome = "", email = "", tel = "", texto = "") {
       this.nomeUser = nome;
       this.nomeUser = email;
       this.nomeUser = tel;
       this.nomeUser = texto;
    },
    enviar: function() {
        var error = "";
        if (error != " ") {
            return false;
        }
        return true;
    }
};