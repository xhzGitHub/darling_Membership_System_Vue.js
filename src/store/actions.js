/*
间接更新state的多个方法的对象
 */

import {RECEIVE_USERINFO} from './mutations_types'
import {reqGetUserBasicInfo} from "../api"

export default {
  async getUserInfo({commit, state}){
    const result = await reqGetUserBasicInfo(state.membership_query_type);

    if(result.status == 'success'){

      const fBalance = result.fBalance,
            fMemberID = result.fMemberID,
            fPoints = result.fPoints,
            fRankIDCN = result.fRankIDCN,
            headimgurl = result.headimgurl,
            nickname = result.nickname;

      commit(RECEIVE_USERINFO, {
        fBalance, fMemberID, fPoints, fRankIDCN, headimgurl, nickname
      })

    }
  }
}
