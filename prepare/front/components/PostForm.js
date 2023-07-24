import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import { Form, Button, Input } from 'antd';

const FormWapper = styled(Form)`
    margin:10px 0 20px;
`

const PostForm = () => {
    return(
        <FormWapper>
            <Input.TextArea maxLength={140} placeholder='어떤 신기한 일이 있었나요?'/>
            <div>
                <input type="file" multiple hidden />
                <Button>이미지 업로드</Button>
                <Button type="primary" htmlType="submit">짹쨱</Button>
            </div>
        </FormWapper>
    )
}

export default PostForm;