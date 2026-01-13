import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ViewContactPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/admin/contact">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Contact Message</h1>
          <p className="text-muted-foreground">
            View message #{params.id}
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Message Details</CardTitle>
          <CardDescription>Contact form submission details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm font-medium">Name</p>
            <p className="text-sm text-muted-foreground">-</p>
          </div>
          <div>
            <p className="text-sm font-medium">Email</p>
            <p className="text-sm text-muted-foreground">-</p>
          </div>
          <div>
            <p className="text-sm font-medium">Subject</p>
            <p className="text-sm text-muted-foreground">-</p>
          </div>
          <div>
            <p className="text-sm font-medium">Message</p>
            <p className="text-sm text-muted-foreground">-</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

