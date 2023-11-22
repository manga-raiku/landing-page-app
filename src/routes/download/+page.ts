export interface Release {
  url: string
  assets_url: string
  upload_url: string
  html_url: string
  id: number
  author: {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: boolean
  }
  node_id: string
  tag_name: string
  target_commitish: string
  name: string
  draft: boolean
  prerelease: boolean
  created_at: string
  published_at: string
  assets: {
    browser_download_url: string
  }[]
  tarball_url: string
  zipball_url: string
  body: string
}

export const ssr =
  false

export async function load() {
  const release =
    await fetch(
      "https://api.github.com/repos/manga-raiku/raiku-app/releases"
    ).then(
      (res) =>
        res.json() as Promise<
          Release[]
        >
    )

  const latest =
    release.find(
      (item) =>
        item.tag_name.startsWith(
          "android@"
        )
    )

  return { latest }
}
