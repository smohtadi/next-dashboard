import React from "react";
import { Metadata } from "next";
import CustomerMetrics from "@/components/ecommerce/customer-metrics";
import MonthlySalesChart from "@/components/ecommerce/monthly-sales-chart";
import MonthlyTarget from "@/components/ecommerce/monthly-target";
import OrdersMetrics from "@/components/ecommerce/orders-metrics";
import RecentOrders from "@/components/ecommerce/recent-orders";
import StatisticsChart from "@/components/ecommerce/statistics-chart";

export const metadata: Metadata = {
  title: "E-commerce Dashboard",
  description: "This is a Next.js Dashboard Template",
};
export default function EcommercePage() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12 space-y-6 lg:col-span-7">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          <CustomerMetrics />
          <OrdersMetrics />
        </div>
        <MonthlySalesChart />
      </div>
      <div className="col-span-12 lg:col-span-5">
        <MonthlyTarget />
      </div>
      <div className="col-span-12">
        <StatisticsChart />
      </div>
      {/* <div className="col-span-12 lg:col-span-5">
        <Demographics />
      </div> */}
      <div className="col-span-12 lg:col-span-7">
        <RecentOrders />
      </div>
    </div>
  );
}
