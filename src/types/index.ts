export enum ExistingSocialNetworkEnum {
    Instagram,
    Facebook,
    Twitter,
    Youtube
}

export interface SocialNetwork {
    name: string
    type: keyof ExistingSocialNetworkEnum
    link: string
}

export interface deputieInfoType  {
    name:string
    socialNetworks: SocialNetwork[]
}

export interface DeputyType {
    name:string
    twitter:string
    instagram:string
}