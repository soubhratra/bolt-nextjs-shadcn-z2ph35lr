'use client';

import { useState } from "react";
import { MessageSquare, Maximize2, Pin } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export default function ChatPanel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && (
        <div className="w-52 min-w-[13rem] border-l bg-background shrink-0 overflow-hidden flex flex-col">
          <div className="h-12 min-h-[3rem] border-b flex items-center justify-between px-4 shrink-0">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              <span className="font-medium">Chat</span>
            </div>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Maximize2 className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-[80vh] p-0">
                <div className="flex flex-col h-full">
                  <div className="h-12 border-b flex items-center justify-between px-4">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      <DialogTitle className="text-base font-medium">Chat</DialogTitle>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => setIsOpen(false)}
                    >
                      <Pin className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex-1 p-4 overflow-auto">
                    {/* Chat messages will go here */}
                    <div className="text-muted-foreground text-center pt-8">
                      No messages yet. Start a conversation!
                    </div>
                  </div>
                  <div className="border-t p-4">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Type a message..."
                        className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <Button 
                        size="sm" 
                        className="absolute right-2 top-1/2 transform -translate-y-1/2"
                      >
                        Send
                      </Button>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <div className="text-muted-foreground text-center pt-8">
              No messages yet. Start a conversation!
            </div>
          </div>
          <div className="border-t p-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Type a message..."
                className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button 
                size="sm" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      )}
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-[80vh] p-0">
            <div className="flex flex-col h-full">
              <div className="h-12 border-b flex items-center justify-between px-4">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  <DialogTitle className="text-base font-medium">Chat</DialogTitle>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setIsOpen(false)}
                >
                  <Pin className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex-1 p-4 overflow-auto">
                {/* Chat messages will go here */}
                <div className="text-muted-foreground text-center pt-8">
                  No messages yet. Start a conversation!
                </div>
              </div>
              <div className="border-t p-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button 
                    size="sm" 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  >
                    Send
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}