export const initialState = {
  isLoggedIn: false,
  me:null,
  signUpData:{},
  loginData:{},
}

export const loginAction = (data) => {
  return {
    type:'LOG_IN',
    data,
  }
} 

export const logoutAction = (data) => {
  return {
    type:'LOG_OUT_REQUEST',
  }
} 

const ruducer = (state = initialState, action) => {
  switch(action.type){
    case 'LOG_IN_REQUEST' :
      return{
        ...state,
        isLoggedIn:true,
        me:action.data,
      }
    case 'LOG_IN_SUCCESS' :
      return{
        ...state,
        isLoggedIn:false,
        me:null,
      }
    default:
      return state
  }
}

export default ruducer;