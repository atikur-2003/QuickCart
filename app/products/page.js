// import getAllPosts from '@/lib/getAllData';
import React from "react";
import ProductPage from "../components/ProductPage";

export default async function Products() {
  const products = [
    {
      id: "1",
      image:
        "https://i.postimg.cc/TYSvZ9rS/luis-felipe-lins-J2-w-AQDckus-unsplash.jpg",
      title: "Running Shoes",
      description:
        "High-performance running shoes designed for comfort and speed. Perfect for both casual runners and athletes.",
      price: 89.99,
    },
    // {
    //   id: "2",
    //   image:
    //     "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2680&auto=format&fit=crop",
    //   title: "Smartphone X",
    //   description:
    //     "The latest smartphone with a stunning display, powerful processor, and a long-lasting battery.",
    //   price: 699.0,
    // },
    // {
    //   id: "3",
    //   image:
    //     "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2670&auto=format&fit=crop",
    //   title: "Wireless Headphones",
    //   description:
    //     "Immersive sound quality with noise-cancellation. Enjoy your music without any distractions.",
    //   price: 129.5,
    // },
    // {
    //   id: "4",
    //   image:
    //     "https://images.unsplash.com/photo-1546868894-f8de4f0f6224?q=80&w=2574&auto=format&fit=crop",
    //   title: "Digital Camera",
    //   description:
    //     "Capture life's moments in stunning detail. Compact design with professional-grade features.",
    //   price: 349.99,
    // },
    // {
    //   id: "5",
    //   image:
    //     "https://images.unsplash.com/photo-1550995646-348243f7ec96?q=80&w=2565&auto=format&fit=crop",
    //   title: "Smart Watch",
    //   description:
    //     "Track your fitness, monitor your health, and stay connected on the go with this sleek smart watch.",
    //   price: 199.95,
    // },
    // {
    //   id: "6",
    //   image:
    //     "https://images.unsplash.com/photo-1588872657578-7efd1f155b08?q=80&w=2670&auto=format&fit=crop",
    //   title: "Laptop Pro",
    //   description:
    //     "Powerful and lightweight laptop for all your work and creative needs. Featuring a crystal-clear display.",
    //   price: 1199.0,
    // },
    // {
    //   id: "7",
    //   image:
    //     "https://images.unsplash.com/photo-1526170375837-1d57945952f9?q=80&w=2670&auto=format&fit=crop",
    //   title: "Retro Vinyl Player",
    //   description:
    //     "A classic record player with a modern twist. Enjoy the warm sound of vinyl records with Bluetooth connectivity.",
    //   price: 250.0,
    // },
    // {
    //   id: "8",
    //   image:
    //     "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=2672&auto=format&fit=crop",
    //   title: "Designer Backpack",
    //   description:
    //     "Stylish and durable backpack with multiple compartments, perfect for daily commute or travel.",
    //   price: 75.0,
    // },
  ];

  return (
     <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductPage key={product.id} product={product}></ProductPage>
        ))}
      </div>
    </div>
  );
}
