<script lang="ts">
  import "@unocss/reset/tailwind.css"
  import "virtual:uno.css"
  import "@fontsource/manrope"

  import { fade } from "svelte/transition"
  import appIcon from "$lib/images/app_icon.png"
  import { SvelteUIProvider } from "@svelteuidev/core"

  import { page } from "$app/stores"
  let path: string

  $: path =
    $page.url
      .pathname

  const buttons = [
    {
      label: "Home",
      path: "/"
    },
    {
      label:
        "Download",
      path: "/download"
    },
    {
      label:
        "Web version",
      path: "https://mangaraiku.eu.org"
    },
    {
      label:
        "Plugins",
      path: "/plugins"
    },
    {
      label:
        "Contributors",
      path: "/contributors"
    },
    {
      label:
        "Sponsor",
      target:
        "_blank",
      path: "https://ko-fi.com/tachib_shin"
    }
  ]

  let opening =
    false
</script>

<SvelteUIProvider
  themeObserver="dark"
>
  <header
    class="header fixed top-0 w-full h-min-50px py-4 px-6 md:px-8 bg-[hsl(348,9%,13.5%)] flex items-center z-9999"
  >
    <button
      class="btn-hammer md:hidden text-1.5em mr-6"
      on:click={() =>
        (opening =
          !opening)}
    >
      <span
        class:close={opening}
      />
    </button>

    <img
      src={appIcon}
      width="50"
      height="50"
      alt="icon app"
      class="mr-4"
    />

    
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  {#if opening}
  <div
    class="overlay fixed z-9999 top-0 left-0 w-full h-full bg-#00000080"
    aria-hidden="true"
    transition:fade={{
      duration: 400
    }}
    on:click={void (opening = false)}
  />
{/if}
    <div
      class="nav-wrapper"
      class:opening
    >
      <nav
        class="flex items-center gap-1rem"
      >
        {#each buttons as button}
          <a
            class="nav-item"
            href={button.path}
            target={button.target}
            class:nav-active={button.path ===
              path}
          >
            {button.label}
          </a>
        {/each}
      </nav>
    </div>
  </header>
</SvelteUIProvider>

<slot />

<style lang="scss">
  :global(body) {
  --bezier-one: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  background-color: hsl(292, 10%, 11%);
  font-family: Manrope;
  color: hsl(346, 100%, 94%);
}
:global(*) {
  // font-size: 14px;
}

.nav-item {
  color: hsl(348, 30%, 75%);

  &.nav-active {
    background-color: hsla(345, 91%, 69%, 0.15);
    color: hsl(346, 100%, 81%);
  }

  padding: 10px 16px;
  border-radius: 10px;
  border-color: hsl(270, 9%, 13%);
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    background-color: hsl(250, 14%, 17%) !important;
    color: hsl(346, 100%, 94%) !important;
  }
}

.btn-hammer {
  user-select: none;
  position: relative;
  display: flex;
  height: 50px;
  z-index: 10000;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  span {
    user-select: none;
    cursor: pointer;
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;

    &,
    &:before,
    &:after {
      width: 24px;
      height: 2px;
      background: hsl(348, 30%, 75%);
      transition: all 0.3s var(--bezier-one);
    }

    &:before,
    &:after {
      content: "";
      position: absolute;
    }

    &:before {
      transform: translateY(-6.5px);
    }

    &:after {
      transform: translateY(6.5px);
    }

    &.close {
      transform: translate(-10px);
      background: 0 0;
      box-shadow: none;
    }

    &.close:before {
      transform: rotate(45deg) translate(10px, -10px);
    }

    &.close:after {
      transform: rotate(-45deg) translate(10px, 10px);
    }
  }
}

.header.bouced {
  background-color: #000;
  padding-top: 15px;
  padding-bottom: 15px;
}

.nav-wrapper {
  @media (max-width: 767.99px) {
    transform: translateX(-110%);
    transition: transform 400ms var(--bezier-one);
    &.opening {
      transform: translateX(0);
    }

    nav {
      flex-direction: column;
      gap: 0.5rem;
      .nav-item {
        width: 100%;
        border-radius: 100px;
      }
    }
    height: 100%;
    margin: 0 auto;
    position: fixed;
    width: 20rem;
    top: 0;
    border-radius: 0 24px 24px 0;
    left: 0;
    background-color: hsl(280, 9%, 13.5%);
    padding: 6rem 1rem 1rem;
    z-index: 9999;
  }
}

</style>
