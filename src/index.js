import pushPlugins from '@dword-design/nuxt-push-plugins'
import P from 'path'

export default function () {
  this.addTemplate({
    fileName: P.join('nuxt-server-link', 'component.vue'),
    src: require.resolve('./component.vue'),
  })
  pushPlugins(this, {
    fileName: P.join('nuxt-server-link', 'plugin.js'),
    src: require.resolve('./plugin'),
  })
}
