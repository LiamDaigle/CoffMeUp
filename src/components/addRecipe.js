import fetchRecipes from "./fetchRecipes"

const addRecipe = (obj) => {
    const recipes = fetchRecipes();
    
    recipes.push(obj)
    localStorage.setItem("recipes", JSON.stringify(recipes))
}

export default addRecipe;