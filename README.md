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

## 使用方法

- `.github`文件夹删掉，是用来配置`git pages`
- `mock`可以删掉， 只要用来做测试用例，相应的`vite.config.js`也要去掉`mockjs`

## 动态路由实现流程 （已用 mock 实现用例）

通过在`router`文件里面每个路由添加相应的`role`属性，然后后端返回路由集合，在路由拦截
里面判断当前路由是否有权限，没有则不让他进入， 这里还有一个问题就是路由表也要过滤
