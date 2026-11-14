# Stoic App – Web

A minimal, modern landing page for the **Stoic App**, built with [Vite](https://vitejs.dev), [React](https://react.dev), and [Tailwind CSS](https://tailwindcss.com).  
Formatted consistently using [Prettier](https://prettier.io).

## Overview

This site serves as the official landing page for the Stoic App:

- Promotes the app and its core philosophy
- Collects emails for launch updates
- Links to Stoic content on Instagram and YouTube

## Stack

- Vite (v6)
- React + TypeScript
- Tailwind CSS
- Prettier

## Getting Started

Use Node.js 26 LTS. Run `nvm use` if you use nvm.

```bash
# Install dependencies
npm ci

# Run the development server
npm run dev
```

The scoped overrides in `package.json` patch Firestore’s Node.js transport and
the TypeScript lint parser. Revisit them when upstream dependency ranges include the fixes.

## Metadata and icons

Sharing metadata lives in `index.html`. Images and icons are in `public/`;
sharing thumbnails are 256 × 256.

Use a new filename for updated sharing images, and bump icon URL versions in
`index.html` and `public/privacy.html` when icons change.

## Deployment

- This project is deployed via Vercel. Pushes to the main branch trigger production deployments.
- Development happens on the develop branch.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or collaboration, contact [support@stoic-app.com](mailto:support@stoic-app.com)
