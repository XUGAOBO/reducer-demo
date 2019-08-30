/*
 * @Description: 数据操作
 * @Author: gaobo xu
 * @Date: 2019-08-13 12:56:28
 */
import * as types from './actionTypes';

const reducer = (state, action) => {
  switch(action.type) {
    case types.ADD_ROW_DATA: { // 添加
      return [ ...state, action.payload ];
    }
    case types.REMOVE_ROW_DATA: { // 删除
      const { rowIndex } = action.payload;
      state.splice(rowIndex, 1);
      return [ ...state ];
    }
    default:
      return state;
  }
}

export default reducer;
