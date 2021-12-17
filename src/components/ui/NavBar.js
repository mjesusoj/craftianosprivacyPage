import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import { DarkScreen } from '../DarkScreen/DarkScreen';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="menu">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/"
                            activeClassName="active"
                            className="nav-item nav-link"
                        >
                            🏠 Inicio 
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/sobre-mi"
                            activeClassName="active"
                            className="nav-item nav-link"
                        >
                            📲 Redes Sociales
                        </NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <Link
                            aria-expanded="false"
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                            id="navBarDropdown"
                            role="button"
                            title="Gana dinero"
                            to="#"
                        >
                            💸 Gana dinero
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navBarDropdown">
                            <li>
                                <Link
                                    exact
                                    to="/gana-dinero-sin-hacer-nada"
                                    className="dropdown-item"
                                    title="Gana dinero sin hacer nada | Ingresos Pasivos"
                                >
                                    ✅ Gana dinero sin hacer nada
                                </Link>
                            </li>
                            <li>
                                <Link
                                    exact
                                    to="/encuestas-renumeradas"
                                    className="dropdown-item"
                                    title="Encuestas renumeradas"
                                >
                                    💬 Encuestas renumeradas
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    exact
                                    title="Gana dinero jugando"
                                    to="/gana-dinero-jugando"
                                >
                                    🎮 Gana dinero jugando
                                </Link>
                            </li>
                            <li>
                                <Link
                                    exact
                                    className="dropdown-item"
                                    title="Gana cryptos gratis"
                                    to="/gana-cryptos-gratis" 
                                >
                                    🏅 Gana cryptos gratis
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <Link
                            aria-expanded="false"
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                            id="navBarDropdown2"
                            role="button"
                            title="Ahorra dinero"
                            to="#"
                        >
                            👛 Ahorra dinero
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navBarDropdown2">
                            <li>
                                <Link
                                    exact
                                    className="dropdown-item"
                                    title="Recibe cashback por realizar compras"
                                    to="/compras-cashback"
                                >
                                    💱 Recibe cashback por compras online
                                </Link>
                            </li>
                            <li>
                                <Link
                                    exact
                                    className="dropdown-item"
                                    title="Recibe cashback por realizar compras"
                                    to="/apps-dinero-tickets"
                                >
                                    💡 Ahorra con los tickets de supermercado
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/banco-movil-pagos"
                            className="nav-item nav-link"
                            title="Bancos móviles y Pagos"
                        >
                            🏦 Bancos móviles y Pagos
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/blog"
                            className="nav-item nav-link"
                            title="Blog de CraftianosMoney"
                        >
                            📙 Blog
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/enlaces"
                            className="nav-item nav-link"
                            title="Enlaces de CraftianosMoney"
                        >
                           💡 Enlaces 
                        </NavLink>
                    </li>
                </ul>
            </div>
            
            <DarkScreen />
        </nav>
    )
}
