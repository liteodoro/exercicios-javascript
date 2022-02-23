
const jogo ={
    time: "",
    time: "",
    gols1: 0,
    gols2: 0,
    resultado:"",
    atualizaPlacar: function(g1 = 0, g2 = 0){
        this.gols1 = parseInt(t1);
        this.gols1 = parseInt(t2);
    },

    atualizaResultado: function(){
        if (this.gols1 > this.gols2){
            this.resultado = this.time1;

        }else if (this.gols1 == this.gols2){
            this.resultado + "Empate";

        }else {
            this.resultado = this.time2;
        }
    },

    atualizaTimes: function(t1 = " ", t2 = " ") {
        this.time1 = t1;
    }
}