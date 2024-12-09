import {
  BotMessageSquare,
  BrainIcon,
  Calendar,
  CarIcon,
  CodeIcon,
  GlobeIcon,
  Move3D,
  PiggyBank,
  TrophyIcon
} from "lucide-react";
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
    user: "Анна Сергеева",
    company: "Санкт-Петербург",
    image: user1,
    text: "Никогда не думала, что заказ автозапчастей может быть таким простым! Сломался автомобиль, а нужной детали в сервисе не оказалось. Друг посоветовал этого бота. Разобралась за пару минут, а уже через день запчасть была у меня! Очень удобно и быстро, рекомендую.",
  },
  {
    user: "Иван Коваленко",
    company: "Новосибирск",
    image: user2,
    text: "Уже третий раз заказываю через бота. Нужна была редкая деталь, в городе её нигде не нашёл. Бот нашёл за пару секунд и подсказал, где дешевле. Всё просто и чётко. Реально экономит время и деньги. Спасибо за такой сервис!",
  },
  {
    user: "Ольга Петрова",
    company: "Санкт-Петербург",
    image: user3,
    text: "Искала тормозные колодки, а в магазинах всё либо дорого, либо долго ждать. Сосед посоветовал бота, и я решила попробовать. За пару минут нашла нужный вариант по адекватной цене. Уже на следующий день всё доставили. Очень довольна!",
  },
  {
    user: "Максим Зайцев",
    company: "Новосибирск",
    image: user4,
    text: "Улетел в командировку, а жена звонит — что-то с аккумулятором. Времени искать не было, зашёл в бота и нашёл подходящий вариант за 5 минут. Пока я возвращался, ей уже всё привезли. Очень удобно! Всем советую.",
  },
  {
    user: "Екатерина Смирнова",
    company: "Санкт-Петербург",
    image: user5,
    text: "Срочно понадобился датчик, а в ближайших магазинах либо дорого, либо ждать неделю. Бот нашёл всё за 5 минут, а доставили уже на следующий день. Удобно, быстро, никаких лишних действий. Теперь заказываю только через него.",
  },
  {
    user: "Алексей Тихонов",
    company: "Новосибирск",
    image: user6,
    text: "Машина встала прямо на трассе, нужен был ремень ГРМ. Позвонил друзьям, посоветовали попробовать бота. Заказал прямо с телефона, а уже на следующий день всё было у меня. Этот бот — находка для всех автомобилистов!",
  },
];

export const features = [
  {
    icon: <TrophyIcon />,
    text: "Главное преймущество",
    description:
      "Широкий спектр услуг и сервиса с уникальными клубными скидками\n" +
        "Уникальная возможность покупать запчасти по прямым оптовым ценам",
  },
  {
    icon: <CarIcon />,
    text: "Авто сообщество",
    description:
      "Мы активно развиваемся в социальных сетях, выкладываем интересные публикации и держим связь с аудиторией.",
  },
  {
    icon: <BrainIcon />,
    text: "Инновации",
    description:
      "Новая бизнес-стратегия, но основанная на проверенных временем методах и бизнес-моделях, это гарантирует успех и в то же время отсутствие конкуренции.\n",
  },
  {
    icon: <CodeIcon />,
    text: "Высококлассная IT команда\n",
    description:
      "Проект постоянного развивается, мы находим новые идеи и внедряем их в наши сервисы.\n",
  },
  {
    icon: <GlobeIcon />,
    text: "Целевая аудитория",
    description:
      "Мы располагаем огромной целевой аудиторией, Наши рекламные площадки выгодно отличаются от прочих предложений. У нас самая горячая и лояльная аудитория!\n",
  },
  {
    icon: <Move3D />,
    text: "Максимальная отдача\n",
    description:
      "Наши рекламодатели получают на порядок большую отдачу за меньшую сумму! Что мотивирует обращаться к нам ещё и рекомендовать друзьям.",
  },
];

export const checklistItems = [
  {
    title: "Отсутствие конкуренции",
    description:
      "Весь программно-информационный комплекс полностью собственной разработки.",
  },
  {
    title: "Отсутствие доп. инвестиций",
    description:
      "В сравнении с другими предложениями всяких франшиз здесь не требуется никаких дополнительных вложений и усилий, нет необходимости в покупке какого-либо оборудования, аренды и ремонта помещений или найма специалистов.",
  },
  {
    title: "Без трат на маркетинг, рекламу и прочих сложностей",
    description:
      "Привлечение и привязка новых членов клуба – это наша забота.",
  },
  {
    title: "Бизнес предельно прост и не требует никакого обучения!",
    description:
      "Просто обрабатывайте заявки членов клуба и договаривайтесь с рекламодателями. С каждой размещенной рекламы – ваши 85%! Средний чек 25000р. Калькулятор ниже)↓",
  },
  {
    title: "Возврат вложений всего 2-4 мес!",
    description: "",
  },
  {
    title: "Гарантированные доходы!",
    description:
      "По договору уже через 1-2 месяца и возврат взноса, если не выйдете на прибыль!",
  },
  {
    title: "Гарантия возврата даже если передумали или не \"зашло\"!",
    description:
      "Т.к. на один регион/город лишь один представитель, а обычно поступает несколько заявок, мы возвращаем оплату, как только следующий заявитель завершает процесс оплаты.",
  },
  {
    title: "Никаких платежей и отчислений до выхода на прибыль!",
    description: "Пока не начнете зарабатывать, ничего не платите.",
  },
  {
    title: "Открытие всего 1-2 мес.",
    description: "С пошаговой поддержкой и сопровождением.",
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
