'use client';

export default function MainContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 p-6 bg-background/95">
      {children}
    </div>
  );
}