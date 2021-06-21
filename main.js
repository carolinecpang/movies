// Toggles modal to visible
function openModal(object) {
    document.getElementById(object.id).style.display = "block";
}

// Toggles modal to hidden
function closeModal(object) {
    document.getElementById(object.id).style.display = "none";
}

function searchAPI(title, currpage) {
    apiUrl = `https://www.omdbapi.com/?apikey=d1d8c182&s=${title}&page=${currpage}&type=movie`
    console.log(apiUrl)
    fetch(apiUrl)
        .then((data) => data.json())
        .then((movies) => formatHtml(movies))
    
        const formatHtml = (data) => {
            if (data.Response == "False"){ 
                newHtml = `
                <div class="error">Error: ${data.Error}</div>
                `
            } else { // successful
                console.log(data)
                console.log(data.Search[0])

                totalResults = data.totalResults
                maxPages = Math.floor(totalResults/10)
                newHtml = `
                <div class="numResults">Displaying ${data.Search.length+((currpage-1)*10)} of ${totalResults} results</div>
                `
                // Pagination
                if (currpage > 1){
                    newHtml += `<button type="previousPage" onclick="searchAPI(searchTxt.value, ${currpage-1})">Previous Page</button>`
                }
                if (currpage < maxPages){
                    newHtml += `<button type="nextPage" onclick="searchAPI(searchTxt.value, ${currpage+1})">Next Page</button>`
                }
                // Displaying Each Movie and initializing Modal
                for (let i = 0; i < data.Search.length; i++){
                    modalID = `movieModal${i}`
                    buttonID = `movieButton${i}`
                    newHtml += `
                    <div class="movieResult">
                        <div class="movieTitle">${data.Search[i].Title}</div>
                        <div class="movieDirector">${data.Search[i].Year}</div>

                        <button id="${buttonID}" onclick="openModal(${modalID})">Learn More</button>
                        <div id="${modalID}" class="modal">
                            <div class="modal-content">
                                <span class="close" onclick="closeModal(${modalID})">&times;</span>
                                <div class="details-title">${data.Search[i].Title}</div>
                                <div class="details-year">Released: ${data.Search[i].Year}</div>
                                <div class="details-director">Director: ${data.Search[i].Director}</div>
                                <div class="details-director">IMDB ID: ${data.Search[i].imdbID}</div>
                            </div>
                        </div>
                    </div>
                `
                }
            }
            const resultsDiv = document.querySelector(".results")
            resultsDiv.innerHTML = newHtml
        }
}