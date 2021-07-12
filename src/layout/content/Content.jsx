import React from 'react'
import Doctor from '../../pages/doctor/Doctor'
import { Route } from 'react-router'
import Home from "../home/Home"
import CategoryList from '../../pages/category/CategoryList'
import Contact from '../../pages/contact/Contact'

export default function Content() {
    return (
        <div>
             <Route exact path="/" component={Home} />
            <Route path="/doctors"  component={Doctor}></Route>
            <Route path="/contacts"  component={Contact}></Route>
            <Route path="/categories" component ={CategoryList}/>
        </div>
    )
}
