const path = require('path')

module.exports = {
  in: '/src',
  themes: {
    development: {
      id: '122904969373',
      password: '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',
      store: 'marvie-test-store.myshopify.com',
      ignore: [
        'settings_data.json' // leave this here to avoid overriding theme settings on sync
      ]
    }
  }
}
