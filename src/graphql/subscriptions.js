/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAuthor = /* GraphQL */ `
  subscription OnCreateAuthor {
    onCreateAuthor {
      id
      name
      createdAt
      updatedAt
      blogs {
        items {
          id
          title
          contents
          authorID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onUpdateAuthor = /* GraphQL */ `
  subscription OnUpdateAuthor {
    onUpdateAuthor {
      id
      name
      createdAt
      updatedAt
      blogs {
        items {
          id
          title
          contents
          authorID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onDeleteAuthor = /* GraphQL */ `
  subscription OnDeleteAuthor {
    onDeleteAuthor {
      id
      name
      createdAt
      updatedAt
      blogs {
        items {
          id
          title
          contents
          authorID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog {
    onCreateBlog {
      id
      title
      contents
      authorID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog {
    onUpdateBlog {
      id
      title
      contents
      authorID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog {
    onDeleteBlog {
      id
      title
      contents
      authorID
      createdAt
      updatedAt
    }
  }
`;
