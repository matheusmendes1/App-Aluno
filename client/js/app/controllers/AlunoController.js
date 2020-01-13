class AlunoController{

    constructor(){

        let $ = document.querySelector.bind(document);

        this._inputNumMatricula = $("#num-matricula");
        this._inputNome = $("#nome");
        this._inputIdade = $("#idade");
        this._inputDataInicio = $("#data-inicio");

        this._listaAlunos = new ListaAlunos();

        this._alunosView = new AlunosView($("#tabela-alunos"));
        this._alunosView.update(this._listaAlunos);

        this._mensagem = new Mensagem();

        this._mensagemView = new MensagemView();
        this._mensagemView = new MensagemView($('#mensagem-status'));
        this._mensagemView.update(this._mensagem);        
    }

    adiciona(event){
        //Usamos o preventDefault() para garantir que a página não será recarregada
        //quando clicarmos no botão de submit
        event.preventDefault();

        this._listaAlunos.adiciona(this._criaAluno());
        this._alunosView.update(this._listaAlunos);

        this._mensagem.texto = 'Aluno cadastrado com sucesso!';
        this._mensagemView.update(this._mensagem);

        this._limpaFormulario();

        console.log(this._listaAlunos);
    }

    _criaAluno(){

        //Aqui está a "ponte" entre o model Aluno e o controller
        return new Aluno(
            this._inputNumMatricula.value,
            this._inputNome.value,
            this._inputIdade.value,
            DateHelper.textoParaData(this._inputDataInicio.value)
        );

        /* Qual a real necessidade de DateHelper ?
            Quando o formulário captura o texto, ele não é uma instância de date
            sendo salvo somente como uma string, e no formato errado (aaaa-mm-dd)
            ao invés do objeto date. Utilizamos a DateHelper para tratar tanto a 'ida' 
            quanto a 'volta' do texto capturado no formulário
        */
    }

    _limpaFormulario(){
        this._inputNumMatricula.value = '';
        this._inputNome.value = '';
        this._inputIdade.value = '';
        this._inputDataInicio.value = '';

        this._inputNumMatricula.focus();
    }

}