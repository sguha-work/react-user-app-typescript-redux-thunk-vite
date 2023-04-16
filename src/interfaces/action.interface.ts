export default interface Action {
    type: string;
    info: string;
    payload?: Array<any>;
    error?: Object;
}