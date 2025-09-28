// File: js/i18n/no.js
window.I18N = window.I18N || {};
window.I18N.no = {
  nav: {
    home: "Hjem",
    about: "Om meg",
    experience: "Arbeidserfaring",
    certifications: "Sertifiseringer",
    projects: "Prosjekter"
  },

  buttons: {
    theme: {
      label: "Lyst modus",
      aria: "Bytt tema"
    },
    lang: {
      label: "EN", // button shows target language code
      aria: "Bytt til engelsk"
    }
  },

  footer: {
    copy: "© Alle rettigheter forbeholdt",
    github: "GitHub",
    linkedin: "LinkedIn",
    github_aria: "Åpne GitHub-profil i ny fane",
    linkedin_aria: "Åpne LinkedIn-profil i ny fane"
  },

  // Index page translation
  intro: {
    welcome: "Hei, velkommen",
    intro_text: "Mitt navn er Daniel Standal Svendsen og dette er min portfolio side.",
    note: "Denne nettsiden er i hovedsak en glorifisert CV og fungerer også som det slutt prosjektet for min CS50X-sertifisering.",
    cta_prefix: "Du kan",
    cta_suffix: "eller navigere rundt på siden for mer informasjon. 🙂",
    cv_link: "min CV"
  },

  // Experience page translations
  exp: {
    filter: {
      major: "Primær",
      minor: "Annet"
    },

    skills_label: "Ferdigheter:",

    tussa: {
      role: "IT Konsulent",
      org: "Tussa · Full-time",
      meta1: "Aug 2024 – Oct 2024 · 3 mos",
      meta2: "Ålesund, Møre og Romsdal, Norway · On-site",
      bullets: [
        "Levering og installasjon av nettverksutstyr ute hos kunder",
        "Generell teknisk 2.-linjesupport, med fokus på nettverkstjenester",
        "Stillingen krevde mye bilkjøring, noe jeg for tiden ikke har mulighet til. Vi ble enige om å avslutte samarbeidet på gode vilkår, og arbeidsgiver har uttrykt tilfredshet med mitt bidrag og ønsket meg velkommen tilbake hvis situasjonen endrer seg."
      ],
      skills: "Fortinet"
    },

    sunncom: {
      role: "Senior Technician / Sales Consultant",
      org: "Sunncom AS · Full-time",
      meta1: "Oct 2022 – Jan 2023 · 4 mos",
      meta2: "Ålesund, Møre og Romsdal, Norway · On-site",
      bullets: [
        "Leveranser og installasjon av komplette «datapakker» for cruiseskip i Tyrkia og Spania, inkludert telefoni, PA, CCTV, TV/underholdning og radioløsninger",
        "Opprinnelig tilbudt stillingen i 2019, men grunnet endrede behov i selskapet og satsingsområder ble stillingen avsluttet etter enighet",
        "Erfaringen styrket min kompetanse innen leveranser til store prosjekter i det maritime markedet"
      ],
      skills: "International Travel · Alcatel · Closed-Circuit Television (CCTV)"
    },

    alesund: {
      company: "Ålesund Data AS",
      meta1: "Full-time · 9 yrs 4 mos",
      meta2: "Ålesund, Møre og Romsdal, Norway",
      download: "Arbeidsattest"
    },

    alesund_2020: {
      role: "Systemkonsulent",
      org: "Ålesund Data AS · Full-time",
      meta1: "Oct 2020 – Sep 2022 · 2 yrs",
      meta2: "Hybrid",
      bullets: [
        "Ansvarlig for maritim kundeportefølje og fungerte som fast direkte kontaktpunkt for over 300 sluttbrukere",
        "Utførte fullstendige installasjoner og systemimplementeringer av nettverk og servere på over 50 skip for ulike rederier",
        "Effektiv håndtering av opptil 40 henvendelser daglig",
        "Koordinerte junior konsulenter for on-site installasjoner og større maritime prosjekter",
        "Bygget sterke kunderelasjoner som sikret en 5-årig kontrakt med en stor maritim kunde, hvor min rolle som ansvarlig konsulent var en nøkkelfaktor",
        "Forlenget oppsigelsestid på forespørsel fra arbeidsgiver for å sikre en smidig overgang"
      ],
      skills: "Project Management"
    },

    alesund_2018: {
      role: "Systemkonsulent",
      org: "Ålesund Data AS · Full-time",
      meta1: "Oct 2018 – Sep 2020 · 2 yrs",
      meta2: "Hybrid",
      bullets: [
        "Fungerende seniorressurs i teknisk avdeling",
        "Deltok i utviklingsarbeid på ÅDs egenutviklede løsninger, bl.a. IBO™",
        "Utarbeidet tilbud og deltok i salgsprosesser og kundemøter for større leveranser",
        "Teknisk ansvarlig/kontaktperson for over 50 avtalekunder, mer enn dobbelt så mange som øvrige ansatte",
        "Ansatt med høyest antall fakturerte timer innenfor normal arbeidstid i ukentlige rapporter 2018–2022",
        "Tilbudt direkte ansettelse hos flere kunder og samarbeidspartnere i perioden"
      ],
      skills: "Training & Mentoring · Server Migration · Cloud Infrastructure · Veeam Backup & Replication · Sophos · Kerio"
    },

    alesund_2015: {
      role: "IT-konsulent",
      org: "Ålesund Data AS · Full-time",
      meta1: "Sep 2015 – Sep 2018 · 3 yrs 1 mo",
      meta2: "On-site",
      bullets: [
        "Leveranse av datamaskiner, nettverksutstyr og servere m.m.",
        "Vedlikehold og oppdatering av servere og nettverksutstyr (primært utenfor vanlig arbeidstid)",
        "Generell teknisk 2.-linjesupport",
        "Leveranse- og supportansvarlig for ÅDs egenutviklede løsning, IBO™",
        "Ansatt med høyest antall fakturerte timer utenfor normal arbeidstid i ukentlige rapporter 2016–2022"
      ],
      skills: "Key Account Relationships · Network Administration · System Administration · Server Administration · Maritime IT · Hyper-V"
    },

    alesund_2014: {
      role: "IT-konsulent",
      org: "Ålesund Data AS · Full-time",
      meta1: "Sep 2014 – Aug 2015 · 1 yr",
      meta2: "On-site",
      bullets: [
        "Forfremmet og ansatt fast som konsulent",
        "Ansvarlig for gjennomføring av periodiske tekniske status- og helsekontroller for alle medlemskunder",
        "Generell 1.- og 2.-linjesupport",
        "Løftet fullføringsgraden på kontroller til over 90 % for første gang siden prosjektets oppstart"
      ],
      skills: "Network Security · Cybersecurity · Networking · Windows Server · Microsoft SQL Server · Microsoft Exchange · Technical Documentation"
    },

    alesund_2013: {
      role: "IT-tekniker",
      org: "Ålesund Data AS",
      meta1: "Jun 2013 – Aug 2014 · 1 yr 3 mos",
      meta2: "On-site",
      bullets: [
        "Vikariat for ansatt i fødselspermisjon",
        "Ansvarlig for verksted",
        "Reparasjon, klargjøring og RMA-håndtering av datamaskiner og tilhørende utstyr",
        "Viste pålitelighet og høy kundetilfredshet, noe som førte til fast ansettelse"
      ],
      skills: "HP Products · Zyxel · VMware"
    },

    proservice: {
      role: "Servicetekniker",
      org: "Proservice AS · Full-time",
      meta1: "Jul 2010 – Jan 2013 · 2 yrs 7 mos",
      meta2: "Ålesund, Møre og Romsdal, Norway · On-site",
      bullets: [
        "Arbeidet i databutikk og verksted med 2–3 ansatte",
        "Ansvarlig for butikkdrift og lagerstyring",
        "Reparasjon, klargjøring og RMA-håndtering av datamaskiner og tilhørende utstyr",
        "Bidro til effektiv drift i et lite team med høye krav til selvstendighet"
      ],
      skills: "IT support · Computer Hardware Troubleshooting · Microsoft Windows · Customer Satisfaction"
    },

    coop: {
      role: "Butikkmedarbeider",
      org: "Coop Prix · Part-time",
      meta1: "Jan 2008 – Jan 2009 · 1 yr 1 mo",
      meta2: "Sula, Møre og Romsdal, Norway",
      bullets: []
    }
  },

  // Certifications page translations
  cert: {
    filter: {
      major: "Hovedsertifikater",
      minor: "Grunnleggende"
    },

    "001_line1": "Sophos Architect Certification",
    "001_line2": "Sophos",
    "001_line3": "Utstedt Aug 2019",

    "002_line1": "CS50x",
    "002_line2": "Harvard",
    "002_line3": "Credential ID:",

    "003_line1": "Fortinet Certified Associate in Cybersecurity",
    "003_line2": "Fortinet",
    "003_line3": "Utstedt Aug 2024 · Utløper Aug 2026",
    "003_line4": "Credential ID 7244118314DS",

    "004_line1": "MSP Connect Flex",
    "004_line2": "Sophos",
    "004_line3": "Utstedt Jul 2018",

    "005_line1": "Sophos Sales Certification",
    "005_line2": "Sophos",
    "005_line3": "Utstedt Mai 2018",

    "006_line1": "Sophos Technician Certification",
    "006_line2": "Sophos",
    "006_line3": "Utstedt Okt 2017",

    "007_line1": "Sophos Engineer Certification",
    "007_line2": "Sophos",
    "007_line3": "Utstedt Jan 2017",

    "008_line1": "Veeam Certified Sales Professional (VMSP) 2020",
    "008_line2": "Veeam Software",

    "009_line1": "Veeam Certified Sales Professional (VMSP) 2021",
    "009_line2": "Veeam Software",

    "010_line1": "Veeam Certified Technical Sales Professional (VMTSP) 2020",
    "010_line2": "Veeam Software",

    "011_line1": "Veeam Certified Technical Sales Professional (VMTSP) 2021",
    "011_line2": "Veeam Software"
  },

  // Projects page translations
  projects: {
    open: "Åpne",

    this_website: {
      title: "Denne nettsiden (CS50X sluttprosjekt)",
      desc: "En personlig portefølje bygget som mitt sluttprosjekt for Harvard CS50X."
    },

    tba: {
      title: "TBA",
      desc: "Prosjekt kommer senere."
    }
  },

  // About page translations
  about: {
    p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    p2: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    p3: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.",
    p4: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
  }
};
