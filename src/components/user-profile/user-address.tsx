import React from "react";
import {Card} from "@/components/ui/card";

export default function UserAddress() {
  return (
    <>
      <Card>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h2 className="text-lg font-semibold">
              Address
            </h2>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
              <div>
                <p className="mb-2 text-xs leading-normal">
                  Country
                </p>
                <p className="text-sm font-medium">
                  Canada
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs leading-normal">
                  City/State
                </p>
                <p className="text-sm font-medium">
                  Vancouver, BC, Canada.
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs leading-normal">
                  Postal Code
                </p>
                <p className="text-sm font-medium">
                  V4567
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}