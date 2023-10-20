export interface useFetchType {
  (
    endpoint: string,
    method?: string,
    body?: object,
    token?: string,
    isExtAPI?: boolean
  ): Promise<{}>;
}

export interface data {
  status?: string;
  errors?: string;
  message?: string;
  msg?: string;
  ok?: boolean;
  data?: any;
}

export interface returnValue {
  ok: boolean;
  data: data | any;
}

export interface UserContextType {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  userInfo: UserInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
}

export interface UserInfo {
  firstName?: string;
  lastName?: string;
  role?: string;
}
