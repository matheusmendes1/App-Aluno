class DateHelper{

    constructor(){
        throw new Error("A classe DateHelper não pode ser instanciada!");
    }

    static dataParaTexto(data){
        //Este return usa uma template string para construir o texto aaaa/mm/dd 
        //baseado na data que está recebendo
        //para informar parâmestros para template strings, usamos ${parametro}
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }

    static textoParaData(texto){

        //Aqui temos uma expressão regular testando o texto passado como parâmetro
        //para ver se está no formato aaaa-mm-dd
        if (!/^\d{4}-\d{2}-\d{2}$/.test(texto))
            throw new Error('Deve estar no formato aaaa-mm-dd');
             
        //Este return está pegando data vindo em formato de texto, separando a data pelo criterio '-'
        // e adicionando numa lista
        
        //Depois de separar, ele está percorrendo a lista criada e, quando encontrar o mês
        //decrementa 1 unidade por que o Date conta o mês de 0 a 11
        
        //O spread operator (...) garante que o array (a data) será desmembrando e cada parâmetro do Date
        //será posicionado na mesma ordem no construtor
        //então ano vai ser o primeiro indice, mês o segundo indice e dia o terceiro indice
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2 ));
    }
}