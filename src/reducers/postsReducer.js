const initialState = {
  posts: [],
  isLoading: false,
};

export const fetchPosts = () =>{
    return async (dispatch) =>{
        dispatch({type: "UPLOAD_POSTS_PENDING"})
        const res = await fetch(`https://unicode-blog.onrender.com/posts`)
        const data = await res.json();
        dispatch({type: "UPLOAD_POSTS_FULFILLED", payload: data})
    }
}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPLOAD_POSTS_PENDING":
    return{
        ...state,
        isLoading: true,
    }
    case "UPLOAD_POSTS_FULFILLED":
    return{
        ...state,
        posts:  action.payload,
        isLoading: false,
    }
    default:
      return state
  }
};
