import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium text-sm",
  {
    variants: {
      variant: {
        default:
          "bg-primary/75 text-primary-foreground",
        secondary:
          "bg-secondary text-secondary-foreground",
        destructive:
          "bg-badge-destructive text-badge-destructive-foreground",
        outline:
          "border-1 border-border text-foreground",
        success:
          "bg-badge-success text-badge-success-foreground"
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
