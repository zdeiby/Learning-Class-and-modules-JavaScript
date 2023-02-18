class Celular{

    constructor(color, peso, resolucion, camara, ram){
        this.color = color;
        this.peso = peso;
        this.resolucion = resolucion;
        this.camara = camara;
        this. ram=ram ;
        this.encendido=false;

    }
    prender(){
       this.encendido=!this.encendido;
    }
 
    reiniciar(){
       if(this.encendido){
        console.log("reinciando")
       }else{
        console.log("celular apagado no puedes reinciarlo")
       }
       
    }
    tomarFotos(){
        if(this.encendido){
            console.log("tomando fotos a resolucion de: ",this.resolucion)
           }else{
              console.log("celular apagado no puedes tomar fotos")
           }
      

    }
    grabar(){
        if(this.encendido){
            console.log("grabando video a resolucion de: ",this.resolucion)
           }else{
             console.log("celular apagado no puedes grabar")
           }
       

    }
   get mostrarInfo(){
        console.log("color: ",this.color);
        console.log("peso: ",this.peso);
        console.log("resolucion: ",this.resolucion);
        console.log("camara: ",this.camara);
        console.log("ram: ",this.ram);
    }
}

class altaGama extends Celular{
    constructor(color, peso, resolucion,camara,ram, numCamaras, facial,grabarLento){
    super(color,peso,resolucion,camara,ram);
    this.numCamaras=numCamaras
    this.facial=facial;
    this.grabarLento=grabarLento;
    }

    mostrarInfo(){
        super.datos;
        console.log("numero de camaras :",this.numCamaras)
        console.log("desbloqueo facial :",this.facial)
        console.log("grabar lento :",this.grabarLento)
    }
    grabarVideoLento(){
        if(this.encendido){
            console.log("iniciando reconocimiento facial")
        }else{
            console.log("celular apagado no puedes iniciar video lento")
        }
        
    }
}
const cel1= new Celular ("rojo", "10g", "1090x200","20MP", "4gb")
cel1.prender()
cel1.reiniciar()
cel1.tomarFotos()
cel1.grabar()
cel1.prender()
cel1.reiniciar()
cel1.tomarFotos()
cel1.grabar()
cel1.mostrarInfo;
const cel2= new altaGama ("rojo", "10g", "1090x200","20MP", "4gb","2","si","si")
cel2.mostrarInfo();
cel2.prender();
cel2.grabarVideoLento()