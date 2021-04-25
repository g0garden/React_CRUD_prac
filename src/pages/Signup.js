import React from 'react';
import styled from "styled-components";
import { actionCreators as userActions } from '../redux/modules/user';
import { useDispatch} from "react-redux";

const Signup = (props) => {
    const dispatch = useDispatch();
    const [id, setId] = React.useState('');
    const [pw,setPw] = React.useState('');
    
    const signup = () => {
        if(id === '') {
            alert('id를 입력해주세요!')
            return false;
        }
        
        if(pw === '') {
            alert('비밀번호를 입력해주세요!')
            return false;
        }
        //console.log(id,pw);
        dispatch(userActions.signupAPI(id,pw))
    }

    return (
        <ContainerBox>
    <SignBox>
        <SignImg/>
        <Text>Create your Account🥬</Text>
        <InputBox>
            <Input 
            padding='14px 10px' 
            placeholder='ID'
            onChange={(e) => { 
                setId(e.target.value) }} 
                value={id}/>
            <Input 
            margin='7px 0px 0px 0px' 
            padding='14px 10px' 
            type='password' placeholder='PASSWORD' 
            onChange={(e) => { 
                setPw(e.target.value) }} 
                value={pw}/>
            <Btn 
            onClick={signup}>
                Sign up!</Btn>
            
        </InputBox>
    </SignBox>
    </ContainerBox>
    )


}

export default Signup;

const Text = styled.div`
    color:#353535;
    margin:10px 0px 0px 0px;
    font-size:18px;
    font-weight:600;
`;

const InputBox = styled.div`
    margin:25px;
    max-width: 380px;
    text-align:center;
`

const Input = styled.input`
    display:block;
    ${(props)=>props.margin?`margin:${props.margin};`:''}
    ${(props)=>props.padding?`padding:${props.padding};`:''}
    ${(props)=>props.type?`type:${props.type};`:''}
    ${(props)=>props.placeholder?`placeholder:${props.placeholder};`:''}
    
`;

const Btn = styled.div`
    font-weight:800;
    align-content:center;
    margin: 20px auto 20px auto;
    padding: 10px;
    border:1px solid lightgray;
    
`;

const ContainerBox = styled.div`
    width:90vw;
    margin:0 auto;
    display: flex;
    justify-content: space-between;
    @media ${props => props.theme.mobile}{
    width:97vw;
    }
`
const SignBox = styled.div`
    min-width: 50vw;
    margin:80px auto 0px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const SignImg = styled.div`
    width:160px;
    height: 160px;
    border-radius:50%;
    background-image: url('https://cdn.crowdpic.net/list-thumb/thumb_l_501E2A433D01836DF14D28788E3F38B0.jpg');
    background-position: 50% 50%;
    background-size: cover;
`

