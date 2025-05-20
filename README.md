# SciencePeaks Web

An intelligent ecosystem that personalizes physical activity using AI, biomarkers, and heart rate variability metrics for cancer patients.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Building and Previewing

Since this project is configured as a static site for GitHub Pages:

```bash
# Build static files to 'out' directory
npm run build

# Preview locally using serve
serve out
# The site should be available at http://localhost:3000
```

## GitHub Pages Deployment

### Automatic Deployment

Push to the main branch to trigger automatic deployment via GitHub Actions.

### Manual Deployment

To manually deploy to GitHub Pages:

```bash
# Build and deploy to GitHub Pages
npm run deploy
```

## Note About Path Configuration

- When running locally, static assets are served from the root path
- When deployed to GitHub Pages, static assets are served from `/sciencepeaksWeb` path
- This is automatically handled in the build process

## Tech Stack

- Next.js (static export)
- React 19
- Tailwind CSS
- Radix UI components 