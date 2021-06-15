import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";

const reducer = (currentState, action) => {
  if (action.type === SET_LOADING) {
    return {
      ...currentState,
      loading: action.payload,
    };
  }
  if (action.type === SET_STORIES) {
    return {
      ...currentState,
      news: action.payload,
    };
  }
  if (action.type === REMOVE_STORY) {
    const tempNews = currentState.news.filter(
      (newsItem) => newsItem !== action.payload
    );
    return {
      ...currentState,
      news: tempNews,
    };
  }
  if (action.type === HANDLE_PAGE) {
    if (action.payload.t === "next") {
      if (currentState.page >= 49) {
        return {
          ...currentState,
          page: 0,
        };
      } else {
        return {
          ...currentState,
          page: action.payload.p + 1,
        };
      }
    }
    if (action.payload.t === "prev") {
      if (currentState.page > 0) {
        return {
          ...currentState,
          page: action.payload.p - 1,
        };
      } else {
        return {
          ...currentState,
          page: 49,
        };
      }
    }
  }
  if (action.type === HANDLE_SEARCH) {
    return {
      ...currentState,
      inputValue: action.payload,
      page: 0,
    };
  }

  throw new Error(`No ${action.type} action type found!`);
};
export default reducer;
