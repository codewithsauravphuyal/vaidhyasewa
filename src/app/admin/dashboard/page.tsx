import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LayoutDashboard, FileText, MessageSquare, Mail, Users, Image as ImageIcon } from "lucide-react";

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Blog Posts",
      value: "0",
      description: "Published articles",
      icon: FileText,
      color: "text-primary",
    },
    {
      title: "Testimonials",
      value: "0",
      description: "Customer reviews",
      icon: MessageSquare,
      color: "text-primary",
    },
    {
      title: "Contact Messages",
      value: "0",
      description: "Unread messages",
      icon: Mail,
      color: "text-primary",
    },
    {
      title: "Screenshots",
      value: "0",
      description: "Total screenshots",
      icon: ImageIcon,
      color: "text-primary",
    },
    {
      title: "Users",
      value: "0",
      description: "Registered users",
      icon: Users,
      color: "text-primary",
    },
    {
      title: "Newsletter Subscribers",
      value: "0",
      description: "Email subscribers",
      icon: Mail,
      color: "text-primary",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your admin dashboard. Manage your content and settings from here.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions in your dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">No recent activity</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Use the sidebar to navigate to different sections</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

