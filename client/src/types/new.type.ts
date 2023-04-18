export interface NewType {
    title: string,
    text: string,
    img: string,
    url: string,
    like: string,
    time: string,
    by: string,
    btn: string
}
export type Stories ={
    title:string,
    news:Array<NewType>
}