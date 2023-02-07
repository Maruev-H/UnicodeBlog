const initialState = {
  categories: [],
  isLoading: false,
};

export const fetchCatedories = () => {
  return async (dispatch) => {
    dispatch({ type: "UPLOAD_CATEGORIES_PENDING" });
    const res = await fetch(`https://unicode-blog.onrender.com/categories`);
    const data = await res.json();
    dispatch({ type: "UPLOAD_CATEGORIES_FULFILLED", payload: data });
  };
};

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPLOAD_CATEGORIES_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "UPLOAD_CATEGORIES_FULFILLED":
      return {
        ...state,
        categories: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
