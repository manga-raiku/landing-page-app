<script lang="ts">
  import type { PluginInfo } from "./+page"

  import {
    Badge,
    Input,
    NativeSelect,
    Radio,
    RadioGroup
  } from "@svelteuidev/core"

  import ISO6391 from "iso-639-1"
  import dayjs from "../../logic/dayjs"

  export let data: {
    plugins: PluginInfo[]
  }

  $: pluginsGroupedLanguage =
    data.plugins.reduce(
      (
        prev,
        item
      ) => {
        if (
          !prev[
            item
              .meta
              .language
          ]
        ) {
          prev[
            item.meta.language
          ] = []
        }

        prev[
          item.meta
            .language
        ].push(item)

        return prev
      },
      {} as Record<
        string,
        PluginInfo[]
      >
    )

  $: languages = [
    {
      label: "All",
      value: ""
    },
    ...Object.keys(
      pluginsGroupedLanguage
    ).map(
      (item) => ({
        value: item,
        label:
          ISO6391.getNativeName(
            item
          )
      })
    )
  ]

  const sorts = [
    {
      label:
        "Ascending",
      value: "asc"
    },
    {
      label:
        "Descending",
      value: "desc"
    }
  ]
  const modes = [
    {
      label: "NSFW",
      value: "nsfw"
    },
    {
      label: "SFW",
      value: "sfw"
    },
    {
      label: "All",
      value: "all"
    }
  ]

  let search: string
  let language:
    | string
    | undefined
  let sortBy:
    | "asc"
    | "desc" = "asc"
  let displayMode:
    | "nsfw"
    | "sfw"
    | "all" = "all"

  $: pluginsShow =
    Object.entries(
      pluginsGroupedLanguage
    )
      .filter(
        ([
          languageCode
        ]) =>
          !language ||
          languageCode ===
            language
      )
      .map(
        ([
          language,
          items
        ]) =>
          [
            language,
            items
              .filter(
                (
                  item
                ) => {
                  let validMode =
                    false

                  switch (
                    displayMode
                  ) {
                    case "nsfw":
                      validMode =
                        item
                          .meta
                          .isNSFW
                      break
                    case "sfw":
                      validMode =
                        !item
                          .meta
                          .isNSFW
                      break
                    default:
                      validMode =
                        true
                      break
                  }

                  if (
                    !validMode
                  )
                    return false

                  return (
                    !search ||
                    item.meta.name.includes(
                      search
                    ) ||
                    item.meta.id.includes(
                      search
                    ) ||
                    item.meta.author.includes(
                      search
                    ) ||
                    item.sender.includes(
                      search
                    ) ||
                    item.meta.description.includes(
                      search
                    )
                  )
                }
              )
              .sort(
                (
                  a,
                  b
                ) => {
                  if (
                    sortBy ===
                    "asc"
                  ) {
                    return (
                      b
                        .meta
                        .updatedAt -
                      a
                        .meta
                        .updatedAt
                    )
                  }

                  return (
                    a
                      .meta
                      .updatedAt -
                    b
                      .meta
                      .updatedAt
                  )
                }
              )
          ] as const
      )
</script>

<main
  class="mt-7rem"
>
  <form
    class="text-14px mx-8"
  >
    <div
      class="table"
    >
      <div
        class="table-row"
      >
        <div
          class="table-cell text-right py-3 text-12px"
        >
          Search:
        </div>
        <div
          class="table-cell pl-4"
        >
          <Input
            bind:value={search}
            placeholder="Search plugin by name or ID"
          />
        </div>
      </div>

      <div
        class="table-row"
      >
        <div
          class="table-cell text-right py-3 text-12px"
        >
          Language:
        </div>
        <div
          class="table-cell pl-4"
        >
          <NativeSelect
            bind:value={language}
            data={languages}
            placeholder="Show specific languages..."
          />
        </div>
      </div>

      <div
        class="table-row"
      >
        <div
          class="table-cell text-right py-3 text-12px"
        >
          Sort by:
        </div>
        <div
          class="table-cell pl-4"
        >
          <div
            class="flex items-end"
          >
            <RadioGroup
              bind:group={sortBy}
              color="pink"
              spacing="lg"
              labelDirection="left"
              items={sorts}
            />
          </div>
        </div>
      </div>

      <div
        class="table-row"
      >
        <div
          class="table-cell text-right py-3 text-12px"
        >
          Display
          mode:
        </div>
        <div
          class="table-cell pl-4"
        >
          <div
            class="flex items-end"
          >
            <RadioGroup
              bind:group={displayMode}
              color="pink"
              spacing="lg"
              labelDirection="left"
              items={modes}
            />
          </div>
        </div>
      </div>
    </div>
  </form>

  <ul class="mx-4">
    {#each pluginsShow as [languageCode, plugins]}
      <li
        class="py-2 font-medium text-18px mt-6"
      >
        {ISO6391.getNativeName(
          languageCode
        ) || "All"}
      </li>
      {#each plugins as plugin}
        <li
          class="flex flex-nowrap items-center px-4 py-2"
        >
          <div
            class=""
          >
            <img
              src={plugin.favicon}
              alt={plugin
                .meta
                .name}
              class="size-1.8em rounded"
            />
          </div>

          <div
            class="min-w-0 ml-4"
          >
            <div
              class="text-14px font-500 flex items-center"
            >
              <div
                class="mr-2"
              >
                {plugin
                  .meta
                  .name}
              </div>

              <Badge
                size="sm"
                radius="lg"
              >
                {plugin
                  .meta
                  .version}
              </Badge>
              {#if plugin.meta.isNSFW}
                <Badge
                  color="pink"
                  size="sm"
                  radius="lg"
                >
                  NSFW
                </Badge>
              {/if}

              <span
                class="text-12px text-gray-300 ml-2"
                >{dayjs(
                  plugin
                    .meta
                    .updatedAt
                )
                  .locale(
                    "vi"
                  )
                  .fromNow()}</span
              >
            </div>

            <div
              class="text-gray-400 text-12px leading-normal"
            >
              {plugin
                .meta
                .description}
            </div>
            <div
              class="text-gray-400 text-12px leading-normal"
            >
              @{plugin.sender}
            </div>
          </div>
        </li>
      {/each}
    {/each}
  </ul>
</main>
