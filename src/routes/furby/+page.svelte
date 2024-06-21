<script lang="ts">
  import { browser } from "$app/environment";
  import AuthorNav from "$lib/components/author-nav.svelte";
  import Markdown from "$lib/components/markdown.svelte";
  import TextmodeBox from "$lib/components/textmode-box.svelte";
  import TextmodeButton from "$lib/components/textmode-button.svelte";
  import { get, writable, type Writable } from "svelte/store";

  import vision_md from "$lib/assets/markdown/furby/Vision.md?raw";
  import project_md from "$lib/assets/markdown/furby/Project.md?raw";
  import speech_md from "$lib/assets/markdown/furby/Speech.md?raw";
  import dissection_md from "$lib/assets/markdown/furby/Dissection.md?raw";
  import retrospective_md from "$lib/assets/markdown/furby/Retrospective.md?raw";

  const state_storage = "furby_state";

  type State = "vision" | "project" | "speech" | "dissection" | "retrospective";
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

<span class="name">The Furby Project</span>
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
    tab_index={4}
    box_style="double"
    focus={$state === "speech"}
    onclick={() => ($state = "speech")}>Speech</TextmodeButton
  >
  <TextmodeButton
    tab_index={5}
    box_style="double"
    focus={$state === "dissection"}
    onclick={() => ($state = "dissection")}>Dissection</TextmodeButton
  >
  <TextmodeButton
    tab_index={6}
    box_style="double"
    focus={$state === "retrospective"}
    onclick={() => ($state = "retrospective")}>Retrospective</TextmodeButton
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

  {#if $state === "speech"}
    <div class="speech">
      <TextmodeBox box_style="double">
        <Markdown text={speech_md} />
      </TextmodeBox>
    </div>
  {/if}

  {#if $state === "dissection"}
    <div class="dissection">
      <TextmodeBox box_style="double">
        <Markdown text={dissection_md} />
      </TextmodeBox>
    </div>
  {/if}

  {#if $state === "retrospective"}
    <div class="retrospective">
      <TextmodeBox box_style="double">
        <Markdown text={retrospective_md} />
      </TextmodeBox>
    </div>
  {/if}
</div>

<style lang="scss">
  .navigation {
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin: 16px;
  }

  .project {
    width: 60%;
    // margin: 16px;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
  }

  .speech {
    width: 60%;
    // margin: 16px;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
  }

  .dissection {
    width: 60%;
    // margin: 16px;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
  }

  .retrospective {
    width: 60%;
    // margin: 16px;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
  }

  .vision {
    width: 60%;
    // margin: 16px;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
  }

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
</style>
