import { createBrowserRouter } from 'react-router-dom';
import Login from '../Components/Login/Login';
import Main from '../Components/Layout/Main';
import SignUp from '../Components/SignUp/SignUp';
import CheckOut from '../Pages/CheckOut/CheckOut';
import Home from '../Pages/Home/Home';
import Orders from '../Pages/Orders/Orders';
import AllServices from '../Pages/Services/AllServices';
import PrivateRouter from './PrivateRouter';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/checkOut/:id',
                element: <PrivateRouter><CheckOut></CheckOut></PrivateRouter>,
                loader: ({ params }) => fetch(`https://genius-car-server-sigma-five.vercel.app/services/${params.id}`)
            },
            {
                path: '/services',
                element: <AllServices></AllServices>,
                // loader: () => fetch('https://genius-car-server-sigma-five.vercel.app/services')
            },
            {
                path: '/orders',
                element: <PrivateRouter><Orders></Orders></PrivateRouter>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
        ]
    }

])



export default router;