import { createWebHistory, createRouter } from "vue-router";

import HomePageOne from "../components/Pages/HomePageOne";
import HomePageTwo from "../components/Pages/HomePageTwo";
import HomePageThree from "../components/Pages/HomePageThree";
import AboutPageOne from "../components/Pages/AboutPageOne";
import AboutPageTwo from "../components/Pages/AboutPageTwo";
import AboutPageThree from "../components/Pages/AboutPageThree";
import GalleryPage from "../components/Pages/GalleryPage";
import TestimonialsPage from "../components/Pages/TestimonialsPage";
import ServicesPageOne from "../components/Pages/ServicesPageOne";
import ServicesPageTwo from "../components/Pages/ServicesPageTwo";
import ServicesDetailsPage from "../components/Pages/ServicesDetailsPage";
import PricingPage from "../components/Pages/PricingPage";
import TeamPage from "../components/Pages/TeamPage";
import FaqPage from "../components/Pages/FaqPage";
import EventsPage from "../components/Pages/EventsPage";
import EventsDetailsPage from "../components/Pages/EventsDetailsPage";
import CareerPage from "../components/Pages/CareerPage";
import CareerDetailsPage from "../components/Pages/CareerDetailsPage";
import CoursesGridPage from "../components/Pages/CoursesGridPage";
import CoursesRightSidebarPage from "../components/Pages/CoursesRightSidebarPage";
import CoursesDetailsPage from "../components/Pages/CoursesDetailsPage";
import AuthenticationPage from "../components/Pages/AuthenticationPage";
import MembershipLevelsPage from "../components/Pages/MembershipLevelsPage";
import PurchaseGuidePage from "../components/Pages/PurchaseGuidePage";
import TermsServicePage from "../components/Pages/TermsServicePage";
import PrivacyPolicyPage from "../components/Pages/PrivacyPolicyPage";
import ErrorPage from "../components/Pages/ErrorPage";
import ComingSoonPage from "../components/Pages/ComingSoonPage";
import ProjectsPage from "../components/Pages/ProjectsPage";
import ProjectsDetailsPage from "../components/Pages/ProjectsDetailsPage";
import ShopPage from "../components/Pages/ShopPage";
import CartPage from "../components/Pages/CartPage";
import WishlistPage from "../components/Pages/WishlistPage";
import CheckoutPage from "../components/Pages/CheckoutPage";
import MyAccountPage from "../components/Pages/MyAccountPage";
import ProductsDetailsPage from "../components/Pages/ProductsDetailsPage";
import BlogPageOne from "../components/Pages/BlogPageOne";
import BlogPageTwo from "../components/Pages/BlogPageTwo";
import BlogPageThree from "../components/Pages/BlogPageThree";
import AuthorPage from "../components/Pages/AuthorPage";
import CategoriesPage from "../components/Pages/CategoriesPage";
import TagsPage from "../components/Pages/TagsPage";
import SearchPage from "../components/Pages/SearchPage";
import BlogDetailsPageOne from "../components/Pages/BlogDetailsPageOne";
import BlogDetailsPageTwo from "../components/Pages/BlogDetailsPageTwo";
import BlogDetailsPageThree from "../components/Pages/BlogDetailsPageThree";
import ContactPage from "../components/Pages/ContactPage";

const routes = [
  { path: "/", name: "HomePageOne", component: HomePageOne },
  { path: "/home-two", name: "HomePageTwo", component: HomePageTwo },
  { path: "/home-three", name: "HomePageThree", component: HomePageThree },
  { path: "/about-style-1", name: "AboutPageOne", component: AboutPageOne },
  { path: "/about-style-2", name: "AboutPageTwo", component: AboutPageTwo },
  { path: "/about-style-3", name: "AboutPageThree", component: AboutPageThree },
  { path: "/gallery", name: "GalleryPage", component: GalleryPage },
  {
    path: "/testimonials",
    name: "TestimonialsPage",
    component: TestimonialsPage,
  },
  {
    path: "/services-style-1",
    name: "ServicesPageOne",
    component: ServicesPageOne,
  },
  {
    path: "/services-style-2",
    name: "ServicesPageTwo",
    component: ServicesPageTwo,
  },
  {
    path: "/services-details",
    name: "ServicesDetailsPage",
    component: ServicesDetailsPage,
  },
  { path: "/pricing", name: "PricingPage", component: PricingPage },
  { path: "/team", name: "TeamPage", component: TeamPage },
  { path: "/faq", name: "FaqPage", component: FaqPage },
  { path: "/events", name: "EventsPage", component: EventsPage },
  {
    path: "/events-details",
    name: "EventsDetailsPage",
    component: EventsDetailsPage,
  },
  { path: "/career", name: "CareerPage", component: CareerPage },
  {
    path: "/career-details",
    name: "CareerDetailsPage",
    component: CareerDetailsPage,
  },
  { path: "/courses", name: "CoursesGridPage", component: CoursesGridPage },
  {
    path: "/courses-right-sidebar",
    name: "CoursesRightSidebarPage",
    component: CoursesRightSidebarPage,
  },
  {
    path: "/courses-details",
    name: "CoursesDetailsPage",
    component: CoursesDetailsPage,
  },
  {
    path: "/profile-authentication",
    name: "AuthenticationPage",
    component: AuthenticationPage,
  },
  {
    path: "/membership-levels",
    name: "MembershipLevelsPage",
    component: MembershipLevelsPage,
  },
  {
    path: "/purchase-guide",
    name: "PurchaseGuidePage",
    component: PurchaseGuidePage,
  },
  {
    path: "/terms-of-service",
    name: "TermsServicePage",
    component: TermsServicePage,
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicyPage",
    component: PrivacyPolicyPage,
  },
  { path: "/error", name: "ErrorPage", component: ErrorPage },
  { path: "/coming-soon", name: "ComingSoonPage", component: ComingSoonPage },
  { path: "/projects", name: "ProjectsPage", component: ProjectsPage },
  {
    path: "/projects-details",
    name: "ProjectsDetailsPage",
    component: ProjectsDetailsPage,
  },
  { path: "/products", name: "ShopPage", component: ShopPage },
  { path: "/cart", name: "CartPage", component: CartPage },
  { path: "/wishlist", name: "WishlistPage", component: WishlistPage },
  { path: "/checkout", name: "CheckoutPage", component: CheckoutPage },
  { path: "/my-account", name: "MyAccountPage", component: MyAccountPage },
  {
    path: "/products-details",
    name: "ProductsDetailsPage",
    component: ProductsDetailsPage,
  },
  { path: "/blog-style-1", name: "BlogPageOne", component: BlogPageOne },
  { path: "/blog-style-2", name: "BlogPageTwo", component: BlogPageTwo },
  {
    path: "/blog-right-sidebar",
    name: "BlogPageThree",
    component: BlogPageThree,
  },
  { path: "/author", name: "AuthorPage", component: AuthorPage },
  { path: "/categories", name: "CategoriesPage", component: CategoriesPage },
  { path: "/tags", name: "TagsPage", component: TagsPage },
  { path: "/search-page", name: "SearchPage", component: SearchPage },
  {
    path: "/single-blog-1",
    name: "BlogDetailsPageOne",
    component: BlogDetailsPageOne,
  },
  {
    path: "/single-blog-2",
    name: "BlogDetailsPageTwo",
    component: BlogDetailsPageTwo,
  },
  {
    path: "/single-blog-3",
    name: "BlogDetailsPageThree",
    component: BlogDetailsPageThree,
  },
  { path: "/contact", name: "ContactPage", component: ContactPage },
];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
