<script lang="ts">
  import TextmodeBox from "./textmode-box.svelte";

  let mouse_over: boolean = false;

  export let box_style: "single" | "double" = "single";
  export let onclick: (event: Event) => void = () => {};
  export let focus: boolean = false;
  export let tab_index: number = 0;
</script>

<div
  role="button"
  class="textmode-button"
  on:click={onclick}
  on:keydown={(e) => {
    if (e.key === "Enter") onclick(e);
  }}
  on:mouseover={() => (mouse_over = true)}
  on:mouseout={() => (mouse_over = false)}
  on:focus={() => (mouse_over = true)}
  on:blur={() => (mouse_over = false)}
  tabindex={tab_index}
>
  <TextmodeBox color_mode={mouse_over || focus ? "light" : "dark"} {box_style}>
    <br /><slot></slot><br /><br />
  </TextmodeBox>
</div>

<style lang="scss">
  .textmode-button {
    font-size: 16px;
    // display: inline-flex;
    justify-content: center;

    cursor: pointer;
    user-select: none;

    &:focus {
      outline: none;
    }
  }
</style>
