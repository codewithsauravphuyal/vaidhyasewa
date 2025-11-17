'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { User, ExternalLink, Clipboard, Check } from "lucide-react";
import Link from "next/link";

interface DemoAccount {
  role: string;
  email: string;
  password: string;
  description: string;
  officialUrl: string;
}

interface DemoCardProps {
  account: DemoAccount;
}

export default function DemoCard({ account }: DemoCardProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPassword, setCopiedPassword] = useState(false);

  const copyToClipboard = async (text: string, setCopied: (value: boolean) => void) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="border border-transparent bg-bluegray-50 p-6 sm:p-8 rounded-lg shadow-sm transition-all hover:border-teal-400 hover:shadow-md">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-700">
          <User className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-lg font-semibold sm:text-xl">{account.role}</h3>
      </div>
      <p className="mb-6 text-base text-bluegray-500 sm:text-sm">{account.description}</p>
      <div className="mb-6 space-y-3 rounded-lg bg-white p-4 border border-gray-100">
        <div className="relative">
          <p className="mb-1 font-medium text-xs text-bluegray-500">Email</p>
          <div className="relative flex items-center">
            <p className="break-all flex-1 rounded bg-bluegray-50 p-2 text-bluegray-900 text-sm font-mono">
              {account.email}
            </p>
            <Button
              variant="ghost"
              size="sm"
              className="ml-2 h-8 w-8 p-0"
              onClick={() => copyToClipboard(account.email, setCopiedEmail)}
              title={copiedEmail ? "Copied!" : "Copy email"}
            >
              {copiedEmail ? <Check className="h-4 w-4 text-green-500" /> : <Clipboard className="h-4 w-4" />}
            </Button>
          </div>
          {copiedEmail && (
            <p className="mt-1 text-xs text-green-600 font-medium text-right">Copied!</p>
          )}
        </div>
        <div className="relative">
          <p className="mb-1 font-medium text-xs text-bluegray-500">Password</p>
          <div className="relative flex items-center">
            <p className="flex-1 rounded bg-bluegray-50 p-2 text-bluegray-900 text-sm font-mono">
              {account.password}
            </p>
            <Button
              variant="ghost"
              size="sm"
              className="ml-2 h-8 w-8 p-0"
              onClick={() => copyToClipboard(account.password, setCopiedPassword)}
              title={copiedPassword ? "Copied!" : "Copy password"}
            >
              {copiedPassword ? <Check className="h-4 w-4 text-green-500" /> : <Clipboard className="h-4 w-4" />}
            </Button>
          </div>
          {copiedPassword && (
            <p className="mt-1 text-xs text-green-600 font-medium text-right">Copied!</p>
          )}
        </div>
      </div>
      <Button asChild className="w-full bg-teal-700 hover:bg-teal-700/90 font-semibold shadow-md text-white">
        <a
          href={account.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          Try Demo <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
  );
}