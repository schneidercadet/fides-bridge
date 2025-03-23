import * as React from "react";
import { Input } from "@/Components/ui/input";
import { cn } from "@/lib/utils";

function SubscribeInput({ 
  className, 
  ...props 
}: React.ComponentProps<"input">) {
  return (
    <Input
      type="email"
      placeholder="Email"
      className={cn(
        "w-full bg-transparent border-none rounded-full text-white placeholder-gray-400 focus-visible:ring-blue-400 focus-visible:ring-1 focus-visible:border-white/40",
        className
      )}
      required
      {...props}
    />
  )
}

export { SubscribeInput } 