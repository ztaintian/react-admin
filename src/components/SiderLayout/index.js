import React, { Component } from 'react';
import { HashRouter, Route, NavLink } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
import Routers from '../../router';
import './index.styl';
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
class SiderLayout extends Component {
  state = {
    collapsed: false,
    menuList: [
      {
        name: '学习网站',
        iconfont: 'question-circle',
        children: [
          { 
            name: '前端学习网站',link: 'web' 
          },
        ]
      },
      {
        name: 'html问题集',
        iconfont: 'question-circle',
        children: [{ name: 'html1',link: 'news' }, { name: 'html2',link: 'news' }]
      },
      {
        name: 'js问题集',
        iconfont: 'question-circle',
        children: [{ name: 'js1',link: 'news' }, { name: 'js2',link: 'news' }]
      },
      {
        name: 'css问题集',
        iconfont: 'question-circle',
        children: [{ name: 'css1', link: 'news' }, { name: 'css2' ,link: 'news'}]
      },
      {
        name: 'regex问题集',
        iconfont: 'question-circle',
        children: [{ name: 'js正则验证人名，包含·（类似卡尔·马克思）', link: 'regs' }, { name: 'css2', link: 'news2' }]
      },
      {
        name: 'Sign',
        iconfont: 'question-circle',
        children: [{ name: '签名测试', link: 'sign' }]
      }
    ]
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    let menus = this.state.menuList.map((item, index) => {
      return <SubMenu key={index} title={<span><Icon type={item.iconfont} /><span>{item.name}</span></span>} >
        {item.children.map((item2) => {
          return <Menu.Item key={item2.name}>
            <HashRouter>
              <Route>
                <NavLink replace to={item2.link}>
                  <span>{item2.name}</span>
                </NavLink>
              </Route>
            </HashRouter>
          </Menu.Item>
        })}
      </SubMenu>
    })
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {
              menus
            }
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{
            margin: '24px 16px', padding: 24,height: '100%', background: '#fff',
          }}
          >
            <Routers />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SiderLayout;