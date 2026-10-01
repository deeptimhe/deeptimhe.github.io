# Tianyu He's Academic Homepage

A clean academic homepage built with Next.js, Tailwind CSS, and the PRISM template.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to preview.

## Editing Content

All content lives in the `content/` folder:

- **`config.toml`** - Site title, author info, social links, navigation
- **`bio.md`** - About section (Markdown)
- **`about.toml`** - Homepage layout and research interests
- **`publications.bib`** - Publications in BibTeX format
- **`publications.toml`** - Publications page settings

### Adding a Publication

Add an entry to `content/publications.bib`:

```bibtex
@article{id,
  selected={true},
  title = {Paper Title},
  author = {Author One and Author Two},
  year = {2024},
  journal = {arXiv preprint},
  url = {https://arxiv.org/abs/...},
  code = {https://github.com/...},
  website = {https://project-page.github.io/},
  media = {https://blog-post-url},
  description = {Short description.},
  keywords = {Keyword1, Keyword2}
}
```

Set `selected={true}` to feature it on the homepage.

## Deploy to GitHub Pages

1. Create a repository named `deeptimhe.github.io` on GitHub.

2. Initialize git and push:

   ```bash
   git init
   git add -A
   git commit -m "Initial commit"
   git remote add origin git@github.com:deeptimhe/deeptimhe.github.io.git
   git branch -M main
   git push -u origin main
   ```

3. Go to the repository **Settings > Pages**, set source to **GitHub Actions**.

4. Your site will be live at [https://deeptimhe.github.io](https://deeptimhe.github.io) within a few minutes.

### Updating the Site

After making changes, just push:

```bash
git add -A
git commit -m "Update site"
git push
```

GitHub Actions will automatically build and deploy.
