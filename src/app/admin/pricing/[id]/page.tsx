import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function EditPricingPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Edit Pricing Plan</h1>
        <p className="text-muted-foreground">
          Edit pricing plan #{params.id}
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Plan Details</CardTitle>
          <CardDescription>Update the details for your pricing plan</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Plan Name</Label>
            <Input id="name" placeholder="e.g., Basic, Pro, Enterprise" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="price">Price</Label>
            <Input id="price" type="number" placeholder="0.00" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Describe what's included in this plan" className="min-h-[100px]" />
          </div>
          <div className="flex gap-2">
            <Button>Save Changes</Button>
            <Button variant="outline">Cancel</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

