import fetchRecipes from "./fetchRecipes"

const addRecipe = (obj) => {
    //The obj parameter should be an instance of the object created using the constructRecipe method
    const recipes = fetchRecipes();

    const duplicates = recipes.filter((recipe) => recipe.title === obj.title)

    if(duplicates.length > 0)   //If trying to load a duplicate recipe title, don't add
        return
    
    recipes.push(obj)
    localStorage.setItem("recipes", JSON.stringify(recipes))
}

export default addRecipe;