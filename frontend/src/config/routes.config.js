/**
 * Route Configuration
 * Define all routes in one place for easy management
 */

export const ROUTES = {
  // Public routes
  PUBLIC: {
    HOME: '/',
    ABOUT: '/about',
    SERVICES: '/services',
    SOLUTIONS: '/solutions',
    HOSTING: '/hosting',
    PRODUCTS: '/products',
    PORTFOLIO: '/portfolio',
    TEAM: '/team',
    CASE_STUDIES: '/case-studies',
    SUPPORT: '/support',
    CONTACT: '/contact',
    NOT_FOUND: '*',
    // Individual Service Pages
    DIGITAL_PRODUCT_ENGINEERING: '/services/digital-product-engineering',
    LEGACY_MODERNIZATION: '/services/legacy-software-modernization',
    MVP_DEVELOPMENT: '/services/mvp-development',
    SAAS_DEVELOPMENT: '/services/saas-development',
    IOT_DEVELOPMENT: '/services/iot-development',
    CLOUD_COMPUTING: '/services/cloud-computing',
    SUPPORT_MAINTENANCE: '/services/support-and-maintenance',
  },

  // Auth routes
  AUTH: {
    LOGIN: '/login',
    REGISTER: '/register',
  },

  // Protected routes
  PROTECTED: {
    CART: '/cart',
    CHECKOUT: '/checkout',
    ORDER_SUCCESS: '/order-success',
  },

  // User dashboard
  DASHBOARD: {
    HOME: '/dashboard',
    ORDERS: '/dashboard/orders',
    PROFILE: '/dashboard/profile',
    REFERRAL: '/referral',
    CLIENT_PORTAL: '/client-portal',
  },

  // Admin routes
  ADMIN: {
    HOME: '/admin',
    LEADS: '/admin/leads',
    ORDERS: '/admin/orders',
    USERS: '/admin/users',
  },
};

// Navigation links for Header/Navbar
export const NAV_LINKS = [
  { label: 'Home', href: ROUTES.PUBLIC.HOME },
  { 
    label: 'Services', 
    dropdown: [
      { label: 'All Services', href: ROUTES.PUBLIC.SERVICES },
      { label: 'Digital Product Engineering', href: ROUTES.PUBLIC.DIGITAL_PRODUCT_ENGINEERING },
      { label: 'Legacy Software Modernization', href: ROUTES.PUBLIC.LEGACY_MODERNIZATION },
      { label: 'MVP Development', href: ROUTES.PUBLIC.MVP_DEVELOPMENT },
      { label: 'SaaS Development', href: ROUTES.PUBLIC.SAAS_DEVELOPMENT },
      { label: 'IoT Development', href: ROUTES.PUBLIC.IOT_DEVELOPMENT },
      { label: 'Cloud Computing', href: ROUTES.PUBLIC.CLOUD_COMPUTING },
      { label: 'Support and Maintenance', href: ROUTES.PUBLIC.SUPPORT_MAINTENANCE },
      { label: 'Managed Hosting', href: ROUTES.PUBLIC.HOSTING }
    ]
  },
  { label: 'Portfolio', href: ROUTES.PUBLIC.PORTFOLIO },
  { label: 'Case Studies', href: ROUTES.PUBLIC.CASE_STUDIES },
  { label: 'Support', href: ROUTES.PUBLIC.SUPPORT },
  { label: 'Contact', href: ROUTES.PUBLIC.CONTACT },
];



export default ROUTES;
