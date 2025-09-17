import UserAddress from "@/components/user-profile/user-address";
import UserInfo from "@/components/user-profile/user-info";
import UserMeta from "@/components/user-profile/user-meta";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "User Profile ",
  description:
    "User Profile page for Dashboard Template",
};

export default function Profile() {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold mb-6">
          Profile
        </h1>
        <div className="space-y-6">
          <UserMeta />
          <UserInfo />
          <UserAddress />
        </div>
      </div>
    </div>
  );
}