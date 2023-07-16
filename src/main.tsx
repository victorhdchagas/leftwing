import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createHashRouter,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page';
import "./index.css";
import Party, { partyLoader } from './routes/Party';
import Root from "./routes/root";
import Deputy, { loader } from './routes/Deputy';

const router = createHashRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/:party",
                element: <Party />,
                loader: partyLoader,
                children: [
                    {
                        path: "/:party/:deputyName",
                        element: <Deputy />,
                        loader: loader,
                    }
                ]
            },
        ],
    }
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
