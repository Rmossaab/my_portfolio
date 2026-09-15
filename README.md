# Mossaab Ratby — Portfolio

Personal cybersecurity and cloud computing portfolio, built with Next.js 16 (App Router), React 19, and Tailwind CSS 4. Hosted on the existing Vercel project.

## Local development

```sh
npm install
npm run dev
```

Open http://localhost:3000. Validate changes with `npm run lint` and `npm run build`.

## Update content

- `lib/portfolio.ts`: contact links, availability, experience, projects, credentials, and grouped skills.
- `components/Sections.tsx`: biography, education, volunteering, and contact copy.
- `components/TerminalHero.tsx`: introduction and terminal presentation.
- `app/globals.css`: layout, visual styling, mobile breakpoints, and accessibility states.
- `public/Mossaab-Ratby-CV.pdf`: the supplied CV, served as a direct download.
- `app/layout.tsx` and `app/opengraph-image.tsx`: search and social sharing metadata.
- `FEATURE-PLAN.md`: prioritized feature roadmap and case-study acceptance criteria.

The website uses the owner-confirmed **AWS Certified Cloud Practitioner (CLF-C02)** credential. The downloadable PDF is the supplied original and still contains the older AWS Academy wording; replace that file with a revised CV to synchronize it. ShadowFox experience was retained from the existing portfolio. Other updates come from the supplied CV.

No verification URLs or certification dates were supplied. Add them only when available; issuer logos and the AWS badge do not link to fabricated verification pages.

## Vercel

This update retains the Next.js framework, build scripts, and deployment configuration. It adds no database, email service, environment variable, or runtime API requirement. Contact links open the visitor's email application; Copy email uses the browser clipboard with a visible fallback message.

Use the existing Vercel-connected repository and production branch to deploy through the usual workflow. Review the Vercel preview before promoting the update. These local edits do not publish themselves.

## Local logo assets

- Dataprotect: https://www.dataprotect.ma/assets/img/logo_blanc.svg
- Sofretim: https://www.sofretim.com/wp-content/uploads/2018/04/Logo-HD2-3.jpg
- AWS Cloud Practitioner badge: https://aws.amazon.com/certification/certified-cloud-practitioner/
- Fortinet, Google, and Cisco issuer marks: https://simpleicons.org/ (downloaded from `cdn.simpleicons.org`)
- ShadowFox uses a text monogram, not an official logo.

Marks identify the respective company or credential provider. All images are served locally, with no hotlinking or new image-domain configuration.
