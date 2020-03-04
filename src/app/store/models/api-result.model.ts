export interface ApiResultStateModel<T extends any> {
  payload?: any;
  loading: boolean;
  errors: string;
  data: T;
}
export function initApiResultState(data) {
  return <ApiResultStateModel<typeof data>>{
    payload: null,
    loading: false,
    errors: null,
    data
  };
}
