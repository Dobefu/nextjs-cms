import antfu from '@antfu/eslint-config'
import tailwind from 'eslint-plugin-tailwindcss'

export default antfu(
  {
    react: true,
    typescript: true,
  },
  {
    ignores: [
      'prisma/migrations/**/*',
    ],
  },
  ...tailwind.configs['flat/recommended'],
)
