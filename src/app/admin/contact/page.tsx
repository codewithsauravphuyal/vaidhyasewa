import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Contact Messages</h1>
          <p className="text-muted-foreground">
            View and manage contact form submissions
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Messages</CardTitle>
          <CardDescription>Contact messages from your website</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <Mail className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-sm text-muted-foreground">No contact messages yet</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

