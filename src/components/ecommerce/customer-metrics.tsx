import React from "react";
import MetricCard from "@/components/layout/metric-card";
import { UsersIcon } from "lucide-react";

export default function CustomerMetrics() {
  return (
    <MetricCard
      icon={<UsersIcon />}
      title="Customers"
      primaryValue="3,765"
      trendIndicator="11.01%"
    />
  );
}
