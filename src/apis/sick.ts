import { instance } from './instance'

export type SickObj = {
  sickCd: string
  sickNm: string
}

export type GetSickResponse = SickObj[]

const getSick = (searchTerm: string) => {
  return instance.get<GetSickResponse>('sick', { q: searchTerm })
}

export const sickApi = { get: getSick }
