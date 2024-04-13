
const constructRecipe = (recipeTitle, recipeDescription, recipeIngredients, recipeSteps, rating) => {
    //Recipe Ingredients and Steps should be a list
    return {
        title:recipeTitle,
        description: recipeDescription,
        ingredients:recipeIngredients,
        steps:recipeSteps,
        rating:rating
    }
}

export default constructRecipe;