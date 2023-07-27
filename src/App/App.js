import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"; 

export default function App() {

    const routes =
            
            [{
                path:'/',
                element:<Layout/>
            }]
    

    return (
		  <RouterProvider router={createBrowserRouter(routes)}/>
    );
}
