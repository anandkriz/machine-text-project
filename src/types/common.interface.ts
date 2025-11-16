export interface Country {
  name: string
  region: string
  flag: string
}
export interface CounterState {
  countryList: Country[],
  loading: boolean,
  error: string | null,
  selectedRegion: string,
  currentPageCount: number,
}