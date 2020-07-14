export const reducer = (state, action) => {
    switch (action.type) {
      case "SET_PAGE":
        return {
          ...state,
          actualPage: action.payload,
        };
      case "MOVIES_REQUEST":
        return {
          ...state,
          searchQuery: action.payload,

        };
        case "SEARCH_REQUEST":
        return {
          ...state,
          actualPage: 1,
          loading: true,
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
          totalPages: action.payload.total_pages,
          backgroundImage: action.payload.results[2],
        };
        case "DISPLAY_RESULTS" : 
        return{
          ...state,
          results: action.payload.results?.filter((movie, i) => {
            if (i < 10 && movie.poster_path) return movie;
          }),
        }
      default:
        return state;
    }
  };