import React from 'react'
import { Building, Palette, ShoppingBag } from 'lucide-react'

import { Card, CardContent } from './ui/Card'
import Button from './ui/Button'

const categories = [
    {
        id: 1,
        title: "Building Materials",
        description: "Quality materials for construction and renovation projects",
        icon: Building,
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
        link: "#"
    },
    {
        id: 2,
        title: "Paints & Coatings",
        description: "Premium paints and finishes for any surface",
        icon: Palette,
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f",
        link: "#"
      },
      {
        id: 3,
        title: "Tools & Equipment",
        description: "Professional-grade tools for every project",
        icon: ShoppingBag,
        image: "https://images.unsplash.com/photo-1581166397057-235af2b3c6dd",
        link: "#"
      }
]

const CategorySection = () => {
  return (
    <section className='py-16 bg-white'>
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className='text-3xl md:text-4xl text-blue-900 font-bold mb-4'>Shop By Category</h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'> 
            Explore our wide range of products to find everything you need for your building and painting projects.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-10'>
          {categories.map((category) => (
            <Card key={category.id} className='overflow-hidden transition-all duration-300 hover:shadow-xl border-gray-200'>
              <div className="relative h-56">
                <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover"
                />
                <div className='absolute top-4 left-4 bg-white p-2 rounded-full shadow-md'>
                  <category.icon className='h-6 w-6 text-blue-900' />
                </div>
              </div>
              <CardContent className='p-6'>
                <h3 className='text-blue-900 text-xl font-bold mb-3'>{category.title}</h3>
                <p className='text-gray-600 mb-4'>{category.description}</p>
                <Button className='text-white w-full'>Explore products</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategorySection