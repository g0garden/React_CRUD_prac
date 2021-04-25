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
                    Sign Up
                    </Button>
                    <Button>
                        Log In
                    </Button>        
                </BtnBox>
                    
                
            </HeaderWrap>
        </React.Fragment>
    );
};

const HeaderWrap = styled.div`
    width: 100%;
`;

const HeaderBox = styled.div`
    width:100%;
`;

const Logo = styled.div`
    color:purple;
`;

const BtnBox = styled.div`
    width:100%;
`;

const Button = styled.div`
    color: yellow;
    background-color:purple;
    &:hover{
        color:purple;
        background-color:yellow;
    }
`;

export default Header;