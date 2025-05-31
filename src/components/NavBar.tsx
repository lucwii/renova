import React, { useState } from 'react'
import Button from './ui/Button'
import { ShoppingCart, Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
  return (
    
    <header className='sticky top-0 z-50 w-full bg-white shadow-sm'>
        <div className="container mx-auto py-4 px-4 flex items-center justify-between">
            <div className="flex items-center">
                <a href="flex items-center">
                    <span className='text-blue-900 text-2xl font-bold'>RENOVA</span>
                </a>
            </div>

            <nav className='hidden md:flex items-center space-x-8'>
                <Link to="/" className='text-blue-900 hover:text-orange-400 font-medium transition-colors duration-200'>
                    Home
                </Link>
                <Link to="/products" className='text-blue-900 hover:text-orange-400 font-medium transition-colors duration-200'>
                    Products
                </Link>
                <a href="" className='text-blue-900 hover:text-orange-400 font-medium transition-colors duration-200'>
                    Services
                </a>
                <a href="" className='text-blue-900 hover:text-orange-400 font-medium transition-colors duration-200'>
                    About Us
                </a>
                <a href="" className='text-blue-900 hover:text-orange-400 font-medium transition-colors duration-200'>
                    Contact
                </a>
            </nav>

            <div className="flex items-center space-x-4">
                <Button variant='ghost' size="icon" className='relative'>
                    <ShoppingCart className='text-blue-900 h-5 w-5'/>
                    <span className='absolute top-0 right-0 bg-orange-700 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center'>
                        0
                    </span>
                </Button>
                <Button className='text-white hidden md:inline-flex'>Sign in</Button>
                <button onClick={toggleMenu} className='md:hidden'>
                    {isMenuOpen ? <X className="h-6 w-6 text-renova-blue" /> : <Menu className="h-6 w-6 text-renova-blue" />}
                </button>
            </div> 
        </div>

        {isMenuOpen && (
            <div className='md:hidden px-4 py-4 bg-white border-t border-gray-300 animate-fade-in'>
                <nav className='flex flex-col space-y-4 items-center'>
                    <a href="#" className="text-blue-900 hover:text-orange-500 font-medium transition-colors duration-200">
                        Home
                    </a>
                    <a href="#" className="text-blue-900 hover:text-orange-500 font-medium transition-colors duration-200">
                        Products
                    </a>
                    <a href="#" className="text-blue-900 hover:text-orange-500 font-medium transition-colors duration-200">
                        Services
                    </a>
                    <a href="#" className="text-blue-900 hover:text-orange-500 font-medium transition-colors duration-200">
                        About us
                    </a>
                    <Button className='w-full text-white'>Sign in</Button>
                </nav>
            </div>
        )}
    </header>
  )
}

export default NavBar