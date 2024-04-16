const RecipeCard = ({ 
    title, 
    description, 
    ingredients = [], // Default to an empty array if undefined
    steps = [], // Default to an empty array if undefined
    rating,
    image 
}) => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-4xl text-coffee-dark satisfy-regular">{title}</h1>
            <img src={image} alt={title} className="w-96 h-96 rounded-lg mt-5"/>
            <div className="w-96 bg-coffee-cream rounded-lg p-5 mt-5">
                <h2 className="text-2xl text-coffee-dark satisfy-regular">Description</h2>
                <p className="text-coffee-dark sedan-regular">{description}</p>
            </div>
            <div className="w-96 bg-coffee-cream rounded-lg p-5 mt-5">
                <h2 className="text-2xl text-coffee-dark satisfy-regular">Ingredients</h2>
                <ul className="list-disc text-coffee-dark sedan-regular">
                    {ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
                </ul>
            </div>
            <div className="w-96 bg-coffee-cream rounded-lg p-5 mt-5">
                <h2 className="text-2xl text-coffee-dark satisfy-regular">Steps</h2>
                <ol className="list-decimal text-coffee-dark sedan-regular">
                    {steps.map((step, index) => <li key={index}>{step}</li>)}
                </ol>
            </div>
        </div>
    );
}
export default RecipeCard;