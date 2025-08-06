# cineScopeX

**cineScopeX** is a responsive movie search web app that uses the [OMDb API](http://www.omdbapi.com/) to fetch and display movie data based on user input. It offers an interactive interface where users can search movies, view posters, titles, release years, and even click a card to see detailed information like plot, genre, and runtime.

---

## Live Demo
*(Optional: Add GitHub Pages link here if deployed)*  
[View Live](https://maggyleet.github.io/cineScopeX)

---

## Overview

### OMDb API Endpoints Used

- **Search Endpoint**  
  `https://www.omdbapi.com/?s={SEARCH_TERM}&apikey={API_KEY}`  
  → Used to get a list of movies that match the search term entered by the user.

- **Detail Endpoint**  
  `https://www.omdbapi.com/?i={IMDB_ID}&apikey={API_KEY}`  
  → Used to fetch complete details of a specific movie when a movie card is clicked.

---

## Setup Instructions

1. **Clone the repository**  
   ```bash
   git clone https://github.com/yourusername/cineScopeX.git
   cd cineScopeX
   ```

2. **Insert Your OMDb API Key**

   * Visit [http://www.omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx) to request a free API key.
   * In `app.js`, replace the placeholder string:

     ```javascript
     const API_KEY = 'YOUR_OMDB_API_KEY'; // ⬅ Replace with your actual key
     ```

3. **Run the App Locally**

   * Open `index.html` in your browser directly (no server required).
   * Or use a local live server (like the one in VS Code) for best results.

---

## Usage

1. Enter a movie title in the input field.
2. Click the **Search** button.
3. The app fetches matching movies and displays them as responsive cards.
4. Click on any card to view:

   * Plot
   * Genre
   * Runtime
   * Poster (if available)

Responsive grid adapts beautifully to mobile, tablet, and desktop layouts.

---

## Testing

Tested on:

* Google Chrome (latest)
* Mozilla Firefox (latest)

Responsive layout works on:

* Desktop (3 columns)
* Tablet (2 columns)
* Mobile (1 column)

---

## Challenges & Solutions

### 1. **Handling "Poster": "N/A"**

**Problem:** Some movie results had `"Poster": "N/A"`, which broke image layout.
**Solution:** Replaced such cases with a local or online placeholder image.

### 2. **Error Handling**

**Problem:** No movies found or invalid API keys could cause confusion.
**Solution:** Added user-friendly error messages and loading states.

### 3. **UI Responsiveness**

**Problem:** Cards overlapped or misaligned on smaller screens.
**Solution:** Used **CSS Grid** with media queries to ensure clean layout across devices.

---

## Project Structure

```
cineScopeX/
├── index.html
├── styles.css
├── app.js
└── README.md
```

---

## Author

**M Mahalakshmi**
[LinkedIn](https://www.linkedin.com/in/mahalakshmi-m-238320250) | [GitHub](https://github.com/maggyleet)

---

Let me know if you'd like:
- A **light/dark toggle** feature.
- Modal instead of expandable card section.
- Hosted demo link + GitHub Pages deployment help.
