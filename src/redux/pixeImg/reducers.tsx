export const INITIAL_STATE = {
  imgList: {
    loading: false,
    data: [],
    error: false,
    errors: '',
  },
};

const pixelImg = (
  state: any = INITIAL_STATE,
  action: Object = {},
): CreditState => {
  switch (action.type) {
    case 'REQUEST_LIST_START':
      return {
        ...state,
        imgList: {
          loading: true,
          data: [],
          error: false,
          errors: [],
        },
      };

    case 'REQUEST_LIST_SUCCESS':
      return {
        ...state,
        imgList: {
          loading: false,
          data: action.payload,
          error: false,
          errors: [],
        },
      };

    case 'REQUEST_LIST_FAILED':
      return {
        ...state,
        imgList: {
          loading: true,
          data: [],
          error: true,
          errors: action.payload,
        },
      };

    case 'SEARCH_LIST_START':
      return {
        ...state,
        imgList: {
          loading: true,
          data: [],
          error: false,
          errors: [],
        },
      };

    case 'SEARCH_LIST_SUCCESS':
      return {
        ...state,
        imgList: {
          loading: false,
          data: action.payload,
          error: false,
          errors: [],
        },
      };

    case 'SEARCH_LIST_FAILED':
      return {
        ...state,
        imgList: {
          loading: true,
          data: [],
          error: true,
          errors: action.payload,
        },
      };

    default:
      return state;
  }
};

export default pixelImg;
