window.onload = ()=>{
    let div = document.querySelector('#select');
    let div2 = document.querySelector('#select2');
    let bt = document.querySelector('#buscar');
    const opcoes = {
        method:'GET',
        mode:'cors',
        cache:'default'
    }
    fetch('https://economia.awesomeapi.com.br/json/all',opcoes)
    .then(
        response => { response.json()
                .then(data =>{
                    for(let i=0; i<data.length; i++){
                        div.innerHTML += "<option>";
                    };
                })
        }
    );
};