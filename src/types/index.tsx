import { CarFront, CircleDollarSign, LineChart, Store } from "lucide-react";
import { ReactNode } from "react"; 

export interface linkCardProps {
    title: string;
    href: string;
    description: string;
}

export interface kpiProps {
  title: string;
  value: number;
  valueComplimentString: string;
  chartData?: KPIChartData[];
  barData?: number;
  totalBarData?: number;
  footerTitleOne?: string;
  footerNumOne?: number;
  footerTitleTwo?: string;
  footerNumTwo?: number;
  icon?: ReactNode;  // Use ReactNode as the type for the icon property
}

export interface KPIChartData {
    rentals: number,
    subscription: number,
}

export interface multiselectDropdownProps {
    title: string;
    options: dropdownOptions[];
}

export interface dropdownOptions  {
    title: string,
    year: number,
}

export interface singleToggleFilterProps {
    title: string;
    isEnabled: boolean;
    setFilter: (enabled:boolean) => void
    icon: ReactNode
}

export interface singleToggleFiltersGroupProps {
    sectionTitle?: string;
    toggleFilters: singleToggleFilterProps[];
}

// Rental Links
export const rentalGeneralLinks: { title: string; href: string; description: string }[] = [
    {
      title: "Rental Agreements",
      href: "/Rentals/RentalAgreements",
      description:
        "This is the description for the Rental Agreements. Here we would describe what is in the dashboard.",
    },
    {
      title: "Rental Calendar",
      href: "/Rentals/RentalCalendar",
      description:
        "This is the description for the Rental Calendar. Here we would describe what is in the dashboard.",
    },
    {
      title: "Rental Customer Profile",
      href: "/Rentals/RentalCustomerProfile",
      description: "This is the description for the Rental Customer Profile. Here we would describe what is in the dashboard.",
    },
    {
      title: "Rental Customer Profile (Printable)",
      href: "/Rentals/RentalCustomerProfilePrintable",
      description: "This is the description for the Rental Customer Profile. Here we would describe what is in the dashboard.",
    }
]
  
export const rentalUtilizationLinks: { title: string; href: string; description: string }[] = [
    {
      title: "Real-Time Rental Utilization",
      href: "/Rentals/RealTimeRentalUtilization",
      description:
        "This is the description for the Rental Agreements. Here we would describe what is in the dashboard.",
    },
    {
      title: "Rental Utilization",
      href: "/Rentals/RentalUtilization",
      description:
        "This is the description for the Rental Calendar. Here we would describe what is in the dashboard.",
    },
    {
      title: "Vehicle Availability & Reservations",
      href: "/Rentals/VehicleAvailability&Reservations",
      description: "This is the description for the Rental Customer Profile. Here we would describe what is in the dashboard.",
    },
    {
      title: "Rental Utilization by VCAT",
      href: "/Rentals/RentalUtilizationByVCAT",
      description: "This is the description for the Rental Reservations. Here we would describe what is in the dashboard.",
    }
]
  
export const rentalInvoicesLinks: { title: string; href: string; description: string }[] = [
    {
      title: "Rental Invoices",
      href: "/Rentals/RentalInvoices",
      description:
        "This is the description for the Rental Invoices. Here we would describe what is in the dashboard.",
    },
    {
      title: "Rental Invoices (Detail)",
      href: "/Rentals/RentalInvoicesDetail",
      description:
        "This is the description for the Rental Invoices (Detail). Here we would describe what is in the dashboard.",
    },
    {
      title: "Due Rental Invoices",
      href: "/Rentals/DueRentalInvoices",
      description: "This is the description for Due Rental Invoices. Here we would describe what is in the dashboard.",
    },
    {
      title: "Unapplied Payments",
      href: "/Rentals/UnappliedPayments",
      description: "This is the description for Unapplied Payments. Here we would describe what is in the dashboard.",
    },
    {
      title: "Rental Chargeback",
      href: "/Rentals/RentalChargeback",
      description: "This is the description for Rental Chargeback. Here we would describe what is in the dashboard.",
    },
    {
      title: "Open Rentals Invoices Required",
      href: "/Rentals/OpenRentalsInvoicesRequired",
      description: "This is the description for Open Rentals Invoices Required. Here we would describe what is in the dashboard.",
    },
]
  
