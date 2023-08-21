export interface ChildrenState {
  childrenList: Child[],
  isLoading: boolean,
  selectedChild:  Child,
  errMsg?: any
}

export interface Child {
  id?: string,
  name: string,
  dob: string
}
export interface AddChildRequest {
  id?: string,
  name: string,
  dob: string,
  userEmail: string
}
