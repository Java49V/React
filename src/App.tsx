import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigator } from './components/navigators/Navigator';
import { AddEmployee } from './components/pages/AddEmployee';
import { layoutConfig } from './config/layout-config';
import { Login } from './components/pages/Login';
import { Logout } from './components/pages/Logout';
import {RoutesType} from './models/RoutesType'
import { useSelector } from 'react-redux';
import { AgeStatistics } from './components/pages/AgeStatistics';
import { Employees } from './components/pages/Employees';
import { SalaryStatistics } from './components/pages/SalaryStatistics';



function App() {
  const [routes, setRoutes] = useState<RoutesType[]>([]);
  const authUser: string = useSelector<any, string>(state => state.auth.authenticated);
  useEffect(() => {
    function getRoutes(): RoutesType[] {
      return layoutConfig.routes.filter(r => (!authUser && !r.flAuth) || 
      (authUser.includes('admin') && r.flAdmin) ||
      (!!authUser && r.flAuth && !r.flAdmin))
    }
    setRoutes(getRoutes());
  }, [authUser])
  return <BrowserRouter>
  <Routes>
  <Route path='/' element={<Navigator 
           routes={routes} />}>
          <Route index element={<Employees/>}/>
          <Route path='add' element={<AddEmployee/>}/>
          <Route path='statistics/age' element={<AgeStatistics/>}/>
          <Route path='statistics/salary' element={<SalaryStatistics/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/logout' element={<Logout/>} />
      </Route>
          
  </Routes>
</BrowserRouter>
  }

export default App;