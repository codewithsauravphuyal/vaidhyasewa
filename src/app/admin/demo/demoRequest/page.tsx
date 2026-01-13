import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { List } from "lucide-react";

export default function DemoRequestPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Demo Requests</h1>
        <p className="text-muted-foreground">
          View and manage demo requests
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Demo Requests</CardTitle>
          <CardDescription>View and manage demo requests from users</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <List className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-sm text-muted-foreground">No demo requests yet</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

