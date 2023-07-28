import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"; 

import { Layout, Main, Parcours, Contact, Projets, Soumission } from "../Data/Paths/Paths";

export default function App() {
    const routes =
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
                        }
                    ]
                },
                {
                    path: "*",
                    element: <Navigate to="/intro" replace/>
                }
            ]
    

    return (
		  <RouterProvider router={createBrowserRouter(routes)}/>
    );
}
