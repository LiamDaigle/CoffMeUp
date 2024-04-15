
const constructProfile = (firstName, lastName, favoriteRecipes, triedRecipes) => {
    //favorite Recipes, and Tried Recipes should be a list
    return {
        firstName:firstName,
        lastName:lastName,
        favorites: favoriteRecipes,
        tried:triedRecipes
    }
}

export default constructProfile;