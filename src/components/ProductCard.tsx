import { Card, CardContent, CardFooter } from './ui/Card';
import { Badge } from './ui/Badge';
import Button from './ui/Button';

interface Product {
    id: string;
    name: string;
    description: string | null;
    price: number;
    image_url: string | null;
    category: string | null;
    featured: boolean | null;
    in_stock: boolean | null;
}

interface ProdcutCardProps {
    product: Product;
}

const ProductCard = ({product}: ProdcutCardProps) => {
  return (
    <Card className='h-full flex flex-col hover:shadow-lg transition-shadow border-gray-200'>
        <div className="relative">
            <img 
            src={product.image_url || '/placeholder.svg'} 
            alt={product.name}
            className='w-full h-48 object-cover rounded-t-lg'
            />
            {product.featured && (
                <Badge className='absolute top-2 left-2 bg-orange-600'>
                    Featured
                </Badge>
            )}
        </div>

        <CardContent className='flex-grow p-4'>
            {product.category && (
                <Badge className='text-foreground bg-gray-200'>
                    {product.category}
                </Badge>
            )}
            <h3 className='font-semibold text-lg mb-2 line-clamp-2'>
                {product.name}
            </h3>
            {product.description && (
                <p className='text-gray-600 text-sm mb-3 line-clamp-3'>{product.description}</p>
            )}
            <div className="text-2xl font-bold text-blue-900">
                ${product.price.toFixed(2)}
            </div>
        </CardContent>

        <CardFooter className='p-4 pt-0'>
            <Button className='w-full bg-blue-900 hover:bg-blue-600 text-white'>
                Add to Cart
            </Button>
        </CardFooter>
    </Card>
  )
}

export default ProductCard