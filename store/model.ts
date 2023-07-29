
export interface IErrorResult<T> {
  response: IResponse<T>
}
export interface IResponse<T> {
  data: T
}

export interface IErrorData {
  error?: string
  message?: string
  statusCode?: number
}

export interface IPutResult {
  statusCode: number
}
