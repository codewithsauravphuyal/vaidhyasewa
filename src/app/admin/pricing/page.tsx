import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Pricing Plans</h1>
          <p className="text-muted-foreground">
            Manage your pricing plans and packages
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/pricing/new">
            <Plus className="mr-2 h-4 w-4" />
            New Plan
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Pricing Plans</CardTitle>
          <CardDescription>View and manage all pricing plans</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">No pricing plans yet. Create your first plan!</p>
        </CardContent>
      </Card>
    </div>
  );
}

