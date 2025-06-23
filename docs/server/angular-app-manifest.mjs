
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/home"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/project"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23574, hash: 'f3ffc636f4d14788f45bd37403e5e20f857f5d4eb9c5711490c0bbcbae14188a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17148, hash: 'ecdd25ce296f78765e541cfe5ac8f18d14793e03fa0d474cbf65e30df2d72742', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 27716, hash: '8795941786911e08ac484593f95f8aa1154f5fff80a6087caa09095561bcdda8', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 26137, hash: '6e3e3e0c33c9c25c92b9cfcb4dbc7fd53c8068a6e97bb0b7bdf6266ecbffaf03', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 26893, hash: '1ebba598b932a8e53eb5d4cd532e9d440cafd033bfedb57cddf44a592f949a31', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 28269, hash: '9eb76b93cfbcbc1c93d395d9961b43200e191817bfb34e3b37c2835f5dac1f4b', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'project/index.html': {size: 30448, hash: '12c4fdca3dd10f85af1eaf4c1206b18966541af8cd85bff7f9c4ad6b0b3c23c8', text: () => import('./assets-chunks/project_index_html.mjs').then(m => m.default)},
    'styles-WNKDDIZJ.css': {size: 6979, hash: 'AsSxQJi0uyE', text: () => import('./assets-chunks/styles-WNKDDIZJ_css.mjs').then(m => m.default)}
  },
};
