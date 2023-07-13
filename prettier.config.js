module.exports = {
  plugins: [
    require('prettier-plugin-tailwindcss'),
    require('@trivago/prettier-plugin-sort-imports'),
  ],
  importOrder: [
    '^react$',
    '^react/(.*)$',
    '^next$',
    '^next/(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^(.*)/sanity/(.*)$',
    '^(.*)/components/(.*)$',
    '^(.*)/lib/(.*)$',
    '^(.*)/utils/(.*)$',
    '^(.*)/types$',
    '^(.*)/types/(.*)$',
    '^public/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
