"use client";
import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import DataGridLayout from "@/components/layout/data-grid-layout/data-grid-layout";
import { IProduct } from "@/types";

interface Props {
  products: IProduct[];
  term: string;
  page: number;
  totalElements: number;
}

const columns: ColumnDef<IProduct>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <Link href={"/"+row.original.id}>
        {row.getValue("name")}
      </Link>
    ),
  },
  { accessorKey: "category", header: "Category", cell: ({ row }) => row.original.category.name },
  { accessorKey: "price", header: "Price" },
];

export default function Products({
  products,
  page,
  term,
  totalElements,
}: Props) {
  if (!Array.isArray(products) || products.length === 0) return null;

  return (
    <DataGridLayout<IProduct>
      columns={columns}
      data={products}
      page={page}
      getRowId={(r) => r.id}
      defaultTerm={term}
      totalElements={totalElements}
    />
  );
}
