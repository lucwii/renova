import React from 'react'
import Button from './ui/Button'
import { Navigate, useNavigate } from 'react-router-dom'

const HeroSection = () => {
    const navigate = useNavigate()
  return (
    <div className="relative bg-gray-100 overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative z-10">
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight mb-6'>
                        Build Your Dream Home <span className='text-orange-600'>With Renova</span>
                    </h1>
                    <p className='text-gray-700 text-lg md:text-xl mb-8'>
                        Your one-stop shop for quality building materials, paints, and all home renovation essentials. Whether you're a professional or DIY enthusiast, we've got everything you need.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button onClick={() => navigate('/products')} variant="default" className='text-white text-lg px-8 py-6 hover:bg-blue-300 transition duration-300' size="lg">
                            Shop Now
                        </Button>
                        <Button variant="outline" size="lg" className='text-lg px-8 py-6 border-gray-200 border-1 bg-gray-200 shadow-lg transition duration-300 hover:bg-orange-400'>
                            Our Services
                        </Button>
                    </div>
                </div>
                <div className="relative hidden md:block">
                    <img 
                    src="https://images.unsplash.com/photo-1518005020951-eccb494ad742" 
                    alt="Modern home renovation" 
                    className="rounded-xl shadow-2xl w-full h-auto max-h-[600px] object-cover"
                    />
                    <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 md:p-6">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-orange-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <p className='text-lg font-bold text-blue-900'>Quality Guaranteed</p>
                                <p className='text-gray-600'>Premium msterials for lasting results</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection