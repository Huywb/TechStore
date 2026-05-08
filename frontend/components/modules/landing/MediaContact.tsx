import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import {X} from 'lucide-react'

interface MediaContactProps {
    className?: string,
    iconClassName?: string,
}

const MediaContact:React.FC<MediaContactProps> = ({className,iconClassName}) => {
    const MediaData = [ 
        {
            title: "Facebook",
            href: 'https://www.facebook.com',
            icon: <X className="w-5 h-5"/>
        },
        {
            title: "Youtube",
            href: 'https://www.youtube.com',
            icon: <X className="w-5 h-5"/>
        },
        {
            title: "Slack",
            href: 'https://www.slack.com',
            icon: <X className="w-5 h-5"/>
        },
        {
            title: "Github",
            href: 'https://www.github.com',
            icon: <X className="w-5 h-5"/>
        },{
            title: "Linkedin",
            href: 'https://www.linked.com',
            icon: <X className="w-5 h-5"/>
        }
    ]
  return (
    <TooltipProvider>
      <div className={cn('flex items-center gap-3.5 mt-5 mx-4',className)}> 
        {
            MediaData.map((item)=>(
                <Tooltip key={item.href}>
                    <TooltipTrigger >
                        <a href={item.href} target='_blank' rel='noopener noreferer' className={cn(' rounded-full',iconClassName)}>
                            {item.icon}
                        </a>
                    </TooltipTrigger>
                    <TooltipContent>
                        {item.title}
                    </TooltipContent>
                </Tooltip>
            ))
        }
      </div>
    </TooltipProvider>
  )
}

export default MediaContact
