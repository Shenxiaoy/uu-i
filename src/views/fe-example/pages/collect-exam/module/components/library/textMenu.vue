<!--
 * @Author: your name
 * @Date: 2020-04-02 18:23:48
 * @LastEditTime: 2020-04-02 18:26:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \uu-i\src\views\fe-example\pages\collect-exam\module\components\library\textMenu.vue
 -->
<template>
  <div class="module" @click="click">
    <slot>
      <ul class="float-text-menu">
        <li><a href="#" data-text="Home">Home</a></li>
        <li><a href="#" data-text="Archives">Archives</a></li>
        <li><a href="#" data-text="Tags">Tags</a></li>
        <li><a href="#" data-text="Categories">Categories</a></li>
        <li><a href="#" data-text="About">About</a></li>
      </ul>
    </slot>
  </div>
</template>

<script>
  export default {
    name: 'textMenu',
    mounted() {
      let floatTextMenuLinks = document.querySelectorAll(".float-text-menu li a");
      floatTextMenuLinks.forEach(link => {
        let letters = link.textContent.split("");
        link.textContent = "";
        letters.forEach((letter, i) => {
          let span = document.createElement("span");
          span.textContent = letter;
          span.style.transitionDelay = `${i / 20}s`;
          span.dataset.text = letter;
          link.append(span);
        });
      });

    }
  }
</script>

<style scope lang="scss">
  @import url(https://fonts.googleapis.com/css?family=Lato);

  .module {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: #1A1E23;
  }

  .float-text-menu {
    display: flex;
    flex-direction: column;
    list-style-type: none;

    li {

      a {
        display: flex;
        padding: 6Px;
        color: white;
        font-family: Lato, sans-serif;
        text-decoration: none;
        overflow: hidden;

        span {
          position: relative;
          transition: 0.3s;

          &::before {
            position: absolute;
            content: attr(data-text);
            transform: translateY(130%);
          }
        }

        &:hover {
          span {
            transform: translateY(-130%);
          }
        }
      }
    }
  }
</style>