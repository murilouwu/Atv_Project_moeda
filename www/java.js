//carregar pagina
window.onload = ()=>{
    //link todas as moedas
    let allcoin = 'https://economia.awesomeapi.com.br/json/available/uniq';
    //link todas as conversoes
    let allcombos = 'https://economia.awesomeapi.com.br/json/available';
    //primeiro select
    let div = document.querySelector('#select');
    //segundo select
    let div2 = document.querySelector('#select2');    
    const opcoes = {
        method:'GET',
        mode:'cors',
        cache:'default'
    }
    //buscar todas as moedas       
    fetch(allcoin, opcoes)
    .then(
        response => { response.json()
                .then(data =>{
                    //pegar propriedades do objeto
                    let value = Object.keys(data);
                    //pegar todos os valores
                    let texto = Object.values(data);
                    //loop
                    for(i=0; i<texto.length; i++){
                        //mudando o select
                        div.innerHTML += "<option value='"+value[i]+"'>"+texto[i]+"</option>\n";
                        //mudando o select parte II
                        div2.innerHTML += "<option value='"+value[i]+"'>"+texto[i]+"</option>\n";
                    };
                })
        }
    );
    //botão
    let btn = document.querySelector('#buscar');
    //quando clickar
    btn.addEventListener('click', ()=>{
        //codigo
        let cd = (div.value)+(div2.value);
        //buscando todas as conversoes
        fetch(allcombos ,opcoes)
        .then(
            response => { response.json()
                .then(data =>{
                    //verifica se exite esse combinação escolida pelo usuario
                    if(data.hasOwnProperty(div.value+"-"+div2.value)){
                        fetch(`https://economia.awesomeapi.com.br/last/${div.value}-${div2.value}`,opcoes)
                        .then(
                            response => { response.json()
                                //editar spans
                                .then(data =>{
                                    //titulo
                                    document.querySelector('#titulo').innerHTML = data[cd].name;
                                    
                                    //compra
                                    document.querySelector('#sp1').innerHTML = data[cd].ask;
                                    
                                    //venda
                                    document.querySelector('#sp2').innerHTML = data[cd].bid;
                                    
                                    //variação
                                    document.querySelector('#sp3').innerHTML = data[cd].pctChange;
                                    
                                    //maximo
                                    document.querySelector('#sp4').innerHTML = data[cd].high;
                                    
                                    //minimo
                                    document.querySelector('#sp1').innerHTML = data[cd].low;     
                                })
                            }
                        );
                    }else{
                        //aviso que conversão não exite
                        document.querySelector('#titulo').innerHTML = "Não foi encontrado tal conversão na API";
                    }
                })
            }
        );
    });
};