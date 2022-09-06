import { Ref } from 'vue'
export type TEmit = (event: string, ...args: unknown[]) => void
export type TProps = { [key: string]: any }

export interface IMJUI {
  drawers: Ref[]
  modals: Ref[]
}
