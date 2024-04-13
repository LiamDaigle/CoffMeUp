const filterMethod = (recipe, query) => {
    const title = recipe.title.toLowerCase()
    const filterQuery = query.toLowerCase()
    console.log("Title: ", title, " Query: ", filterQuery)

    return title.includes(filterQuery)

}
const queryForTitle = (query, recipeList) => {
    const result = recipeList.filter((recipe) => filterMethod(recipe, query))
    console.log(result)
    return result
}

export default queryForTitle;