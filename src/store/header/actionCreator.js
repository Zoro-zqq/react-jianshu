import { actionTypes } from './index'
import axios from "axios";
import { fromJS } from "immutable";

export const searchFocus = () => {
  return {
    type: actionTypes.SEARCH_FOCUS
  }
}

export const searchBlur = () => {
  return {
    type: actionTypes.SEARCH_BLUR
  }
}

export const getListData = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      dispatch(listAction(res.data.data))
    })
  }
}

export const setMouseEnter = () => {
  return {
    type: actionTypes.MOUSE_ENTER
  }
}

export const setMouseLeave = () => {
  return {
    type: actionTypes.MOUSE_LEAVE
  }
}

export const setPage = (page) => {
  return {
    type: actionTypes.SET_PAGE,
    page
  }
}

const listAction = (data) => {
  return {
    type: actionTypes.SET_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 2)
  }
}