module.exports = {
  // Lint & Prettify TS and JS files
  '*.{js,jsx,ts,tsx}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `npm run next:lint`,
    `npm run lint`,
    `npm test -- --findRelatedTests ${filenames.join(' ')} --passWithNoTests`
  ]
}
