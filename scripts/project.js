const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const recipeList = document.getElementById('recipeList');

searchForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    const query = searchInput.value.trim();
    if(query !== '') {
        const recipes = await searchRecipes(query);
        displayRecipes(recipes);
    } else {
        recipeList.innerHTML = '<p>Please enter a search query.</p>';
    }
});

async function searchRecipes(query) {
    const apiKey = '40bab9b2c70b457f972a947204c9a67a'; // Replace with your Spoonacular API key
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}&number=10`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.results;
    } catch(error) {
        console.error('Error fetching recipes:', error);
        return [];
    }
}

function displayRecipes(recipes) {
    recipeList.innerHTML = '';
    if (recipes.length === 0) {
        recipeList.innerHTML = '<p>No recipes found. Please try another search.</p>';
        return;
    }
    recipes.forEach(recipe => {
        const recipeItem = document.createElement('div');
        recipeItem.classList.add('recipe-item');
        recipeItem.innerHTML = `
            <h2>${recipe.title}</h2>
            <p>Ready in: ${recipe.readyInMinutes} minutes</p>
            <p>Servings: ${recipe.servings}</p>
            <img src="${recipe.image}" alt="${recipe.title}">
            <a href="${recipe.sourceUrl}" target="_blank">View Recipe</a>
        `;
        recipeList.appendChild(recipeItem);
    });
}