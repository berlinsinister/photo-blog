export interface IPhoto {
  id: string;
  url: string;
  set: [string, string?, string?, string?, string?];
  label: string;
  author?: string;
  year?: number | string;
}
