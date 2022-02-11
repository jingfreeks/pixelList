import {
  REQUEST_LIST_START,
  REQUEST_LIST_SUCCESS,
  REQUEST_LIST_FAILED,
  SEARCH_LIST_START,
  SEARCH_LIST_SUCCESS,
  SEARCH_LIST_FAILED,
} from './actionTypes';

export const requestListStart = () => ({
  type: REQUEST_LIST_START,
});
export const requestListSuccess = data => ({
  type: REQUEST_LIST_SUCCESS,
  payload: data,
});

export const requestListFailed = () => ({
  type: REQUEST_LIST_FAILED,
});

export const searchListStart = () => ({
  type: SEARCH_LIST_START,
});

export const searchListSuccess = () => ({
  type: SEARCH_LIST_SUCCESS,
});

export const searchListFailed = () => ({
  type: SEARCH_LIST_FAILED,
});
