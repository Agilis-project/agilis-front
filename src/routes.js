/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import YourWork from "views/examples/YourWork.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Backlog from "views/examples/Backlog.js";
import ActiveSprint from "views/examples/ActiveSprint.js";
import Tasks from "views/examples/Tasks.js";

var routes = [
  {
    path: "/dashboard",
    name: "Projeto",
    icon: "ni ni-app",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/active-sprint",
    name: "Sprint ativa",
    icon: "ni ni-bullet-list-67",
    component: ActiveSprint,
    layout: "/admin",
  },
  {
    path: "/backlog",
    name: "Backlog",
    icon: "ni ni-bullet-list-67",
    component: Backlog,
    layout: "/admin",
  },
  {
    path: "/your-work",
    name: "Meu trabalho",
    icon: "ni ni-single-02",
    component: YourWork,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Registro",
    icon: "ni ni-circle-08",
    component: Register,
    layout: "/auth",
  },
  {
    path: "/task",
    name: "task",
    icon: "ni ni-circle-08",
    component: Tasks,
    layout: "/admin",
  },
];
export default routes;
