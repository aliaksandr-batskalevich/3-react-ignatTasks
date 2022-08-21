import React from 'react'
import {Route, Routes} from "react-router-dom";
import PreJunior from "./pages/PreJunior/PreJunior";
import Error404 from "./pages/Error404";
import Junior from "./pages/Junior/Junior";

type titlePathType = {
    title: string
    path: string
}
type pathType = {
    preJunior: titlePathType
    junior: titlePathType
    juniorPlus: titlePathType
}

export const path: pathType = {
    preJunior: {title: 'Pre-junior', path: '/'},
    junior: {title: 'Junior', path: '/junior'},
    juniorPlus: {title: 'Junior Plus', path: '/junior-plus'},
}

function RoutesForProject() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<PreJunior/>}/>
                <Route path={'/junior'} element={<Junior/>}/>
                <Route path={'/*'} element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default RoutesForProject
