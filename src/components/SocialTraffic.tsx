import { MoreHorizontal } from "lucide-react";

const platforms = [
  { name: "LinkedIn", percentage: 47.5 },
  { name: "Twitter", percentage: 89.2 }
];

export function SocialTraffic() {
  return (
    <div className="bg-white rounded-xl p-4 border">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold">Social Traffic</h3>
          <button className="text-muted-foreground hover:text-foreground">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 12L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="12" cy="16" r="1" fill="currentColor"/>
            </svg>
          </button>
        </div>
        <button className="text-muted-foreground hover:text-foreground">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-6">
        {platforms.map((platform) => (
          <div key={platform.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">{platform.name}</span>
              <span className="text-sm font-medium">{platform.percentage}%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-500"
                style={{ width: `${platform.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}