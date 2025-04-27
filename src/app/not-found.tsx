import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20">
      <h1 className="text-8xl font-bold mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-medium mb-6">页面未找到</h2>
      <p className="text-neutral-600 dark:text-neutral-400 max-w-md mb-8">
        抱歉，您访问的页面不存在或已被移除。请尝试返回首页或浏览其他内容。
      </p>
      <Button asChild size="lg">
        <Link href="/">
          返回首页
        </Link>
      </Button>
    </div>
  );
} 