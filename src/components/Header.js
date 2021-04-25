import React from 'react';
import styled from 'styled-components';

import {history } from "../redux/configStore"

import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';


const Header = (props) => {

    const dispatch = useDispatch('');
    const userInfo = useSelector((state) => state.user.user);

    return (
        <React.Fragment>
            <HeaderWrap>
                <HeaderBox>
                    <Logo
                        onClick={() => {
                            history.push('/')
                        }}>CRUD</Logo>
                </HeaderBox>
                {userInfo? (
                    <BtnBox>
                    <Button
                        onClick={() =>{
                            history.push('/signup')
                        }}>
                    {userInfo?.username}
                    </Button>
                    <Button onClick={() =>{
                        dispatch(userActions.logoutAPI())}}>
                        logout
                    </Button>        
                </BtnBox>
                ): (
                <BtnBox>
                    <Button onClick={() =>{history.push('/signup')}}>
                    SignUp
                    </Button>
                    <Button onClick={() =>{history.push('/login')}}>
                        LogIn
                    </Button>        
                </BtnBox>
                )}
            </HeaderWrap>
        </React.Fragment>
    );
};

const HeaderWrap = styled.div`
    width: 100%;
    padding:10px;
    margin:10px auto;
    display:flex;
    justify-content:space-between;
    border-bottom:1px solid lightgray;
`;

const HeaderBox = styled.div`
    width:80%;
    margin:0px auto;
    padding-left:10px;
    
`;

const Logo = styled.div`
    font-weight: 800;
    color:purple;
    font-size: 2.2vw;
    cursor: pointer;
`;

const BtnBox = styled.div`
    width:20%;
    display:flex;
    justify-content:space-evenly;

`;

const Button = styled.div`
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
        border-bottom:2px dashed lightpink;
    }
`;

export default Header;