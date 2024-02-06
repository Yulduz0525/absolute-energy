import Icons from "@/assets/icons";

export const navFooter = {
  contactsTitle: "Связаться с нами",
  contacts: [
    {
      icon: Icons.callCalling.Broken,
      label: "+99895 145 55 55",
      href: "tel:998951455555",
    },
    {
      icon: Icons.sms.Broken,
      label: "info@aenergy.uz",
      href: "mailto:info@aenergy.uz",
    },
    {
      icon: Icons.location.Broken,
      label: "г.Ташкент, ул.Бадамзар,д.78",
      href: "https://maps.app.goo.gl/B2eXBjrPMXyjZdCk7",
    },
  ],

  navigations: [
    {
      title: "Быстрые ссылки",
      links: [
        {
          label: "Главная",
          href: "/",
        },
        {
          label: "О компании",
          href: "/about",
        },
        {
          label: "Наши услуги",
          href: "/services",
        },
        {
          label: "Контакт",
          href: "/contact",
        },
      ],
    },
    {
      title: "Социальные сети",
      links: [
        {
          label: "Telegram",
          href: "#",
        },
        {
          label: "Instagram",
          href: "#",
        },
        {
          label: "Facebook",
          href: "#",
        },
      ],
    },
  ],
};
