import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function TestimonialsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Testimonials</h1>
          <p className="text-muted-foreground">
            Manage customer testimonials and reviews
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/testimonials/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Testimonial
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Testimonials</CardTitle>
          <CardDescription>View and manage all testimonials</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <MessageSquare className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-sm text-muted-foreground">No testimonials yet. Add your first testimonial!</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

