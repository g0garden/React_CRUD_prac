import React from 'react';
import styled from 'styled-components';
import Post from '../components/Post';
import {useDispatch, useSelector} from 'react-redux'; 
import { actionCreators } from '../redux/modules/post';

const PostList = (props) => {
    const dispatch = useDispatch();
    const post_list = useSelector((state) => state.post.list);

    console.log(post_list);

    React.useEffect (() => {
            dispatch(actionCreators.getPostAPI());
        },[]);

    return (
        <PostListContainer>
            
            <HeadBoard>
                <div>글쓴이</div>
                <div>글제목</div>
                <div>생성일</div>  
            </HeadBoard>
            <Button>
                Write
            </Button>
                {post_list.map((p, idx) => {
                    return <Post key={p.id} {...p}/>
                })}
            
        </PostListContainer>
    );
};

const PostListContainer = styled.div`
    width: 90vw;
    position:relative;
    margin: 10px auto;

`;

const HeadBoard = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 10px auto;
    padding: 15px;
    text-align:center;
    box-sizing:border-box;
    background-color:lightgray;
    font-size: 1.7vw;
    font-weight: 800;

`;

const Button = styled.div`
    position:absolute;
    right:5px;
    width:50px;
    margin:10px 0; 
    padding:4px;
    text-align:center;
    font-weight: 800;
    color: purple;
    border:1px soild purple;
    border-radius: 4px;
    cursor: pointer;
    &:hover{
        color:purple;
        border:1px dashed lightpink;
    }
`;
export default PostList;