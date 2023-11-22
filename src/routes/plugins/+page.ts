import type { Package } from "raiku-pgs/plugin"

export const ssr =
  false

export interface PluginInfo {
  meta: Omit<
    Package,
    "favicon"
  >
  sender: string
  url: string
  favicon: string
}

export async function load() {
  return {
    plugins:
      await fetch(
        "https://services.mangaraiku.eu.org/v1/list-plugin"
      ).then(
        (res) =>
          res.json() as Promise<
            PluginInfo[]
          >
      )
  }
}
