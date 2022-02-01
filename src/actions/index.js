import jsonPlaceholder from '../apis/jsonPlaceholder';

// use Redux Thunk middleware to return a function with a dispatch argument
export const fetchPosts = () => async dispatch => {    
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: "FETCH_POSTS", payload: response });
};