export  const rentalRevenueLinks: { title: string; href: string; description: string }[] = [
    {
      title: "Rental Revenue",
      href: "/Rentals/RentalRevenue",
      description:
        "This is the description for the Rental Revenue. Here we would describe what is in the dashboard.",
    },
    {
      title: "Rental Item Revenue",
      href: "/Rentals/RentalItemRevenue",
      description:
        "This is the description for Rental Item Revenue. Here we would describe what is in the dashboard.",
    },
    {
      title: "Top Rental Accounts",
      href: "/Rentals/TopRentalAccounts",
      description: "This is the description for Top Rental Accounts. Here we would describe what is in the dashboard.",
    },
    {
      title: "Top Rental National Accounts",
      href: "/Rentals/TopRentalNationalAccounts",
      description: "This is the description for Top Rental National Accounts. Here we would describe what is in the dashboard.",
    }
]
  
export  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]
  
// Business Categories
export  const dfBusinessCategs: { title: string; href: string; description: string }[] = [
    {
      title: "Assets",
      href: "/Assets",
      description:
        "In this category you can find all the dashboards related to Assets in the Driving Force Group.",
    },
    {
      title: "Rentals",
      href: "/Rentals",
      description:
      "In this category you can find all the dashboards related to Rentals in the Driving Force Group.",
    },
    {
      title: "Sales & Leasing",
      href: "/Sales&Leasing",
      description: "In this category you can find all the dashboards related to Sales & Leasing in the Driving Force Group.",
    },
    {
      title: "Management",
      href: "/Management",
      description: "In this category you can find all the dashboards related to Management in the Driving Force Group.",
    },
]
  
// Assets Links
export const assetsGeneralLinks: { title: string; href: string; description: string }[] = [
    {
      title: "Dashboard",
      href: "/AssetsDashboard",
      description:
        "This is the description for the Assets Dashboard in the Driving Force Group.",
    }
]
  
export  const assetsInventoryLinks: { title: string; href: string; description: string }[] = [
    {
      title: "Inventory",
      href: "/AssetsInventory",
      description:
        "This is the description for the Assets Inventory in the Driving Force Group.",
    },
    {
      title: "Inventory History",
      href: "/AssetsInventoryHistory",
      description:
      "This is the description for the Assets Inventory History in the Driving Force Group.",
    },
    {
      title: "Inventory Fleet Flow",
      href: "/AssetsInventoryFleetFlow",
      description: "This is the description for the Assets Inventory Fleet Flow in the Driving Force Group.",
    },
    {
      title: "Purchased Vehicles",
      href: "/PurchasedVehicles",
      description: "This is the description for the Purchased Vehicles in the Driving Force Group.",
    },
    {
      title: "Vehicle Sales",
      href: "/Vehicle Sales",
      description: "This is the description for the Vehicle Sales in the Driving Force Group.",
    },
    {
      title: "Vehicle Recalls",
      href: "/Vehicle Recalls",
      description: "This is the description for the Vehicle Recalls in the Driving Force Group.",
    },
]
  
export  const assetsTransferLinks: { title: string; href: string; description: string }[] = [
    {
        title: "Transfer History",
        href: "/AssetsTransferHistory",
        description:
        "This is the description for the Assets Transfer History in the Driving Force Group.",
    }
]

// Sales & Leasing 
export const salesLeasingGeneralLinks: { title: string; href: string; description: string }[] = [
    {
        title: "Lease Dashboard",
        href: "/LeaseDashboard",
        description:
          "This is the description for the Lease Dashboard in the Driving Force Group.",
      },
      {
        title: "Lease Inventory",
        href: "/LeaseInventory",
        description:
        "This is the description for the Assets Inventory History in the Driving Force Group.",
      },
      {
        title: "Lease Invoices",
        href: "/LeaseInvoices",
        description: "This is the description for the Assets Inventory Fleet Flow in the Driving Force Group.",
      },
      {
        title: "Lease Revenue",
        href: "/LeaseRevenue",
        description: "This is the description for the Purchased Vehicles in the Driving Force Group.",
      },
      {
        title: "Sales Dashboard",
        href: "/SalesDashboard",
        description: "This is the description for the Sales Dashboard in the Driving Force Group.",
      },
      {
        title: "Sales Pipeline",
        href: "/SalesPipeline",
        description: "This is the description for the Sales Pipeline in the Driving Force Group.",
      }
]
  
export  const leaseContractsLinks: { title: string; href: string; description: string }[] = [
    {
      title: "Lease Contracts",
      href: "/LeaseContracts",
      description:
        "This is the description for the Lease Contracts in the Driving Force Group.",
    },
    {
      title: "Lease Contracts Analysis",
      href: "/LeaseContractsAnalysis",
      description:
      "This is the description for the Lease Contracts Analysis in the Driving Force Group.",
    }
]
  
