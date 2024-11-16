
import ingredients from "@/mocks/ingredients.json";

const stateIngredients = ingredients.map((ingredient) => ({
    ...ingredient, quantity: 0,
}));
export default stateIngredients;
