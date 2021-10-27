urlTest = "https://wger.de/api/v2/muscle/"

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