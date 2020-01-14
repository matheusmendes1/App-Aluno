class Avaliacao{

    constructor(aluno, valorAvaliacao, notaObtida){
        this._aluno = aluno;
        this._valorAvaliacao = valorAvaliacao;
        this._notaObtida = notaObtida;
    }

    get aluno(){
        
        return this._aluno;
    }

    get valorAvaliacao(){

        return this._valorAvaliacao;
    }

    get notaObtida(){

        return this._notaObtida;
    }
}