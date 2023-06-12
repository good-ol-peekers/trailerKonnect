import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  expanded: false,
   /** @type {import('./models/Trailer.js').Trailer} */
  trailers: [],
   /** @type {import('./models/Trailer.js').Trailer} */
  trailer: null,
     /** @type {import('./models/Trailer.js').Trailer} */
  newTrailer: null,
    /** @type {import('./models/Account.js').Profile} */
  profile: {},
})
