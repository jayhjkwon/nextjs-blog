import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type AuthorMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BlogMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Author {
  readonly id: string;
  readonly name?: string;
  readonly blogs?: (Blog | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Author, AuthorMetaData>);
  static copyOf(source: Author, mutator: (draft: MutableModel<Author, AuthorMetaData>) => MutableModel<Author, AuthorMetaData> | void): Author;
}

export declare class Blog {
  readonly id: string;
  readonly title?: string;
  readonly contents?: string;
  readonly authorID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Blog, BlogMetaData>);
  static copyOf(source: Blog, mutator: (draft: MutableModel<Blog, BlogMetaData>) => MutableModel<Blog, BlogMetaData> | void): Blog;
}