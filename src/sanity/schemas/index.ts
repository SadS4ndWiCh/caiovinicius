import { type SchemaTypeDefinition } from 'sanity';

import { aboutSchema } from './about';
import { categorySchema } from './category';
import { projectSchema } from './project';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categorySchema, projectSchema, aboutSchema],
}
