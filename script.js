var absEl = document.querySelector('#Abs-Content');
var armsEl = document.querySelector('#Arms-Content');
var backEl = document.querySelector('#Back-Content');
var calvesEl = document.querySelector('#Calves-Content');
var chestEl = document.querySelector('#Chest-Content');
var legsEl = document.querySelector('#Legs-Content');
var shouldersEl = document.querySelector('#Shoulders-Content');

urlTest = "https://wger.de/api/v2/exerciseinfo/?language=2&limit=231";

fetch(urlTest, {
    headers: {
        'Authorization': 'Token 954c1b128bf5599c33df6960a53dc2a5d3a7b6b4'
    }
})
.then(function (response){
    console.log(response);
    return response.json();
})
.then(function (data){
    console.log(data);
    
    for (var i=0;i<data.results.length;i++) {
        //Display Abs
        if (data.results[i].category.id == 10) {
            absEl.innerHTML = absEl.innerHTML+`
            <div class="card bg-light text-dark mb-3 p-3">
              <div class="card-body">
                <h3>${ data.results[i].name} </h3>
              </div>
            </div>
          `}
        //Display Arms
        else if (data.results[i].category.id == 8) {
            armsEl.innerHTML = armsEl.innerHTML+`
            <div class="card bg-light text-dark mb-3 p-3">
              <div class="card-body">
                <h3>${ data.results[i].name} </h3>
              </div>
            </div>
          `}
        //Display Back
        else if (data.results[i].category.id == 12) {
            backEl.innerHTML = backEl.innerHTML+`
            <div class="card bg-light text-dark mb-3 p-3">
              <div class="card-body">
                <h3>${ data.results[i].name} </h3>
              </div>
            </div>
          `}
        //Display Calves
        else if (data.results[i].category.id == 14) {
            calvesEl.innerHTML = calvesEl.innerHTML+`
            <div class="card bg-light text-dark mb-3 p-3">
              <div class="card-body">
                <h3>${ data.results[i].name} </h3>
              </div>
            </div>
          `}
        //Display Chest
        else if (data.results[i].category.id == 11) {
            chestEl.innerHTML = chestEl.innerHTML+`
            <div class="card bg-light text-dark mb-3 p-3">
              <div class="card-body">
                <h3>${ data.results[i].name} </h3>
              </div>
            </div>
          `}
        //Display Legs
        else if (data.results[i].category.id == 9) {
            legsEl.innerHTML = legsEl.innerHTML+`
            <div class="card bg-light text-dark mb-3 p-3">
              <div class="card-body">
                <h3>${ data.results[i].name} </h3>
              </div>
            </div>
          `}
        //Display Shoulders
        else if (data.results[i].category.id == 13) {
            shouldersEl.innerHTML = shouldersEl.innerHTML+`
            <div class="card bg-light text-dark mb-3 p-3">
              <div class="card-body">
                <h3>${ data.results[i].name} </h3>
              </div>
            </div>
          `}
    }

});
