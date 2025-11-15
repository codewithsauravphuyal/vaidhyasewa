import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Server, CheckCircle2, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Security - Vaidhya Sewa",
  description: "Learn about Vaidhya Sewa's security measures and compliance",
};

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All data is encrypted in transit and at rest using industry-standard AES-256 encryption",
  },
  {
    icon: Server,
    title: "Secure Infrastructure",
    description: "Hosted on AWS with multi-region redundancy and automatic failover",
  },
  {
    icon: Shield,
    title: "Role-Based Access Control",
    description: "Granular permissions ensure users only access data they're authorized to see",
  },
  {
    icon: CheckCircle2,
    title: "Regular Audits",
    description: "Third-party security audits and penetration testing performed quarterly",
  },
];

const complianceStandards = [
  { name: "HIPAA Compliant", description: "Healthcare data protection standards" },
  { name: "ISO 27001", description: "Information security management" },
  { name: "SOC 2 Type II", description: "Security, availability, and confidentiality" },
  { name: "GDPR Ready", description: "Data privacy and protection regulations" },
];

const backupInfo = [
  { metric: "Hourly", description: "Backup frequency" },
  { metric: "Multiple", description: "Geographic locations" },
  { metric: "99.99%", description: "Data durability" },
  { metric: "15 min", description: "Recovery time objective" },
];

export default function SecurityPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">Security & Compliance</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your data security is our top priority. Learn about our comprehensive security measures.
            </p>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-dark mb-12 text-center">Security Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="p-8 border border-border rounded-lg hover:border-primary/50 transition-colors">
                  <Icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-dark mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-dark mb-12 text-center">Compliance Standards</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {complianceStandards.map((standard, idx) => (
              <div key={idx} className="p-6 bg-white rounded-lg border border-border">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-dark mb-1">{standard.name}</h3>
                    <p className="text-muted-foreground text-sm">{standard.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Backup & Recovery */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-dark mb-12 text-center">Backup & Disaster Recovery</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
            {backupInfo.map((item, idx) => (
              <div key={idx} className="text-center p-6 border border-border rounded-lg">
                <p className="text-3xl font-bold text-primary mb-2">{item.metric}</p>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="max-w-4xl mx-auto p-8 bg-secondary/5 rounded-lg border border-border">
            <h3 className="text-lg font-semibold text-dark mb-4">Our Backup Strategy</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">Automated hourly backups with point-in-time recovery</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">Geographically distributed backup locations</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">Regular backup restoration tests</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">Disaster recovery plan with 15-minute RTO</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-dark mb-12 text-center">Infrastructure</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-white rounded-lg border border-border">
              <h3 className="text-xl font-semibold text-dark mb-4">Hosting Provider</h3>
              <p className="text-muted-foreground mb-4">
                Vaidhya Sewa is hosted on Amazon Web Services (AWS), one of the most secure and reliable cloud providers globally.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Multi-region deployment</li>
                <li>✓ Auto-scaling infrastructure</li>
                <li>✓ DDoS protection</li>
                <li>✓ 99.99% SLA</li>
              </ul>
            </div>
            <div className="p-8 bg-white rounded-lg border border-border">
              <h3 className="text-xl font-semibold text-dark mb-4">Uptime Guarantee</h3>
              <p className="text-muted-foreground mb-4">
                We guarantee 99.9% uptime with automatic failover and redundancy across multiple availability zones.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Real-time monitoring</li>
                <li>✓ Automatic alerts</li>
                <li>✓ Incident response team</li>
                <li>✓ Status page updates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Access Control */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-dark mb-12 text-center">Access Control & Audit Logs</h2>
          <div className="max-w-4xl mx-auto">
            <div className="p-8 border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-dark mb-6">Role-Based Access Control (RBAC)</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold text-dark mb-3">Features</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Granular permission management</li>
                    <li>✓ Department-level access control</li>
                    <li>✓ Time-based access restrictions</li>
                    <li>✓ IP whitelisting</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-dark mb-3">Audit Logging</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Complete activity logs</li>
                    <li>✓ User action tracking</li>
                    <li>✓ Data modification history</li>
                    <li>✓ 90-day log retention</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Incident Response */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-dark mb-12 text-center">Incident Response</h2>
          <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg border border-border">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-dark mb-4 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-primary" />
                  Response Process
                </h3>
                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li>1. Immediate detection and alerting</li>
                  <li>2. Incident classification</li>
                  <li>3. Investigation and containment</li>
                  <li>4. Resolution and recovery</li>
                  <li>5. Post-incident review</li>
                </ol>
              </div>
              <div>
                <h3 className="font-semibold text-dark mb-4">Response Times</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li><strong>Critical:</strong> 15 minutes</li>
                  <li><strong>High:</strong> 1 hour</li>
                  <li><strong>Medium:</strong> 4 hours</li>
                  <li><strong>Low:</strong> 24 hours</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-dark mb-6">Questions About Security?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our security team is ready to discuss your specific requirements and concerns.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/contact">Contact Security Team</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
