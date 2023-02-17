import { Banco } from "./Banco.js";

class Funcionario extends Banco{
    constructor(nombre,apellido, saldo,celular){
        super(nombre,apellido, saldo)
        this.celular=celular;
    }
    set Celular(cel){
        this.celular=cel
    }
    get Celular(){
        return this.celular;
    }

    datos(){
       super.datos()
        return console.log(this.Celular)
    }
}

export{ Funcionario}
   
