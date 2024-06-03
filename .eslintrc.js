module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    extends: [
      'eslint:recommended',  // Utilise les recommandations de base d'ESLint
      'plugin:@typescript-eslint/recommended', // Si tu utilises TypeScript
    ],
    parserOptions: {
      ecmaVersion: 2021,  // Utilise la version ECMAScript 2021
      sourceType: 'module', // Utilise les modules ES6
    },
    rules: {
      // Exemples de règles personnalisées
      'indent': ['error', 2], // Indentation de 2 espaces
      'linebreak-style': ['error', 'unix'], // Utilisation des sauts de ligne Unix
      'quotes': ['error', 'single'], // Utilisation des guillemets simples
      'semi': ['error', 'always'], // Toujours terminer les instructions par un point-virgule
      'no-unused-vars': ['warn'], // Avertissement pour les variables non utilisées
      'eqeqeq': ['error', 'always'], // Utilisation de l'égalité stricte
      'curly': ['error', 'all'], // Toujours utiliser les accolades pour les blocs
      'no-console': 'warn', // Avertissement pour les console.log
      // Ajoute d'autres règles selon tes besoins
    },
    overrides: [
      {
        files: ['*.ts', '*.tsx'],
        parser: '@typescript-eslint/parser',
        plugins: ['@typescript-eslint'],
        rules: {
          '@typescript-eslint/no-unused-vars': ['warn'], // Avertissement pour les variables TypeScript non utilisées
          // Ajoute des règles spécifiques à TypeScript
        },
      },
    ],
  };
  