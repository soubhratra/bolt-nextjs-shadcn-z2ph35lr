'use client';

import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./ui/tabs";

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Settings</h2>
        <p className="text-muted-foreground">Manage your account settings and preferences.</p>
      </div>

      <Tabs defaultValue="general">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        <TabsContent value="general">
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">General Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Language</label>
                <p className="text-sm text-muted-foreground">Choose your preferred language.</p>
              </div>
              <div>
                <label className="text-sm font-medium">Theme</label>
                <p className="text-sm text-muted-foreground">Select your preferred theme.</p>
              </div>
              <Button>Save Changes</Button>
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="notifications">
          <Card className="p-6">
            <h3 className="text-lg font-medium">Notification Preferences</h3>
          </Card>
        </TabsContent>
        <TabsContent value="security">
          <Card className="p-6">
            <h3 className="text-lg font-medium">Security Settings</h3>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}