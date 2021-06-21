function searchAPI(title) {
    apiUrl = `https://www.omdbapi.com/?apikey=d1d8c182&s=${title}&type=movie`
    console.log(apiUrl)
    fetch(apiUrl)
        .then((data) => data.json())
        .then((movies) => formatHtml(movies))
    
        const formatHtml = (data) => {
            console.log(data)
            console.log(data.Search[0])
            // console.log(data.Title)
            newHtml = `<div class="numResults">Displaying 10 of ${data.Search.length} results</div>`
            for (let i = 0; i < data.Search.length; i++){
                newHtml += `
                <div class="movieResult">
                    <div class="movieTitle">${data.Search[i].Title}</div>
                    <div class="movieDirector">${data.Search[i].Year}</div>

                    <button id="movieButton" onclick="openModal()">Learn More</button>
                    <div id="movieModal" class="modal">
                        <div class="modal-content">
                            <span class="close" onclick="closeModal()">&times;</span>
                            <div class="details-title">${data.Search[i].Title}</div>
                            <div class="details-year">Released: ${data.Search[i].Year}</div>
                            <div class="details-director">Directior: ${data.Search[i].Director}</div>
                        </div>
                    </div>
                </div>
            `
            }
            const resultsDiv = document.querySelector(".results")
            resultsDiv.innerHTML = newHtml
        }
}

function openModal() {
    document.getElementById("movieModal").style.display = "block";
}

function closeModal() {
    document.getElementById("movieModal").style.display = "none";
}