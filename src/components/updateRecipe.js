import fetchRecipes from "./fetchRecipes"

const updateRecipe = (title, newRecipe) => {

    const recipes = fetchRecipes();

    for(let i=0; i<recipes.length; i++){
        if(recipes[i].title === title){
            recipes[i] = newRecipe;
        }
    }

    localStorage.setItem("recipes", JSON.stringify(recipes))
}

export default updateRecipe;