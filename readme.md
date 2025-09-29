# Portfolio Website (CS50x Final Project)

#### Video Demo: <PUT YOUR VIDEO LINK HERE>

#### Description:
This project is my final submission for Harvard’s CS50x course. It’s a personal portfolio website built from scratch using only HTML, CSS, and JavaScript — without any frameworks or site generators. The goal was to create a clean, accessible, and responsive web presence that showcases my background, certifications, work experience, and personal projects.

The website is fully static but uses JavaScript to dynamically inject shared components (like headers and footers), toggle themes, and manage language translations. The design is intentionally minimal, focusing on clear content and good typography. The code is structured to support future scalability and content updates.

---

## 📜 Purpose & Motivation
I wanted this final project to be more than an assignment — it had to be useful. That’s why I chose to build a real-world tool: a website I can continue to use professionally after the course. It reflects my understanding of web technologies, clean semantic markup, and client-side logic.

I also wanted the project to demonstrate:
- Clean code organization
- Modular and reusable components
- Good user experience with language/theme flexibility

---

## 🗂️ File Overview

### HTML Pages
- `index.html` – Home page introducing the site and giving quick access to other sections.
- `about.html` – Brief personal biography, values, and context.
- `cert.html` – A showcase of certifications with relevant links and descriptions.
- `exp.html` – Work experience timeline with optional filtering and downloadable CV.
- `projects.html` – Highlighted coding and creative projects, with brief descriptions.

### Assets
- `assets/` – Contains static media like images and PDFs (CV, certificates, logos).

### JavaScript (Core Logic)
- `js/boot.js` – Loads common elements and initializes features.
- `js/filter.js` – Adds logic for filtering work experience (e.g. major/minor).
- `js/i18n.js` – Manages bilingual support and switches between Norwegian and English.
- `js/theme-toggle.js` – Implements dark/light theme toggle, stores user preference.
- `js/partials.js` – Injects shared components (`header.html` and `footer.html`) via JavaScript.

### JavaScript (Localization)
- `js/i18n/en.js` – English language strings for all UI elements.
- `js/i18n/no.js` – Norwegian translations.

### Partials
- `partials/header.html` – Navigation bar, language/theme toggles.
- `partials/footer.html` – Footer with contact information and credits.

### CSS Files
- `css/style.css` – Global design system (colors, fonts, spacing, layout).
- `css/index.css` – Specific styles for the homepage layout and text.
- `css/cert.css` – Layout and formatting for the certification page.
- `css/exp.css` – Custom styles for the experience filtering and layout.
- `css/projects.css` – Grid and layout for showcasing projects.

---

## 🎨 Design Choices

### Dynamic Partials
To avoid copy-pasting shared code like headers/footers into every page, I implemented a dynamic partials loader using JavaScript. This keeps the HTML DRY and easier to update globally.

### Language Toggle
Instead of using a full i18n framework, I built a lightweight dictionary-based solution using JSON-like JavaScript files. This makes it easy to add or edit translations.

### Filtering Logic
For the experience section, I added a filter system to toggle between “major” and “minor” roles, improving readability for users who only want to see high-level experiences.

### Accessibility
I used semantic HTML, `aria-label`s, alt texts, and keyboard-friendly buttons to ensure the site is accessible and user-friendly across devices.

---

## ⚠️ Challenges

- Implementing i18n with minimal overhead required careful structuring of `data-i18n` attributes and element traversal.
- Handling layout consistency when loading partials dynamically was tricky, especially ensuring scripts ran at the right time.
- Tuning the visual design to be readable and clean across screen sizes required multiple iterations with media queries and flexbox adjustments.

---

## ✅ Lessons Learned

This project helped solidify:
- Semantic HTML usage
- JavaScript DOM manipulation
- Clean, modular CSS architecture
- Principles of accessible and responsive web design

I also learned to think like a developer maintaining a real product: how to keep code maintainable, avoid duplication, and separate concerns.

---

## 🌱 Future Improvements

- Add a contact form with email integration (e.g., Formspree or backendless form service)
- Create an auto-generated sitemap and meta tags for SEO
- Introduce project thumbnails and filtering
- Expand the language support with more translation files
- Package the partials system into a reusable JS module

---

## 🚀 How to Run

1. Download or clone this repository
2. Open `index.html` in your browser
3. Use the navigation to explore the other pages
4. Toggle language or theme as you prefer

> This is a fully static website and requires no server or frameworks to run.

---

## 🧑‍💻 Author

Daniel Standal Svendsen
CS50x Final Project
Website: https://danielssvendsen.github.io/portfolio
Email: danielstandalsvendsen@gmail.com
