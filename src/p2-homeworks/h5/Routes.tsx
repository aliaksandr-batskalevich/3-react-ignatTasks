import React from 'react'
import {Route, Routes} from "react-router-dom";
import PreJunior from "./pages/PreJunior/PreJunior";
import Error404 from "./pages/Error404";
import Junior from "./pages/Junior/Junior";
import JuniorBetter from "./pages/Junior+/JuniorBetter";

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
                <Route path={path.preJunior.path} element={<PreJunior/>}/>
                <Route path={path.junior.path} element={<Junior/>}/>
                <Route path={path.juniorPlus.path} element={<JuniorBetter/>}/>
                <Route path={'/*'} element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default RoutesForProject
