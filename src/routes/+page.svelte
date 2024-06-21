<script lang="ts">
  import Markdown from "$lib/components/markdown.svelte";
  import Greeter from "$lib/components/greeter.svelte";
  import TextmodeButton from "$lib/components/textmode-button.svelte";
  import vision_button_md from "$lib/assets/markdown/projects/Vision.md?raw";
  import project1_button_md from "$lib/assets/markdown/projects/Project1.md?raw";
  import project2_button_md from "$lib/assets/markdown/projects/Project2.md?raw";
  import project3_button_md from "$lib/assets/markdown/projects/Project3.md?raw";
</script>

<Greeter />

<div class="vision-navigation">
  <div class="button">
    <TextmodeButton
      tab_index={1}
      box_style="double"
      onclick={() => (window.location.href = "vision")}
    >
      <Markdown text={vision_button_md} />
    </TextmodeButton>
  </div>
</div>

<div class="navigation">
  <div class="button">
    <TextmodeButton
      tab_index={1}
      box_style="double"
      onclick={() => (window.location.href = "furby")}
    >
      <Markdown text={project1_button_md} />
    </TextmodeButton>
  </div>
  <div class="button">
    <TextmodeButton
      tab_index={2}
      box_style="double"
      onclick={() => (window.location.href = "vex")}
    >
      <Markdown text={project2_button_md} />
    </TextmodeButton>
  </div>
  <div class="button">
    <TextmodeButton
      tab_index={3}
      box_style="double"
      onclick={() => (window.location.href = "the-musical-kitchen")}
    >
      <Markdown text={project3_button_md} />
    </TextmodeButton>
  </div>
</div>

<style lang="scss">
  .navigation {
    display: flex;
    justify-content: center;

    // margin: 16px;
  }

  .vision-navigation {
    display: flex;
    justify-content: center;

    // margin: 16px;
  }

  .button {
    width: 30%;
    margin: 16px;
    overflow-x: hidden;
    overflow-y: hidden;
  }
</style>
