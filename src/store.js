import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

const initialState = {
  name: "",
  category: "",
  authorFirst: "",
  authorLast: "",
  ingredients: [],
  instructions: [],
  recipes: []
};

export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const UPDATE_AUTHORFIRST = "UPDATE_AUTHORFIRST";
export const UPDATE_AUTHORLAST = "UPDATE_AUTHORLAST";
export const UPDATE_INGREDIENTS = "UPDATE_INGREDIENTS";
export const UPDATE_INSTRUCTIONS = "UPDATE_INSTRUCTIONS";
export const ADD_RECIPE = "ADD_RECIPE";
export const RESTART_RECIPE = "RESTART_RECIPE";
export const DELETE_RECIPE = 'DELETE_RECIPE'

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_NAME:
      return { ...state, name: payload };
    case UPDATE_CATEGORY:
      return { ...state, category: payload };
    case UPDATE_AUTHORFIRST:
      return { ...state, authorFirst: payload };
    case UPDATE_AUTHORLAST:
      return { ...state, authorLast: payload };
    case UPDATE_INGREDIENTS:
      const newIngredients = [...state.ingredients, payload];
      return { ...state, ingredients: newIngredients };
    case UPDATE_INSTRUCTIONS:
      const newInstructions = [...state.instructions, payload];
      return { ...state, instructions: newInstructions };
    case ADD_RECIPE:
      const {
        name,
        category,
        authorFirst,
        authorLast,
        ingredients,
        instructions
      } = state;
      const recipe = {
        name,
        category,
        authorFirst,
        authorLast,
        ingredients,
        instructions
      };
      const newRecipes = [...state.recipes, recipe];
      return { ...state, recipes: newRecipes };
    case RESTART_RECIPE:
      return {...state,
        name: "",
        category: "",
        authorFirst: "",
        authorLast: "",
        ingredients: [],
		instructions: []
	  };
	  case DELETE_RECIPE:
	  console.log('hit case in store.js', payload)
	  const filteredRecipes = state.recipes.filter((recipe, index) => {
		  console.log('index of filter',index)
		  return index*1 !== payload*1})
	  return { ...state, recipes: filteredRecipes}
    default:
      return state;
  }
}

export default createStore(reducer, devToolsEnhancer());
