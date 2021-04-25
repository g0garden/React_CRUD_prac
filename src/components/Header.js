import React from 'react';
import styled from 'styled-components';

const Header = () => {

    return (
        <React.Fragment>
            <HeaderWrap>
                <HeaderBox>
                    <Logo>CRUD</Logo>
                </HeaderBox>
                <BtnBox>
                    <Button>
                    SignUp
                    </Button>
                    <Button>
                        LogIn
                    </Button>        
                </BtnBox>
                    
                
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