import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function NewTestimonialPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">New Testimonial</h1>
        <p className="text-muted-foreground">
          Add a new customer testimonial
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Testimonial Details</CardTitle>
          <CardDescription>Fill in the details for the testimonial</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Customer name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">Role/Title</Label>
            <Input id="role" placeholder="e.g., CEO, Manager" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input id="company" placeholder="Company name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="content">Testimonial</Label>
            <Textarea id="content" placeholder="Customer testimonial text" className="min-h-[150px]" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="rating">Rating</Label>
            <Input id="rating" type="number" min="1" max="5" placeholder="1-5" />
          </div>
          <div className="flex gap-2">
            <Button>Create Testimonial</Button>
            <Button variant="outline">Cancel</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

