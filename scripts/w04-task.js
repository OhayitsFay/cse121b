/* LESSON 3 - Programming Tasks */
let photoElement = document.querySelector("#photo");
/* Profile Object  */
let myProfile = {
  name: "Atuhu Favourite",
  photo: {
    src: "images/favourite.jpg",
    alt: "Profile Picture"
  },
  favoriteFoods: ["Jollof Rice", "Chocolate", "Chicken Salad", "Pasta", "Pizza", "Burgers", "Salmon"],
  hobbies: ['Reading', 'Coding', "Tennis", 'Cooking'],
  placesLived: []
};
    
myProfile.placesLived.push(
  {

    place: 'Kumasi, Ghana',
    length: '1 year'
  }
);

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
  {
    place: 'Umuahia, Nigeria',
    length: '2 years'
  },
  {
    place: 'Lagos, Nigeria',
    length: '20 years'
  }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
photoElement.src = myProfile.photo.src;
photoElement.alt = myProfile.photo.alt;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
document.querySelector("#favorite-foods").appendChild(li);
});
/* Hobbies List */
let hobbiesList = document.querySelector('#hobbies');
myProfile.hobbies.forEach(hobby => {
  let li = document.createElement('li');
  li.textContent = hobby;
  hobbiesList.appendChild(li);
});

/* Places Lived DataList */
let placesLivedList = document.querySelector('#places-lived');
myProfile.placesLived.forEach(place => {
  let dt = document.createElement('dt');
  let dd = document.createElement('dd');
  dt.textContent = place.place;
  dd.textContent = place.length;
  placesLivedList.appendChild(dt);
  placesLivedList.appendChild(dd);
});

