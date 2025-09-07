# Sawyer Sieja — Personal Portfolio (source)

**TL;DR:** This repo contains the source code for my personal portfolio website. It’s a small, focused Next.js app that showcases who I am, selected projects, and how to reach me. The code emphasizes readability, fast loads, and a no‑nonsense UI.

---

## Tech Stack

* **Framework:** Next.js (App Router) + React
* **Language:** TypeScript
* **Styling:** Tailwind CSS v4 (CSS‑variables, theme‑first approach)

---

## Notes

* **Theming & FOUC:** A tiny cookie‑bootstrap script applies the `html.dark` class **before** paint to prevent a flash of incorrect theme (FOUC). Theme values are handled via semantic CSS variables in `globals.css`.
* **Contact Form Privacy:** The contact form relays messages without exposing my email address directly (no public `mailto:`). This helps reduce scraping and spam. Serverless/form forwarding may be used behind the scenes; the public site intentionally obscures the raw address.

---

## License

MIT © Sawyer Sieja
