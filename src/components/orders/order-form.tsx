"use client";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Form from "@/components/ui/form/form";
import Button from "@/components/ui/button/button";
import styles from "@/components/orders/form-styles.module.css";

const orderSchema = z.object({
  id: z.string().optional(),
  customerId: z.string().min(1, "Customer is required"),
  orderDate: z.string().min(1, "Order date is required"),
  status: z.enum(["pending", "shipped", "delivered", "canceled"]),
  totalAmount: z.number().min(0, "Total amount must be non-negative"),
});

interface Props {
  initialValues?: z.infer<typeof orderSchema>;
}

export default function OrderForm({ initialValues }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(orderSchema),
    mode: "onBlur",
    defaultValues: {
      customerId: initialValues?.customerId || "",
      orderDate: initialValues?.orderDate || "",
      status: initialValues?.status || "pending",
      totalAmount: initialValues?.totalAmount || 0,
    },
  });
  const handleSubmitForm = (values: z.infer<typeof orderSchema>) => {
    console.log("Form Values:", values);
  };
  return (
    <Form
      className={styles.form}
      onSubmit={handleSubmit((values) => handleSubmitForm(values))}
    >
      <div className="grid-col grid-col-md-2">
        <Form.Field controlId="customerId" error={errors.customerId?.message}>
          <Form.Label>Customer</Form.Label>
          <Form.Input
            type="text"
            placeholder="Customer ID"
            {...register("customerId")}
          />
        </Form.Field>
        <Form.Field controlId="orderDate" error={errors.orderDate?.message}>
          <Form.Label>Order Date</Form.Label>
          <Form.Input type="date" {...register("orderDate")} />
        </Form.Field>
      </div>
      <Form.Field controlId="status" error={errors.status?.message}>
        <Form.Label>Status</Form.Label>
        <Form.Select {...register("status")}>
          <option value="pending">Pending</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
          <option value="canceled">Canceled</option>
        </Form.Select>
      </Form.Field>
      <Form.Field controlId="totalAmount" error={errors.totalAmount?.message}>
        <Form.Label>Total Amount</Form.Label>
        <Form.Input
          type="number"
          placeholder="Total Amount"
          {...register("totalAmount")}
        />
      </Form.Field>
      <div className="mt-4">
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
}
