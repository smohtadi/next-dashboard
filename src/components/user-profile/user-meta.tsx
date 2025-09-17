import React from "react";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";


export default function UserMeta() {
  return (
    <>
      <Card>
        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex flex-col items-center w-full gap-6 xl:flex-row">
              <Image
                width={80}
                height={80}
                src="/images/user/owner.jpg"
                alt="user"
              />
            <CardHeader className="order-3 xl:order-2">
              <h1 className="mb-2 text-lg font-semibold text-center xl:text-left">
                John Doe
              </h1>
              <div className="flex flex-col items-center gap-1 text-center xl:flex-row xl:gap-3 xl:text-left">
                <p className="text-sm">
                  Supervisor
                </p>
                <div className="hidden h-3.5 w-px xl:block"></div>
                <p className="text-sm">
                  Vancouver, Canada
                </p>
              </div>
            </CardHeader>
            <CardContent className="flex items-center order-2 gap-2 grow xl:order-3 xl:justify-end">
              <Button asChild variant="outline">
                <a target="_blank" rel="noreferrer" href='https://www.facebook.com/'>
                  <Facebook size={20} />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href='https://www.linkedin.com/' target="_blank" rel="noreferrer">
                <Linkedin size={20} />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href='https://x.com/' target="_blank" rel="noreferrer">
                <Twitter size={20} />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href='https://instagram.com/' target="_blank" rel="noreferrer">
                <Instagram size={20} />
                </a>
              </Button>
            </CardContent>
          </div>
        </div>
      </Card>
    </>
  );
}