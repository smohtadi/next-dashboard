import React from "react";
import MetricCard from "@/components/layout/metric-card";
import { BoxIcon } from "lucide-react";

export default function OrdersMetrics() {
  return (
    <MetricCard
      title="Orders"
      primaryValue="5,359"
      trendIndicator="-9.05%"
      icon={<BoxIcon />}
    />
  );
}
