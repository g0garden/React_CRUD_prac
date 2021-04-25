import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch,useSelector } from 'react-redux';
//import { actionCreators as userActions } from "../redux/modules/user";




const Post = (props) => {
    // const dispatch = useDispatch();

    // React.useEffect (() => {
    //     dispatch(actionCreators.getPostAPI());
    // },[])

    return (
        <React.Fragment>
            <Board>
                
                <PostBoard>
                    <div>{props.author}</div>
                    <div>{props.title}</div>
                    <div>{props.createdAt}</div>
                </PostBoard>
                
            </Board>
                
        </React.Fragment>
        
    );
};

Post.defaultProps = {
    "createdAt": "2021-04-21T07:51:18.192",
    "modifiedAt": "2021-04-21T07:51:18.192",
    "id": 1,
    "title": "제목테스트1",
    "contents": "내용테스트1",
    "author": "strong1133"
};

const Board =styled.div`
    position:relative;
    width: 80%;
    margin: 20px auto;
    text-align:center;
    border:1px solid lightgray;

`;

const PostBoard = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 10px auto;
    text-align:center;
    padding:0;
    box-sizing:border-box;
    font-size: 1.2vw;
`;





export default Post;