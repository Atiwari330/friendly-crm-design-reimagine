import { Home, Bell, CheckSquare, FileText, MessageSquare, Calendar, BarChart3, Users, User } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: Home, label: "Home", active: false },
  { icon: Bell, label: "Alerts", active: false },
  { icon: CheckSquare, label: "Follow-Ups", active: false },
  { icon: FileText, label: "Clinical Notes", active: false },
  { icon: MessageSquare, label: "Messages", active: false },
  { icon: Calendar, label: "Schedule", active: false },
  { icon: BarChart3, label: "Analytics", active: true },
  { icon: Users, label: "Referral Sources", active: false },
  { icon: User, label: "Clients", active: false },
];

export function Sidebar() {
  return (
    <div className="w-64 h-screen border-r bg-white flex flex-col">
      <div className="p-4 border-b">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">C</span>
          </div>
          <span className="text-xl font-semibold">Clario</span>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-9 pr-4 py-2 bg-secondary rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <nav className="flex-1 p-4">
        <div className="mb-4">
          <p className="text-sm font-medium text-muted-foreground mb-3">Main Menu</p>
          <ul className="space-y-1">
            {menuItems.slice(0, 6).map((item) => (
              <li key={item.label}>
                <a
                  href="#"
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-secondary transition-colors",
                    item.active && "text-primary bg-secondary"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-muted-foreground mb-3">Record</p>
          <ul className="space-y-1">
            {menuItems.slice(6).map((item) => (
              <li key={item.label}>
                <a
                  href="#"
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-secondary transition-colors",
                    item.active && "text-primary bg-secondary"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}