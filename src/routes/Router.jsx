import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './HomePage/HomePage'
import LoginPage from './LoginPage/LoginPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Route path="/login" exact>
        <LoginPage />
      </Route>
      <Route path="/" exact>
        <HomePage />
      </Route>
    </BrowserRouter>
  )
}

export default Router
