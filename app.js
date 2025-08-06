const apiKey = "842bb9f1";

const searchBtn = document.getElementById("searchBtn");
const queryInput = document.getElementById("query");
const errorMsg = document.getElementById("errorMsg");
const moviesContainer = document.getElementById("movies");

// Modal elements
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const modalPoster = document.getElementById("modalPoster");
const modalTitle = document.getElementById("modalTitle");
const modalYear = document.getElementById("modalYear");
const modalGenre = document.getElementById("modalGenre");
const modalRuntime = document.getElementById("modalRuntime");
const modalPlot = document.getElementById("modalPlot");

// Search click
searchBtn.addEventListener("click", handleSearch);
queryInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleSearch();
});

// Modal close
closeModal.addEventListener("click", () => modal.classList.add("hidden"));
window.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden");
});

function handleSearch() {
    const query = queryInput.value.trim();
    if (!query) {
        errorMsg.textContent = "Please enter a movie title.";
        moviesContainer.innerHTML = "";
        return;
    }

    errorMsg.textContent = "";
    fetchMovies(query);
}

async function fetchMovies(title) {
    moviesContainer.innerHTML = "<p>Loading...</p>";
    try {
        const response = await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(title)}&apikey=${apiKey}`);
        const data = await response.json();

        if (data.Response === "True") {
            renderMovies(data.Search);
        } else {
            moviesContainer.innerHTML = `<p>${data.Error}</p>`;
        }
    } catch (error) {
        moviesContainer.innerHTML = "<p>Something went wrong. Please try again.</p>";
        console.error("Fetch error:", error);
    }
}

function renderMovies(movies) {
    moviesContainer.innerHTML = "";
    movies.forEach((movie) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const poster = movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/220x320?text=No+Image";

        card.innerHTML = `
      <img src="${poster}" alt="${movie.Title} Poster" />
      <div class="card-info">
        <h3>${movie.Title}</h3>
        <p>${movie.Year}</p>
      </div>
    `;

        card.addEventListener("click", () => fetchMovieDetails(movie.imdbID));
        moviesContainer.appendChild(card);
    });
}

async function fetchMovieDetails(imdbID) {
    try {
        const res = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`);
        const data = await res.json();

        if (data.Response === "True") {
            showModal(data);
        } else {
            alert("Could not load movie details.");
        }
    } catch (err) {
        console.error("Error fetching details:", err);
    }
}

function showModal(movie) {
    modalPoster.src = movie.Poster !== "N/A"
        ? movie.Poster
        : "https://via.placeholder.com/220x320?text=No+Image";

    modalPoster.alt = `${movie.Title} Poster`;
    modalTitle.textContent = movie.Title;
    modalYear.textContent = movie.Year;
    modalGenre.textContent = movie.Genre;
    modalRuntime.textContent = movie.Runtime;
    modalPlot.textContent = movie.Plot;

    modal.classList.remove("hidden");
}
