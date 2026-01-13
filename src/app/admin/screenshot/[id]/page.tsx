import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function EditScreenshotPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Edit Screenshot</h1>
        <p className="text-muted-foreground">
          Edit screenshot #{params.id}
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Screenshot Details</CardTitle>
          <CardDescription>Update screenshot information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Screenshot title" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="image">Image</Label>
            <Input id="image" type="file" accept="image/*" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Input id="description" placeholder="Optional description" />
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

