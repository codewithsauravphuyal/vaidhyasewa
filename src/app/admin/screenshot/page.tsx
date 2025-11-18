import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Image as ImageIcon } from "lucide-react";
import Link from "next/link";

export default function ScreenshotPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Screenshots</h1>
          <p className="text-muted-foreground">
            Manage your screenshots gallery
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/screenshot/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Screenshot
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Screenshots</CardTitle>
          <CardDescription>View and manage all screenshots</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <ImageIcon className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-sm text-muted-foreground">No screenshots yet. Add your first screenshot!</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

