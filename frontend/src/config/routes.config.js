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
    MAINTENANCE: '/maintenance',
    PRICING: '/pricing',
    PRODUCTS: '/products',
    PORTFOLIO: '/portfolio',
    TEAM: '/team',
    CASE_STUDIES: '/case-studies',
    SUPPORT: '/support',
    CONTACT: '/contact',
    NOT_FOUND: '*',
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
  { label: 'Services', href: ROUTES.PUBLIC.SERVICES },
  { label: 'Solutions', href: ROUTES.PUBLIC.SOLUTIONS },
  { label: 'Hosting', href: ROUTES.PUBLIC.HOSTING },
  { label: 'Pricing', href: ROUTES.PUBLIC.PRODUCTS },
  { label: 'Portfolio', href: ROUTES.PUBLIC.PORTFOLIO },
  { label: 'Resources', href: ROUTES.PUBLIC.SUPPORT },
  { label: 'Support', href: ROUTES.PUBLIC.SUPPORT },
  { label: 'Contact', href: ROUTES.PUBLIC.CONTACT },
];



export default ROUTES;
