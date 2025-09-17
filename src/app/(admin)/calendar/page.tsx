import React from "react";
import { Metadata } from "next";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Calendar ",
  description: "User Calendar page for Dashboard Template",
};

export default function Profile() {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold mb-6">Calendar</h1>
        <div className="space-y-6">
          <Card>
          <Calendar mode="single" className="rounded-lg border mx-auto" />
          </Card>
        </div>
      </div>
    </div>
  );
}
