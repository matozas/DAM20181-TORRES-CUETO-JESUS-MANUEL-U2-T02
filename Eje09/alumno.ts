interface Alumno{
    noCtrol:string;
    nombre:string;
    apellidos:string;
    promedio:number;
    genero:string;
    fecha:string;
    activo:boolean;
}

var Alumnos=Array<Alumno>();

export class create{
    private name:string;
    constructor(theName:string){
        this.name=theName;
    }
    crear(control:string,Name:string,apel:string,prome:number,gene:string,fech:string,act:boolean):void{
        let newAlumno:any;
        
    
            newAlumno={
               noCtrol:control,
               nombre:Name,
               apellidos:apel,
               promedio:prome,
               genero:gene,
               fecha:fech,
               activo:act
            };

           Alumnos.push(newAlumno);
        }
    }

    export class show{
        private name:string;
        constructor(theName:string){
            this.name=theName;
        }
        mostrar():void{
            for(let i=0;i<Alumnos.length;i++){
                    console.log(Alumnos[i]);
            }
        }
    }

    export class erase{
        private name:string;
        constructor(theName:string){
            this.name=theName;
        }

        eliminar(nocontrol:string):void{
            
            for(var i=0;i<Alumnos.length;i++){
                if(Alumnos[i].noCtrol===nocontrol){
                    Alumnos[i]= {noCtrol:"",nombre:"",apellidos:"",promedio:0,fecha:"",genero:"",activo:false};
                }
            }

        }
        }

        export class update{
            private name:string;
            constructor(theName:string){
                this.name=theName;
            }
            modificar(con:string,nom:string,ape:string,pro:number,fec:string,gen:string,ac:boolean):void{

                for(var i=0;i<Alumnos.length;i++){
                    if(Alumnos[i].noCtrol===con){
                        Alumnos[i]= {noCtrol:con,nombre:nom,apellidos:ape,promedio:pro,fecha:fec,genero:gen,activo:ac};
                    }
                }

            }
            }

      
   