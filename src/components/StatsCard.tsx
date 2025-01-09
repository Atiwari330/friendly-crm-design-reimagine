import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  icon: LucideIcon;
  title: string;
  value: string | number;
  change: number;
  iconClassName?: string;
}

export function StatsCard({ icon: Icon, title, value, change, iconClassName }: StatsCardProps) {
  const isPositive = change > 0;

  return (
    <div className="bg-white rounded-xl p-4 border">
      <div className="flex items-center gap-3 mb-3">
        <div className={cn("p-2 rounded-lg", iconClassName)}>
          <Icon className="w-5 h-5" />
        </div>
        <span className="text-sm text-muted-foreground">{title}</span>
      </div>
      
      <div className="flex items-end justify-between">
        <span className="text-2xl font-semibold">{value}</span>
        <div className={cn(
          "flex items-center text-sm",
          isPositive ? "text-green-500" : "text-red-500"
        )}>
          <span>{Math.abs(change)}%</span>
          <svg
            className={cn("w-4 h-4 ml-1", !isPositive && "rotate-180")}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4L12 20M12 4L18 10M12 4L6 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}