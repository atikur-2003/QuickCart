// // import clientPromise from '@/lib/dbConnect';
// import clientPromise from '../../../lib/dbConnect';
// import { NextResponse } from 'next/server';

// export async function GET() {
//   try {
//     const client = await clientPromise;
//     const db = client.db(process.env.DB_NAME); 
//     const productsCollection = db.collection('products');
    
//     const products = await productsCollection.find({}).toArray();
    

//     return NextResponse.json(products, { status: 200 });

//   } catch (error) {
//     console.error('Failed to fetch products:', error);
//     return NextResponse.json({ message: 'Failed to fetch products' }, { status: 500 });
//   }
// }