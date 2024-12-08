import {BotMessageSquare, Calendar, CarIcon, GlobeIcon, Move3D, PiggyBank} from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";


export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Уникальный бот",
    description:
      "У нас есть свой телеграм бот для поиска авто-запчастей, в котором можно найти, заказать и подобрать запчасти.",
  },
  {
    icon: <CarIcon />,
    text: "Авто сообщество",
    description:
      "Мы активно развиваемся в социальных сетях, выкладываем интересные публикации и держим связь с аудиторией.",
  },
  {
    icon: <ShieldHalf />,
    text: "Тех поддержка",
    description:
      "Мы всегда на связи, чтобы помочь нашим партнерам преодолеть сложности в освоении нашего проекта.",
  },
  {
    icon: <Calendar />,
    text: "Планирование",
    description:
      "Наш проект находится в состоянии постоянного развития, мы находим новые идеи и внедряем их в наши сервисы.",
  },
  {
    icon: <GlobeIcon />,
    text: "Целевая аудитория",
    description:
      "Мы распологаем огромной целевой аудиторией, большинство авто-владельцев проявляют интерес к нашим сервисам.",
  },
  {
    icon: <Move3D />,
    text: "Результаты",
    description:
      "Наша команда результативна, за последний год мы смогли внедрить более 6 новых сервисов.",
  },
];

export const checklistItems = [
  {
    title: "Привлечение рекламодателей",
    description:
      "Находите компании, чья аудитория – автолюбители: автосалоны, автосервисы, шиномонтажи, магазины «Охота, рыбалка» и т.д.",
  },
  {
    title: "Получаете 85% от рекламного дохода.",
    description:
      "Презентуете клуб и договариваетесь о размещении рекламы.\n",
  },
  {
    title: "Обслуживание членов клуба",
    description:
      "Обрабатываете запросы участников (эвакуация, техобслуживание, скидки на заправках).",
  },
  {
    title: "Перенаправляете запросы к партнерам",
    description:
      "Автосервисам, шиномонтажам и другим.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
