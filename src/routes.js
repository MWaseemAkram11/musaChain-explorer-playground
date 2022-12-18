//importing layouts....
import Layout1 from './Layouts/Layout1';
import Layout2 from "./Layouts/Layout2";
//importing pages
import Home from './views/Home';
import Tokens from './views/Tokens';
import Blockchain from './views/Blockchain'

var routes = [
  {
    path: "/",
    layout: Layout1,
    name: "Home Page",
    access: true,
    exact: true,
    component: Home
  },
  {
    path: "tokens",
    layout: Layout1,
    name: "Tokens",
    access: true,
    exact: true,
    component: Tokens
  },
  {
    path: "blockchain",
    layout: Layout1,
    name: "Blockchain",
    access: true,
    exact: true,
    component: Blockchain
  }

];

export default routes;
