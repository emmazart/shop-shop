import { useReducer } from 'react';
import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from "./actions";

export const reducer = (state, action) => {
    switch(action.type) {
        case UPDATE_PRODUCTS:
            return {
                ...state,
                products: [...action.products]
            };
        case UPDATE_CATEGORIES:
            return {
                ...state,
                categories: [...action.categories]
            };
        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory
            };
        
        // if none of these actions, do not update state at all
        default:
            return state;
    }
};

// useReducer hook is meant specifically for managing greater level of state
export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
};