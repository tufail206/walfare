import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import ShardComp from './components/shardComp/ShardComp'
import { Paths } from './utils/PathConstant'
import {About, Activites, Contact, Error, Gallery, Home} from './pages'
function App() {


  return (
    <>
      <Routes >
        <Route element={<ShardComp/>}  >
         <Route path={Paths.HOME} index element={<Home/>} />   
         <Route path={Paths.ABOUT}  element={<About/>} />   
         <Route path={Paths.CONTACT}  element={<Contact/>} />   
         <Route path={Paths.ACTIVITIES}  element={<Activites/>} />   
         <Route path={Paths.GALLERY}  element={<Gallery/>} />   
         <Route path={Paths.ERROR}  element={<Error/>} />   
        </Route>
      </Routes>
    </>
  )
}

export default App
