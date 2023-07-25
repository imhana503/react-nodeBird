import React, { useState, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { Form, Button, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../reducers/post';

const FormWapper = styled(Form)`
    margin:10px 0 20px;
`

const PostForm = () => {
    const dispatch = useDispatch();
    const imageInput = useRef();
    const { imagePaths } = useSelector((state)=>state.post)
    const [text, setText] = useState('');
    const onChangeText = useCallback((e) => {
        setText(e.target.value);
    },[]);
    const onSubmit = useCallback(() => {
        dispatch(addPost);
        setText('');
    },[]);
    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
    },[imageInput.current])
    return(
        <FormWapper onFinish={onSubmit}>
            <Input.TextArea 
                value={text}
                onChange={onChangeText}
                maxLength={140} 
                placeholder='어떤 신기한 일이 있었나요?'
            />
            <div>
                <input type="file" multiple hidden ref={imageInput} style={{ opacity:0 }}/>
                <Button onClick={onClickImageUpload}>이미지 업로드</Button>
                <Button type="primary" htmlType="submit" style={{ float:'right' }}>짹쨱</Button>
            </div>
            <div>
                {imagePaths.map((v)=>(
                    <div key={v} style={{ display:inline-block }}>
                        <img src={v} style={{ width:'200px' }} alt={v}/>
                        <div>
                            <Button>제거</Button>
                        </div>
                    </div>
                ))}
            </div>
        </FormWapper>
    )
}

export default PostForm;