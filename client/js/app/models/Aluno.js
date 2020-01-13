class Aluno{
 
    constructor(numMatricula, nome, idade, dataInicio){

        this._numMatricula = numMatricula;
        this._nome = nome;
        this._idade = idade;
        this._dataInicio = new Date(dataInicio.getTime());

        Object.freeze(this);
    }

    get numMatricula(){
        return this._numMatricula;
    }

    get nome(){
        return this._nome;
    }

    get idade(){
        return this._idade;
    }

    get dataInicio(){
        return new Date(this._dataInicio.getTime());
    }
}