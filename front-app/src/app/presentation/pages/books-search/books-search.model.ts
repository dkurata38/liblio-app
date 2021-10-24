export type BookId = string;
export type Title = string;
export type Author = {
  name: AuthorName,
  type: AuthorType,
};
export type AuthorName = string;
export type AuthorType = string;
export type PublishedOn = Date;
export type Format = string;

export interface Book {
  id: BookId,
  title: Title,
  authors: Author[],
  publishedOn: PublishedOn,
  format: Format,
}
