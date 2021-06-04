function getDataOfMedsFromArticles(articles){
    let meds = []
    articles.forEach(art =>{
        if(art.tipo == 'Medicamento'){
            meds.push(art)
        }
    })
    return meds
}

function putDataOfMedsInCards(data){
    
    let card_html = `<div class="row row-cols-1 row-cols-md-2 g-4">`

    data.forEach(art => {
        if(art.stock < 5){
        

        card_html +=

            `
            
                <div class="col">
                    <div class="card">
                        <img src="${art.imagen}" class="card-img-top" title="${art.descripcion}">
                    <div class="card-body">
                        <h5 class="card-title">${art.nombre}</h5>
                        <p>Precio: $<strong>${art.precio}</strong></p>
                        <small>Stock: ${art.stock}</small>
                        <button type="button" disabled>${'Ultimas unidades!'}</button>
                    </div>
                    <div id="add-to-cart">
                        <button type="button">Añadir al carrito</button>
                    </div>
                </div>
            </div>
            
            `
        }else{

        card_html +=

        `
        
            <div class="col">
                <div class="card">
                    <img src="${art.imagen}" class="card-img-top" title="${art.descripcion}">
                <div class="card-body">
                    <h5 class="card-title">${art.nombre}</h5>
                    <p>Precio: $<strong>${art.precio}</strong></p>
                    <small>Stock: ${art.stock}</small>
                </div>
                <div id="add-to-cart">
                    <button type="button">Añadir al carrito</button>
                </div>

            </div>
        </div>
        
        `
        }
    })
    return card_html
}



// Meds
let meds_data = getDataOfMedsFromArticles(articles.response)
let medsInCard = putDataOfMedsInCards(meds_data)
// Meds in HTML
document.getElementById('pharm-art').innerHTML = medsInCard


// function orderPrice(articles){

//     document.querySelectorAll('.dropdown-menu').forEach(art =>{
//         art.addEventListener('click',(e)=>{
//             if(e.target.innerHTML == 'Menor precio'){

//             }else if(e.target.innerHTML == 'Mayor precio'){

//             }else{

//             }
//         })
//     })
    
    



// }



