class Banco{
    constructor(nombre, apellido, saldo){
        this.nombre=nombre;
        this.apellido=apellido;
        this.saldo=saldo;
    }
  set setSaldo(saldo){
        this.saldo=saldo;
    }
  get saldoC(){
        return this.saldo;
    }
    
 retirar(retiro){
        this.saldo=this.saldo-retiro;
    }
    
    static saludar(nombre){
        return console.log("hola ", nombre)
    }

    datos(){
       return console.log(this.nombre, this.apellido,this.saldo)
    }
}

//module.exports={
  //  Banco
//}
export {Banco}
