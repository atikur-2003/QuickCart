// import getAllPosts from '@/lib/getAllData';
import React from "react";
import ProductPage from "../components/ProductPage";

export default async function Products() {
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

  return (
     <div className="container mx-auto px-4 lg:px-10 py-10">
      <h1 className="text-4xl font-bold text-green-500 text-center my-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductPage key={product.id} product={product}></ProductPage>
        ))}
      </div>
    </div>
  );
}
