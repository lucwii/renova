import React from 'react'
import Button from './ui/Button'

const PromoBanner = () => {
  return (
    <section className='p-12 bg-gradient-to-r from-blue-900 to-blue-800 text-white'>
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <h2 className='text-2xl md:text-3xl font-bold mb-2'>
                        Special Offer: 15% Off All Paints
                    </h2>
                    <p className='text-lg opacity-90'>
                        Limited time offer. Use code: RENOVA15
                    </p>
                </div>
                <Button className='bg-orange-600 hover:bg-blue-900 transition duration-500 text-white px-8 py-6 text-lg'>Shop Now</Button>
            </div>
        </div>
    </section>
  )
}

export default PromoBanner