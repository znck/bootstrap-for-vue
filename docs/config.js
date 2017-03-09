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
    ctx => ctx.event.on('content:updated', function () {
      document.querySelectorAll('.content script').forEach(el => new Function(el.innerHTML)())
    })
  ],

  url: 'http://bootstrap-for-vue.znck.me'
}
