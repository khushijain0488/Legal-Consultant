import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Scale, UserCircle } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-blue-600" />
            <span className="font-bold text-xl text-gray-800">Know Your Rights</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/services" className="text-gray-600 hover:text-blue-600">Services</Link>
            <Link to="/find-lawyer" className="text-gray-600 hover:text-blue-600">Find Lawyer</Link>
            <Link to="/expert-support" className="text-gray-600 hover:text-blue-600">Expert Support</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to={user.role === 'lawyer' ? '/lawyer-dashboard' : '/user-dashboard'} className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                  <UserCircle className="w-6 h-6" />
                  <span>{user.name}</span>
                </Link>
                <button
                  onClick={logout}
                  className="text-red-600 hover:text-red-700"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;