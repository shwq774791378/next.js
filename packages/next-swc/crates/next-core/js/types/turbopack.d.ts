import type { ServerInfo } from '@vercel/turbopack-next/internal/server'
import type { RenderOptsPartial } from 'next/dist/server/render'

export type RenderData = {
  params: Record<string, string | string[]>
  method: string
  url: string
  originalUrl: string
  path: string
  rawQuery: string
  rawHeaders: Array<[string, string]>
  data?: {
    nextConfigOutput?: RenderOptsPartial['nextConfigOutput']
    serverInfo?: ServerInfo
    allowedRevalidateHeaderKeys?: string[]
    fetchCacheKeyPrefix?: string
    isrMemoryCacheSize?: number
    useUnstablePostpone: boolean
  }
}
