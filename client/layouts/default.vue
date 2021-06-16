<template>
  <div class="content">
    <header>
      <div class="header-nav">
        <div class="header-name">crest89 unownq</div>
      </div>
    </header>
    <Nuxt/>
  </div>
</template>

<style>
.content {
  font-smooth: never;
  -webkit-font-smoothing: none;
  font-family: 'pokemon-font', monospace;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin: 0 auto;
  @media (min-width: 375px) {
    max-width: 375px;
  }
}

  header {
    height: 10vh;
    width: 100%;
    margin-bottom: 5vh;
  }
  .header-nav {
    border-bottom: 1px solid;
  }
  .header-name {
    font-size: 32px;
    line-height: 10vh;
    font-weight: bold;
    margin-left: 5%;
  }
</style>
