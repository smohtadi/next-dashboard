"use client";
import React from "react";
import Link from "next/link";
import DataGridLayout from "@/components/layout/data-grid-layout/data-grid-layout";
import { ColumnDef } from "@tanstack/react-table";
import useGridNavigation from "@/hooks/use-grid-navigation";
import paths from "@/config/paths";
import { IOrder } from "@/types";
import Button from "../ui/button/button";

interface Props {
  items: IOrder[];
  term: string;
  page: number;
  totalElements: number;
}

const columns: ColumnDef<IOrder>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => (
      <Link href={paths.ordersEdit.getHref(row.original.id)}>
        {row.getValue("id")}
      </Link>
    ),
  },
  {
    accessorKey: "customer",
    header: "Customer",
    cell: ({ row }) =>
      `${row.original.customer.firstName} ${row.original.customer.lastName}`,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => row.original.status.name,
  },
  { accessorKey: "date", header: "Date" },
  { accessorKey: "price", header: "Price" },
  { accessorKey: "amount", header: "Amount" },
];

export default function Orders({ items, term, page, totalElements }: Props) {
  const { onUpdatePage, onSearch } = useGridNavigation();
  if (!Array.isArray(items) || items.length === 0) return null;
  return (
    <DataGridLayout<IOrder>
      actions={
        <Button variant="primary" asChild>
          <Link href={paths.ordersCreate.getHref()}>Create Order</Link>
        </Button>
      }
      columns={columns}
      data={items}
      page={page}
      getRowId={(r) => r.id}
      defaultTerm={term}
      onUpdatePage={onUpdatePage}
      onSearch={onSearch}
      totalElements={totalElements}
    />
  );
}
