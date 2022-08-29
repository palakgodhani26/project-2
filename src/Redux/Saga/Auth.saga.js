import { call, put, takeEvery, all} from 'redux-saga/effects';
import { signUpapi, SignInapi,SignOutapi } from '../../Common/Api/Auth.api';
import { setAlert } from '../Action/AlertAction';
import * as ActionType from '../ActionType';

function* Signup(action) {
    try {
        const user = yield call(signUpapi,action.payload);
        yield put(setAlert({ text: user.payload, color: "success" }))
        console.log(user);
    } catch (e) {
      yield put(setAlert({ text: e.payload, color: "error" }))
        console.log(e);
    }
}
function* SignIn(action){
    try {
      const user = yield call(SignInapi, action.payload);
      yield put(setAlert({ text: user.payload, color: "success" }))
      console.log(user);
  
    } catch (e) {
      yield put(setAlert({ text: e.payload, color: "error" }))
      console.log(e);
    }
  }

  function* SignOut(action) {
    try {
      const user = yield call(SignOutapi);
      yield put(setAlert({ text: user.payload, color: "success" }))
      console.log(user);
  
    } catch (e) {
      yield put(setAlert({ text: e.payload, color: "error" }))
      console.log(e);
    }
  }
  
  function* watchSignUp() {
    yield takeEvery(ActionType.SIGN_UP, Signup);
  }
  
  function* watchSignIn(){
    yield takeEvery(ActionType.SIGN_IN , SignIn);
  }

  function* watchSignOut() {
    yield takeEvery(ActionType.SIGN_OUT, SignOut)
  }
  

export function* signUpSaga() {
    yield all([
        watchSignUp(),
        watchSignIn(),
        watchSignOut()
    ])
}