<span class="home-nav">
  By: <a href="/" tabindex={100}>Lars Jensen</a>
</span>

<style lang="scss">
  .home-nav {
    display: flex;
    font-size: 24px;

    justify-content: center;
    flex-direction: row;

    a {
      animation-name: flash;
      animation-duration: 400ms;
      animation-iteration-count: infinite;
      animation-timing-function: step-end;
    }
  }
</style>
