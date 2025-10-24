import React from "react";
import ProductGrid from "@/components/products/products";
import { Card } from "@/components/ui/card";

const products = [
  {
    id: "1",
    name: 'MacBook Pro 14"',
    price: "3000.23",
    category: { id: "1", name: "Laptop" },
  },
  {
    id: "2",
    name: "Apple Watch Ultra",
    price: "879.00",
    category: { id: "2", name: "Watch" },
  },
  {
    id: "3",
    name: "iPhone 15 Pro Max",
    price: "1869.00",
    category: { id: "1", name: "Phone" },
  },
  {
    id: "4",
    name: "iPad Pro 3rd Gen",
    price: "1699.00",
    category: { id: "2", name: "Tablet" },
  },
  {
    id: "5",
    name: "AirPods Pro 2nd Gen",
    price: "240.00",
    category: { id: "3", name: "Accessories" },
  },
];

interface Props {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

export default async function Page({ searchParams }: Props) {
  const params = await searchParams;
  const page: number =
    typeof params.page !== "string" || isNaN(parseInt(params.page))
      ? 1
      : parseInt(params.page);
  const term: string = params["term"] || "";
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold mb-6">Table</h1>
        <div className="space-y-6">
          <Card>
            <ProductGrid
              products={products}
              term={term}
              page={page}
              totalElements={products.length}
            />
          </Card>
        </div>
      </div>
    </div>
  );
}
