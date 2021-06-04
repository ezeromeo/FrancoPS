function getDataOfToysFromArticles(articles){
    let toys = []
    articles.forEach(art => {
        if(art.tipo == "Juguete"){
            toys.push(art)
        }
    })
    return toys
    
}



function putDataOfToysInCards(data){
    
    let card_html = `<div class="row row-cols-1 row-cols-md-2 g-4">`
    data.forEach(art =>{

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



// Toys
let toys_data = getDataOfToysFromArticles(articles.response)
let toysInCard = putDataOfToysInCards(toys_data)
// Toys in HTML
document.getElementById('toy-art').innerHTML = toysInCard



