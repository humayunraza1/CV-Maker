import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Pages/Home"
import AppLayout from "./ui/AppLayout"
import Design from "./Pages/Design"

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/register',
                element: ''
            },
            {
                path: '/login',
                element: ''
            },
            {
                path: '/cv/create',
                element: <Design />
            }
        ]
    }

])

function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App
