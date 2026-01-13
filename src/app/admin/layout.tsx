"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarInset,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  LayoutDashboard,
  FileText,
  Briefcase,
  MessageSquare,
  Image as ImageIcon,
  Mail,
  List,
  X,
  Settings,
  User,
} from "lucide-react";

function useActive(path: string) {
  const pathname = usePathname();
  return React.useMemo(() => {
    if (!pathname) return false;
    if (path === "/admin/dashboard") return pathname === "/admin/dashboard";
    return pathname.startsWith(path);
  }, [pathname, path]);
}


function getStoredAdminUser() {
  if (typeof window === "undefined") return null;

  const stored =
    window.localStorage.getItem("vaidhya_admin_user") ??
    window.sessionStorage.getItem("vaidhya_admin_user");

  if (!stored) return null;

  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [currentUser, setCurrentUser] = React.useState<any | null>(null);
  const [isCheckingAuth, setIsCheckingAuth] = React.useState(true);

  React.useEffect(() => {
    const user = getStoredAdminUser();

    if (!user) {
      router.replace("/login");
    } else {
      setCurrentUser({
        ...user,
        role: user.role ?? "admin",
      });
    }

    setIsCheckingAuth(false);
  }, [router]);

  function handleLogout() {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("vaidhya_admin_user");
      window.sessionStorage.removeItem("vaidhya_admin_user");
    }

    router.push("/login");
  }

  // Pure function: compute active state using already-read pathname (no hooks)
  function isActivePath(path: string) {
    if (!pathname) return false;
    if (path === "/admin/dashboard") return pathname === "/admin/dashboard";
    return pathname.startsWith(path);
  }

  const NavItem = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
    <SidebarMenuItem>
      <SidebarMenuButton asChild isActive={isActivePath(href)}>
        <Link href={href} className="flex items-center gap-2 cursor-pointer">
          <Icon className="h-4 w-4" />
          <span>{label}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );

  const SubItem = ({ href, label }: { href: string; label: string }) => (
    <SidebarMenuSubItem>
      <SidebarMenuSubButton asChild isActive={isActivePath(href)}>
        <Link href={href} className="cursor-pointer">{label}</Link>
      </SidebarMenuSubButton>
    </SidebarMenuSubItem>
  );

  const SidebarHeaderContent = () => {
    const { isMobile, setOpenMobile } = useSidebar();
    
    return (
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-1.5 justify-between">
          {/* current logged in admin/member avatar + role */}
          {currentUser && (
            <div className="flex items-center gap-2">
              {currentUser.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={currentUser.photo} alt={currentUser.name || currentUser.email} className="size-8 rounded object-cover border" />
              ) : (
                <div className="size-8 rounded bg-primary flex items-center justify-center text-xs text-primary-foreground">
                  {(currentUser.name || currentUser.email || "").charAt(0).toUpperCase()}
                </div>
              )}
              <div>
                <div className="text-sm font-medium">{currentUser.name || currentUser.email}</div>
                <div className="text-xs text-muted-foreground">{String(currentUser.role || "admin")}</div>
              </div>
            </div>
          )}
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 shrink-0 cursor-pointer"
              onClick={() => setOpenMobile(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </SidebarHeader>
    );
  };

  const AdminHeader = React.forwardRef<HTMLDivElement>((_, ref) => {
    const { toggleSidebar } = useSidebar();

    return (
      <div ref={ref} className="sticky top-0 z-30 border-b bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="flex h-16 sm:h-15 items-center justify-between px-3 sm:px-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger />
            <Separator 
              orientation="vertical" 
              className="h-6 hidden sm:block cursor-pointer hover:bg-muted transition-colors" 
              onClick={toggleSidebar}
            />
            <div className="font-medium text-sm sm:text-base hidden sm:block">Admin</div>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <Button size="sm" variant="ghost" onClick={handleLogout} className="text-xs sm:text-sm px-2 sm:px-3 cursor-pointer">Logout</Button>
          </div>
        </div>
      </div>
    );
  });
  AdminHeader.displayName = "AdminHeader";

  if (isCheckingAuth) {
    return (
      <div className="flex min-h-screen items-center justify-center text-sm text-muted-foreground">
        Loading admin workspace...
      </div>
    );
  }

  if (!currentUser) {
    return null;
  }

  return (
    <SidebarProvider>
      <Sidebar collapsible="offcanvas" className="w-64">
        <SidebarHeaderContent />
        <SidebarContent>
          {/* Dashboard Section */}
          <SidebarGroup>
            <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <NavItem href="/admin/dashboard" icon={LayoutDashboard} label="Overview" />
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarSeparator />

          {/* Content Management Section */}
          <SidebarGroup>
            <SidebarGroupLabel>Content Management</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {/* Blog Posts */}
                <SidebarMenuItem>
                  <SidebarMenuSubButton isActive={isActivePath("/admin/blog")}>
                    <FileText className="h-4 w-4" />
                    <span>Blog Posts</span>
                  </SidebarMenuSubButton>
                  <SidebarMenuSub>
                    <SubItem href="/admin/blog" label="All Posts" />
                    <SubItem href="/admin/blog/new" label="New Post" />
                  </SidebarMenuSub>
                </SidebarMenuItem>

                {/* Screenshots */}
                <SidebarMenuItem>
                  <SidebarMenuSubButton isActive={isActivePath("/admin/screenshot")}>
                    <ImageIcon className="h-4 w-4" />
                    <span>Screenshots</span>
                  </SidebarMenuSubButton>
                  <SidebarMenuSub>
                    <SubItem href="/admin/screenshot" label="All Screenshots" />
                    <SubItem href="/admin/screenshot/new" label="Add New" />
                  </SidebarMenuSub>
                </SidebarMenuItem>

                {/* Testimonials */}
                <SidebarMenuItem>
                  <SidebarMenuSubButton isActive={isActivePath("/admin/testimonials")}>
                    <MessageSquare className="h-4 w-4" />
                    <span>Testimonials</span>
                  </SidebarMenuSubButton>
                  <SidebarMenuSub>
                    <SubItem href="/admin/testimonials" label="All Testimonials" />
                    <SubItem href="/admin/testimonials/new" label="Add New" />
                  </SidebarMenuSub>
                </SidebarMenuItem>

                {/* Pricing */}
                <SidebarMenuItem>
                  <SidebarMenuSubButton isActive={isActivePath("/admin/pricing")}>
                    <Briefcase className="h-4 w-4" />
                    <span>Pricing</span>
                  </SidebarMenuSubButton>
                  <SidebarMenuSub>
                    <SubItem href="/admin/pricing" label="All Plans" />
                    <SubItem href="/admin/pricing/new" label="Add New" />
                  </SidebarMenuSub>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarSeparator />

          {/* Communication Section */}
          <SidebarGroup>
            <SidebarGroupLabel>Communication</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <NavItem href="/admin/contact" icon={Mail} label="Contact Messages" />
                <NavItem href="/admin/newsletter" icon={List} label="Newsletter Subscribers" />
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarSeparator />

          {/* Demo Section */}
          <SidebarGroup>
            <SidebarGroupLabel>Demo Management</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <NavItem href="/admin/demo/demoAccount" icon={User} label="Demo Accounts" />
                <NavItem href="/admin/demo/demoRequest" icon={List} label="Demo Requests" />
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarSeparator />

          {/* Settings Section */}
          <SidebarGroup>
            <SidebarGroupLabel>Settings</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <NavItem href="/admin/users" icon={User} label="Users" />
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      <SidebarInset>
        <AdminHeader />
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6"
        >
          {children}
        </motion.div>
      </SidebarInset>
    </SidebarProvider>
  );
}
