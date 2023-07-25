import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux'; //리듀서를 합쳐주는 메서드

import user from './user';
import post from './post';

export const initialState = {
  user:{

  },
  post:{

  },
  
}




//이전상태, 액션상태로 => 다음상태를 만들어준다.
const rootReducer = combineReducers({
  //HYDRATE(서버사이드렌더링) 위해서 index를 추가
  index:(state = {}, action)=>{
    switch(action.type){
      case HYDRATE:
          console.log('HYGRATE', action);
          return { ...state, ...action.payload };
      default :
        return state;
    }
  },
  //리듀서 합쳐주기
  user,
  post,
})

export default rootReducer;