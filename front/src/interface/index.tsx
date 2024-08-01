import React from "react";

export interface IRegisterUser {
name: string;
email:string;
username: string;
password:string;
address:string;
phone: number;
dob: string;
}

export interface IRegisterUserResponse {
  name: string;
  email:string;
  username: string;
  password:string;
  address:string;
  phone: number;
  dob: string;
  role: string;
  credential: ICreadential;
  }

  export interface ICreadential {
  password: string;
  id: number;
}

export interface ILoginUser {
  email: string
  password: string
}

  export interface IUser {
    id: number;
    name: string;
    email:string;
    username: string;
    password:string;
    address:string;
    phone: number;
    dob: string;
    role?: string;
    credential?: ICreadential;
  }

  export interface IComicTest {
    id:number;
    name: string;
    image: string;
    author: string;
  }

  export interface IComicProps {
    comic: IComicTest;
  }

  export interface IComicListProps {
    comics: IComicTest[];
    limit?: number;
  }

  export interface ICreatorTest {
    id:string;
    username: string;
    pfp: string;
  }
  
  export interface ICreatorProps {
    creator: ICreatorTest;
  }

  export interface ICreatorListProps {
    creators: ICreatorTest[];
    limit?: number;
  }

  export interface ILoginUserResponse {
    loggin: boolean;
    user: Partial<IUser> | null;
    token: string;
  }

  export interface IUserContext {
    user: Partial<ILoginUserResponse> | null,
    setUser: React.Dispatch<React.SetStateAction<Partial<ILoginUserResponse> | null>>,
    isLogged: boolean,
    setIsLogged: (isLogged: boolean) => void,
    signIn: (credentials: ILoginUser) => Promise<boolean>,
    signUp: (user: Omit<IRegisterUser, "id">)=> Promise<boolean>,
    logOut: () => void,
  }

  export interface MembershipOption {
    name: string;
    price: number;
    description: string;
    features: {
        text: string;
        isAvailable: boolean;
    }[];
}