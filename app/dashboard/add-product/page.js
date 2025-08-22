// // app/dashboard/add-product/page.jsx
// import { getServerSession } from "next-auth";
// import { redirect } from 'next/navigation';
// import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // Import authOptions
// import AddProductForm from "@/app/components/AddProductsForm";

// export default async function AddProductPage() {
//   const session = await getServerSession(authOptions);

//   if (!session) {
//     redirect('/login');
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-4xl font-bold text-center my-8">Add New Product</h1>
//       <AddProductForm />
//     </div>
//   );
// }