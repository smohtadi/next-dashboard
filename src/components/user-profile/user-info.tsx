import React from "react";
import { Card } from "@/components/ui/card";

export default function UserInfo() {
  return (
    <Card>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h2 className="text-lg font-semibold lg:mb-6">
            Personal Information
          </h2>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
            <div>
              <p className="mb-2 text-xs leading-normal">First Name</p>
              <p className="text-sm font-medium">John</p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal">Last Name</p>
              <p className="text-sm font-medium">Doe</p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal">Email address</p>
              <p className="text-sm font-medium">johndoe@test.com</p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal">Phone</p>
              <p className="text-sm font-medium">+123456789</p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal">Bio</p>
              <p className="text-sm font-medium">Supervisor</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
