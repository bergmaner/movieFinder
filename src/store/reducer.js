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
          movies: [],
          actualPage: 1,
         loading: true,
        };
      case "SEARCH_MOVIES":
        return {
          ...state,
          loading: false,
          movies: action.payload.results,
          totalPages: action.payload.total_pages,
          type: "SEARCH",
        };
      case "DISPLAY_POPULAR_MOVIES":
        return {
          ...state,
          loading: false,
          slides: action.payload.results.filter((movie,i) =>{
            if(i < 5 ) return movie;
          }),
          discoverList: {...state.discoverList,popularMovies:[...action.payload.results]},
          totalPages: action.payload.total_pages,
        };
        case "DISPLAY_NOW_PLAYING":
          return {
            ...state,
            loading: false,
            discoverList: {...state.discoverList,nowPlayingMovies:[...action.payload.results]},
          };
          case "DISPLAY_TOP_RATED":
          return {
            ...state,
            loading: false,
            discoverList:{...state.discoverList,topRatedMovies:[...action.payload.results]},
          };
          case "FILTER_BY_GENRES":
            return {
              ...state,
              movies: action.payload.results,
              loading:false,
            };
          case "DISPLAY_GENRES":
          return {
            ...state,
            genres: action.payload.genres,
          };
          case "DISPLAY_GENRE":
            return {
              ...state,
              genre: action.payload,
              movies: [],
              type: "FILTER",
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