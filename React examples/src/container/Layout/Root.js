import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./style.css";
import routes from "../../routes";
const logo = new URL("/src/assets/images/js_logo.png", import.meta.url);

const Root = () => {
  return (
    <div className="app-root">
      <aside className="sidebar">
        <section>
          <Link to="/" style={{alignSelf: "center"}}><img src={logo} height={100} width={100} alt="js logo" /></Link>
          <ul>
            {routes.map((route) => {
              return (
                <li key={route.id}>
                  <nav>
                    <Link to={route.path}>{route.label}</Link>
                  </nav>
                </li>
              );
            })}
          </ul>
        </section>
      </aside>
      <main className="main-container">{<Outlet />}</main>
    </div>
  );
};

export default Root;
