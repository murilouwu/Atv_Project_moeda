window.onload = ()=>{
    let div = document.querySelector('#select');
    let div2 = document.querySelector('#select2');
    let bt = document.querySelector('#buscar');
    const opcoes = {
        method:'GET',
        mode:'cors',
        cache:'default'
    }
    fetch('https://economia.awesomeapi.com.br/json/available/uniq',opcoes)
    .then(
        response => { response.json()
                .then(data =>{
                    /*for(let i; i<data.length; i++){
                        div.innerHTML += "<option value='"+data[i]+"'>"+data[i]+"</option>";
                        div2.innerHTML += "<option value='"+data[i]+"'>"+data[i]+"</option>";
                        
                        console.log("a");
                    };*/
                })
        }
    );
};