import React from "react"
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import ProtectedRoute from "./components/ProtectedRoute"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import NotFound from "./pages/NotFound"


function Logout() {
    localStorage.clear()
    return <Navigate to="/login" />
}

function RegisterAndLogout() {
    localStorage.clear()
    return <Register />
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <ProtectedRoute><Home /></ProtectedRoute>,
    },
    {
        path: '/Register',
        element: <RegisterAndLogout />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/logout',
        element: <Logout />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
    
])

function App() {

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
