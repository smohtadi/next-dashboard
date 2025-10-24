"use client";
import React, { ChangeEvent, ReactNode, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { useDebouncedCallback } from "use-debounce";
import { SearchIcon } from "lucide-react";
import DataTable from "@/components/ui/table/data-table";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import styles from "@/components/layout/data-grid-layout/styles.module.css";

interface Props<T> {
  actions?: ReactNode;
  data: T[];
  columns: ColumnDef<T>[];
  page?: number;
  pageSize?: number;
  totalElements?: number;
  defaultSelected?: string[];
  defaultTerm?: string;
  getRowId?: (row: T) => string;
  onUpdatePage?: (page: number) => void;
  onDelete?: (ids: string[]) => void;
  onSearch?: (term: string) => void;
}

export default function DataGridLayout<T>({
  actions,
  data,
  defaultSelected,
  defaultTerm,
  columns,
  page,
  pageSize,
  totalElements,
  getRowId,
  onUpdatePage,
  onSearch,
  onDelete,
}: Props<T>) {
  const [selected, setSelected] = useState<string[]>(defaultSelected || []);
  const handleDelete = () => {
    if (!Array.isArray(selected) || selected.length === 0) return;
    onDelete?.(selected);
  };
  const handleSearch = useDebouncedCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (!value || value.trim().length === 0) return;
      onSearch?.(value.trim());
    },
    300
  );
  return (
    <div className="">
      <div className={styles.actions}>
        {Array.isArray(selected) && selected.length > 0 && (
          <Button variant="secondary" onClick={handleDelete}>
            Delete
          </Button>
        )}
        {actions && actions}
      </div>
      <div className={styles.controllers}>
        <div className={styles.searchbar}>
          <SearchIcon className={styles.searchIcon} />
          <Input
            className={styles.search}
            defaultValue={defaultTerm || ""}
            name="term"
            type="text"
            onChange={handleSearch}
          />
        </div>
        <div className={styles.fitlers}></div>
        <div className={styles.sort}></div>
      </div>
      <DataTable<T>
        data={data}
        columns={columns}
        page={page}
        pageSize={pageSize}
        totalElements={totalElements}
        getRowId={getRowId}
        onUpdatePage={onUpdatePage}
        selected={selected}
        onUpdateSelect={setSelected}
      />
    </div>
  );
}
