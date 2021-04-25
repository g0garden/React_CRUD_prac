import React from 'react';
import styled from "styled-components";
import { actionCreators as userActions } from '../redux/modules/user';
import { useDispatch} from "react-redux";

const Login = (props) => {
    const dispatch = useDispatch('');
    const [id, setId] = React.useState('');
    const [pw, setPw] = React.useState('');

    const Login = () => {

        if(id === '') {
            alert('id를 입력해주세요!')
            return false;
        }
        
        if(pw === '') {
            alert('비밀번호를 입력해주세요!')
            return false;
        }
            console.log(id,pw);
        dispatch(userActions.loginAPI(id,pw))


    }

    return (
        <ContainerBox>
    <LoginBox>
        <LoginImg/>
        <Text>Hello, Mate!</Text>
        <InputBox>
        <Input 
            padding='14px 10px' 
            onChange={(e) => { 
                setId(e.target.value)}}
            placeholder='ID' value={id}/>
        <Input 
            margin='7px 0px 0px 0px' 
            onChange={(e) => { 
                setPw(e.target.value)}} 
            padding='14px 10px'
            type='password'
            placeholder='PASSWORD' value={pw}/>
        <Btn margin='10px 0px 0px 0px'
                onClick={Login}>Log in!</Btn>
        <SocialBtn>Kakao</SocialBtn>
        </InputBox>
        </LoginBox>
    </ContainerBox>
    );
};

const Text = styled.div`
    color:#353535;
    margin:10px 0px 0px 0px;
    font-size:18px;
    font-weight:600;
`;

const Btn = styled.div`
    font-weight:800;
    text-align:center;
    margin: 20px auto 20px auto;
    padding: 10px;
    border:1px solid lightgray;
    color: black;
    cursor: pointer;
    
`;

const SocialBtn = styled.div`
    margin: 5px 0 0 0;
    background-color:#FFD53B;
    font-weight:800;
    text-align:center;
    margin: 20px auto 20px auto;
    padding: 10px;
    border:1px solid lightgray;
    color: black;
`;

const Input = styled.input`
    display:block;
    ${(props)=>props.margin?`margin:${props.margin};`:''}
    ${(props)=>props.padding?`padding:${props.padding};`:''}
    ${(props)=>props.type?`type:${props.type};`:''}
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
const LoginBox = styled.div`
    min-width: 50vw;
    margin:80px auto 0px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const LoginImg = styled.div`
    width:160px;
    height: 160px;
    border-radius:50%;
    background-image: url('https://cdn.crowdpic.net/list-thumb/thumb_l_501E2A433D01836DF14D28788E3F38B0.jpg');
    background-position: 50% 50%;
    background-size: cover;
`

const InputBox = styled.div`
 margin:20px 0px 0px 0px;
 max-width: 380px;
`
export default Login;