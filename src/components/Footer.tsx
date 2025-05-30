import React from 'react'
import { Input } from './ui/Input'
import Button from './ui/Button'

const Footer = () => {
  return (
    <footer className='bg-blue-900 text-white'>
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:gird-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <h3 className='text-xl font-bold mb-4'>RENOVA</h3>
                    <p className='mb-4 text-sm'>Your trusted partner for all building and painting supplies. Quality products for professionals and DIYers alike.</p>
                    <div className="flex space-x-4">
                    <a href="#" className="hover:text-renova-orange transition-colors duration-200">
                        <span className="sr-only">Facebook</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path     d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </a>
                    <a href="#" className="hover:text-renova-orange transition-colors duration-200">
                        <span className="sr-only">Instagram</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    </a>
                    <a href="#" className="hover:text-renova-orange transition-colors duration-200">
                        <span className="sr-only">Twitter</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                    </a>
                    <a href="#" className="hover:text-renova-orange transition-colors duration-200">
                        <span className="sr-only">YouTube</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                    </a>
                    </div>
                </div>

                <div>
                    <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
                    <ul>
                        <li><a href="" className='hover:text-orange-500 transition-colors duration-300'>Home</a></li>
                        <li><a href="" className='hover:text-orange-500 transition-colors duration-300'>Products</a></li>
                        <li><a href="" className='hover:text-orange-500 transition-colors duration-300'>Services</a></li>
                        <li><a href="" className='hover:text-orange-500 transition-colors duration-300'>About Us</a></li>
                        <li><a href="" className='hover:text-orange-500 transition-colors duration-300'>Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className='text-lg font-semibold mb-4'>Categories</h3>
                    <ul>
                        <li><a href="" className='hover:text-orange-500 transition-colors duration-300'>Bulding Materials</a></li>
                        <li><a href="" className='hover:text-orange-500 transition-colors duration-300'>Paints & Coating</a></li>
                        <li><a href="" className='hover:text-orange-500 transition-colors duration-300'>Tools & Equipment</a></li>
                        <li><a href="" className='hover:text-orange-500 transition-colors duration-300'>Flooring</a></li>
                        <li><a href="" className='hover:text-orange-500 transition-colors duration-300'>Hardware</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className='text-lg font-semibold mb-4'>Newsletter</h3>
                    <p className='mb-4 text-sm'>Subscribe to our newsletter for the latest products, promotions and tips.</p>
                    <div className="flex flex-col space-y-2">
                        <Input 
                        type='email'
                        placeholder='Your Email Address'
                        className='border-0'
                        />
                        <Button className='bg-orange-600 hover:bg-opacity-90 text-white'>
                            Subscribe
                        </Button>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/20 mt-8 pt-8 text-sm text-center">
                <p>&copy; {new Date().getFullYear()} Renova. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer