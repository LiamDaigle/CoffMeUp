import fetchRecipes from "./fetchRecipes"

/**
 * The `addRecipe` function adds a recipe object to local storage if it does not already exist in the
 * list of recipes.
 * @param obj - An instance of the object created using the constructRecipe method.
 * @returns If a duplicate recipe title is being added, nothing is being added and the function returns
 * without making any changes.
 */
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