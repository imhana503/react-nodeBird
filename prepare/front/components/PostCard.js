import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Card, Button, Popover, Avatar, List, Comment } from 'antd';
import { RetweetOutlined, HeartTwoTone,  HeartOutlined, MessageOutlined, EllipsisOutlined  } from '@ant-design/icons';
import PostImages  from './PostImages';
import CommentForm  from './CommentForm';
import PostCardContent from './PostCardContent';


const PostCard = ({ post }) => {
    const id = useSelector((state)=>state.user.me?.id);
    const [liked, setLiked] = useState(false);
    const [commentFormOpened, setCommentFormOpened] = useState(false);

    const onToggleLike = useCallback(() => {
        setLiked((prev)=>!prev);
    },[]);

    const onToggleComment = useCallback(() => {
        setCommentFormOpened((prev)=>!prev);
    },[]);

    return(
        <div style={{ marginBottom : 20 }}>
            <Card
                cover={post.Images[0] && <PostImages images={post.Images}/>}
                actions={[
                    <RetweetOutlined key="retweet"/>,
                    liked 
                        ? 
                          <HeartTwoTone twoToneColor="#eb3f96" key="heart" onClick={onToggleLike}/> 
                        : <HeartOutlined key="heart" onClick={onToggleLike}/>,
                    <MessageOutlined key="comment" onClick={onToggleComment}/>,
                    <Popover key="more" content={(
                        <Button.Group>
                        {
                            id && post.User.id === id ?
                            (
                            <>
                                <Button>수정</Button>
                                <Button type="danger">삭제</Button>
                            </>
                            ):
                            <Button>신고</Button>
                        }
                            
                            
                        </Button.Group>
                    )}>
                        <EllipsisOutlined/>,
                    </Popover>
                ]}
            >
                <Card.Meta
                    avatar={<Avatar>{post.User.nickname}</Avatar>}
                    title={post.User.nickname}
                    description={<PostCardContent postData={post.content}/>}
                />
            </Card>
            {
                commentFormOpened && (
                    <div>
                        <CommentForm post={post}/>
                        <List
                            header={`${post.Comments.length}개의 댓글`}
                            itemLayout="horizontal"
                            dataSource={post.Comments}
                            renderItem={(item)=>(
                                // <li>
                                //     {/* <Comment
                                //         author={item.User.nickname}
                                //         avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                                //         content={item.content}
                                //     /> */}
                                // </li>
                                 // 강의에서는 <li></li>로 사용하고 있습니다.
                                <List.Item>
                                    {/* 강의에서는 <Comment />로 사용하고 있습니다. */}
                                    <List.Item.Meta
                                    // author => title로, content => description으로 적용하면 강의에서 보는 UI와 똑같아요.
                                    title={item.User.nickname}
                                    avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                                    description={item.content}
                                    />
                                </List.Item>
                            )}

                        />
                    </div>
                )
            }
        </div>
    )
}

PostCard.propTypes = {
    post: PropTypes.shape({
      id: PropTypes.number,
      User: PropTypes.object,
      UserId: PropTypes.number,
      content: PropTypes.string,
      createdAt: PropTypes.object,
      Comments: PropTypes.arrayOf(PropTypes.any),
      Images: PropTypes.arrayOf(PropTypes.any),
    }).isRequired,
  };

export default PostCard;