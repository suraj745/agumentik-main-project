export const navbarData = [
  {
    name: "Company",
    link: "",
    dropdown: [
      {
        name: "About Company",
        link: `/about-company`,
      },
      {
        name: "Gallery",
        link: `/gallery`,
      },
      {
        name: "Products",
        link: `/products`,
      },
      {
        name: "Careers",
        link: `/careers`,
      },
    ],
  },

  {
    name: `Services`,
    link: `/services`,
    dropdown: [
      {
        name: `Web Development`,
        link: `/service-details`,
        submenu: [
          {
            name: `Static Website`,
            link: `/services`,
          },
          {
            name: `Dynamic Website`,
            link: `/services`,
          },
          {
            name: `Landing Website`,
            link: `/services`,
          },
        ],
      },
      {
        name: `Ecommerce Development`,
        link: `#`,

        submenu: [
          {
            name: `Single Vendor`,
            link: `/services`,
          },
          {
            name: `Multi Vendor`,
            link: `/services`,
          },
        ],
      },
      {
        name: `Mobile App Development`,
        link: "#",

        submenu: [
          {
            name: `Android App Development`,
            link: `/services`,
          },
          {
            name: `IOS App Development`,
            link: `/services`,
          },
          {
            name: `Cross Platform Development`,
            link: `/services`,
          },
        ],
      },
      {
        name: `Software Development`,
        link: `/single-service`,

        submenu: [
          {
            name: `Customised Software`,
            link: `/services`,
          },
          {
            name: `ERP Software`,
            link: `/services`,
          },
          {
            name: `Sass Software`,
            link: `/services`,
          },
        ],
      },
      {
        name: `UI/UX Designing `,
        link: `/single-service`,
        submenu: [
          {
            name: `Graphic Design`,
            link: `/services`,
          },
          {
            name: `UI/UX Designing `,
            link: `/services`,
          },
        ],
      },
      {
        name: `Emerging Technologies`,
        link: `/services`,

        submenu: [
          {
            name: `Artifical Intelligence`,
            link: `/artifical-intelligence`,
          },
          {
            name: `Machine Learning `,
            link: `/artifical-intelligence`,
          },
          {
            name: `AR & VR `,
            link: `/ar-vr`,
          },
        ],
      },
      {
        name: `Digital Marketing`,
        link: `/single-service`,
      },
    ],
  },
  {
    name: `Portfolios`,
    link: `/portfolios`,
  },

  {
    name: `Info`,
    link: ``,
    dropdown: [
      {
        name: "Blogs",
        link: `/blogs`,
      },
      {
        name: "Media & Events",
        link: ``,
      },
      {
        name: "CSR",
        link: ``,
      },
    ],
  },
  {
    name: `Support`,
    link: `#`,

    dropdown: [
      {
        name: "Verify Employee",
        link: `#`,
      },
      {
        name: "Verify Certificate",
        link: `#`,
      },
      {
        name: "Project Status",
        link: `/project-status`,
      },
      {
        name: "Grievance Board",
        link: `#`,
      },

      {
        name: "Contacts",
        link: `/contacts`,
      },
    ],
  },
];
