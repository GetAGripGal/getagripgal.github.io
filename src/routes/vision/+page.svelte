<script lang="ts">
  import AuthorNav from "$lib/components/author-nav.svelte";
  import Markdown from "$lib/components/markdown.svelte";
  import TextmodeBox from "$lib/components/textmode-box.svelte";
  import TextmodeButton from "$lib/components/textmode-button.svelte";

  import vision_md from "$lib/assets/markdown/Vision.md?raw";
</script>

<span class="name">My vision for the world</span>
<AuthorNav />

<div class="navigation">
  <TextmodeButton
    tab_index={7}
    box_style="double"
    onclick={() => (window.location.href = "/")}>[Back]</TextmodeButton
  >
</div>

<div>
  <div class="vision">
    <TextmodeBox box_style="double">
      <Markdown text={vision_md}></Markdown>
    </TextmodeBox>
  </div>
</div>

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

  .vision {
    width: 60%;
    // margin: 16px;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
  }
</style>
