"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";

const ChatAssistant = dynamic(() => import("@/Components/ChatAssistant"), {
  ssr: false,
  loading: () => null,
});

export default function ChatAssistantWrapper() {
  return (
    <Suspense fallback={null}>
      <ChatAssistant />
    </Suspense>
  );
} 