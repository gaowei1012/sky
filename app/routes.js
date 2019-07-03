// import { multiLoadData } from './utils'
// import React, { Suspense } from 'react'
// import Containers from './containers/index'
// import Home from "./containers/Home/index";
import Detail from "./containers/Detail/index";
import Article from "./containers/Article/index";

export default [
  /*  {
      path: '/',
      component: Home,
      // loadData: Home.loadData,
      exact: true,
    },*/
  {
    path: "/",
    component: Article,
    loadData: Article.loadData,
    exact: true
  },
  {
    path: "/article-detail/:id",
    component: Detail,
    loadData: Detail.loadData
  }
];
