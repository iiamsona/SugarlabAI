export interface User {
    isLoggedIn: boolean;
    isPremium: boolean;
    name?: string;
  }
  
  export const loggedOutUser: User = {
    isLoggedIn: false,
    isPremium: false,
  };
  
  export const freeUser: User = {
    isLoggedIn: true,
    isPremium: false,
    name: "Anna",
  };
  
  export const premiumUser: User = {
    isLoggedIn: true,
    isPremium: true,
    name: "Davit",
  };
  