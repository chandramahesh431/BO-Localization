const initState = {
  localizationInfo: { currentLanguage: "en-us" },
};

const localizationReducer = (state = initState, action) => {
  switch (action.type) {
    case "LANGUAGE_CHANGE": {
      return {
        ...state,
        localizationInfo: {
          currentLanguage: action.payload.currentLangauge,
        },
      };
    }

    default:
      return state;
  }
};

export default localizationReducer;
