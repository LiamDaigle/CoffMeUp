import fetchSelectedRecipe from "./fetchSelectedRecipe";

const updateSelectedRecipe = (newRecipe) => {
    // change tried to true in selectedRecipe collection in localstorage

    localStorage.setItem("selectedRecipe", JSON.stringify(newRecipe))
}

export default updateSelectedRecipe;