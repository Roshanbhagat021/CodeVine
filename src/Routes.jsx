import App from "./App.jsx";
import PageNotFound from './Components/PageNotFound.jsx';

const routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
];

export default routes;
