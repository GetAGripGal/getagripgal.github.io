<script lang="ts">
  import AuthorNav from "$lib/components/author-nav.svelte";
  import Markdown from "$lib/components/markdown.svelte";
  import TextmodeButton from "$lib/components/textmode-button.svelte";
  import TextmodeBox from "$lib/components/textmode-box.svelte";
  import { get, writable, type Writable } from "svelte/store";

  import vision_md from "$lib/assets/markdown/vex/Vision.md?raw";
  import project_md from "$lib/assets/markdown/vex/Project.md?raw";
  import { browser } from "$app/environment";

  const state_storage = "vex_state";

  type State = "vision" | "project";
  let state: Writable<State> = writable("vision");

  if (browser) {
    // Load state from sessionStorage if available
    const savedState = sessionStorage.getItem(state_storage);
    if (savedState) {
      state.set(savedState as State);
    }

    // Save state to sessionStorage before page unload
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem(state_storage, get(state));
    });
  }
</script>

<span class="name">Vex</span>
<AuthorNav />

<div class="navigation">
  <TextmodeButton
    tab_index={2}
    box_style="double"
    focus={$state === "vision"}
    onclick={() => ($state = "vision")}>Vision</TextmodeButton
  >
  <TextmodeButton
    tab_index={3}
    box_style="double"
    focus={$state === "project"}
    onclick={() => ($state = "project")}>Project</TextmodeButton
  >
  <TextmodeButton
    tab_index={7}
    box_style="double"
    onclick={() => (window.location.href = "/")}>[Back]</TextmodeButton
  >
</div>

<div>
  {#if $state === "vision"}
    <div class="vision">
      <TextmodeBox box_style="double">
        <Markdown text={vision_md} />
      </TextmodeBox>
    </div>
  {/if}
  {#if $state === "project"}
    <div class="project">
      <TextmodeBox box_style="double">
        <Markdown text={project_md} />
      </TextmodeBox>
    </div>
  {/if}
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

  .project {
    width: 60%;
    // margin: 16px;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
  }
</style>
