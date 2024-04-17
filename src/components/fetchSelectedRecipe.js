
const fetchSelectedRecipe = () => {
    const result = localStorage.getItem("selectedRecipe")
    if(result != null)
        return JSON.parse(result)
    else
        return [];
}

export default fetchSelectedRecipe;