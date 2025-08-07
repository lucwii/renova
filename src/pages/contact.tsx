import React from 'react'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import { Card, CardContent } from '../components/ui/Card'

const contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted")
  }
  return (
    <div className="min-h-screen flex flex-col">
        <Navbar />
          <main className='flex-grow'>
            <section className='py-20 bg-gradient-to-r from-blue-800 to-blue-800/80'>
              <div className="container mx-auto px-4 text-center">
                <h1 className='text-4xl md:text-5xl font-bold mb-10 text-white'>Contact Us</h1>
                <p className='font-semibold text-white text-xl md:text-2xl'>Get in touch with our expert team for all your renovation needs</p>
              </div>
            </section>

            <section className="py-16">
              <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <h2 className='text-3xl font-bold mb-6'>Send Us a Message</h2>
                      <Card className='border-gray-200'>
                        <CardContent className='py-6'>
                          <form action="" onSubmit={handleSubmit} className='space-y-6'>
                            
                          </form>
                        </CardContent>
                      </Card>
                  </div>
                </div>
              </div>
            </section>
          </main>
        <Footer />
    </div>
  )
}

export default contact