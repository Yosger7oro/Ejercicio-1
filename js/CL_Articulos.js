export default class CL_Articulos{
    
    constructor(co){
        this.costo=co;
    }

    set costo(c){
        this._costo=c;
    }

    get costo(){
        return this._costo;
    }

}