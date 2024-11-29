import { Query } from './core'

const allCategories = () => Query({ url: 'category/all-categories' })

export default { allCategories }
