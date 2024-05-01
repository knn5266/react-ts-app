import React from "react";

import { VFC, memo } from "react";
import { Login } from "../components/pages/Login";
import { Route, Switch } from "react-router-dom";
import { homeRoutes } from "./HomeRoutes";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templete/HeaderLayout";
import { LoginUserProvider } from "../components/providers/LoginUserProvider";
import UserGuard from "../components/gurads/UserGuard";

export const Router:VFC = memo(() => {
  return (
    <Switch>
      <UserGuard>
      <LoginUserProvider>
      <Route exact path='/'>
        <Login />
      </Route>
      <Route path='/home' render={({match:{url}}) => (
        <Switch>
          {homeRoutes.map((route)=>(
            <Route key={route.path} exact={route.exact} path={`${url}${route.path}`} >
             <HeaderLayout>{route.children}</HeaderLayout> 
            </Route>
          ))}
        </Switch>
      )} >
        </Route>
        </LoginUserProvider>
        </UserGuard>
        <Route path='*' >
          <Page404 />
        </Route>
    </Switch>
  )
}
)