import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
// import { Navigate, useNavigate } from 'react-router-dom';
// import { Suspense } from 'react';

// Lazy load homemodule pages
const Home = lazy(() => import('./homemodule/HomePage'));
const About = lazy(() => import('./homemodule/AboutPage'));
const Contact = lazy(() => import('./homemodule/ContactPage'));
const Calculator = lazy(() => import('./homemodule/CalculatorSinglePage'));
const Blog = lazy(() => import('./homemodule/BlogPage'));
const BlogDetail = lazy(() => import('./homemodule/BlogDetailPage'));

// Auth routes
const SignIn = lazy(() => import('./authmodule/userLogin/login/login'));
const SignUp = lazy(() => import('./authmodule/userLogin/sign-up/signup'));


// Error routes
const Error404 = lazy(() => import('./errors/not-found-error'));
const Error500 = lazy(() => import('./errors/general-error'));
const Error401 = lazy(() => import('./errors/unauthorized-error'));
const Error403 = lazy(() => import('./errors/forbidden'));
const Error503 = lazy(() => import('./errors/maintenance-error'));

// Admin routes
const AdminDashboard = lazy(() => import('./adminModule/dashboard'));
const AdminTotalUsers = lazy(() => import('./adminModule/total-users'));
const AdminWithdrawl = lazy(() => import('./adminModule/withdrawRequest'));
const NewInvestment = lazy(() => import('./adminModule/newInvestment'));
const AdminUserHistory = lazy(() => import('./adminModule/user-history'));
const AdminLogin = lazy(() => import('./authmodule/adminlogin/index'));
const CreateInvestment = lazy(() => import('./adminModule/createInvestment'));
const AdminAppsAnalytics = lazy(() => import('./adminModule/webanalysis'));


// User routes
const UserDashboard = lazy(() => import('./usermodule/dashboard/UserDashboard'));
const UserProfile = lazy(() => import('./usermodule/profile/index'));
const UserActiveInvestments = lazy(() => import('./usermodule/activeInvestment/index'));
const UserInvestmentArea = lazy(() => import('./usermodule/investmentArea/index'));



export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
  { path: '/calculator', element: <Calculator /> },
  { path: '/blog', element: <Blog /> },
  { path: '/blog/:id', element: <BlogDetail /> },
  // Auth routes
  { path: '/sign-in', element: <SignIn /> },
  { path: '/sign-up', element: <SignUp /> },

  // Error routes
  { path: '/404', element: <Error404 /> },
  { path: '/500', element: <Error500 /> },
  { path: '/401', element: <Error401 /> },
  { path: '/403', element: <Error403 /> },
  { path: '/503', element: <Error503 /> },
  // Admin routes
  {
    path: '/admin',
    children: [
      { path: 'dashboard', element: <AdminDashboard /> },
      { path: 'total-users', element: <AdminTotalUsers /> },
      { path: 'new-investment', element: <NewInvestment /> },
      { path: 'withdraw-request', element: <AdminWithdrawl /> },
      { path: 'user-history', element: <AdminUserHistory /> },
      { path: 'user-history/:userId', element: <AdminUserHistory /> },
      { path: 'login', element: <AdminLogin /> },
      { path: 'create-investment', element: <CreateInvestment /> },
      { path: 'web-analytics', element: <AdminAppsAnalytics /> },

    ],
  },
  // User routes
  {
    path: '/user',
    children: [
      { path: 'dashboard', element: <UserDashboard /> },
      { path: 'profile', element: <UserProfile /> },
      { path: 'active-investment', element: <UserActiveInvestments /> },
      { path: 'investment-area', element: <UserInvestmentArea /> },
    ],
  },

]); 