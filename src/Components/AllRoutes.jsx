import React from "react"
import ContactPage from "./ContactPage"
import Charts from "./Charts"
import { Route, Routes } from "react-router-dom"

const AllRoutes=()=>{
    return(
        <div>
       <Routes>
        <Route path="/contactpage" element={<ContactPage/>}/>
        <Route path="/charts&maps" element={<Charts/>}/>
        </Routes>
        </div>
    )
}

export default AllRoutes