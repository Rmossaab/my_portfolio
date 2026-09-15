# Portfolio feature plan

## Priority 1: evidence-led project case studies

Recruiters need to see how Mossaab solves a security problem. The highest-value next feature is a dedicated case study for SOC Copilot, followed by the cloud posture management project if its materials can be shared.

### Content to collect

- The problem, intended users, and Mossaab's specific contribution.
- A sanitized architecture diagram and two real screenshots.
- Implementation decisions and tradeoffs.
- A reproducible demonstration using synthetic data.
- Measured results with methodology: dataset size, precision/recall where relevant, execution time, and limitations. Do not invent metrics.
- A public repository or a short recorded walkthrough. Internship materials need employer clearance before publication.

### Implementation

1. Extend the project records in `lib/portfolio.ts` with a slug, problem, approach, evidence, and lessons learned.
2. Add statically generated `/projects/[slug]` pages using the installed Next.js routing conventions; keep the current homepage as a summary.
3. Link project cards to those pages, retaining verified GitHub links.
4. Give each page its own title, description, and share preview. Keep images local and optimized.
5. Check mobile readability, keyboard navigation, direct route loads, and the Vercel preview build.

### Done when

A visitor can understand the problem, identify Mossaab's contribution, inspect real evidence, and reach the code or demo in under two minutes. No client/employer data is exposed and no unsupported outcomes are claimed.

## Priority 2: verifiable credentials

Collect public Credly or issuer verification URLs, issue dates, and expiry dates where applicable. Add a Verify credential link only when it resolves to Mossaab's actual credential. A provider homepage is not verification.

## Priority 3: French version

Add a reviewed French version for local recruiters, with a language switch, localized metadata, and a corresponding CV. Keep English and French content in a shared data structure so updates stay consistent.

## Delivered in this update

- Updated experience and January 2027 PFE availability.
- Confirmed AWS Certified Cloud Practitioner (CLF-C02) wording and official badge.
- Local company and issuer logos, grouped credentials and technical skills.
- Downloadable supplied CV, email contact, copy-email control, and mobile navigation.
- Expandable project summaries and verified public repository links.
- Search metadata, a social preview image, keyboard focus styling, and reduced-motion support.
