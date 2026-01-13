import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function SendContactPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Send Message</h1>
        <p className="text-muted-foreground">
          Send a message to a contact
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Compose Message</CardTitle>
          <CardDescription>Send an email message</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="to">To</Label>
            <Input id="to" type="email" placeholder="recipient@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" placeholder="Message subject" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Write your message here..." className="min-h-[200px]" />
          </div>
          <div className="flex gap-2">
            <Button>Send Message</Button>
            <Button variant="outline">Save Draft</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

