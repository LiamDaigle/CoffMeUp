
const constructRecipe = (recipeTitle, recipeDescription, recipeIngredients, recipeSteps, rating, tried) => {
    //Recipe Ingredients and Steps should be a list, tried should be boolean
    return {
        title:recipeTitle,
        description: recipeDescription,
        ingredients:recipeIngredients,
        steps:recipeSteps,
        rating:rating,
        tried:tried
    }
}

export default constructRecipe;