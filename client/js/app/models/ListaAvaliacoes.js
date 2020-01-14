class ListaAvaliacoes{

    constructor(){

        this._avaliacoes = [];
    }

    adicionaAvaliacoes(avaliacao){

        this._avaliacoes.push(avaliacao);
    }

    get avaliacoes(){

        return [].concat(this._avaliacoes);
    }
}