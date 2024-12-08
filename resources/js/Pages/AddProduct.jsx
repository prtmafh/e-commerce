import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Products from "@/Components/Products"; // Impor komponen Home
import AddToChart from "@/Components/AddToChart"
import AddProduct from "@/Components/AddProduct";

export default function AddProduct() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Add Products
                </h2>
            }
        >
            <Head title="Add Products" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                       
                            <div className="product-card border rounded-lg p-4 hover:shadow-lg">
                              <AddProduct/>
                            </div>
                        </div>
                    </div>
                </div>
         
        </AuthenticatedLayout>
    );
}
