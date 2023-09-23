import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AddSweet } from "./dashboard/add-sweet/AddSweet"
import { NavigateProfileOutlet } from "./dashboard/NavigateProfileOutlet";
import { NavigateOutlet } from "./dashboard/NavigateOutlet";
import { Index } from "./index/Index"
import '../api/style.css';
export const MainRoutes = () => {
    return (
        <BrowserRouter future={{ v7_startTransition: true }}>
            <Routes>
                <Route path="/" element={< NavigateOutlet/>}>
                    <Route index element={<Index />} />
                </Route>
                <Route path="/dashboard" element={<NavigateProfileOutlet />}>
                    <Route path="add-sweet" element={<AddSweet />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}