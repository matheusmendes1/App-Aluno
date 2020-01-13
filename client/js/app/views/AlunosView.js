class AlunosView extends View{

    constructor(elemento){
        super(elemento);
    }

    template(model){

        return `
            <table class="table table-hover table-bordered table-striped">
            <thead>
                <tr>
                    <th>Matrícula</th>
                    <th>Nome</th>
                    <th>Idade</th>
                    <th>Data de início</th>
                </tr>                    
            </thead>

            <tbody>
                ${model.alunos.map(n => `
                
                <tr>
                    <td>${n.numMatricula}</td>
                    <td>${n.nome}</td>
                    <td>${n.idade}</td>
                    <td>${DateHelper.dataParaTexto(n.dataInicio)}</td>
                </tr>

                `).join('')}
            </tbody>

            <tfoot>

            </tfoot>
        </table>
        `
    }

}