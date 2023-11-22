<script
  lang="ts"
  setup
>
  import SolarDownloadMinimalisticBoldDuotone from "virtual:icons/solar/download-minimalistic-bold-duotone"
  import Button from "$lib/Button.svelte"

  import type { Release } from "./+page.ts"

  export let data: {
    latest: Release
  }

  let version: string
  $: version =
    data.latest.tag_name.slice(
      (data.latest.tag_name.indexOf(
        "@"
      ) >>>
        0) +
        1
    )
</script>

<main
  class="mt-7rem"
>
  <section
    class="flex items-center justify-center gap-1rem"
  >
    <Button
      href={data
        .latest
        .assets[0]
        .browser_download_url}
      target="_blank"
      color="blue"
    >
      <SolarDownloadMinimalisticBoldDuotone
        class="size-1.5em"
      />

      v{version}
    </Button>
    <Button
      href={data
        .latest
        .html_url}
      color="grey"
    >
      View Source
    </Button>
  </section>

  <pre>{data.latest
      .body ||
      "No changelog"}</pre>
</main>
