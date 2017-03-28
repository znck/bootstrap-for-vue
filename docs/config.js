const config = {
  repo: 'znck/bootstrap-for-vue',

  'edit-link': 'https://github.com/znck/bootstrap-for-vue/edit/master/docs',

  // landing: '',

  nav: [
    { title: 'Home', path: '/' },
    { title: 'Components', path: '/components' },
    { title: 'Directives', path: '/directives' },
    { title: 'Mixins', path: '/mixins' },
    { title: 'Styles', path: '/styles' },
    // { title: 'Helpers', path: '/helpers' },
  ],

  plugins: [
    docsearch({
      apiKey: '4f8ad9afa2cf0f5f101852754018a29a',
      indexName: 'bootstrap-for-vue',
      tags: ['en']
    }),
    docuteIframe({
      prepend: `
        <link rel="stylesheet" href="https://unpkg.com/bootstrap@4.0.0-alpha.6/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://unpkg.com/bootstrap-for-vue@latest/dist/bootstrap-for-vue.min.css">
        
        <style>
        [id^=app] { padding: 16px }
        </style>
        
        <!-- require vue -->
        <script src="https://unpkg.com/vue/dist/vue.min.js"></script>
        
        <!-- require bootstrap-for-vue -->
        <script src="https://unpkg.com/bootstrap-for-vue@latest/dist/bootstrap-for-vue.min.js"></script>
      `
    })
  ],

  url: 'http://bootstrap-for-vue.znck.me'
}

docute.init(config)
