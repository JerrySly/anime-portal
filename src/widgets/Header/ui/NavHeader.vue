<template>
  <nav>
    <div class="logo">Anime-Portal</div>
    <div class="links">
      <ul>
        <li>
          <a href="/">Anime</a>
        </li>
        <li>
          <a href="/">Manga</a>
        </li>
      </ul>
    </div>
    <div></div> <!--Search-->
    <div></div> <!--User-->
  </nav>
</template>

<script>
export default {
  name: 'NavHeader',
}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  padding: 10px 30px;
  background:  rgb(var(--v-theme-primary));
  align-items: center;
  gap: 40px;
  .logo {
    font-size: 32px;
    font-family: "Pacifico";
    color: white;
  }
  .links {
    flex: 2;
  }

  ul {
    display: flex;
    list-style: none;
    gap: 20px;
    align-items: center;
    li {
      font-family: Poetsen One;
      color: white;
      font-size: 22px;
      a {
        text-decoration: none;
        color: white;
      }
    }
  }
}
</style>