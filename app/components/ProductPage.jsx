
import Image from 'next/image';
import Link from 'next/link';

const ProductPage = ({product}) => {
     return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105">
      {/* Product Image at the top */}
      <div className="relative w-full h-48 sm:h-56 md:h-64">
        <Image
          src={product.image}
          alt={product.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      
      {/* Product Details */}
      <div className="p-4 flex-grow flex flex-col">
        <h2 className="text-xl font-semibold text-green-500 mb-2">
          {product.title}
        </h2>
        <p className="text-gray-600 text-sm mb-4 flex-grow">
          {product.description}
        </p>
        <div className="mt-auto">
          <p className="text-lg font-bold text-green-600 mb-4">
            ${product.price.toFixed(2)}
          </p>
          <Link
            href={`/product-details/${product.id}`}
            className="block text-center px-4 py-2 border border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white cursor-pointer transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;