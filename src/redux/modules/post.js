import { createAction, handleActions } from "redux-actions";
import { produce } from "immer"; //불변성유지

import axios from 'axios';

//action
const SET_POST = "SET_POST"; //목록가져오기
const ADD_POST = "ADD_POST"; //추가하기
const EDIT_POST = "EDIT_POST"; //수정하기
const DELETE_POST = "DELETE_POST"; //삭제하기

//acion Creators
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const editPost = createAction(EDIT_POST, (post_id, post) => ({ post_id, post }));
const deletePost = createAction(DELETE_POST, (post_id) => ({ post_id }));

const initialState = {
    list:[],
}

//게시글 하나에 대한 기본값
const initialPost = {
    "createdAt": "2021-04-21T07:51:18.192",
    "modifiedAt": "2021-04-21T07:51:18.192",
    "id": 1,
    "title": "제목테스트1",
    "contents": "내용테스트1",
    "author": "strong1133"

};

//API통신
const getPostAPI = () => {
    return function (dispatch, getState, {history}){
    
        const API = 'http://54.180.142.197/api/article'
        axios({
            method: 'get',
            url:API,
        }).then((res) => {
            //console.log(res)

            let _postList = res.data;
            let postList = [];
            _postList.forEach((p) => {
                
                let post = {
                    id:p.id,
                    title:p.title,
                    contents:p.contents,
                    author:p.author,
                    createAt:p.createdAt,
                }
                postList.push(post);
            })
            dispatch(setPost(postList))
        })
        .catch((err) => console.log(err));
            
    }
}


//reducer
export default handleActions({

    [SET_POST]: (state, action) => produce(state, (draft) => {
        draft.list.push(...action.payload.post_list);
    }),
    
    [ADD_POST]: (state, action) => produce(state, (draft) => {
        draft.list.unshift(action.payload.post);
    }),
    
    [DELETE_POST]: (state, action) => produce(state, (draft) => {
        let idx = draft.list.findIndex((p) => p.id === action.payload.post_id);
        draft.list.splice(idx,1);
    }),
    

},initialState);

const actionCreators = {
    setPost,
    addPost,
    //editPost,
    deletePost,
    getPostAPI,
};

export { actionCreators };
