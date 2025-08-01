import { useState } from 'react';
import { ShoppingCart, Menu, X, User, LogOut } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/Dropdown-menu";
import Button from './ui/Button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-blue-900 text-2xl font-bold">RENOVA</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-blue-900 hover:text-orange-500 font-medium transition-colors duration-200">
            Home
          </a>
          <a href="/products" className="text-blue-900 hover:text-orange-500 font-medium transition-colors duration-200">
            Products
          </a>
          <a href="#" className="text-blue-900 hover:text-orange-500 font-medium transition-colors duration-200">
            Services
          </a>
          <a href="#" className="text-blue-900 hover:text-orange-500 font-medium transition-colors duration-200">
            About Us
          </a>
          <a href="#" className="text-blue-900 hover:text-orange-500 font-medium transition-colors duration-200">
            Contact
          </a>
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
          <Button className="relative">
            <ShoppingCart className="h-5 w-5 text-white" />
          </Button>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>
                  <User className="h-5 w-5 text-white" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleSignOut}>
                  <LogOut className="mr-2 h-4 w-4 " />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button 
              className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded"
              onClick={() => navigate('/auth')}
            >
              Sign In
            </Button>
          )}

          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X className="h-6 w-6 text-blue-900" /> : <Menu className="h-6 w-6 text-blue-900" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-4 bg-white border-t border-gray-200 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a href="/" className="text-blue-900 hover:text-orange-500 font-medium transition-colors duration-200 py-2">
              Home
            </a>
            <a href="/products" className="text-blue-900 hover:text-orange-500 font-medium transition-colors duration-200 py-2">
              Products
            </a>
            <a href="#" className="text-blue-900 hover:text-orange-500 font-medium transition-colors duration-200 py-2">
              Services
            </a>
            <a href="#" className="text-blue-900 hover:text-orange-500 font-medium transition-colors duration-200 py-2">
              About Us
            </a>
            <a href="#" className="text-blue-900 hover:text-orange-500 font-medium transition-colors duration-200 py-2">
              Contact
            </a>
            {user ? (
              <Button 
                onClick={handleSignOut}
                className="w-full bg-red-600 hover:bg-red-700 text-white"
              >
                Sign Out
              </Button>
            ) : (
              <Button 
                onClick={() => navigate('/auth')}
                className="w-full bg-blue-900 hover:bg-blue-800 text-white"
              >
                Sign In
              </Button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
