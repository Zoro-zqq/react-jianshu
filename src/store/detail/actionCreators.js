import axios from "axios";
import { actionTypes } from './index'

export const getDetailData = () => {
  return (dispatch) => {
    axios.get('/api/detail').then(res => {
      dispatch(changeDetailData(res.data.data))
    })
  }
}

const changeDetailData = (result) => ({
  type: actionTypes.CHANGE_DETAIL_DATA,
  title: result.title,
  content: result.content
})