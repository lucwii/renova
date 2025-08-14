import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import Button from '../components/ui/Button';
import ChatWidget from '../components/chat/ChatWidget';

const Services = () => {
    const services = [
        {
          title: "Web Development",
          description: "Custom web applications built with modern technologies",
          features: ["React & TypeScript", "Responsive Design", "SEO Optimization", "Performance Tuning"]
        },
        {
          title: "E-commerce Solutions",
          description: "Complete online store setup and management",
          features: ["Payment Integration", "Inventory Management", "Order Processing", "Customer Support"]
        },
        {
          title: "Digital Marketing",
          description: "Grow your online presence and reach more customers",
          features: ["Social Media Marketing", "Content Strategy", "Email Campaigns", "Analytics & Reporting"]
        },
        {
          title: "Consulting",
          description: "Expert advice to help your business succeed",
          features: ["Business Strategy", "Technology Planning", "Process Optimization", "Team Training"]
        }
      ];
  return (
    <div>
        <Navbar />
            <main>
                <section className='bg-gradient-to-r from-gray-100 to-gray-100/80 py-20'>
                    <div className="container mx-auto px-4 text-center">
                        <h1 className='text-4xl md:text-6xl font-bold mb-6'>Our Services</h1>
                        <p className="text-xl text-muted max-w-3xl mx-auto">
                            We provide comprehensive solutions to help your business thrive in the digital world
                        </p>
                    </div>
                </section>

                <section className='py-20'>
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {services.map((service, index) => (
                                <Card key={index} className='border-gray-200 h-full hover:shadow-xl shadow-lg transition-shadow'>
                                    <CardHeader>
                                        <CardTitle>{service.title}</CardTitle>
                                        <CardDescription className='text-lg mt-2 text-gray-800'>
                                            {service.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className='space-y-2'>
                                            {service.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className='flex items-center'>
                                                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                <section className='py-20 bg-gray-100'>
                    <div className="container mx-auto px-4 text-center">
                        <h2 className='text-3xl font-bold mb-6'>Ready to Get Started?</h2>
                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Contact us today to discuss how we can help your business grow and succeed
                        </p>
                        <Button className='text-white bg-gradient-to-r from-gray-800 to-gray-800/80 hover:bg-black transition duration-300'>
                            Get a Free Consultation
                        </Button>
                    </div>
                </section>
            </main>
        <Footer />
        <ChatWidget />
    </div>
  )
}

export default Services