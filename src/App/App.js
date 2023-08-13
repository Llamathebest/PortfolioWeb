import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"; 

import { Layout, Main, Parcours, Contact, Projets, Soumission, 
    Admin, Dashboard, Board, AjouterParcours, AJouterProjet } from "../Data/Paths/Paths";
import { useContext } from "react";
import { authContext } from "../Context/AuthContext";

export default function App() {
    const { user } = useContext(authContext)
    const routes =
    !user ?
            [
                {
                    path:'/',
                    element:<Layout/>,
                    children:
                    [
                        {
                            index:true,
                            element: <Navigate to="/intro" replace />
                        },
                        {
                            path:"intro",
                            element:<Main/>
                        },
                        {
                            path:"projets",
                            element:<Projets/>
                        },
                        {
                            path:"parcours",
                            element:<Parcours/>
                        },
                        {
                            path:"contact",
                            element:<Contact/>
                        },
                        {
                            path:"soumission",
                            element:<Soumission/>
                        }, {
                            path:"admin",
                            element: <Admin/>
                        }
                    ]
                },
                {
                    path: "*",
                    element: <Navigate to="/intro" replace/>
                }
            ]
        : 
        [
            {
                path:'/',
                element: <Dashboard/>,
                children: [
                    {
                        index:true,
                        element: <Navigate to="/dasboard" replace/>
                    },
                    {
                        path:'dasboard',
                        element: <Board/>
                    }, 
                    {
                        path:'ajouterProjet',
                        element: <AJouterProjet/>
                    },
                    {
                        path:'ajouterParcours',
                        element: <AjouterParcours/>
                    },
                    {
                        path:'site/',
                        element:<Layout/>,
                        children: [
                            {
                                path:"intro",
                                element:<Main/>
                            },
                            {
                                path:"projets",
                                element:<Projets/>
                            },
                            {
                                path:"parcours",
                                element:<Parcours/>
                            },
                            {
                                path:"contact",
                                element:<Contact/>
                            },
                            {
                                path:"soumission",
                                element:<Soumission/>
                            }
                        ]
                    }
                   
                ]
            },
            {
                path:'*',
                element: <Navigate to="/dasboard" replace/>
            }
        ]
    

    return (
		  <RouterProvider router={createBrowserRouter(routes)}/>
    );
}
