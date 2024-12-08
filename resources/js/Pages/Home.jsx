import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import Products from "@/Components/Products"; // Impor komponen Home
import AddToChart from "@/Components/AddToChart"
import AddProduct from "@/Components/AddProduct";

export default function Home() {
    return (
        <AuthenticatedLayout
            header={
                <button className="bg-blue-500 text-white px-4 py-2 rounded  ">
                              <Link
                                    href={route('home.addproduct')}
                                    active={route().current('home')}
                                >
                                    Add Product
                                </Link>
                            </button>
            }
        >
            <Head title="Product" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                       
                            <div className="product-card border rounded-lg p-4 hover:shadow-lg ">
                             
                                <AddToChart/>
                            </div>
                        </div>
                    </div>
                </div>
         
        </AuthenticatedLayout>
    );
}
