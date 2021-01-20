import { fromJS } from 'immutable';
import { actionTypes } from './index'

const defaultState = fromJS({
	topicList: [],
	articleList: [],
	recommendList: [],
	page: 1,
	showScroll: false
});

const getHomeData = (state,action) => {
	return state.merge({
		topicList: fromJS(action.topicList),
		articleList: fromJS(action.articleList),
		recommendList: fromJS(action.recommendList)
	})
}

const getMoreData = (state,action) => {
	return state.merge({
		'articleList': state.get('articleList').concat(action.list),
		'page': action.newPage
	})
}

const reducer = (state = defaultState, action) => {
	switch(action.type) {
		case actionTypes.CHANGE_HOME_DATA:
			return getHomeData(state,action)
		case actionTypes.GET_MORE_DATA:
			return getMoreData(state,action)
		case actionTypes.CHANGE_SCROLL_TOP:
			return state.set('showScroll',action.show)
		default:
			return state;
	}
}

export default reducer