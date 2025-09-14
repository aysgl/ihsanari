import {cn} from '@/lib/utils'
import Bee from '../../public/svg/Bee'

export default function Title({
    title,
    subTitle,
    description,
    className
}: {
    title: string
    subTitle: string
    description?: string
    className?: string
}) {
    return (
        <div className={cn('', className)}>
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full p-2 px-4">
                <Bee className="w-4 h-4 text-primary" />
                <span className="text-primary font-bold text-xs">
                    {subTitle}
                </span>
            </div>
            <h2 className="text-5xl font-bold mt-4 leading-tight">{title}</h2>
            <p className="text-xl text-muted-foreground mt-4 leading-relaxed">
                {description}
            </p>
        </div>
    )
}
