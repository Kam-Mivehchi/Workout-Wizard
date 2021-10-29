var formEl = $('#search-form')
var displayWorkOutsEl = document.querySelector('#display')
var displayExerciseEl = document.querySelector('#display2')

//Muscle Variables
var deltEl = $('#delts')
var bicepArmsEl = $('#bicepArms')
var bicepLegsEl = $('#bicepLegs')
var elbowEl = $('#elbow')
var calvesEl = $('#calves')
var buttEl = $('#butt')
var latsEl = $('#lats')
var obliqueEl = $('#oblique')
var pecsEl = $('#pecs')
var quadsEl = $('#quads')
var pecs2El = $('#pecs2')
var calvesEl = $('#calves2')
var trapsEl = $('#traps')
var trisEl = $('#tris')

///Searches for Muscle Involving Exercise
  function getMuscle(){
    event.preventDefault();
    var muscle = $(this).attr('data-id');
    console.log(muscle);
    urlMuscle = "https://wger.de/api/v2/exercise/?muscles="+muscle+"&language=2";
    
    fetch(urlMuscle, {
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
      displayWorkOutsEl.innerHTML = "";
        for (var i = 0; i < data.results.length; i++) {
          console.log(data.results[i].name)
          displayWorkOutsEl.innerHTML = displayWorkOutsEl.innerHTML+`<button data-exercise="${data.results[i].id}" class="btn btn-exercise btn-primary">${ data.results[i].name }</button>
        `}

        //Looks for Exercise
        $(document).ready(function() {
          $('.btn-exercise').on('click', getExercise)
        })

    });      
  }

function getExercise(){
  event.preventDefault();
  var exercise = $(this).attr('data-exercise');
  urlMuscle = "https://wger.de/api/v2/exerciseinfo/"+exercise+"/?language=2";
  
  fetch(urlMuscle, {
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
    displayExerciseEl.innerHTML = "";
        console.log(data.name)
        displayExerciseEl.innerHTML = displayExerciseEl.innerHTML+`
        <div class="card bg-light text-dark mb-3 p-3">
        <div class="card-body">
          <h3>${ data.name } </h3>
            <p><strong>Instructions</strong> ${data.description} <br>
        </div>
      </div>
    `
  })
};      

//Looks for Muscle Click
$('.btn-muscle').on('click', getMuscle)

//TEST
urlTest = "https://wger.de/api/v2/exerciseimage/307/?language=2";

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
})