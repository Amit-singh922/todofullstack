// export interface Video{
//     id: number
//     name: string
//     url: string
//     watched: boolean
// }


export interface VideoData {
    name: string
    url: string
    watched: boolean
}

export interface Video extends VideoData {
    id: number
}