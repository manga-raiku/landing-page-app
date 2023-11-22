<div
  class="screenshot"
>
  <slot />
</div>

<style lang="scss">
  .screenshot {
    &,
    & > :global(*) {
      border-radius: 1.75rem;
    }
    padding: 0.5rem;
    background-color: hsl(
      230,
      9%,
      13%
    );
  }
</style>
