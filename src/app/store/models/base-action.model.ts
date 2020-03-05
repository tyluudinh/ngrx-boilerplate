export interface IBaseActionModel<T> {
  payload: T;
  type?: string;
  dataReset?: any;
}
