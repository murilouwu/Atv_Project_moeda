window.onload = ()=>{
    let div = document.querySelector('#select');
    let div2 = document.querySelector('#select2');    
    const opcoes = {
        method:'GET',
        mode:'cors',
        cache:'default'
    }       
    fetch('https://economia.awesomeapi.com.br/json/available/uniq',opcoes)
    .then(
        response => { response.json()
                .then(data =>{
                    let value = Object.keys(data);
                    let texto = Object.values(data);
                    for(i=0; i<texto.length; i++){
                        div.innerHTML += "<option value='"+value[i]+"'>"+texto[i]+"</option>\n";
                        div2.innerHTML += "<option value='"+value[i]+"'>"+texto[i]+"</option>\n";
                    };
                })
        }
    );
    let btn = document.querySelector('#buscar');
    btn.addEventListener('click', ()=>{
        let cd = (div.value)+(div2.value);
        fetch(`https://economia.awesomeapi.com.br/json/available`,opcoes)
        .then(
            response => { response.json()
                .then(data =>{
                    if(data.hasOwnProperty(div.value+"-"+div2.value)){
                        fetch(`https://economia.awesomeapi.com.br/last/${div.value}-${div2.value}`,opcoes)
                        .then(
                            response => { response.json()
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
                        document.querySelector('#titulo').innerHTML = "Não encontramos tal conversão na API";
                    }
                })
            }
        );
    });
};