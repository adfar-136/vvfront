import { Disclosure, Menu } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../Context/AuthProvider';

export default function Navbar() {
  const { isAuthenticated, userDetails, logout } = useAuth(); // Access auth state and actions
  const location = useLocation(); // Get current path for active link styling

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'MERN', href: '/mern' },
    { name: 'Contact', href: '/contact' },
    { name: 'Student', href: '/student' },
    { name: 'Who Am I', href: '/who-am-i' },
  ];

  // Handle Sign Out
  const handleSignOut = async () => {
    logout(); // Call logout from AuthContext
  };

  return (
    <Disclosure as="nav" className="bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          {/* Left Section: Logo and Navigation Links */}
          <div className="flex items-center">
            <div className="flex shrink-0 items-center">
              <a href="/">
                <img alt="Variable Verse" src="/vvlogo.png" className="h-8 w-auto" />
              </a>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-4 py-2 rounded-lg text-lg font-medium border-2 ${
                    location.pathname === link.href
                      ? 'border-green-500 bg-green-100 text-green-700'
                      : 'border-gray-200 text-gray-600 hover:border-green-400 hover:text-green-700 hover:bg-gray-100'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section: Profile or Sign In/Sign Up */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Menu as="div" className="relative ml-3">
              <div>
                {isAuthenticated ? (
                  <Menu.Button className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt="Profile"
                      src="/logo.png"
                      className="h-8 w-8 rounded-full"
                    />
                  </Menu.Button>
                ) : (
                  <div className="space-x-4">
                    <Link
                      to="/signin"
                      className="text-lg font-medium text-white bg-green-600 px-5 py-2 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                      Sign In
                    </Link>
                  </div>
                )}
              </div>

              {/* Dropdown Menu for Authenticated User */}
              {isAuthenticated && (
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/profile"
                        className={`block px-4 py-2 text-lg ${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        }`}
                      >
                        Profile
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={handleSignOut}
                        className={`block w-full text-left px-4 py-2 text-lg ${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        }`}
                      >
                        Sign out
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              )}
            </Menu>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex items-center sm:hidden">
            <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
            </Disclosure.Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <Disclosure.Panel className="sm:hidden">
        <div className="space-y-2 pb-3 pt-2">
          {navLinks.map((link) => (
            <Disclosure.Button
              key={link.name}
              as={Link}
              to={link.href}
              className={`block px-4 py-2 rounded-lg border-2 text-lg font-medium ${
                location.pathname === link.href
                  ? 'border-green-500 bg-green-100 text-green-700'
                  : 'border-gray-200 text-gray-600 hover:border-green-400 hover:text-green-700 hover:bg-gray-100'
              }`}
            >
              {link.name}
            </Disclosure.Button>
          ))}
        </div>

        {/* Mobile User Menu */}
        {isAuthenticated ? (
          <div className="border-t border-gray-200 pt-4">
            <div className="px-4">
              <div className="text-lg font-medium text-gray-800">{userDetails?.name}</div>
              <div className="text-sm font-medium text-gray-500">{userDetails?.email}</div>
            </div>
            <div className="mt-3 space-y-1">
              <Disclosure.Button
                as={Link}
                to="/profile"
                className="block px-4 py-2 text-lg font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-800"
              >
                Profile
              </Disclosure.Button>
              <Disclosure.Button
                as="button"
                onClick={handleSignOut}
                className="block w-full text-left px-4 py-2 text-lg font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-800"
              >
                Sign out
              </Disclosure.Button>
            </div>
          </div>
        ) : (
          <div className="border-t border-gray-200 pt-4">
            <Disclosure.Button
              as={Link}
              to="/signin"
              className="block px-4 py-2 text-lg font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-800"
            >
              Sign In
            </Disclosure.Button>
            <Disclosure.Button
              as={Link}
              to="/signup"
              className="block px-4 py-2 text-lg font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-800"
            >
              Sign Up
            </Disclosure.Button>
          </div>
        )}
      </Disclosure.Panel>
    </Disclosure>
  );
}
