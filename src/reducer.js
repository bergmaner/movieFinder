export const reducer = (state, action) => {
    switch (action.type) {
      case "MOVIES_REQUEST":
        return {
          ...state,
          loading: true,
          searchQuery: action.payload,
        };
      case "SEARCH_MOVIES":
        return {
          ...state,
          loading: false,
          movies: action.payload.results,
          totalPages: action.payload.total_pages,
        };
      case "DISPLAY_POPULAR_MOVIES":
        return {
          ...state,
          loading: false,
          movies: action.payload.results,
          actualPage: action.payload.page,
          totalPages: action.payload.total_pages,
          backgroundImage: action.payload.results[2],
        };
      default:
        return state;
    }
  };