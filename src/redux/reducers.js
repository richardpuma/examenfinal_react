import { GET_ALL_POSTS, GET_POST, GET_ALL_PRODUCTS, GET_PRODUCT } from "./actions"

export const postReducer = (state = {}, action) => {
  if (action.type === GET_ALL_POSTS) {
    return {
      ...state,
      posts: action.posts
    }
  }

  if (action.type === GET_POST) {
    return {
      ...state,
      post: action.post
    }
  }
  return state
}

export const productReducer = (state = {}, action) => {
  if (action.type === GET_ALL_PRODUCTS) {
    return action.products    
  }
  return state
}
