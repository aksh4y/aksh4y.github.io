# Akshay Sadarangani - Portfolio Website

This is a React-based portfolio website hosted on GitHub Pages with a custom domain (akshaysadarangani.com).

## Deployment

The website is automatically deployed to GitHub Pages using GitHub Actions. The deployment workflow:

1. Triggers on pushes to the `master` branch
2. Installs Node.js and dependencies
3. Builds the React application
4. Deploys to GitHub Pages with the custom domain

### Manual Deployment

If needed, you can also deploy manually using:

```bash
npm run deploy
```

This will build the application and push it to the `gh-pages` branch.

## Development

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm start

# Build for production
npm run build
```

## Custom Domain

The website uses the custom domain `akshaysadarangani.com` which is configured via the CNAME file that gets created during the build process.