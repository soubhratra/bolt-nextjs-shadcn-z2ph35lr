'use client';

import { useState, useEffect } from "react";
import { UserPlus, Search, MoreVertical, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface User {
  id: number;
  name: string;
  email: string;
  role: 'Admin' | 'User' | 'Editor';
  status: 'Active' | 'Inactive';
  phone: string;
  joinDate: string;
}

function generateDummyUsers(): User[] {
  return Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: ['Admin', 'User', 'Editor'][Math.floor(Math.random() * 3)] as User['role'],
    status: ['Active', 'Inactive'][Math.floor(Math.random() * 2)] as User['status'],
    phone: `+1 ${Math.floor(Math.random() * 1000)}-${Math.floor(Math.random() * 1000)}-${Math.floor(Math.random() * 10000)}`,
    joinDate: new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString()
  }));
}

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    setUsers(generateDummyUsers());
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Users</h2>
          <p className="text-sm text-muted-foreground">Manage your team members and their account permissions here.</p>
        </div>
        <Button>
          <UserPlus className="h-4 w-4 mr-2" />
          Add User
        </Button>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input className="pl-10" placeholder="Search users..." />
        </div>
      </div>

      <div className="border rounded-lg">
        <div className="min-w-full divide-y divide-gray-200">
          <div className="bg-muted/50 p-4 grid grid-cols-6 gap-4 text-sm font-medium text-muted-foreground">
            <div>Name</div>
            <div>Role</div>
            <div>Status</div>
            <div>Email</div>
            <div>Join Date</div>
            <div></div>
          </div>
          <div className="divide-y divide-border">
            {users.map((user) => (
              <div key={user.id} className="p-4 grid grid-cols-6 gap-4 items-center hover:bg-muted/50 transition-colors">
                <div className="font-medium">{user.name}</div>
                <div>{user.role}</div>
                <div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {user.status}
                  </span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 mr-2" />
                  {user.email}
                </div>
                <div className="text-sm text-muted-foreground">{user.joinDate}</div>
                <div className="flex justify-end">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>View Profile</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}