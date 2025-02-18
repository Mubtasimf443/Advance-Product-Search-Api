//  بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ
//  InshaAllah, By his marcy I will Gain Success

import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Shop from './pages/Shop'
import Contex from './components/contax'

export default function App() {
    const router = createBrowserRouter([{
        path: '/',
        element: <Shop />
    }])
    return (
        <Contex>
            <RouterProvider router={router} />
        </Contex>
    );

}

