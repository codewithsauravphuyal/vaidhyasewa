import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Plus } from "lucide-react";
import Link from "next/link";

export default function NewsletterPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Newsletter Subscribers</h1>
          <p className="text-muted-foreground">
            Manage your newsletter subscribers
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/newsletter/send">
            <Plus className="mr-2 h-4 w-4" />
            Send Newsletter
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Subscribers</CardTitle>
          <CardDescription>Email addresses subscribed to your newsletter</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <Mail className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-sm text-muted-foreground">No subscribers yet</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

