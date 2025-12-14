// src/app/layout.tsx (Example of where to add the component)

import "@/styles/globals.css";
import ChatAssistantBubble from '@/components/ChatAssistantBubble'; // Import it here

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children} 

        {/* === Place the Bubble Component here === */}
        <ChatAssistantBubble /> 
      </body>
    </html>
  );
}