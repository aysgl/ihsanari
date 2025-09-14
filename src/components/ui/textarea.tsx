import * as React from 'react'

import {cn} from '@/lib/utils'

function Textarea({className, ...props}: React.ComponentProps<'textarea'>) {
    return (
        <textarea
            data-slot="textarea"
            className={cn(
                'border-input placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-primary/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex h-34 w-full min-w-0 rounded-md border bg-white px-3 py-2 text-base transition-[color,box-shadow] outline-none focus-visible:ring-[1px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
                className
            )}
            {...props}
        />
    )
}

export {Textarea}
