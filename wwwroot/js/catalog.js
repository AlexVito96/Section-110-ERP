
function retrieveCatalog(){
    // url: /catalog/getcatalog

    $.ajax({
        url: '/catalog/getcatalog',
        type: 'GET',
        success: res => {
            console.log("Server responded", res);
            // display cars on the HTML
            for(let i=0; i < res.length; i++){
                displayCar(res[i]);
            }
        },
        error: function(detail){
            console.error("Error on request", detail);
        }

    });
}

function displayCar(car){
    // get container
    var container = $("#catalog");
    // create template/sytax
    var sntx = 
    `<div class="item">
        <h4 class="four"> ${car.make} <br> ${car.model} <br> ${car.year} <br> $${car.price} </h4>
        <img class="size" src = '${car.image}'>
    </div>`;
    // add template to container
    container.append(sntx);
}

function init(){
    console.log("catalog page");
    // get data
    retrieveCatalog();
    // hook events
}

window.onload = init;