module.exports = {
  locales: ['en', 'ko'],
  defaultLocale: 'en',
  localeDetection: false,
  loader: true, // This deactivate the webpack loader that loads the namespaces
  pages: {
    '*': ['common'],
  },
  // When loader === false, then loadLocaleFrom is required
  loadLocaleFrom: async (locale, namespace) => {
    console.log('locale', locale)
    console.log('namespace', namespace)
    return import(`./locales/${locale}/${namespace}`).then((r) => r.default)
  },
}
