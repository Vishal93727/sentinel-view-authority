import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import StatsCard from '@/components/dashboard/StatsCard';
import { 
  Users, 
  AlertTriangle, 
  MapPin, 
  Clock,
  Shield,
  Phone,
  Navigation,
  Eye,
  Zap,
  TrendingUp
} from 'lucide-react';

const Dashboard = () => {
  // Mock real-time data
  const stats = [
    {
      title: "Active Tourists",
      value: 2847,
      change: "+12% today",
      changeType: 'positive' as const,
      icon: Users,
      status: 'info' as const
    },
    {
      title: "Active Incidents",
      value: 7,
      change: "2 critical",
      changeType: 'negative' as const,
      icon: AlertTriangle,
      status: 'emergency' as const
    },
    {
      title: "Response Time",
      value: "4.2m",
      change: "-15% faster",
      changeType: 'positive' as const,
      icon: Clock,
      status: 'success' as const
    },
    {
      title: "Officers On Duty",
      value: 156,
      change: "98% coverage",
      changeType: 'positive' as const,
      icon: Shield,
      status: 'success' as const
    }
  ];

  const recentIncidents = [
    {
      id: "INC-2024-001",
      type: "SOS Alert",
      location: "Marina Beach, Chennai",
      time: "2 min ago",
      severity: "high",
      status: "responding"
    },
    {
      id: "INC-2024-002", 
      type: "Zone Violation",
      location: "Restricted Area - Fort",
      time: "8 min ago",
      severity: "medium",
      status: "assigned"
    },
    {
      id: "INC-2024-003",
      type: "Medical Emergency", 
      location: "Kapaleeshwarar Temple",
      time: "15 min ago",
      severity: "high",
      status: "resolved"
    }
  ];

  const liveAlerts = [
    {
      id: 1,
      message: "High crowd density detected at Marina Beach",
      type: "crowd",
      time: "30s ago"
    },
    {
      id: 2,
      message: "Tourist entered restricted zone - Fort Area",
      type: "zone",
      time: "2m ago"
    },
    {
      id: 3,
      message: "AI detected suspicious movement pattern",
      type: "ai",
      time: "5m ago"
    }
  ];

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'high':
        return <Badge className="bg-emergency text-emergency-foreground">High</Badge>;
      case 'medium':
        return <Badge className="bg-warning text-warning-foreground">Medium</Badge>;
      case 'low':
        return <Badge className="bg-info text-info-foreground">Low</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'responding':
        return <Badge className="bg-emergency text-emergency-foreground alert-pulse">Responding</Badge>;
      case 'assigned':
        return <Badge className="bg-warning text-warning-foreground">Assigned</Badge>;
      case 'resolved':
        return <Badge className="bg-success text-success-foreground">Resolved</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Authority Dashboard</h1>
          <p className="text-muted-foreground">
            Real-time tourist safety monitoring and incident response
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge className="bg-success text-success-foreground">
            <div className="w-2 h-2 bg-success-foreground rounded-full mr-2 animate-pulse"></div>
            System Online
          </Badge>
          <Button className="authority-gradient text-white">
            <Zap className="w-4 h-4 mr-2" />
            Emergency Protocol
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Real-time Map Placeholder */}
        <Card className="lg:col-span-2 card-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Live Tourist Map
            </CardTitle>
            <CardDescription>
              Real-time location tracking and zone monitoring
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 bg-gradient-to-br from-primary-muted to-accent-foreground/5 rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="text-center">
                <Navigation className="w-16 h-16 mx-auto text-primary mb-4" />
                <p className="text-lg font-medium">Interactive Map</p>
                <p className="text-muted-foreground">
                  Real-time tourist locations, zones, and incidents
                </p>
                <Button className="mt-4" variant="outline">
                  <Eye className="w-4 h-4 mr-2" />
                  View Full Map
                </Button>
              </div>
              {/* Map overlay elements to simulate real map */}
              <div className="absolute top-4 right-4 space-y-2">
                <div className="bg-emergency text-emergency-foreground px-2 py-1 rounded text-xs alert-pulse">
                  3 Active SOS
                </div>
                <div className="bg-warning text-warning-foreground px-2 py-1 rounded text-xs">
                  High Density Zones
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Live Alerts Feed */}
        <Card className="card-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Live Alerts
            </CardTitle>
            <CardDescription>
              AI-powered real-time monitoring
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {liveAlerts.map((alert) => (
              <div key={alert.id} className="p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium">{alert.message}</p>
                    <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                  </div>
                  <Badge variant="outline" className="ml-2 text-xs">
                    {alert.type}
                  </Badge>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-4">
              View All Alerts
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Incidents */}
      <Card className="card-shadow">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Recent Incidents
              </CardTitle>
              <CardDescription>
                Latest SOS calls and incident reports
              </CardDescription>
            </div>
            <Button variant="outline">
              <TrendingUp className="w-4 h-4 mr-2" />
              View All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentIncidents.map((incident) => (
              <div key={incident.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <code className="text-xs bg-muted px-2 py-1 rounded">
                      {incident.id}
                    </code>
                    <span className="font-medium">{incident.type}</span>
                    {getSeverityBadge(incident.severity)}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {incident.location} • {incident.time}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusBadge(incident.status)}
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;