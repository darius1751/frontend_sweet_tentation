import { HashRouter, Route, Routes } from "react-router-dom";
import { IndexDemo } from "./IndexDemo";

export const DemoApi = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" Component={IndexDemo}/>
            </Routes>
        </HashRouter>      
    )
}