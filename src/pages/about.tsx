import React from 'react'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className='min-h-screen'>
        <Navbar />
        <main className="flex-grow">
            <section className='bg-gradient-to-r from-blue-800 to-blue-900/80 py-20'>
                <div className="container text-center px-4 mx-auto">
                    <h1 className='text-white md:text-6xl font-bold text-4xl'>About RENOVA</h1>
                    <p className='mx-auto text-xl text-white mt-4 md:text-2xl font-semibold'>Your trusted partner in home renovation and improvement solutions</p>
                </div>
            </section>

            <section className='py-16'>
                <div className="mx-auto text-center max-w-4xl px-4 container">
                    <h1 className='text-gray-800 mb-12 text-3xl md:text-4xl font-bold'>Our Story</h1>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className='text-lg mb-6'>
                                Founded in 2010, RENOVA has been at the forefront of home renovation, 
                                providing quality products and exceptional service to homeowners across the region. 
                                What started as a small family business has grown into a trusted name in the industry.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-gray-200 to-gray-200/80 h-64 rounded-lg flex items-center justify-center">
                            <span className="text-6xl">🏠</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-100/50 py-16">
                <div className="container mx-auto px-4">
                    <h2 className='text-center md:text-4xl text-3xl mb-12 font-bold'>Our values</h2>
                    
                </div>
            </section>
        </main>
        <Footer />
    </div>
  )
}

export default About