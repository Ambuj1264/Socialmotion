export interface FacebookDataInterface {
  key: string;
  link: string;
  name: string;
}


export interface SocialMenuType {
  details: string;
  toolNo: string;
  name: string;
  addr: string;
  imgAddr?: string;
  price?: string;
}

export interface UserRequestBody {
  email: string;
  password?: string;
  name?: string;
  image?: string;
}

export interface Session {
  customer: string;
  amount_total: number;
  created: number;
}

export interface TestimonialType {
  name: string;
  image: string;
  feedback: string;
}
