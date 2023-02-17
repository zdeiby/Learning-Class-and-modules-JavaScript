import { Banco } from "./Banco.js";
import { Funcionario } from "./Funcionario.js";

let Diego= new Banco()
let Sara= new Banco()

let newFun= Funcionario;

let Deiby= new newFun();
Deiby.nombre="Deiby";
Deiby.apellido="Graciano";
Deiby.setSaldo=250000;
console.log(Deiby.saldoC);
Deiby.retirar(1000)
Deiby.Celular=2929299;
console.log(Deiby.Celular)
console.log(Deiby.datos())


Diego.apellido="Granada";
Diego.nombre="Diego";
Diego.setSaldo=10000;
console.log(Diego.saldoC)
console.log(Diego.datos())

Sara.apellido="Granada";
Sara.nombre="Sara";
Sara.setSaldo=20000;
console.log(Sara.saldoC)

Diego.retirar(2000);
console.log(Diego.saldo)

const container=document.querySelector('.container')

container.innerHTML=`<h2>cuenta#1: </h2>
<h2>${Deiby.nombre} ${Deiby.apellido}</h2>
<h2>saldo ${Deiby.saldo}</h2>

<h2>cuenta#2: </h2>
<h2>${Diego.nombre} ${Diego.apellido}</h2>
<h2>saldo ${Diego.saldo}</h2>

<h2>cuenta#3: </h2>
<h2>${Sara.nombre} ${Sara.apellido}</h2>
<h2>saldo ${Sara.saldo}</h2>
`


