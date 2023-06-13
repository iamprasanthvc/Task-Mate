import React from 'react'
import { Home, About, Contact,Features,HowTO } from './Pages';

export const routes = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/contact', element: <Contact /> },
    { path: '/how-to', element: <HowTO /> },
    { path: '/features', element: <Features /> },


];

