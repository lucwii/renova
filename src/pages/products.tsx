import { useState } from 'react'
import { supabase } from '../integrations/supabase/client'
import { useQuery } from '@tanstack/react-query'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import ProductFilters from '../components/ProductFilters'
import ChatWidget from '../components/chat/ChatWidget'

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("")
    const [showFeaturedOnly, setShowFeaturedOnly] = useState(false)

    const {data: products, isLoading, error } = useQuery({
        queryKey: ['products', selectedCategory, showFeaturedOnly],
        queryFn: async () => {
            let query = supabase
            .from('products')
            .select('*')
            .eq('in_stock', true)
            .order('created_at', {ascending: false})

        if(selectedCategory) {
            query = query.eq('category', selectedCategory)
        }

        if(showFeaturedOnly) {
            query = query.eq('featured', true)
        }

        const {data, error} = await(query);

        if(error) {
            console.error("Error fetching products:", error)
            throw error
        }

        return data
    }
})

    const {data: categories} = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const {data, error} = await supabase
            .from('products')
            .select('category')
            .not('category', 'is', null)

        if(error) throw error 

        const uniqueCategories = [...new Set(data.map(item => item.category))];
        return uniqueCategories
        }
    });

  if (error) {
    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />
            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="text-center">
                    <h1 className='text-2xl font-bold text-red-600 mb-4'>Error loading products</h1>
                    <p className="text-gray-600">Sorry, we couldn't load the products. Please try again later.</p>
                </div>
            </main>
            <Footer />
        </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow">
            <div className="bg-blue-900 text-white py-12">
                <div className="container mx-auto px=4">
                    <h1 className='text-4xl font-bold mb-4'>Our Products</h1>
                    <p className='text-lg opacity-90'>
                        Discover our wide range of quality building materials, paints, and tools
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
            <ProductFilters
            categories={ (categories || []).filter((c): c is string => c !== null) }
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            showFeaturedOnly={showFeaturedOnly}
            onFeaturedToggle={setShowFeaturedOnly}
          />
                {isLoading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="bg-gray-200 animate-pulse rounded-lg h-80">
                            </div>
                        ))}
                    </div>
                ) : (
                    <>
                        <div className="flex justify-between items-center mt-8 mb-4">
                            <p className='text-gray-600'>
                                {products?.length || 0} product{products?.length !== 1 ? 's' : ''} found
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {products?.map((product => (
                                <ProductCard  key={product.id} product={product} />
                            )))}
                        </div>
                    </>
                )}
            </div>
        </main>
    <Footer />
    <ChatWidget />
    </div>
  )
}

export default Products