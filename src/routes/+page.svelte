<script lang="ts">
  import SolarDownloadMinimalisticBoldDuotone from "virtual:icons/solar/download-minimalistic-bold-duotone"
  import IconPlugin from "virtual:icons/mingcute/plugin-2-line"
  import LogoGithub from "virtual:icons/bxl/github"
  import LogoDiscord from "virtual:icons/bxl/discord-alt"
  import LogoTwitter from "virtual:icons/bxl/twitter"
  import LogoChrome from "virtual:icons/bxl/chrome"

  import Screenshot from "$lib/Screenshot.svelte"
  import Button from "$lib/Button.svelte"

  import Wawe from "$lib/Wawe.svelte"

  const social = [
    {
      icon: LogoGithub,
      href: "https://github.com/manga-raiku"
    },
    {
      icon: LogoDiscord,
      href: "javascript:void(0)"
    },
    {
      icon: LogoTwitter,
      href: "https://x.com/tachib_shin"
    }
  ]
</script>

<Wawe />

<main
  class="min-w-[min(87%,100rem)] mt-7rem mx-14 <md:mx-8 z-200 relative"
>
  <div
    class="flex <md:flex-col items-center justify-center h-min-[calc(100vh-120px)] mt-9rem"
  >
    <section
      class="pb-9rem"
    >
      <h1
        class="mb-1.5rem font-700 leading-4rem text-3.5rem <md:text-3rem"
      >
        Bringing
        Manga closer
        to you
      </h1>

      <p
        class="font-400 mb-2rem text-1rem text-[hsl(348,30%,75%)]"
      >
        Welcome to
        the Manga
        Raiku app -
        where you
        can explore
        the world of
        manga right
        at your
        fingertips.
      </p>

      <div
        class="flex <sm:flex-col gap-1rem"
      >
        <Button
          href="/download"
          color="blue"
          class="<sm:w-full"
        >
          <SolarDownloadMinimalisticBoldDuotone
            class="size-1.5em"
          />
          Download
        </Button>
        <Button
          href="https://mangaraiku.eu.org"
          color="blue"
          class="<sm:w-full"
        >
          <LogoChrome
            class="size-1.5em"
          />
          Use Web version
        </Button>
        <Button
          href="/plugins"
          color="grey"
          class="<sm:w-full"
        >
          <IconPlugin
            class="size-1.5em"
          />
          Plugins
        </Button>
      </div>
    </section>

    <section
      class="flex items-center justify-end md:pl-8"
    >
      <Screenshot>
        <img
          src="https://user-images.githubusercontent.com/45375496/280448142-b7fead64-654a-40d6-81ec-cdd6d8e2f5ec.png"
          alt="reader app"
          class="max-w-320px"
        />
      </Screenshot>
    </section>
  </div>

  <section
    class="social absolute left-0 z-200 bottom-2rem flex items-center gap-1rem px-[max(6.5%,calc(50vw-50rem))]"
  >
    {#each social as item}
      <Button
        href={item.href}
        target="_blank"
        color="grey"
        class="btn-round size-60px flex items-center !pa-0"
      >
        <svelte:component
          this={item.icon}
          class="size-40px"
        />
      </Button>
    {/each}
  </section>
</main>
