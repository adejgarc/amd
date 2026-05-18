// import type { StorybookConfig } from '@storybook/angular';
// import remarkGfm from 'remark-gfm';

// const config: StorybookConfig = {
//   "stories": [
//     "../src/**/*.mdx",
//     "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
//   ],
//   "addons": [
//     "@storybook/addon-a11y",
//     "@storybook/addon-docs",
//     "@storybook/addon-onboarding"
//   ],
//   "framework": "@storybook/angular"
// };
// export default config;
import type { StorybookConfig } from '@storybook/angular';
import remarkGfm from 'remark-gfm';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-a11y",
    {
      name: "@storybook/addon-docs",
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            // Añadimos el plugin aquí
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    "@storybook/addon-onboarding",
    // Asegúrate de que "@storybook/addon-essentials" esté aquí si lo usas, 
    // ya que suele incluir docs por defecto.
  ],
  framework: {
    name: "@storybook/angular",
    options: {},
  },
};

export default config;