export  const salesCommissionsLinks: { title: string; href: string; description: string }[] = [
    {
        title: "Sales & Lease Commission",
        href: "/SalesLeaseCommission",
        description:
        "This is the description for the Sales & Lease Commission in the Driving Force Group.",
    },
    {
        title: "Sales Lease Commission Summary",
        href: "/SalesLeaseCommissionSummary",
        description:
        "This is the description for the Sales & Lease Commission Summary in the Driving Force Group.",
    },
    {
        title: "Managers Commissions",
        href: "/ManagersCommissions",
        description:
        "This is the description for the Managers Commissions in the Driving Force Group.",
    },
    {
        title: "Lease Contracts Analysis",
        href: "/LeaseContractsAnalysis",
        description:
        "This is the description for the Lease Contracts Analysis in the Driving Force Group.",
    }
]

export  const salesRevenueLinks: { title: string; href: string; description: string }[] = [
    {
        title: "Sales Revenue",
        href: "/SalesRevenue",
        description:
        "This is the description for the Sales Revenue in the Driving Force Group.",
    },
    {
        title: "Sales Revenue Comparison",
        href: "/SalesRevenueComparison",
        description:
        "This is the description for the Sales Revenue Comparison in the Driving Force Group.",
    },
    {
        title: "Sales Detailed Report",
        href: "/SalesDetailedReport",
        description:
        "This is the description for the Sales Detailed Report in the Driving Force Group.",
    },
    {
        title: "Sales F&I Performance",
        href: "/SalesFIPerformance",
        description:
        "This is the description for the Sales F&I Performance in the Driving Force Group.",
    }
]

// Management links
export const managementGeneralLinks: { title: string; href: string; description: string }[] = [
    {
        title: "Executive Summary",
        href: "/ExecutiveSummary",
        description:
          "This is the description for the Executive Summary in the Driving Force Group.",
    },
    {
        title: "Vehicle Fleet 360 Detail",
        href: "/VehicleFleet360Detail",
        description:
        "This is the description for Vehicle Fleet 360 Detail in the Driving Force Group.",
    },
    {
        title: "Vehicle Aging",
        href: "/VehicleAging",
        description: "This is the description for Vehicle Aging in the Driving Force Group.",
    },
    {
        title: "Health & Safety Incident Tracker",
        href: "/HealthSafetyIncidentTracker",
        description: "This is the description for Health & Safety Incident Tracker in the Driving Force Group.",
    }
]

export const managementCulturePeopleLinks: { title: string; href: string; description: string }[] = [
    {
        title: "Driving Force Group Employees",
        href: "/DrivingForceGroupEmployees",
        description:
          "This is the description for Driving Force Group Employees in the Driving Force Group.",
    },
    {
        title: "TDF Group Organization",
        href: "/TDFGroupOrganization",
        description:
        "This is the description for TDF Group Organization in the Driving Force Group.",
    }
]

export const managementAccountingLinks: { title: string; href: string; description: string }[] = [
    {
        title: "AR Rental Customers Aging",
        href: "/ARRentalCustomersAging",
        description:
          "This is the description for AR Rental Customers Aging in the Driving Force Group.",
    },
    {
        title: "AR Vehicle Aging Sales",
        href: "/ARVehicleAgingSales",
        description:
          "This is the description for AR Vehicle Aging Sales in the Driving Force Group.",
    },
    {
        title: "Accounting Continuity",
        href: "/AccountingContinuity",
        description:
        "This is the description for Accounting Continuity in the Driving Force Group.",
    },
    {
        title: "SAP Concur Purchase Orders",
        href: "/SAPConcurPurchaseOrders",
        description:
        "This is the description for SAP Concur Purchase Orders in the Driving Force Group.",
    },
    {
        title: "SAP Concur Invoices",
        href: "/SAPConcurInvoices",
        description:
        "This is the description for SAP Concur Invoices in the Driving Force Group.",
    },
    {
        title: "SAP Concur Vendor Analysis",
        href: "/SAPConcurVendorAnalysis",
        description:
        "This is the description for SAP Concur Vendor Analysis in the Driving Force Group.",
    }
]

