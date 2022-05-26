# vue3-element-template

## 技术栈

vue3+element-plus+pinia+vite 一个简单的后台模板

## 功能实现

[x] 登录页、封装路由权限，`axios`  
[x] 使用`eslint`和`prettier`进行代码规范  
[x] 通过`husky`监听`git`提交前事件进行格式化代码  
[x] `rollup-plugin-visualizer`生成依赖图分析  
[x] `element plus`组件自动按需引入  
[x] 部署到`github pages`  
[x] 关联了`github`和`gitee`仓库  
[x] `mock.js`本地模拟数据  
[x] 实现动态路由  
[x] 实现 3 种动态路由实例

## 使用方法

- `.github`文件夹删掉，是用来配置`git pages`
- `mock`可以删掉， 只要用来做测试用例，相应的`vite.config.js`也要去掉`mockjs`

## 动态路由实现流程 （已用 mock 实现用例）

- 第一种  
  后端只返回一个`string`的集合，通过在`router`文件里面每个路由添加相应的`role`属性，然后在`store`里面做路由对比用来渲染侧边栏，跳转的时候只需在路由拦截
  里面通过`to.path`判断是否字在后端的集合中，没有就不给进

- 第二种  
  跟第一种一样的流程，只是路由里面加了参数，需要进行对比合并

- 第三种 （这是最简单的）  
  后端返回一个前端一样的路由表结构(有权限的路由)，侧边栏就
  不需要做处理了，直接存到`store`里面，因为侧边栏没有用到
  `component`,然后需要做处理的是路由那里，如果不做处理的
  话通过在地址栏输入其他页面是可以进去的，这里就需要用
  `to.path`判断后端路由表结构有没有，没有就不给进
