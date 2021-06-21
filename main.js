

// d1d8c182

function searchAPI(title) {
    url = 'http://www.omdbapi.com/?apikey=d1d8c182&'
    apiUrl = url + title
    console.log(apiUrl)
    fetch(apiUrl)
        .then((data) => console.log(data.json()))
}