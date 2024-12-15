export interface Category {
  id: number;
  name: string;
  image: string;
}

export enum AccessType {
  public = 'public',
  private = 'private'
}
