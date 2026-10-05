# Diesel & Auto Engineering — website preview

A proposed redesign for Diesel & Auto Engineering, Richards Bay. Based on the selected Precision concept. This preview does not replace the existing business website.

## Preview locally

Open `index.html` directly, or run `python -m http.server 4173` in this folder and visit http://localhost:4173.

## Publish on GitHub Pages

In repository **Settings → Pages**, choose **Deploy from a branch**, then **main** and **/(root)**. Save. GitHub will display the preview URL when deployment completes.

## Design and behaviour

- Mobile-first CSS, with enhancements at 420px, 640px, 900px and 1100px.
- Flexible grids, natural section heights and wrapping text; no fixed content heights.
- Accessible mobile navigation, Escape-to-close behaviour and visible keyboard focus.
- Expandable service details use native HTML controls.
- Call, email and directions buttons use the business's existing public contact details.
- No installation, build tooling, external fonts or third-party scripts required.
- No enquiry information is stored by this site. Email links open the visitor's email application.

Business content originates from https://www.dieselandauto.co.za/. Confirm service availability, contact details and warranty wording with the business before using the design as its production website. Unverified accreditation, opening hours, reviews and award claims are not included.


## Separate pages and original branding

Home, Services, About us, Contact and Find us are separate HTML pages. The mobile menu uses a 350ms grid-height transition and a 280ms fade, with reduced-motion support. Closed navigation is inert so hidden links cannot receive focus.

Original D.A.E. colours: blue #005596 and yellow #fff200. Images come from the original website: img/2.jpg (frontage), img/6.jpg (buildings), img/4.jpg (engine work), img/5.jpg (diagnostics), and img/bg.jpg (background). They are reused for the requested business redesign preview.

