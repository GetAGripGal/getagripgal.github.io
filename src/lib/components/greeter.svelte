<script lang="ts">
  import TextmodeButton from "./textmode-button.svelte";
  import TextmodeBox from "./textmode-box.svelte";
</script>

<div class="greeter">
  <span class="welcome">Welcome to the portifolio of</span>
  <a tabindex={100} class="name" href="/">Lars Jensen</a>
</div>

<style lang="scss">
  .greeter {
    display: flex;

    margin: 16px;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    flex-direction: column;

    width: 100%;
  }

  .name {
    font-size: 48px;

    animation-name: flash;
    animation-duration: 400ms;
    animation-iteration-count: infinite;
    animation-timing-function: step-end;
  }

  .welcome {
    font-size: 32px;
  }
</style>
