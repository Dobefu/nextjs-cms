import antfu from '@antfu/eslint-config'
import tailwind from 'eslint-plugin-tailwindcss'

export default antfu(
  {
    react: true,
    typescript: true,
    isInEditor: false,
  },
  {
    ignores: [
      'prisma/migrations/**/*',
    ],
  },
  ...tailwind.configs['flat/recommended'],
)
