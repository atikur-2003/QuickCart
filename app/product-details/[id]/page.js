import { notFound } from 'next/navigation';
import Image from 'next/image';

export default async function ProductDetailsPage({ params }) {

     const products = [
    {
      id: "1",
      image:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cnVubmluZyUyMHNob2V8ZW58MHx8MHx8fDA%3D",
      title: "Running Shoes",
      description:
        "High-performance running shoes designed for comfort and speed. Perfect for both casual runners and athletes.",
      price: 89.99,
    },
    {
      id: "2",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2680&auto=format&fit=crop",
      title: "Smartphone X",
      description:
        "The latest smartphone with a stunning display, powerful processor, and a long-lasting battery.",
      price: 699.0,
    },
    {
      id: "3",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2670&auto=format&fit=crop",
      title: "Wireless Headphones",
      description:
        "Immersive sound quality with noise-cancellation. Enjoy your music without any distractions.",
      price: 129.5,
    },
    {
      id: "4",
      image:
        "https://images.unsplash.com/photo-1698502453332-03fa2ddceb71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlnaXRhbCUyMGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Digital Camera",
      description:
        "Capture life's moments in stunning detail. Compact design with professional-grade features.",
      price: 349.99,
    },
    {
      id: "5",
      image:
        "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
      title: "Smart Watch",
      description:
        "Track your fitness, monitor your health, and stay connected on the go with this sleek smart watch.",
      price: 199.95,
    },
    {
      id: "6",
      image:
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
      title: "Laptop Pro",
      description:
        "Powerful and lightweight laptop for all your work and creative needs. Featuring a crystal-clear display.",
      price: 1199.0,
    },
  ];

  const productId = await params;

  const product = products.find(p => p.id === productId.id);

 
  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-5 lg:px-12 py-20">
    <div className='text-center mb-10'>
        <h1 className='text-3xl text-green-500 font-bold'>Product Details Here</h1>
    </div>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="md:w-1/2">
          <div className="relative w-full h-96">
            <Image
              src={product.image}
              alt={product.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold text-green-500 mb-4">{product.title}</h1>
          <p className="text-gray-700 text-lg mb-6">{product.description}</p>
          <div className="flex items-center gap-4 mb-6">
            <p className="text-2xl font-bold text-green-600">${product.price.toFixed(2)}</p>
          </div>
          <button
            className="px-4 py-2 border border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white cursor-pointer transition0"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}