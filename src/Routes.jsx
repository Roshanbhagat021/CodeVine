import App from "./App.jsx";
import PageNotFound from './Components/PageNotFound.jsx';
import { ThemeProvider } from "./Contexts/themeContext.jsx";

const routes = [
  {
    path: '/',
    element: <ThemeProvider><App /></ThemeProvider>
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
];

export default routes;
