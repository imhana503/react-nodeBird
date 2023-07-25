import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Card, Button, Popover } from 'antd';
import { RetweetOutlined, HeartTwoTone, HeartOutlined, MessageOutlined, EllipsisOutlined  } from '@ant-design/icons';
import PostImages  from './PostImages';


const PostCard = ({ post }) => {
    console.log(post)
    return(
        <div>
            <Card
                cover={post.Images[0] && <PostImages images={post.Images}/>}
                actions={[
                    <RetweetOutlined key="retweet"/>,
                    <HeartOutlined key="heart"/>,
                    <MessageOutlined key="comment"/>,
                    <Popover key="more" content={(
                        <Button.Group>
                            <Button>수정</Button>
                            <Button type="danger">삭제</Button>
                            <Button>신고</Button>
                        </Button.Group>
                    )}>
                        <EllipsisOutlined/>,
                    </Popover>
                ]}

            />
        </div>
    )
}

PostCard.propTypes = {
    post:PropTypes.shape({
        id:PropTypes.number,
        User:PropTypes.object,
        content:PropTypes.string,
    }).isRequired,
}

export default PostCard;