import React, { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
import styled from 'styled-components';
import { Menu, Input, Button, Row, Col } from 'antd';
import { useSelector } from 'react-redux';

const SearchInput = styled(Input.Search)`
  vertical-align:middle
`

const AppLayout = ({ children }) => {
  const { isLoggedIn } = useSelector(state => state.user);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home"><Link href="/">노드버드</Link></Menu.Item>
        <Menu.Item key="profile"><Link href="/profile">프로필</Link></Menu.Item>
        <Menu.Item key="mail">
          <SearchInput enterButton />
        </Menu.Item>
        <Menu.Item key="signup"><Link href="/signup">회원가입</Link></Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile/> : <LoginForm/> }
        </Col>
        <Col xs={24} md={12}>{children}</Col>
        <Col xs={24} md={6}>
          <a href="https://github.com/imhana503" target="_blank" rel="noreferrer noopener">Made by hana</a>
        </Col>
      </Row>
      
     
    </div>
  )
}

AppLayout.proptypes = {
  children : PropTypes.node.isRequired,
}

export default AppLayout;