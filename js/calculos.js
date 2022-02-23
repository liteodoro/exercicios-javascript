
const calculo = {  
     v1 : 0,
     v2 : 0,
     opc3 : " ",
     resultado : 0,
     fazerOperacao: function() {
     
        if (this.opc3 == 1) {
            this.resultado = this.v1 + this.v2;
    
        }else if (this.opc3 == 2) {
            this.resultado = this.v1 - this.v2;
    
        } else if (this.opc3 == 3) {
            this.resultado = this.v1 * this.v2;
            
        }else 
        this.resultado = this.v1 / this.v2;
            
       },  

     alterarValores: function(v1 = 0, v2 = 0, opc3 = "") {
        this.v1 = parseInt(v1);
        this.v2 = parseInt(v2);
        this.opc3 = opc3;
 }

}
   

