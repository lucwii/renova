import React, { useState } from 'react'
import { Card, CardContent } from './ui/Card';

const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Home Owner",
      quote: "Renova provided all the materials I needed for my bathroom renovation. The quality was excellent and their advice helped me complete the project perfectly.",
      avatar: "https://randomuser.me/api/portraits/women/79.jpg"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "General Contractor",
      quote: "As a professional contractor, I rely on quality materials. Renova consistently delivers premium products on time, which is crucial for my business.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      name: "Emma Wilson",
      role: "Interior Designer",
      quote: "The paint selection at Renova is outstanding. My clients are always pleased with the finish quality and color consistency across their projects.",
      avatar: "https://randomuser.me/api/portraits/women/17.jpg"
    }
  ];

const TestemonialsSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1))
    }

    const handleNext = () => {
        setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1))
    }

  return (
    <section className='py-16 bg-white'>
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className='text-3xl md:text-4xl font-bold text-blue-900 mb-4'>
                    What Our Customers Say
                </h2>
                <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                Hear from our satisfied customers about their experiences with Renova products and services.
                </p>
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="relative">
                    <div className="overflow-hidden">
                        <div 
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{transform: `translateX(-${activeIndex * 100}%)`}}
                        >
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className='w-full flex-shrink-0 px-4'>
                                    <Card className='shadow-lg'>
                                        <CardContent className='p-8'>
                                            <div className="flex flex-col items-center text-center">
                                                <div className="mb-4">
                                                    <img 
                                                    src={testimonial.avatar} 
                                                    alt={testimonial.name} 
                                                    className='rounded-full w-20 h-20 object-cover border-4 border-blue-900'
                                                    />
                                                </div>
                                                <svg className="h-8 w-8 text-orange-500 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                                                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                                </svg>
                                                <p className='text-lg mb-6 talic text-gray-600'>
                                                    {testimonial.quote}
                                                </p>
                                                <h4 className='font-bold text-blue-900 text-lg'>
                                                    {testimonial.name}
                                                </h4>
                                                <p className='text-gray-600'>
                                                    {testimonial.role}
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button 
                    onClick={handlePrev}
                    className="absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-renova-gray transition-colors duration-200"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-renova-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                    onClick={handleNext}
                    className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-renova-gray transition-colors duration-200"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-renova-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                <div className="flex justify-center space-x-2 mt-6">
                    {testimonials.map((_, index) => (
                        <button 
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-200 ${activeIndex === index ? "bg-blue-900" : "bg-gray-300"}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default TestemonialsSection