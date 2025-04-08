console.log("JS");

let countyarrylist = [];

function loadcountries(){
    let countrylist = document.getElementById("countrylist");
    let body="";
    fetch("https://restcountries.com/v3.1/all")
    .then(res=>res.json())
    .then(data=>{
      countyarrylist=data;
        data.forEach((element,index) => {
            body+=`
          <div class="col"">
                <div class="card shadow-sm">
                  <img src="${element.flags.png}" height="200" class="card-img-top">
                  <div class="card-body">
                  <h5 class="card-title">${element.name.common}</h5>
                  <p class="card-text">${element.capital}</p>
                  <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="loadmd(${index})">View More</a>
                    </div>
                  </div>
                </div>
              </div>`

              
        });
        countrylist.innerHTML=body; 
    })
    
}

function loadmd(index) {
  let mdbody = document.getElementById("mdbody");
  //let name = countyarrylist[index].currencies.SHP.name; 
//const symbol = countyarrylist[index].currencies.SHP.symbol;
  mdbody.innerHTML = `<div class="col"">
                <div class="card shadow-sm">
                  <img src="${countyarrylist[index].flags.png}" height="" width="50" class="card-img-top">
                  <div class="card-body">
                  <h5 class="card-title">${countyarrylist[index].name.common}</h5>
                  <p class="card-text">Capital - ${countyarrylist[index].capital}<br>
                  Region - ${countyarrylist[index].region}<br>
                  Language - ${countyarrylist[index].languages.eng}<br>
                   
                  </p>
                    </div>
                  </div>
                </div>
              </div>`
    
}

function searchh(){
    let search = document.getElementById("search").value;
    let body="";
    fetch(`https://restcountries.com/v3.1/name/${search}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);

        data.forEach(element => {
            body+=`
          <div class="col" ">
                <div class="card shadow-sm">
                  <img src="${element.flags.png}" height="200" class="card-img-top">
                  <div class="card-body">
                  <h5 class="card-title">${element.name.common}</h5>
                  <p class="card-text">${element.capital}</p>
                  <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="loadmd()">View More</a>
                    </div>
                  </div>
                </div>
              </div>`

              
        });
        countrylist.innerHTML=body;
    })
}

document.addEventListener("DOMContentLoaded", function () {
    loadcountries();
});