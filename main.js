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
                    
                    <button id="movieButton">Learn More</button>
                    <div id="movieModal" class="modal">
                        <div class="movieContent">
                            <span class="close">&times;</span>
                            <span class="director">${data.Search[i].Director}</span>
                        </div>
                    </div>
                </div>
                <script type="text/javascript">
                    // Get the modal
                    var modal = document.getElementById("movieModal");

                    // Get the button that opens the modal
                    var btn = document.getElementById("movieButton");

                    // Get the <span> element that closes the modal
                    var span = document.getElementsByClassName("close")[0];

                    // When the user clicks on the button, open the modal
                    btn.onclick = function() {
                    modal.style.display = "block";
                    }

                    // When the user clicks on <span> (x), close the modal
                    span.onclick = function() {
                    modal.style.display = "none";
                    }

                    // When the user clicks anywhere outside of the modal, close it
                    window.onclick = function(event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    }
                </script>
            `
            }
            const resultsDiv = document.querySelector(".results")
            resultsDiv.innerHTML = newHtml
        }
}

