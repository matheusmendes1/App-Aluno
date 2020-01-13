class ListaAlunos{

    constructor(){
        this._alunos = [];
    }

    adiciona(aluno){
        
        this._alunos.push(aluno);
    }

    get alunos(){

        //conceito de programação defensiva: retorna-se 
        //uma nova lista concatenada com os dados da lista original para que
        //a lista original não seja alterada (pois em js ate agora não tem escopo de variavel)
        return [].concat(this._alunos);
    }
}