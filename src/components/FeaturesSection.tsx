import React from 'react'
import { Card, CardContent } from './ui/Card';

const features = [
    {
      id: 1,
      title: "Quality Products",
      description: "We source only the highest quality building materials and paints from trusted manufacturers.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-renova-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Expert Advice",
      description: "Our team of professionals is ready to provide guidance for all your building and painting projects.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-renova-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Fast Delivery",
      description: "We ensure prompt delivery of your purchases to your home or construction site.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-renova-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Customer Support",
      description: "Our dedicated customer service team is always ready to assist you with any questions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-renova-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
    },
  ];

const FeaturesSection = () => {
  return (
    <section className='py-16 bg-gray-100'>
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className='text-3xl md:text-4xl font-bold text-blue-900 mb-4'>
                    Why Choose Renova?
                </h2>
                <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                    We're committed to providing the best products and services for all your building and painting needs.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature => (
                    <Card key={feature.id} className='shadow-lg hover:shadow-xl transition-shadow duraiton-300 border-gray-200'>
                        <CardContent className='p-6 flex flex-col items-center text-center'>
                            <div className="mb-4 text-orange-500">{feature.icon}</div>
                            <h3 className='text-xl font-bold text-blue-900 mb-2'>{feature.title}</h3>
                            <p className='text-gray-600'>{feature.description}</p>
                        </CardContent>
                    </Card>
                )))}
            </div>
        </div>
    </section>
  )
}

export default FeaturesSection