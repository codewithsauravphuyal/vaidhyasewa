import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";

export default function DemoAccountPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Demo Accounts</h1>
        <p className="text-muted-foreground">
          Manage demo accounts for testing
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Demo Accounts</CardTitle>
          <CardDescription>View and manage demo accounts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <User className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-sm text-muted-foreground">No demo accounts yet</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

