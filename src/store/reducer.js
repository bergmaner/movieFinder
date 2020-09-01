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
          slides: action.payload.results.filter((movie,i) =>{
            if(i < 5 ) return movie;
          }),
          movies: action.payload.results,
          totalPages: action.payload.total_pages,
        };
        case "DISPLAY_RESULTS" : 
        return{
          ...state,
          results: action.payload.results?.filter((movie, i) => {
            if (i < 10) return movie;
          }),
        }
        case "SET_ACTUAL_BACKGROUND" : 
        return{
          ...state,
          actualBackground: action.payload
        }
      default:
        return state;
    }
  };