import { type SchemaTypeDefinition } from 'sanity'
import { categoryType} from './categoryType'
import { addressType} from './addressType'
import { brandType } from './brandType'
import { authorType } from './authorType'
import { blogCategoryType } from './blogCategoryType'
import { blockContentType } from './blockContentType'
import { blogType } from './blogType'
import { orderType } from './orderType'
import { productType } from './productType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType,addressType,brandType,authorType,blogCategoryType,blockContentType,blogType,orderType,productType],
}
