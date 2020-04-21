<!--
 * @Author: your name
 * @Date: 2020-04-02 18:32:02
 * @LastEditTime: 2020-04-02 18:38:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \uu-i\src\views\fe-example\pages\collect-exam\module\components\library\butShine.vue
 -->
<template>
  <div class="module-2" @click="click">
    <slot>
      <button class="btn btn-primary btn-ghost btn-shine">
        hover me
      </button>
    </slot>
  </div>
</template>

<script>
  export default {
    name: 'butShine',
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

  .module-2 {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;

    background: #1A1E23;

    .btn {
      --hue: 190;
      position: relative;
      padding: 1rem 3rem;
      font-size: 1rem;
      line-height: 1.5;
      color: white;
      text-decoration: none;
      text-transform: uppercase;
      background-color: hsl(var(--hue), 100%, 41%);
      border: 1px solid hsl(var(--hue), 100%, 41%);
      outline: transparent;
      overflow: hidden;
      cursor: pointer;
      user-select: none;
      white-space: nowrap;
      transition: 0.25s;

      &:hover {
        background: hsl(var(--hue), 100%, 31%);
      }

      &-primary {
        --hue: 187;
      }

      &-ghost {
        color: hsl(var(--hue), 100%, 41%);
        background-color: transparent;
        border-color: hsl(var(--hue), 100%, 41%);

        &:hover {
          color: white;
        }
      }

      &-shine {
        color: white;

        &::before {
          position: absolute;
          content: "";
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(120deg,
              transparent,
              hsla(var(--hue), 100%, 41%, 0.5),
              transparent);
          transform: translateX(-100%);
          transition: 0.6s;
        }

        &:hover {
          background: transparent;
          // box-shadow: 0 0 20px 10px hsla(var(--hue), 100%, 41%, 0.5);
        }

        &:hover::before {
          transform: translateX(100%);
        }
      }
    }
  }
</style>