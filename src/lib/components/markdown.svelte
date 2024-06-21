<script lang="ts">
  import { onMount } from "svelte";
  import * as marked from "marked";

  export let text: string;

  const parse_md = async (text: string | undefined) => {
    return marked.parse(text ?? "", {
      gfm: true,
      breaks: true,
      pedantic: false,
      tokenizer: new marked.Tokenizer(),
    });
  };
</script>

<div class="markdown">
  {#await parse_md(text)}
    <p>Loading...</p>
  {:then html}
    {@html html}
  {:catch error}
    <p>{error.message}</p>
  {/await}
</div>

<style lang="scss">
  .markdown {
    display: inline-block;
    margin: 16px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
