import { Coins, Users, BarChart3 } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { StatsCard } from "@/components/StatsCard";
import { RegionDistribution } from "@/components/RegionDistribution";
import { SocialTraffic } from "@/components/SocialTraffic";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-[#F6F6F7]">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-semibold">Reports</h1>
            
            <div className="flex items-center gap-4">
              <select className="bg-white border rounded-lg px-4 py-2 text-sm">
                <option>Sales</option>
                <option>Marketing</option>
                <option>Support</option>
              </select>
              
              <div className="flex items-center gap-2 bg-white border rounded-lg px-4 py-2">
                <span className="text-sm text-muted-foreground">Last updated:</span>
                <span className="text-sm font-medium">Feb 28, 2024</span>
                <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L12 20M12 4L18 10M12 4L6 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <StatsCard
              icon={Coins}
              title="Total Sales"
              value="$23,569.00"
              change={10.5}
              iconClassName="bg-primary/10 text-primary"
            />
            <StatsCard
              icon={BarChart3}
              title="Product Revenue"
              value="$11,322.00"
              change={-10.5}
              iconClassName="bg-destructive/10 text-destructive"
            />
            <StatsCard
              icon={Users}
              title="Total Deals"
              value="1,204"
              change={10.5}
              iconClassName="bg-primary/10 text-primary"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <RegionDistribution />
            </div>
            <div>
              <SocialTraffic />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;