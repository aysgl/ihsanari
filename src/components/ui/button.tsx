import * as React from 'react'
import {Slot} from '@radix-ui/react-slot'
import {cva, type VariantProps} from 'class-variance-authority'

import {cn} from '@/lib/utils'

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium transition-colors duration-300 ease-in-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-6 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    {
        variants: {
            variant: {
                default:
                    'bg-primary text-primary-foreground shadow-xs hover:bg-black hover:text-white [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:rotate-45',
                destructive:
                    'bg-destructive text-white shadow-xs hover:bg-black [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:rotate-45',
                outline:
                    'border bg-background shadow-xs hover:bg-black hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:rotate-45',
                secondary:
                    'bg-secondary text-secondary-foreground shadow-xs hover:bg-black [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:rotate-45',
                ghost: 'text-primary hover:bg-primary/10 [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:rotate-45',
                link: 'text-primary underline-offset-4 hover:underline [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:rotate-45 hover:bg-black'
            },
            size: {
                default: 'h-9 px-4 py-2 has-[>svg]:px-3 font-bold',
                sm: 'h-8 rounded-sm gap-1.5 px-3 has-[>svg]:px-2.5 font-bold',
                lg: 'h-12 rounded-sm px-8 has-[>svg]:px-6 font-bold text-lg',
                icon: 'size-9'
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'default'
        }
    }
)

function Button({
    className,
    variant,
    size,
    asChild = false,
    ...props
}: React.ComponentProps<'button'> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean
    }) {
    const Comp = asChild ? Slot : 'button'

    return (
        <Comp
            data-slot="button"
            className={cn(buttonVariants({variant, size, className}))}
            {...props}
        />
    )
}

export {Button, buttonVariants}
