/**
 * The function `fetchRecipes` retrieves recipes from local storage, returning an empty array if no
 * recipes are found.
 * @returns An array of recipes is being returned. If there are no recipes stored in the localStorage,
 * an empty array will be returned.
 */
const fetchRecipes = () => {
    const result = localStorage.getItem("recipes")
    if(result != null)
        return JSON.parse(result)
    else
        return [];
}

export default fetchRecipes;