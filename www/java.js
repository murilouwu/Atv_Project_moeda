//função quando a tela carregar
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
                        div.innerHTML += "<option value='"+value[i]+"'>"+texto[i]+"</option>";
                        div2.innerHTML += "<option value='"+value[i]+"'>"+texto[i]+"</option>";
                    };
                })
        }
    );
};

function resposta(){
    let div = document.querySelector('#select');
    let div2 = document.querySelector('#select2');
    let cd = (div.value)+(div2.value);
    let busca = document.querySelector('#busca');
    let resposta = document.querySelector('#resposta');
    busca.style.display = "none";
    resposta.style.display = "flex";
    fetch(`https://economia.awesomeapi.com.br/last/${div.value}-${div2.value}`,opcoes)
    .then(
        response => { response.json()
            .then(data =>{
                document.querySelector('#titulo').textContent = data[cd].name;
                document.querySelector('#sp1').textContent = data[cd].bid;
                document.querySelector('#sp2').textContent = data[cd].ask;
                document.querySelector('#sp3').textContent = data[cd].varBid;
                document.querySelector('#sp4').textContent = data[cd].high;
                document.querySelector('#sp5').textContent = data[cd].low;
            })
        }
    );
};

function busca(){
    let busca = document.querySelector('#busca');
    let resposta = document.querySelector('#resposta');
    busca.style.display = "flex";
    resposta.style.display = "none";
};