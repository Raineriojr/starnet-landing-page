import { TECHNICAL_TERMS } from "../../data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";

interface TechnicalTagProps {
  tag: string;
}

export function TechnicalTag({ tag }: TechnicalTagProps) {
  const description = TECHNICAL_TERMS[tag];

  const tagContent = (
    <span
      className={cn(
        "text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-text-muted border border-white/5 transition-all text-nowrap",
        description &&
          "cursor-help hover:bg-gold/10 hover:text-gold hover:border-gold/20",
      )}
    >
      {tag}
    </span>
  );

  if (!description) return tagContent;

  return (
    <TooltipProvider delayDuration={200}>
      {/* Tooltip for Desktop Hover */}
      <div className="hidden md:block">
        <Tooltip>
          <TooltipTrigger asChild>
            <button className="outline-none bg-transparent border-none p-0 cursor-help">
              {tagContent}
            </button>
          </TooltipTrigger>
          <TooltipContent side="top" className="max-w-[200px] text-center">
            {description}
          </TooltipContent>
        </Tooltip>
      </div>

      {/* Popover for Mobile Click */}
      <div className="md:hidden">
        <Popover>
          <PopoverTrigger asChild>
            <button className="outline-none bg-transparent border-none p-0 cursor-help">
              {tagContent}
            </button>
          </PopoverTrigger>
          <PopoverContent side="top" className="max-w-[200px] text-center">
            {description}
          </PopoverContent>
        </Popover>
      </div>
    </TooltipProvider>
  );
}
