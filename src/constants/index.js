import {
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  community1,
  community2,
  community3,
  stat1,
  stat2,
  stat3,
  stat4,
} from "../assets/icons";

import { blog1, blog2, blog3 } from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#community", label: "Community" },
  { href: "#blog", label: "Blog" },
  { href: "#pricing", label: "Pricing" },
];

export const clients = [
  { icon: client1 },
  { icon: client2 },
  { icon: client3 },
  { icon: client4 },
  { icon: client5 },
  { icon: client6 },
];

export const community = [
  {
    icon: community1,
    label: "Membership Organisations",
    value:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    icon: community2,
    label: "National Associations",
    value:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    icon: community3,
    label: "Clubs And Groups",
    value:
      "Our membership management software provides full automation of membership renewals and payments",
  },
];

export const stats = [
  {
    icon: stat1,
    label: "Members",
    value: "2,245,341",
  },
  {
    icon: stat2,
    label: "Clubs",
    value: "46,328",
  },
  {
    icon: stat3,
    label: "Event Bookings",
    value: "828,867",
  },
  {
    icon: stat4,
    label: "Payments",
    value: "1,926,436",
  },
];

export const blogs = [
  {
    img: blog1,
    label: "Creating Streamlined Safeguarding Processes with OneRen",
  },
  {
    img: blog2,
    label:
      "What are your safe guarding responsibilities and how can you manage them?",
  },
  {
    img: blog3,
    label: "Revamping the Membership Model with Triathlon Australia",
  },
];

export const footerLinks = [
  {
    category: "Company",
    links: [
      { name: "About us", href: "/" },
      { name: "Blog", href: "/" },
      { name: "Contact us", href: "/" },
      { name: "Pricing", href: "/" },
      { name: "Testimonials", href: "/" },
    ],
  },
  {
    category: "Support",
    links: [
      { name: "About usHelp center", href: "/" },
      { name: "Terms of service", href: "/" },
      { name: "Legal", href: "/" },
      { name: "Privacy", href: "/" },
      { name: "Status", href: "/" },
    ],
  },
];

export const socials = [
  { label: "instagram", icon: "fa-brands fa-instagram" },
  { label: "whatsapp", icon: "fa-brands fa-whatsapp" },
  { label: "twitter", icon: "fa-brands fa-x-twitter" },
  { label: "youtube", icon: "fa-brands fa-youtube" },
];
