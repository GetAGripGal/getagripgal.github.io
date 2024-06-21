<script lang="ts">
  import AuthorNav from "$lib/components/author-nav.svelte";
  import TextmodeButton from "$lib/components/textmode-button.svelte";
</script>

<span class="name">The Musical Kitchen</span>
<AuthorNav />

<div class="navigation">
  <TextmodeButton
    box_style="double"
    onclick={() => (window.location.href = "/")}>[Back]</TextmodeButton
  >
</div>

<h2>In progress...</h2>

<style lang="scss">
  .name {
    display: flex;
    font-size: 48px;

    justify-content: center;
    flex-direction: row;

    animation-name: flash;
    animation-duration: 400ms;
    animation-iteration-count: infinite;
    animation-timing-function: step-end;
  }

  .navigation {
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin: 16px;
  }
</style>
