import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {

    const isAuthenticated = useSelector(state => state.user.status === 'authenticated');

  return (
    <nav className="bg-gray-800">
      <ul className="flex justify-start items-center px-4 py-2">
        <li className="mr-6">
          <NavLink
            exact
            to="/"
            className="text-white font-semibold hover:text-gray-300"
          >
            Home
          </NavLink>
        </li>
        <li className="mr-6">
          {isAuthenticated && <NavLink
            to="/generate"
            className="text-white font-semibold hover:text-gray-300"
          > 
            Your QR
          </NavLink> }
        </li>
        <li>
          <NavLink
            to="/login"
            className="text-white font-semibold hover:text-gray-300"
          >
            Log In
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

