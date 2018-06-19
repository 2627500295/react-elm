# React

## 路由
  path              | Component | name
|-------------------|-----------|------|
  /                 | Home      | 首页
  /discover         | Discover  | 发现
  /order            | Order     | 订单
  /profile          | Profile   | 我的
  /profile/address  | Address   | 我的地址
  /login            | Login     | 登陆
  /exchange         | Exchange  | 金币
  /supervip         | SuperVip  | 超级会员

&nbsp;

## 代理

```javascript
proxy: {
  '/api/*': {
    target: 'https://h5.ele.me/restapi',
    secure: false,
    changeOrigin: true,
    headers: {
      Host: 'h5.ele.me',
      Referer: 'https://h5.ele.me/'
    },
    pathRewrite: {
      '^/api/bgs/poi/reverse_geo_coding': '/bgs/poi/reverse_geo_coding',
      '^/api/bgs/weather/current': '/bgs/weather/current',
      '^/api/shopping/v2/entries': '/shopping/v2/entries'
    }
  }
}
```
