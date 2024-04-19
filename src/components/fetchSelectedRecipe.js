
/**
 * The function `fetchSelectedRecipe` retrieves the selected recipe from the localStorage and returns
 * it as a parsed JSON object.
 * @returns An array of selected recipes is being returned.
 */
const fetchSelectedRecipe = () => {
    const result = localStorage.getItem("selectedRecipe")
    if(result != null)
        return JSON.parse(result)
    else
        return [];
}

export default fetchSelectedRecipe;