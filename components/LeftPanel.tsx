'use client';

import { Home, Settings, Users } from "lucide-react";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Users, label: 'Users', href: '/users' },
  { icon: Settings, label: 'Settings', href: '/settings' },
];

export default function LeftPanel() {
  const pathname = usePathname();

  return (
    <div className="w-64 min-w-[16rem] border-r bg-background shrink-0 overflow-y-auto">
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm",
              "hover:bg-accent hover:text-accent-foreground",
              "transition-colors",
              pathname === item.href && "bg-accent text-accent-foreground"
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}