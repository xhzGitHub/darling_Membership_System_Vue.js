/*
直接更新state的多个方法的对象
 */
import {RECEIVE_USERINFO} from './mutations_types'

export default {
  [RECEIVE_USERINFO](state,{
    fBalance, fMemberID, fPoints, fRankIDCN, headimgurl, nickname
  })
  {
    state.fBalance = fBalance;
    state.fMemberID = fMemberID;
    state.fPoints = fPoints;
    state.fRankIDCN = fRankIDCN;
    state.headimgurl = headimgurl;
    state.nickname = nickname;
  }
}
