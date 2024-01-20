import { Outlet } from "react-router-dom"
function AppLayout() {
    return (
        <>
            <main className="bg-black w-screen h-screen">
                <Outlet />
            </main>
        </>
    )
}

export default AppLayout
