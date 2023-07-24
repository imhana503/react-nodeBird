import React, { useState, useCallback } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Form, Button, Input, Checkbox } from 'antd';

import AppLayout from '../components/AppLayout';
import useInput from '../hooks/useInput';


const FormWrapper = styled(Form)`
    padding:10px;
`;

const ButtonWrapper = styled.div`
    margin-top:10px;
`;

const ErrorMsg = styled.div`
    color: red;
`;

const signup = () => {
    const [id, onChangeId] = useInput();
    const [nickname, onChangeNickname] = useInput();
    const [password, onChangePassword] = useInput();

    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const onChangePasswordCheck = useCallback((e) => {
        setPasswordError(e.target.value !== password)
        setPasswordCheck(e.target.value);       
    },[password]);

    const [term, setTerm] = useState(false);
    const [termError, setTermError] = useState(false);
    const onChangeTerm = useCallback((e) => {
        setTermError(false);
        setTerm(e.target.checked)
    },[])


    const onSubmit = useCallback(() => {
        if( password !== passwordCheck ){
            return setPasswordError(true);
        }
        if(!term){
            return setTermError(true);
        }
    },[password, passwordCheck, term])
 

    return(
    <>
        <Head>
            <title>내 프로필 | NodeBird</title>
        </Head>
        <AppLayout>
            <FormWrapper onFinish={onSubmit}>
                <div>
                    <label htmlFor="user-Id">아이디</label>
                    <br/>
                    <Input name="user-Id" id="user-Id" value={id} onChange={onChangeId} required/>
                </div>
                <div>
                    <label htmlFor="user-nickname">닉네임</label>
                    <br/>
                    <Input name="user-nickname" id="user-nickname" value={nickname} onChange={onChangeNickname} required/>
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br/>
                    <Input type="password" name="user-password" id="user-password" value={password} onChange={onChangePassword} required/>
                </div>
                <div>
                    <label htmlFor="user-password-check">비밀번호체크</label>
                    <br/>
                    <Input type="password" name="user-password-check" id="user-password-check" value={passwordCheck} onChange={onChangePasswordCheck} required/>
                    {passwordError && <ErrorMsg>비밀번호가 일치하지 않습니다.</ErrorMsg>}
                </div>
                <div>
                    <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>제로초 말을 잘 들을 것을 동의합니다.</Checkbox>
                    {termError && <ErrorMsg>약관에 동의하셔야 합니다.</ErrorMsg>}
                </div>
                <ButtonWrapper>
                    <Button type="primary" htmlType="submit">가입하기</Button>
                </ButtonWrapper>
            </FormWrapper>
        </AppLayout>  
    </>
    )
}

export default signup;