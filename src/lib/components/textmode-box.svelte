<!-- A box around a div made entirely of ascii characters, emulating a retro text-mode renderer -->
<script lang="ts">
  import { afterUpdate, onDestroy, onMount } from "svelte";

  let content_element: HTMLDivElement | undefined;
  let ascii_box: string | undefined;

  // Single or double line box
  export let box_style: "single" | "double" = "single";
  export let color_mode: "light" | "dark" = "light";

  // Box styles
  const styles = {
    single: {
      top_left: "┌",
      top_right: "┐",
      bottom_left: "└",
      bottom_right: "┘",
      horizontal: "─",
      vertical: "│",
    },
    double: {
      top_left: "╔",
      top_right: "╗",
      bottom_left: "╚",
      bottom_right: "╝",
      horizontal: "═",
      vertical: "║",
    },
  };

  /** Create an ascii box around the content element */
  function create_ascii_box() {
    if (!content_element || !content_element.parentElement) return;

    const { width, height } = content_element.getBoundingClientRect();
    const font_width = 8;
    const font_height = 16;
    const scaled_width = Math.ceil(width / font_width);
    const scaled_height = Math.ceil(height / font_height) - 1;

    const box = [];
    const style = styles[box_style];

    // Top line
    box.push(
      style.top_left + style.horizontal.repeat(scaled_width) + style.top_right,
    );
    // Middle lines
    for (let i = 0; i < scaled_height; i++) {
      box.push(style.vertical + " ".repeat(scaled_width) + style.vertical);
    }
    // Bottom line
    box.push(
      style.bottom_left +
        style.horizontal.repeat(scaled_width) +
        style.bottom_right,
    );

    // Return as string
    return box.join("\n");
  }

  /// Decide the fake loading animation time based on the content height
  function decide_load_animation_time() {
    if (!content_element) return;
    const contentHeight = content_element.getBoundingClientRect().height;
    const stepSize = 8; // px
    const numberOfSteps = Math.ceil(contentHeight / stepSize);
    const durationPerStep = 0.1; // seconds per step
    const totalDuration = numberOfSteps * durationPerStep;

    document.documentElement.style.setProperty(
      "--steps",
      numberOfSteps.toString(),
    );
    document.documentElement.style.setProperty(
      "--animation-duration",
      `${totalDuration}s`,
    );
  }

  // Update ascii box on window resize
  onMount(() => {
    ascii_box = create_ascii_box();
    const resize_observer = new ResizeObserver(() => {
      ascii_box = create_ascii_box();
    });
    if (content_element) {
      resize_observer.observe(content_element);
    }
    decide_load_animation_time();
  });

  // Update ascii box on content change
  let observer: MutationObserver;
  onMount(() => {
    observer = new MutationObserver(() => {
      ascii_box = create_ascii_box();
    });

    if (content_element) {
      observer.observe(content_element, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true,
      });
    }
  });
  onDestroy(() => {
    if (observer) {
      observer.disconnect();
    }
  });
</script>

<div class="textmode-box-container">
  <div class={"textmode-box " + color_mode}>
    {#if ascii_box}
      {ascii_box}
    {/if}
  </div>
  <div bind:this={content_element} class={"textmode-box-content " + color_mode}>
    <slot></slot>
  </div>
</div>

<style lang="scss">
  .textmode-box-container {
    // display: inline-block;
    position: relative;
    word-break: keep-all;
    user-select: text;

    animation: revealContent var(--animation-duration) steps(var(--steps))
      forwards;
    clip-path: inset(0 0 100% 0);

    .textmode-box {
      user-select: none;
      position: relative;
      // width: max-content;
      // overflow: hidden;

      &.light {
        background-color: #fff;
        color: #000;
      }

      &.dark {
        background-color: #000;
        color: #fff;
      }
    }

    .textmode-box-content {
      position: absolute;
      top: 0;
      margin: 8px;
      vertical-align: middle;

      &.light {
        color: #000;

        ::selection {
          background-color: #000;
          color: #fff;
        }
      }

      &.dark {
        color: #fff;

        ::selection {
          background-color: #fff;
          color: #000;
        }
      }
    }
  }
</style>
