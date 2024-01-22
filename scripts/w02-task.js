/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Favourite Atuhu";
const currentYear = new Date().getFullYear();
const profilePicture = "images/favourite.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
let favoriteFoods = ["Jollof Rice", "Chocolate", "Chicken Salad", "Pasta", "Pizza", "Burgers", "Salmon"];
foodElement.innerHTML = favoriteFoods;
let newFavoriteFood = "Ice Cream";
favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods.join(', ')}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods.join(', ')}`;

// Remove the last element in the favorite food array.
favoriteFoods.pop();

// Append the array output with this final modified favorite foods array.
foodElement.innerHTML += `<br>${favoriteFoods.join(', ')}`;