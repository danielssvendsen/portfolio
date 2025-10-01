// File: js/i18n/en.js
window.I18N = window.I18N || {};
window.I18N.en = {
  nav: {
    home: "Home",
    about: "About me",
    experience: "Experience",
    certifications: "Certifications",
    projects: "Projects"
  },

  buttons: {
    theme: {
      light: "Light mode",
      dark: "Dark mode",
      aria: "Toggle theme"
    },
    lang: {
      label: "NO", // button shows target language code
      aria: "Switch to Norwegian"
    }
  },

  footer: {
    copy: "© All rights reserved",
    github: "GitHub",
    linkedin: "LinkedIn",
    github_aria: "Open GitHub profile in new tab",
    linkedin_aria: "Open LinkedIn profile in new tab"
  },

  // Index page translation
  intro: {
    welcome: "Hello, welcome",
    intro_text: "My name is Daniel Standal Svendsen and this is my portfolio page.",
    note: "This website is essentially a glorified resume and also serves as the final project for my CS50X certification.",
    cta_prefix: "You can download",
    cta_suffix: "here or browse the site to learn more. 🙂",
    cv_link: "my CV"
  },

  // Experience page translations
  exp: {
    filter: {
      major: "Primary",
      minor: "Other"
    },

    skills_label: "Skills:",

    tussa: {
      role: "IT Consultant",
      org: "Tussa · Full-time",
      meta1: "Aug 2024 – Oct 2024 · 3 mos",
      meta2: "Ålesund, Møre og Romsdal, Norway · On-site",
      bullets: [
        "Delivered and installed networking equipment at customer locations",
        "General 2nd-line technical support, with focus on networking services",
        "The role required extensive driving, which I was not able to maintain at the time. We agreed to part ways on good terms, and the employer expressed satisfaction with my contributions and welcomed me back if my situation changes."
      ],
      skills: "Fortinet"
    },

    sunncom: {
      role: "Senior Technician / Sales Consultant",
      org: "Sunncom AS · Full-time",
      meta1: "Oct 2022 – Jan 2023 · 4 mos",
      meta2: "Ålesund, Møre og Romsdal, Norway · On-site",
      bullets: [
        "Delivered and installed complete 'data packages' for cruise ships in Turkey and Spain, including telephony, PA, CCTV, TV/entertainment and radio solutions",
        "Originally offered the position in 2019, but due to company changes and focus areas the role was ended by agreement",
        "The experience strengthened my expertise in deliveries for large projects in the maritime sector"
      ],
      skills: "International Travel · Alcatel · Closed-Circuit Television (CCTV)"
    },

    alesund: {
      company: "Ålesund Data AS",
      meta1: "Full-time · 9 yrs 4 mos",
      meta2: "Ålesund, Møre og Romsdal, Norway",
      download: "Work certificate (NO)"
    },

    alesund_2020: {
      role: "System Consultant",
      org: "Ålesund Data AS · Full-time",
      meta1: "Oct 2020 – Sep 2022 · 2 yrs",
      meta2: "Hybrid",
      bullets: [
        "Responsible for maritime customer portfolio and acted as dedicated contact for over 300 end-users",
        "Performed full installations and system implementations of networks and servers on more than 50 ships for various shipping companies",
        "Efficiently handled up to 40 requests daily",
        "Coordinated junior consultants for on-site installations and larger maritime projects",
        "Built strong customer relationships, securing a 5-year contract with a major maritime client where my role as lead consultant was a key factor",
        "Extended resignation period at employer's request to ensure a smooth transition"
      ],
      skills: "Project Management"
    },

    alesund_2018: {
      role: "System Consultant",
      org: "Ålesund Data AS · Full-time",
      meta1: "Oct 2018 – Sep 2020 · 2 yrs",
      meta2: "Hybrid",
      bullets: [
        "Acted as senior resource in the technical department",
        "Contributed to development work on ÅD’s proprietary solutions, including IBO™",
        "Prepared offers and participated in sales processes and customer meetings for larger deliveries",
        "Technical lead/contact for over 50 contract clients, more than double that of other staff",
        "Employee with the highest number of billable hours during normal working hours in weekly reports 2018–2022",
        "Received direct job offers from several customers and partners during the period"
      ],
      skills: "Training & Mentoring · Server Migration · Cloud Infrastructure · Veeam Backup & Replication · Sophos · Kerio"
    },

    alesund_2015: {
      role: "IT Consultant",
      org: "Ålesund Data AS · Full-time",
      meta1: "Sep 2015 – Sep 2018 · 3 yrs 1 mo",
      meta2: "On-site",
      bullets: [
        "Delivered computers, networking equipment and servers etc.",
        "Maintained and updated servers and network equipment (mainly outside normal working hours)",
        "General 2nd-line technical support",
        "Responsible for delivery and support of ÅD’s proprietary solution, IBO™",
        "Employee with the highest number of billable hours outside normal working hours in weekly reports 2016–2022"
      ],
      skills: "Key Account Relationships · Network Administration · System Administration · Server Administration · Maritime IT · Hyper-V"
    },

    alesund_2014: {
      role: "IT Consultant",
      org: "Ålesund Data AS · Full-time",
      meta1: "Sep 2014 – Aug 2015 · 1 yr",
      meta2: "On-site",
      bullets: [
        "Promoted and hired permanently as consultant",
        "Responsible for carrying out periodic technical status and health checks for all member clients",
        "General 1st- and 2nd-line support",
        "Raised completion rate on checks to over 90% for the first time since the project started"
      ],
      skills: "Network Security · Cybersecurity · Networking · Windows Server · Microsoft SQL Server · Microsoft Exchange · Technical Documentation"
    },

    alesund_2013: {
      role: "IT Technician",
      org: "Ålesund Data AS",
      meta1: "Jun 2013 – Aug 2014 · 1 yr 3 mos",
      meta2: "On-site",
      bullets: [
        "Temporary position covering parental leave",
        "Responsible for workshop",
        "Repair, preparation and RMA handling of computers and related equipment",
        "Demonstrated reliability and high customer satisfaction, leading to permanent employment"
      ],
      skills: "HP Products · Zyxel · VMware"
    },

    proservice: {
      role: "Service Technician",
      org: "Proservice AS · Full-time",
      meta1: "Jul 2010 – Jan 2013 · 2 yrs 7 mos",
      meta2: "Ålesund, Møre og Romsdal, Norway · On-site",
      bullets: [
        "Worked in computer shop and workshop with 2–3 employees",
        "Responsible for shop operations and inventory management",
        "Repair, preparation and RMA handling of computers and related equipment",
        "Contributed to efficient operations in a small team with high independence requirements"
      ],
       skills: "IT support · Computer Hardware Troubleshooting · Hardware Troubleshooting · Microsoft Windows · Computer Repair · Troubleshooting · Customer Satisfaction"
    },

    coop: {
      role: "Shop Assistant",
      org: "Coop Prix · Part-time",
      meta1: "Jan 2008 – Jan 2009 · 1 yr 1 mo",
      meta2: "Sula, Møre og Romsdal, Norway",
      bullets: []
    }
  },

  // Certifications page translations
  cert: {
    filter: {
      major: "Main Certifications",
      minor: "Basic"
    },

    "001_line1": "Sophos Architect Certification",
    "001_line2": "Sophos",
    "001_line3": "Issued Aug 2019",

    "002_line1": "CS50's Introduction to Computer Science",
    "002_line2": "Harvard",
    "002_line3": "Credential URL: https://cs50.harvard.edu/certificates/6fa56375-af83-4362-a78b-b7ddf3ff995a",

    "003_line1": "Fortinet Certified Associate in Cybersecurity",
    "003_line2": "Fortinet",
    "003_line3": "Issued Aug 2024 · Expires Aug 2026",
    "003_line4": "Credential ID 7244118314DS",

    "004_line1": "MSP Connect Flex",
    "004_line2": "Sophos",
    "004_line3": "Issued Jul 2018",

    "005_line1": "Sophos Sales Certification",
    "005_line2": "Sophos",
    "005_line3": "Issued May 2018",

    "006_line1": "Sophos Technician Certification",
    "006_line2": "Sophos",
    "006_line3": "Issued Oct 2017",

    "007_line1": "Sophos Engineer Certification",
    "007_line2": "Sophos",
    "007_line3": "Issued Jan 2017",

    "008_line1": "Veeam Certified Sales Professional (VMSP) 2020",
    "008_line2": "Veeam Software",

    "009_line1": "Veeam Certified Sales Professional (VMSP) 2021",
    "009_line2": "Veeam Software",

    "010_line1": "Veeam Certified Technical Sales Professional (VMTSP) 2020",
    "010_line2": "Veeam Software",

    "011_line1": "Veeam Certified Technical Sales Professional (VMTSP) 2021",
    "011_line2": "Veeam Software"
  },

  // About page translations
  about: {
    p1: "This portfolio site is a small experiment. I'm a \"recovering workaholic\" challenging myself to do something more creative. At the same time, it's my final project for CS50x.",
    p2: "Efficiency has always been my strongest suit. During my ten years at Ålesund Data, I handled more than 65,000 human-generated emails while maintaining continuous customer contact by phone. Despite this, I maintained high quality in deliveries and was often sent on the most demanding assignments.",
    p3: "In project work, I was often assigned both configuration and coordination tasks. Cables, racks, and physical labor were usually handled by colleagues, while I took care of the setup and all project-related communication. This effectively made me a bridge with authority. A role that suited me well, as I enjoy structure and get things done quickly.",
    p4: "I place great emphasis on structure and accuracy, whether it's managing complex systems in AD, GPO's and firewalls or documenting work so others can build on it. These kinds of details ensure things work over time, not just in the moment.",
    p5: "I'm direct, impatient, and not fond of \"small talk,\" but I'm also reliable, honest, and results-oriented. Customers and colleagues have appreciated that I'm clear and that I deliver when it really counts.",
    p6: "I have a 3-year vocational education in computer electronics, but for me, hands-on experience has always been far more valuable than papers. It's in demanding projects that I've learned the most, both technically and personally.",
    p7: "I'm now looking for an environment where efficiency, professionalism, and balance are valued, and where I can use my experience to create lasting results for both clients and employers."
  },

  // Projects page translations
  projects: {
    open: "Open",

    this_website: {
      title: "This Website (CS50X Final Project)",
      desc: "A personal portfolio built as my final project for Harvard CS50X."
    },

    tba: {
      title: "TBA",
      desc: "Project coming soon."
    }
  },
};
