const fetchRecipes = () => {
    const result = localStorage.getItem("recipes")
    if(result != null)
        return JSON.parse(result)
    else
        return [];
}

export default fetchRecipes;