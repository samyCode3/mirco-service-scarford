export interface IResponse {
    ok : boolean,
    status: number,
    message: string,
    stack?: any,
    body? :{} | '',
}