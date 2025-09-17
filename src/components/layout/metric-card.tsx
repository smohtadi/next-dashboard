import React, { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

interface IProps {
  title: string;
  primaryValue: string;
  trendIndicator: string;
  comparisonValue?: string;
  icon?: ReactNode;
}
export default function MetricCard({
  title,
  primaryValue,
  trendIndicator,
  comparisonValue,
  icon,
}: IProps) {
  const downwardTrend = trendIndicator.startsWith("-");
  return (
    <Card className="p-5">
      {icon && icon}
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-sm">{title}</h1>
          <p className="text-2xl font-bold">{primaryValue}</p>
        </div>
        <Badge variant={downwardTrend ? 'success' : 'destructive'}>
          {downwardTrend ? (
            <ArrowDownIcon size={14} />
          ) : (
            <ArrowUpIcon size={14} />
          )}
          {downwardTrend
            ? trendIndicator.substring(1)
            : trendIndicator}
          {comparisonValue && comparisonValue}
        </Badge>
      </div>
    </Card>
  );
}
