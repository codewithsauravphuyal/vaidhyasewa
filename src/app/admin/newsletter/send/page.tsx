import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function SendNewsletterPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Send Newsletter</h1>
        <p className="text-muted-foreground">
          Send a newsletter to all subscribers
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Newsletter Details</CardTitle>
          <CardDescription>Compose your newsletter email</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" placeholder="Newsletter subject" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea id="content" placeholder="Write your newsletter content here..." className="min-h-[300px]" />
          </div>
          <div className="flex gap-2">
            <Button>Send to All Subscribers</Button>
            <Button variant="outline">Save Draft</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

