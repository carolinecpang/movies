function searchAPI(title) {
    apiUrl = `http://www.omdbapi.com/?apikey=d1d8c182&s=${title}&type=movie`
    console.log(apiUrl)
    fetch(apiUrl)
        .then((data) => data.json())
        .then((movies) => formatHtml(movies))
    
        const formatHtml = (data) => {
            console.log(data)
            console.log(data.Search[0])
            // console.log(data.Title)
            newHtml = ''
            for (let i = 0; i < data.Search.length; i++){
                newHtml += `
                <div class="movieResult">
                    <div class="movieTitle">${data.Search[i].Title}</div>
                    <div class="movieDirector">${data.Search[i].Year}</div>
                </div>
            `
            }
            const resultsDiv = document.querySelector(".results")
            resultsDiv.innerHTML = newHtml
        }

    // url = 'http://www.omdbapi.com/?apikey=d1d8c182&type=movie&s='
    // apiUrl = url + title
    // console.log(apiUrl)
    // fetch(apiUrl)
    //     .then((data) => data.json())
    //     .then((movies) => formatHtml2(movies))
    
    //     const formatHtml2 = (data) => {
    //         console.log(data)
    //         console.log(data.Title)
    //         const newHtml = `
    //             <div class="movieResult">
    //                 <div class="movieTitle">${data.Title}</div>
    //                 <div class="movieDirector">${data.Director}</div>
    //             </div>
    //         `
    //         const resultsDiv = document.querySelector(".results")
    //         resultsDiv.innerHTML = newHtml
    //     }
}
