export interface ChildrenState {
  childrenList: Child[],
  isLoading: boolean,
  errMsg?: any
}

export interface Child {
  name: string,
  dob: string
}
