import { HYDRATE } from 'next-redux-wrapper';
// import { combineReducers} from 'redux';

export const initialState = {
  user:{
    isLoggedIn : false,
    user : null,
    signUpData : {},
    loginData : {},
  },
  post:{
    mainPsots:[],
  }
}

export const loginAction = (data) => {
  return{
    type:'LOG_IN',
    data,
  }
}

export const logoutAction = () => {
  return{
    type:'LOG_OUT',
  }
}




//이전상태, 액션상태로 => 다음상태를 만들어준다.
const rootReducer = (state = initialState, action)=>{
  switch(action.type){
    case HYDRATE : 
      console.log('HYDRATE', action);
      return {
        ...state,
        ...action.payload
      }
    case 'LOG_IN' :
      return{
        ...state,
        user:{
          ...state.user,
          isLoggedIn:true,
          user:action.data,
        }
      }
    
      case 'LOG_OUT' :
        return{
          ...state,
          user:{
            ...state.user,
            isLoggedIn:false,
            user:null,
          }
        }
      default:
        return state;
  }
}

export default rootReducer;