export const managementRentalsLinks: { title: string; href: string; description: string }[] = [
    {
        title: "Rental Fleet Equity",
        href: "/RentalFleetEquity",
        description:
          "This is the description for Rental Fleet Equity in the Driving Force Group.",
    },
    {
        title: "Rental Fleet Equity by VCAT",
        href: "/RentalFleetEquityVCAT",
        description:
        "This is the description for Rental Fleet Equity by VCAT in the Driving Force Group.",
    },
    {
        title: "Rental Fleet Equity Detail",
        href: "/RentalFleetEquityDetail",
        description:
        "This is the description for Rental Fleet Equity Detail in the Driving Force Group.",
    }
]

export const managementPayrollLinks: { title: string; href: string; description: string }[] = [
    {
        title: "Lease Commission Details",
        href: "/LeaseCommissionDetails",
        description:
          "This is the description for Lease Commission Details in the Driving Force Group.",
    }
]

export const adminSupportLinks: { title: string; href: string; description: string }[] = [
  {
    title: "Support",
    href: "/Support",
    description:
      "This is the description for Support page in the Driving Force Group.",
  },
  {
      title: "Request Access",
      href: "/RequestAccess",
      description:
      "This is the description for Request Access page in the Driving Force Group.",
  },
  {
      title: "Knowledge Base",
      href: "/KnowledgeBase",
      description:
      "This is the description for Knowledge Base page in the Driving Force Group.",
  }
]

export const adminLinks: { title: string; href: string; description: string }[] = [
  {
    title: "Report Permissions",
    href: "/ReportPermissions",
    description:
      "This is the description for Support page in the Driving Force Group.",
  },
  {
      title: "Dashboards",
      href: "/Dashboards",
      description:
      "This is the description for Dashboards creation page in the Driving Force Group.",
  },
  {
      title: "Data Dictionary",
      href: "/DataDictionary",
      description:
      "This is the description for Data Dictionary page in the Driving Force Group.",
  }
]

// KPI Cards for different Pages
export const rentalCalendarKpisDummy = [
  {    
      title: 'Starting Rentals',
      value: 26,
      valueComplimentString: 'rentals',
      footerNumOne: 89,
      footerTitleOne: ' Vehicles On Schedule',
      chartData: [
          {
              rentals: 50,
              subscription: 30,
          },
          {
              rentals: 20,
              subscription: 30,
          },
          {
              rentals: 25,
              subscription: 25,
          },
          {
              rentals: 40,
              subscription: 20,
          },
          {
              rentals: 55,
              subscription: 32,
          },
          {
              rentals: 50,
              subscription: 30,
          },
      ]
  },
  {    
      title: 'Ending Rentals',
      value: 15,
      valueComplimentString: 'rentals',
      footerNumOne: 89,
      footerTitleOne: ' Vehicles On Schedule',
      chartData: 
      [
          {
              rentals: 30,
              subscription: 30,
          },
          {
              rentals: 20,
              subscription: 30,
          },
          {
              rentals: 25,
              subscription: 25,
          },
          {
              rentals: 38,
              subscription: 20,
          },
          {
              rentals: 35,
              subscription: 32,
          },
          {
              rentals: 20,
              subscription: 30,
          },
      ]
  },
  {    
      title: 'Vehicles Available',
      value: 335,
      valueComplimentString: 'vehicles',
      footerNumOne: 361,
      footerTitleOne: '% from last month',
      icon: <CarFront size={18} color="#6b7280" strokeWidth={1.5}/>
  },
  {    
      title: 'Vehicles On Rent',
      value: 781,
      valueComplimentString: 'vehicles',
      footerNumOne: 89,
      footerTitleOne: ' Vehicles On Schedule',
      icon: <CircleDollarSign size={18} color="#6b7280" strokeWidth={1.5}/> 
  },
//   {    
//     title: 'Vehicles On Fleet',
//     value: 1302,
//     valueComplimentString: 'vehicles',
//     barData: (1302/1750)*100, 
//     totalBarData: 1750,
//     footerNumOne: 361,
//     footerTitleOne: 'Vehicles vs. Target',
//     footerNumTwo: 62,
//     footerTitleTwo: 'Vehicles vs. Last Year'
// },
  {    
      title: 'Vehicles On Fleet',
      value: 1302,
      valueComplimentString: 'vehicles',
      footerNumOne: 361,
      footerTitleOne: ' Vehicles vs. Target',
      icon: <Store size={18} color="#6b7280" strokeWidth={1.5}/> 
  },
  {    
      title: 'Rental Utilization',
      value: 1302,
      valueComplimentString: 'vehicles',
      footerNumOne: 361,
      footerTitleOne: 'Vehicles vs. Target',
      icon: <LineChart size={18} color="#6b7280" strokeWidth={1.5}/> 
  }
];