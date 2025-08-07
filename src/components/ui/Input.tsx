import * as React from "react"

import { cn } from "../../assets/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
    ({className, type, ...props}, ref) => {
        return (
            <input 
            type={type}
            className={cn(
                "flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none shadow-lg disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-black", className
            )}
            ref={ref}
            {...props}
            />
        )
    }
)
Input.displayName = "Input"

export {Input}