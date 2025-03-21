export const NAVBAR_ITEMS = [
  {
    label: "Marketplace",
    role: ["Farmer", "Vendor"],
    dropdown: [
      { label: "View All Products", path: "marketplace/view-all-products" },
      { label: "Seeds & Crops", path: "/marketplace/seeds-crops" },
      {
        label: "Fertilizers & Pesticides",
        path: "/marketplace/fertilizers-pesticides",
      },
      { label: "Farming Equipment", path: "/marketplace/equipment" },
      { label: "Organic & Sustainable Farming", path: "/marketplace/organic" },
      { label: "Search & Filters", path: "/marketplace/search" },
      {
        label: "Vendor Options",
        role: ["Vendor"],
        subItems: [
          { label: "Add New Product", path: "/marketplace/add-product" },
          { label: "Manage Listings", path: "/marketplace/manage-listings" },
          { label: "Orders & Sales Analytics", path: "/marketplace/analytics" },
        ],
      },
    ],
  },
  {
    label: "Government Assistance",
    role: ["Farmer"],
    dropdown: [
      { label: "Latest Schemes & Policies", path: "/govt-assistance/schemes" },
      { label: "Check Eligibility", path: "/govt-assistance/eligibility" },
      { label: "Apply for Subsidy", path: "/govt-assistance/apply" },
      {
        label: "Track Application Status",
        path: "/govt-assistance/track-status",
      },
      {
        label: "Government Loan Programs",
        path: "/govt-assistance/loan-programs",
      },
      {
        label: "Upcoming Agricultural Events & Webinars",
        path: "/govt-assistance/events",
      },
    ],
  },
  {
    label: "Financial Services",
    role: ["Farmer"],
    dropdown: [
      { label: "Loan Options for Farmers", path: "/financial-services/loans" },
      {
        label: "EMI & Loan Calculator",
        path: "/financial-services/calculator",
      },
      { label: "Apply for a Loan", path: "/financial-services/apply-loan" },
      { label: "Track Loan Status", path: "/financial-services/track-loan" },
      {
        label: "Government & Private Bank Partnerships",
        path: "/financial-services/partnerships",
      },
      {
        label: "Insurance & Risk Management",
        path: "/financial-services/insurance",
      },
    ],
  },
  {
    label: "Consult an Expert",
    role: ["Farmer", "Consultant"],
    dropdown: [
      {
        label: "Find an Agricultural Consultant",
        path: "/consult-expert/find",
      },
      { label: "Book a Consultation", path: "/consult-expert/book" },
      {
        label: "Video & Chat Consultations",
        path: "/consult-expert/video-chat",
      },
      { label: "Expert Blogs & Insights", path: "/consult-expert/blogs" },
      {
        label: "Success Stories & Case Studies",
        path: "/consult-expert/case-studies",
      },
      {
        label: "Consultant Options",
        role: ["Consultant"],
        subItems: [
          { label: "Register as an Expert", path: "/consult-expert/register" },
          { label: "Manage Appointments", path: "/consult-expert/manage" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    role: ["Farmer"],
    dropdown: [
      { label: "Weather Updates & Forecasts", path: "/resources/weather" },
      { label: "Market Prices of Crops", path: "/resources/market-prices" },
      {
        label: "Farming Tips & Best Practices",
        path: "/resources/farming-tips",
      },
      { label: "Guides & Tutorials", path: "/resources/guides" },
      { label: "Agriculture News & Trends", path: "/resources/news" },
    ],
  },
];

export const NOTIFICATIONS = [
  {
    message: "🚀 New Subsidy Available: [Subsidy Name]",
    path: "/notifications/subsidy",
  },
  {
    message: "🏦 Your Loan Application Status Updated",
    path: "/notifications/loan-status",
  },
  { message: "📦 Order #1234 Shipped!", path: "/notifications/orders" },
  {
    message: "📅 Consultation Reminder with [Expert Name]",
    path: "/notifications/consultation",
  },
  {
    message: "🌦 Weather Alert: Heavy Rain Expected Tomorrow",
    path: "/notifications/weather",
  },
];

export const PROFILE_MENU = [
  { label: "Dashboard", path: "/profile/dashboard" },
  { label: "My Orders & Purchases", path: "/profile/orders" },
  { label: "My Applications (Subsidy & Loan)", path: "/profile/applications" },
  { label: "My Consultations", path: "/profile/consultations" },
  { label: "Settings & Preferences", path: "/profile/settings" },
  { label: "Logout", path: "/logout" },
];

export const ADMIN_MENU = [
  { label: "User Management", path: "/admin/users" },
  { label: "Marketplace Approvals", path: "/admin/marketplace-approvals" },
  { label: "Subsidy & Loan Approvals", path: "/admin/approvals" },
  { label: "Reports & Analytics", path: "/admin/reports" },
];
