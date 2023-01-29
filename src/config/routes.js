import React from "react";
import Result404 from "../pages/result/404"

import Login from "../pages/login"
import Main from "../pages/main"

// 路由表
export const routes = [
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/admin",
        element: <h1>Admin Page</h1>,
        children: [
            {
                index: true,
                element: <h1>Admin - Index</h1>
            },
            {
                path: "test",
                element: <h1>Admin - Test</h1>
            },
            {
                path: "*",
                element: <Result404/>
            }
        ]
    },
    {
        path: "/",
        element: <Main/>,
    },
    {
        path: "*",
        element: <Result404/>,
    }
];