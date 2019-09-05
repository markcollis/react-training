import createRouter from 'router5'
import browserPlugin from 'router5-plugin-browser'

import { routes, defaultRoute } from './root-routes'

const router = createRouter(routes, { defaultRoute })
router.usePlugin(browserPlugin())

export default router
