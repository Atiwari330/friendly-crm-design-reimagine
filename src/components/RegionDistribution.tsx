import { MoreHorizontal } from "lucide-react";

const regions = [
  {
    country: "United States",
    flag: "🇺🇸",
    category: "Electronics and Technology",
    value: 19800,
    percentage: 55
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    category: "Fashion, Electronics, and Tech",
    value: 2320,
    percentage: 20
  },
  {
    country: "Philippines",
    flag: "🇵🇭",
    category: "Fashion and Computer",
    value: 9800,
    percentage: 25
  }
];

export function RegionDistribution() {
  return (
    <div className="bg-white rounded-xl p-4 border">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold">Region Distribution</h3>
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

      <div className="space-y-4">
        {regions.map((region) => (
          <div key={region.country} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl">{region.flag}</span>
                <div>
                  <p className="font-medium">{region.country}</p>
                  <p className="text-sm text-muted-foreground">{region.category}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">{region.value.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">{region.percentage}%</p>
              </div>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full"
                style={{ width: `${region.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}