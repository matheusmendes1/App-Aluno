class AvaliacaoController{

    constructor(){

        let $ = document.querySelector.bind(document);

        this._inputAluno = $('#nome-aluno');
        this._inputValor = $('#valor');
        this._inputNotaObtida = $('#nota-obtida');
        
        this._listaAvaliacoes = new ListaAvaliacoes();
    }

    adicionaAvaliacaoLista(event){
        event.preventDefault();

        this._listaAvaliacoes.adicionaAvaliacoes(this._criaAvaliacao());

        this._limpaFormulario();
        console.log(this._listaAvaliacoes);
    }

    _criaAvaliacao(){

        return (new Avaliacao(
            this._inputAluno.value,
            this._inputValor.value,
            this._inputNotaObtida.value
        ));
    }

    _limpaFormulario(){
        this._inputAluno.value = '';
        this._inputValor.value = '';
        this._inputNotaObtida.value = '';

        this._inputAluno.focus();
    }

}