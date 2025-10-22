export interface Pokemon {
  name: string;
  imageUrl: string;
  level: number;
  types: string[];
  _id: string;
}
export interface Trainer {
  _id: string;
  name: string;
  level: number;
}

export interface Zone {
  _id: string;
  name: string;
  description: string;
}

export interface signup {
  username: string;
  password: string;
}
export interface signin {
  username: string;
  password: string;
}

export interface User {
  _id: string;
  username: string;
}

export interface reponse {
  user: User;
  token: string;
}
