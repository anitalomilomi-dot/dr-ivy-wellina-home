# Hosting and migration notes

## Current preview target

- Publish the generated `docs/` folder with GitHub Pages.
- Use the repository name `dr-ivy-wellina-home` unless Ivy later chooses a different name.
- The former GPT-hosted address is a legacy preview, not the canonical website.

## Publishing source

Run `pnpm run export:static` after editing the homepage. It rebuilds `docs/` from
the canonical React/Vinext source, copies the website images, removes runtime
dependencies that GitHub Pages does not need, and changes internal asset URLs to
relative URLs.

GitHub Pages should publish from the `main` branch and `/docs` folder.

## Migration design

- No asset URL is tied to a GitHub account, repository name, GPT Sites host, or
  future domain.
- The generated `docs/` folder can be moved as-is to another static host.
- Do not add a `CNAME` file until Ivy confirms the purchased domain.
- When a domain is confirmed, set the host's custom-domain setting and add DNS.
  Keep page content and image paths unchanged.
- Shopping cart, Green World checkout, member submissions, search, and online
  courses remain planned integrations. Keep them behind external links or
  replaceable service boundaries so a hosting move does not require rewriting
  the editorial site.
