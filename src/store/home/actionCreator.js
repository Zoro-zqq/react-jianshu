import axios from "axios";
import { actionTypes } from './index'
import { fromJS } from "immutable";

export const getHomeData = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      let result = res.data.data
      dispatch(homeAction(result))
    })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page='+page).then((res) => {
      let result = res.data.data
      dispatch(moreListAction(result,page + 1))
    })
  }
}

export const changeScrollTop = (show) => {
  return {
    type: actionTypes.CHANGE_SCROLL_TOP,
    show
  }
}

const moreListAction = (list,newPage) => ({
  type: actionTypes.GET_MORE_DATA,
  list: fromJS(list),
  newPage
})

const homeAction = (result) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList,
})