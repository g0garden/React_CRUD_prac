import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import axios from 'axios';

//actions
const SET_USER = 'SET_USER';
const LOG_OUT = 'LOG_OUT';

//actionCreators
const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, () => ({ }));

const initialState = {
    user: null,
    is_login: false,
};

//api통신
const signupAPI = (id, pwd) => {
    return function (dispatch, getState, { history }) {
        const API = 'http://54.180.142.197/api/signup'
        axios({
            method:'post',
            url: API,
            data: {
                username:id,
                password:pwd,
            },
        })
        .then((res) => {
            //console.log(res)
            alert('회원가입이 완료되었습니다')
            history.push('/login');
        })
        .catch((err) => console.log(err))
    }
}

//로그인성공여부
const loginAPI = (id,pw) => {
    return function (dispatch, getState, { history }) {
        console.log(id,pw) 
        if(!id || !pw){
            return false;
        }
        const API = 'http://54.180.142.197/login'
        axios({
            method:'post',
            url:API,
            data: {
                username:id,
                password:pw,
            },
        }).then((res) => {
            //console.log(res)
            const userInfo = {
                username : id,
            }
            dispatch(setUser(userInfo));
            let token = res.headers.authorization;
            localStorage.setItem('token', token);

            axios.defaults.headers.common['authorization'] = token;
            alert('Welcome, Mate!')
        
            history.push('/')
        })
            .catch((err) => {
            console.log(err)
        })
    }
}

//현재로그인한 유저의 정보필요할때
const loginCheckAPI = () => {
    return function (dispatch, getState, { history }) {

        const token = localStorage.getItem('token');
        axios.defaults.headers.common['Authorization'] = token;

        const API = 'http://54.180.142.197/api/user/cur_user'
        axios({
            method:'get',
            url:API,
        }).then((res) => {
            console.log(res)
            dispatch(setUser({
                username: res.data.username,
            }));

        }).catch((err) => {
            console.log(`로그인체크에러!!!!`,err)
        })

    }
}

//로그아웃
const logoutAPI = () =>{
    return function (dispatch, getState, { history }) {

        localStorage.removeItem('token');
        axios.defaults.headers.common['Authorization'] = null;
        delete axios.defaults.headers.common['Authorization'];
        alert('See you soon, Mate!')
        
        dispatch(logOut());
        history.push('/');
    }
}


//reducer
export default handleActions({

    [SET_USER]: (state, action) => produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.isLogin = true;
    }),
    [LOG_OUT]: (state, action) => produce(state, (draft) => {
        draft.user = null;
        draft.isLogin = false;
    }),
    
    }, initialState);

const actionCreators = {
    logoutAPI,
    loginCheckAPI,
    loginAPI,
    signupAPI,
};

export { actionCreators };
