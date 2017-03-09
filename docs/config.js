self.$config = {
  repo: 'znck/bootstrap-for-vue',

  'edit-link': 'https://github.com/znck/bootstrap-for-vue/edit/master/docs',

  // landing: '',

  nav: [
    { title: 'Home', path: '/' },
    { title: 'Components', path: '/components' },
  ],

  plugins: [
    // docsearch({
    //   apiKey: 'You API Key',
    //   indexName: 'rollup-plugin-vue-docs',
    //   tags: ['en']
    // }),
    docuteIframe({
      prepend: `
        <link rel="stylesheet" href="https://unpkg.com/bootstrap@4.0.0-alpha.6/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://unpkg.com/bootstrap-for-vue/dist/bootstrap-for-vue.min.css">
        
        <style>
        [id^=app] { padding: 16px }
        </style>

        <!-- require bootstrap -->
        <script src="https://unpkg.com/jquery@3.1.1/dist/jquery.min.js"></script>
        <script src="https://unpkg.com/tether@1.4.0/dist/js/tether.min.js"></script>
        <script src="https://unpkg.com/bootstrap@4.0.0-alpha.6/dist/js/bootstrap.min.js"></script>
        
        <!-- require vue -->
        <script src="https://unpkg.com/vue/dist/vue.js"></script>
        
        <!-- require bootstrap-for-vue -->
        <script src="https://unpkg.com/bootstrap-for-vue/dist/bootstrap-for-vue.min.js"></script>
      `
    })
  ],

  url: 'http://bootstrap-for-vue.znck.me'
}
