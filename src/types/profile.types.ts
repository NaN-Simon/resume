export interface IProfileData {
    ru: IProfileSimple
    en: IProfileSimple
  }
  
  export interface IProfileSimple {
    name: string
    position: string
    avatar: string
    description: string
  }