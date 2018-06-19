import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Wrapper from '@/components/Wrapper';
import { connect } from 'react-redux';
import './style';

@connect()
export default class Profile extends Component {
  static propTypes = {
    className: PropTypes.string,
  }

  static defaultProps = {
    className: 'footer',
  }

  render = () => (
    <div className='profile-info'>
      <Header>
        <Wrapper>
          <div className="back">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIzMiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE2LjU1MiA1LjYzM0wxNC41MDggMy41OSAyLjI0MyAxNS44NTMgMTQuNTA4IDI4LjQxbDIuMDQ0LTIuMDQzLTEwLjIyLTEwLjUxM3oiLz48L3N2Zz4=" />
          </div>
          <div className="title">我的</div>
        </Wrapper>
      </Header>
      <div className='profile-content'>
        <div className='profile-is-login'>
          <div className='profile-icon'>
            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg==' />
          </div>
          <div className='profile-is-login-info'>
            <p>登录/注册</p>
            <p>
              <svg></svg>
              <span>登录后享受更多特权</span>
            </p>
          </div>
          <span>
            <svg></svg>
          </span>
        </div>
        <div className='profile-wallet'>
          <a href='javascript:;'>
            <aside>
              <svg></svg>
            </aside>
            <div>钱包</div>
          </a>
          <a href='javascript:;'>
            <aside>
              <svg></svg>
            </aside>
            <div>红包</div>
          </a>
          <a href='javascript:;'>
            <aside>
              <svg></svg>
            </aside>
            <div>金币</div>
          </a>
        </div>
        <section>
          <a href='javascript:;'>
            <aside>
              <svg></svg>
            </aside>
            <div className='mine-list'>
              我的地址
              <span>
                <svg></svg>
              </span>
            </div>
          </a>
        </section>
        <section>
          <a href='javascript:;' className='index-border'>
            <aside>
              <svg></svg>
            </aside>
            <div className='mine-list'>
              金币商城
              <span>
                <svg></svg>
              </span>
            </div>
          </a>
          <a href='javascript:;'>
            <aside>
              <svg></svg>
            </aside>
            <div className='mine-list'>
              分享拿5元现金
              <span>
                <svg></svg>
              </span>
            </div>
          </a>
        </section>
        <section>
          <a href='javascript:;' className='index-border'>
            <aside>
              <svg></svg>
            </aside>
            <div className='mine-list'>
              我的客服
              <span>
                <svg></svg>
              </span>
            </div>
          </a>
          <a href='javascript:;'>
            <aside>
              <svg></svg>
            </aside>
            <div className='mine-list'>
              下载饿了么APP
              <span>
                <svg></svg>
              </span>
            </div>
          </a>
        </section>
      </div>
      <Footer className={classnames(this.props.className)}>1</Footer>
    </div>
  );
}
