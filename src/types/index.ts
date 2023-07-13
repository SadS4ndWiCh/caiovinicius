import type { Image } from "sanity";

type SanityBase = {
  _id: string;
  _rev: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
}

export interface IProject extends SanityBase {
  title: string;
  thumb: Image;
  categories: ICategory[];
  description: string;
  sourceCode: string;
  demo: string;
}

export interface ICategory extends SanityBase {
  title: string;
  description: string;
}