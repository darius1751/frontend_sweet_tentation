import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Index } from "./index/Index"
import { AddSweet } from "./dashboard/add-sweet/AddSweet"
import { DashboardOutlet } from "./dashboard/DashboardOutlet";
import '../api/style.css';
export const MainRoutes = () => {
    return (
        <BrowserRouter future={{ v7_startTransition: true }}>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/dashboard" element={<DashboardOutlet />}>
                    <Route path="add-sweet" element={<AddSweet />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}