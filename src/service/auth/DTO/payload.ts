export interface Payload {
  userId:number,
  username: string;
  seller: boolean;
  iat?: number;
  expiresIn?: string;
}