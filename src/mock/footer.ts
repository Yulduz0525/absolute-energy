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
      label: "Istiqbol ko'chasi 113, Тоshkent, Toshkent",
      href: "https://maps.app.goo.gl/7FCrChQjHmmEAMPq5",
    },
  ],

  navigations: [
    {
      title: "Компания",
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
      title: "Legal",
      links: [
        {
          label: "About",
          href: "#",
        },
        {
          label: "Contact",
          href: "#",
        },
        {
          label: "Blogs",
          href: "#",
        },
      ],
    },
    {
      title: "Quick Links",
      links: [
        {
          label: "About",
          href: "#",
        },
        {
          label: "Contact",
          href: "#",
        },
        {
          label: "Blogs",
          href: "#",
        },
      ],
    },
  ],
};
