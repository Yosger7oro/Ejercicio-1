export default class CL_Bodega{
    constructor(){
        this.acumganacias=0;
    }

procesararticulos(a){
    this.acumganacias+= a.costo;
}

precioportodo(){
    return this.acumganacias*(50/100);
}
}