// useMatch, compares current path to new path (to)
// useResolvedPath, takes a relative or absolute path (/about) and combines with current path and gives the full path
import { Link, useMatch, useResolvedPath } from "react-router-dom"; 

export default function Navbar(){

    // nav elements and tabs
    return (
    <nav class="nav">
        <Link to="/" class="site-title">MathSolver</Link>
        <ul>
            <DirectedLink to="/">Home</DirectedLink>
            <DirectedLink to="/solver">Solver</DirectedLink>
            <DirectedLink to="/calculator">Calculator</DirectedLink>
            <DirectedLink to="/about">About</DirectedLink>
        </ul>
    </nav>
    )
}

function DirectedLink({to,children, ...props}){ // props used in case we add classes to tags

    const resolvedPath = useResolvedPath(to)// converts relative to absolute path
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })// same as window.location.pathname, end: true, makes sure entire path matches (if removed /about/... will loadup)
    return (
        <li class={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}