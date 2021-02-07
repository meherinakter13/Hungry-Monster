document.getElementById("search-button").addEventListener("click", ()=>{
    const inputMeal=document.getElementById("meal").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputMeal}`)
    .then(res => res.json())
    .then(data => displayMeal(data));  
});
// for displaying meal List
const displayMeal = data =>{
    const mealsDiv = document.getElementById("mealsContainer");
    let mealNameValue ="";
    if(data.meals){
        data.meals.forEach(meal =>{
            mealNameValue =mealNameValue +`<div onclick ="ingredientDetails('${meal.idMeal}')" id="meals">
            <img src = "${meal.strMealThumb}">
            <h3>${meal.strMeal}</h3></div>`;    
        });   
        }
        else{
            mealNameValue ="You have given a wrong input";
        }
        mealsDiv.innerHTML =mealNameValue;
    }

function ingredientDetails(mealName){
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealName}`)
        .then(res => res.json())
        .then(data => {
            displayIngredient(data.meals[0]);
        })
    }
const displayIngredient = meal=>{
    console.log(meal);
    const ingredientContainer= document.getElementById("ingredientContainer");
    ingredientContainer.innerHTML =`
    <img id="image" src="${meal.strMealThumb}">
    <h1> ${meal.strMeal}</h1>
    <h3>ingredients</h3>
    <li>${meal.strMeasure1}${meal.strIngredient1}</li>
    <li>${meal.strMeasure2}${meal.strIngredient2}</li>
    <li>${meal.strMeasure3}${meal.strIngredient3}</li>
    <li>${meal.strMeasure4}${meal.strIngredient4}</li>
    <li>${meal.strMeasure5}${meal.strIngredient5}</li>
    <li>${meal.strMeasure7}${meal.strIngredient6}</li>
    <li>${meal.strMeasure6}${meal.strIngredient7}</li>
    <li>${meal.strMeasure7}${meal.strIngredient8}</li>
    `;
    
}


    