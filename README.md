# Ecotrack Pro - Frontend

Welcome to the Ecotrack Pro frontend project documentation. This project contains the user interface components and functionalities for the Ecotrack Pro waste management platform.

## Overview

The Ecotrack Pro frontend is built using TypeScript, Vite, Next UI, and React to provide users with an intuitive and responsive interface for managing waste disposal services. It offers a range of features and functionalities to enhance user experience and promote environmental sustainability.

## Technologies Used

- **TypeScript**: Superset of JavaScript for static typing.
- **Vite**: Next-generation frontend tooling.
- **React**: JavaScript library for building user interfaces.
- **Next UI**: UI library for React applications.

To run the Ecotrack Pro frontend project locally:

1. Clone the repository: `git clone <frontend-repository-url>`.
2. Navigate to the project directory: `cd ecotrack-pro-frontend`.
3. Install dependencies: `npm install`.
4. Start the development server: `npm run dev`.
5. Open your web browser and navigate to `http://localhost:3000` to view the application.

## Contributing

Contributions to the Ecotrack Pro frontend project are welcome! Please review the guidelines in the CONTRIBUTING.md file before making any contributions.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For inquiries or support related to the Ecotrack Pro frontend project, please contact the development team at [ecotrackpro@wastemanagement.com](mailto:ecotrackpro@wastemanagement.com).

---

© 2024 Ecotrack Pro. All rights reserved.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
