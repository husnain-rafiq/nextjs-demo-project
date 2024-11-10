// app/products/page.tsx
import Image from 'next/image'
import { Product } from '@/types/product'
import Link from 'next/link';


async function getProducts(): Promise<Product[]> {
    // Example data
    const products = [
        {
            id: 1,
            name: 'Ergonomic Chair',
            description: 'High-quality office chair with lumbar support',
            price: 299.99,
            imageUrl: 'https://main-cdn.grabone.co.nz/goimage/fullsize/d5b9ae77d9282bbd8d6f0642b96a725a2bfc3f45.jpg',
            category: 'Office',
            inStock: true
        },
        {
            id: 2,
            name: 'Mechanical Keyboard',
            description: 'RGB backlit mechanical gaming keyboard',
            price: 159.99,
            imageUrl: 'https://e7.pngegg.com/pngimages/562/967/png-clipart-rog-pugio-computer-keyboard-asus-rog-claymore-core-mechanical-gaming-keyboard-gaming-keypad-mesh-computers-computer-keyboard-electronic-device-thumbnail.png',
            category: 'Electronics',
            inStock: true
        },
        {
            id: 3,
            name: 'Wireless Mouse',
            description: 'Ergonomic wireless mouse with adjustable DPI',
            price: 49.99,
            imageUrl: 'https://hardwaremarket.net/wp-content/uploads/2021/03/REDRAGON-M690-Wireless-Gaming-Mouse-5.jpg',
            category: 'Electronics',
            inStock: true
        },
        {
            id: 4,
            name: 'Standing Desk',
            description: 'Adjustable height standing desk for office use',
            price: 399.99,
            imageUrl: 'https://static.independent.co.uk/2024/08/09/12/best-standing-desks.jpg?width=1200&height=1200&fit=crop',
            category: 'Furniture',
            inStock: false
        },
        {
            id: 5,
            name: 'Noise Cancelling Headphones',
            description: 'Wireless headphones with noise cancellation',
            price: 199.99,
            imageUrl: 'https://images.squarespace-cdn.com/content/v1/56f4179737013bbfb02fd393/24b38346-3e03-4d4f-9a41-18bef9e870d0/headphones.png',
            category: 'Electronics',
            inStock: true
        },
        {
            id: 6,
            name: 'Gaming Chair',
            description: 'Comfortable chair designed for long gaming sessions',
            price: 249.99,
            imageUrl: 'https://m.media-amazon.com/images/I/71cH6rmOKwL._AC_UF894,1000_QL80_.jpg',
            category: 'Furniture',
            inStock: true
        },
        {
            id: 7,
            name: 'Smartwatch',
            description: 'Fitness-focused smartwatch with GPS and heart rate monitor',
            price: 129.99,
            imageUrl: 'https://www.kindpng.com/picc/m/193-1939793_most-popular-smartwatches-samsung-galaxy-watch-hd-png.png',
            category: 'Wearable',
            inStock: true
        },
        {
            id: 8,
            name: '4K Monitor',
            description: 'High-resolution 27-inch 4K monitor with HDR',
            price: 349.99,
            imageUrl: 'https://japannext.fr/cdn/shop/files/JN-IPS2802UHDR_front_with_specs_color_background.png?v=1724321233',
            category: 'Electronics',
            inStock: true
        },
        {
            id: 9,
            name: 'Bluetooth Speaker',
            description: 'Portable Bluetooth speaker with high-quality sound',
            price: 89.99,
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWckT6_EsSbqbzaBgofMt1fpd0mXj6lcvbPCNmQnVtaBPkM90MDidV6nuHRwS8zo8kGOs&usqp=CAU',
            category: 'Audio',
            inStock: false
        },
        {
            id: 10,
            name: 'Portable Charger',
            description: 'High-capacity power bank with fast charging',
            price: 29.99,
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEfTjupkrVc8JVyCk-aBoNxThpiBfr_u3UZ-uBF4e6rkhanEH7nliS8uYqDaIdooy41Z8&usqp=CAU',
            category: 'Accessories',
            inStock: true
        },
        {
            id: 11,
            name: 'Fitness Tracker',
            description: 'Waterproof fitness tracker with sleep tracking',
            price: 59.99,
            imageUrl: '/api/placeholder/300/300',
            category: 'Wearable',
            inStock: true
        },
        {
            id: 12,
            name: 'Laptop Stand',
            description: 'Adjustable laptop stand with cooling vents',
            price: 39.99,
            imageUrl: 'data:image/png;base64,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',
            category: 'Accessories',
            inStock: true
        }
        // Add more products as needed
    ]

    return products
}

export default async function ProductsPage() {
    const products = await getProducts()

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Navigation */}
            <header className="bg-white shadow-md">
                <nav className="container mx-auto py-4 px-6 flex justify-between items-center">
                    <Link href="/">
                        My Website
                    </Link>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/products">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Our Products</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="relative w-full h-64">
                                <Image
                                    src={product.imageUrl}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority={product.id <= 4} // Prioritize loading first 4 images
                                />
                            </div>

                            <div className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <h2 className="text-xl font-semibold">{product.name}</h2>
                                    <span className="text-green-600 font-medium">
                                        ${product.price.toFixed(2)}
                                    </span>
                                </div>

                                <p className="text-gray-600 mb-4">{product.description}</p>

                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-500">{product.category}</span>
                                    <span className={`px-2 py-1 rounded-full text-sm ${product.inStock
                                        ? 'bg-green-100 text-green-800'
                                        : 'bg-red-100 text-red-800'
                                        }`}>
                                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}
