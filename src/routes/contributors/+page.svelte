<script lang="ts">
  import type {
    Repo,
    Contributor
  } from "./+page.ts"

  export let data: {
    repos: {
      repo: Repo
      contributors: Contributor[]
    }[]
  }
</script>

<main
  class="mt-7rem mx-4"
>
  <h1
    class="text-26px font-medium text-center"
  >
    Made possible by
    the community.
  </h1>

  {#each data.repos as { repo, contributors }}
    <section
      class="border border-gray-600 rounded-30px my-5 overflow-hidden"
    >
      <div
        class="py-3 px-6 bg-[hsl(230,9%,13%)]"
      >
        {repo.full_name}
      </div>

      <div
        class="flex flex-wrap mx-4 mb-4 mt-2"
      >
        {#each contributors as contributor}
          <div
            class="w-1/2 sm:w-1/4 md:1/6 lg:1/8 min-w-0 flex items-center px-2 py-1.5"
          >
            <img
              src={contributor.avatar_url}
              alt="avatar {contributor.login}"
              width="40"
              height="40"
              class="rounded-1/2 mr-2"
            />
            <div
              class="truncate"
            >
              {contributor.login}
            </div>
          </div>
        {/each}
      </div>
    </section>
  {/each}
</main>

<style lang="scss">
  section {
    color: hsl(
      348,
      30%,
      75%
    );
  }
</style>
