export interface Pokemon {
 name : string 
 imageUrl : string
 level : number 
 types : string[]
 _id : string

}

export interface Trainer {
  _id: string;
  name: string;
  level : number
}

export interface Zone {
  _id: string;
  name: string;
  description : string
}
