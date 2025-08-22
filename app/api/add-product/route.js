// import clientPromise from '@/lib/dbConnect';
// import { NextResponse } from 'next/server';

// export async function POST(request) {
//   try {
//     const { title, description, price, image } = await request.json();

//     if (!title || !description || !price || !image) {
//       return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
//     }

//     const client = await clientPromise;
//     const db = client.db(process.env.MONGODB_DB_NAME);
//     const productsCollection = db.collection('products');

//     const newProduct = {
//       title,
//       description,
//       price: parseFloat(price),
//       image,
//       createdAt: new Date(),
//     };

//     const result = await productsCollection.insertOne(newProduct);
    
//     return NextResponse.json({
//       message: 'Product added successfully!',
//       product: newProduct,
//     }, { status: 201 });

//   } catch (error) {
//     console.error('Failed to add product:', error);
//     return NextResponse.json({ message: 'Failed to add product' }, { status: 500 });
//   }
// }