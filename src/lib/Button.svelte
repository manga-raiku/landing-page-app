<script lang="ts">
  export let color:
    | "blue"
    | "grey"
  export let href: string
  export let target:
    | string
    | undefined = ""
  let className:
    | string
    | undefined = ""

  export { className as class }
</script>

<a
  {href}
  {target}
  class={"btn btn-" +
    color +
    " " +
    className}
>
  <slot />
</a>

<style lang="scss">
  @import "$lib/btn.scss";
</style>
