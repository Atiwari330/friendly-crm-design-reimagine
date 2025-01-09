import { Users, UserPlus, Bell } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { StatsCard } from "@/components/StatsCard";
import { ClientDemographics } from "@/components/ClientDemographics";
import { ReferralSources } from "@/components/ReferralSources";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-[#F6F6F7]">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-semibold">Analytics</h1>
            
            <div className="flex items-center gap-4">
              <select className="bg-white border rounded-lg px-4 py-2 text-sm">
                <option>Clinical</option>
                <option>Administrative</option>
                <option>Financial</option>
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
              icon={Users}
              title="Active Clients"
              value="1,247"
              change={8.2}
              iconClassName="bg-primary/10 text-primary"
            />
            <StatsCard
              icon={UserPlus}
              title="New Intakes"
              value="83"
              change={12.5}
              iconClassName="bg-primary/10 text-primary"
            />
            <StatsCard
              icon={Bell}
              title="Pending Follow-Ups"
              value="156"
              change={-5.2}
              iconClassName="bg-destructive/10 text-destructive"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <ClientDemographics />
            </div>
            <div>
              <ReferralSources />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;