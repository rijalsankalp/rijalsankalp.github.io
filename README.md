# rijalsankalp.github.io

Personal portfolio and blog built with [Jupyter Book](https://jupyterbook.org/).

🔗 **Live site:** [https://rijalsankalp.github.io](https://rijalsankalp.github.io)

## Overview

- **Portfolio** — Education, experience, skills, and publications
- **Projects** — 12 detailed write-ups of ML, NLP, deep learning, and software engineering projects
- **Blog** — Technical posts and project updates with [utterances](https://utteranc.es/) comments

## Tech Stack

- [Jupyter Book](https://jupyterbook.org/) (Sphinx-based static site generator)
- [sphinx-design](https://sphinx-design.readthedocs.io/) for cards and grids
- [ABlog](https://ablog.readthedocs.io/) for the blog section
- [utterances](https://utteranc.es/) for blog comments via GitHub Discussions
- GitHub Actions for CI/CD → GitHub Pages

## Local Development

```bash
# Install dependencies
pip install -r book/requirements.txt

# Build the book
jupyter-book build book/

# Preview locally
cd book/_build/html && python -m http.server 8000
```

## Project Structure

```
book/
├── _config.yml          # Jupyter Book configuration
├── _toc.yml             # Table of contents
├── intro.md             # Landing page
├── experience.md        # Work experience
├── education.md         # Education
├── skills.md            # Technical skills
├── publications.md      # Publications
├── requirements.txt     # Python dependencies
├── _static/             # Static assets (photo, CSS)
├── projects/            # Project write-ups (12 projects)
└── blog/                # Blog posts
```

## License

This project is licensed under the MIT License — see [LICENSE](LICENSE) for details.
