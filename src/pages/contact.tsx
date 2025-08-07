import React from 'react'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import { Card, CardContent, CardTitle } from '../components/ui/Card'
import { Label } from '@radix-ui/react-dropdown-menu'
import { Input } from '../components/ui/Input'
import TextArea from '../components/ui/TextArea'
import Button from '../components/ui/Button'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'

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
                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <Label className='block text-sm font-medium mb-2'>First Name</Label>
                                <Input id='firstName' type='text' required />
                              </div>
                              <div>
                                <Label className='block text-sm font-medium mb-2'>Last Name</Label>
                                <Input id='lastName' type='text' required />
                              </div>
                            </div>
                            <div>
                              <Label className='block text-sm font-medium mb-2'>Phone Number</Label>
                              <Input id='phone' type='tel' required />
                            </div>
                            <div>
                              <Label className='block text-sm font-medium mb-2'>Subject</Label>
                              <Input id='subject' type='text' required />
                            </div>
                            <div>
                              <Label className='block text-sm font-medium mb-2'>Message</Label>
                              <TextArea
                              value=''
                              onChange={(e) => e.target.value}
                              placeholder=''
                              className=''
                              id='message'
                               />
                            </div>
                            <div>
                              <Button className='w-full text-white hover:bg-blue-900/80 transition duration-300'>Submit</Button>
                            </div>
                          </form>
                        </CardContent>
                      </Card>
                  </div>
                  <div>
                    <h1 className='text-3xl font-bold mb-6'>Get in Touch</h1>
                    <div className='space-y-6'>
                      <Card className='border-gray-200 py-4 px-4'>
                        <CardTitle className='flex gap-2 items-center'>
                          <MapPin className="h-5 w-5 text-primary" />
                          Our Location
                        </CardTitle>
                        <CardContent className='mt-6'>
                        <p>123 Renovation Street</p>
                        <p>Building City, BC 12345</p>
                        <p>Canada</p>
                        </CardContent>
                      </Card>
                      <Card className='border-gray-200 py-4 px-4'>
                        <CardTitle className='flex gap-2 items-center'>
                          <Phone className="h-5 w-5 text-primary" />
                          Phone
                        </CardTitle>
                        <CardContent className='mt-6'>
                        <p>Main: (555) 123-4567</p>
                        <p>Emergency: (555) 987-6543</p>
                        </CardContent>
                      </Card>
                      <Card className='border-gray-200 py-4 px-4'>
                        <CardTitle className='flex gap-2 items-center'>
                          <Mail className="h-5 w-5 text-primary" />
                          Email
                        </CardTitle>
                        <CardContent className='mt-6'>
                        <p>info@renova.com</p>
                        <p>support@renova.com</p>
                        </CardContent>
                      </Card>
                      <Card className='border-gray-200 py-4 px-4'>
                        <CardTitle className='flex gap-2 items-center'>
                          <Clock className="h-5 w-5 text-primary" />
                          Bussiness Hours
                        </CardTitle>
                        <CardContent className='mt-6'>
                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className='py-16 bg-gray-100'>
              <div className="container mx-auto px-4">
                <h1 className='text-center font-bold text-3xl mb-8'>Find Us</h1>
                <div className='bg-gradient-to-r from-gray-300 to-gray-300/80 h-96 rounded-lg flex items-center justify-center'>
                  <div className="text-center">
                    <MapPin className='h-16 w-16 mx-auto mb-4' />
                    <p className="text-lg font-medium">Interactive Map Coming Soon</p>
                    <p className="">123 Renovation Street, Building City, BC</p>
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