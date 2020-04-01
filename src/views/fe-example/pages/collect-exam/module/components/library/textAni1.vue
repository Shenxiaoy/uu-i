<template>
  <div class="module-textani1" @click="secondShow">
    <slot>
      <p class="landIn">我愿相信美好的一面，you know me,and me know you ,属于我的~~</p>
    </slot>
  </div>
</template>

<script>
  export default {
    name: 'textAni1',
    mounted() {
      this.animationEffect()
    },
    methods: {
      animationEffect() {
        let landInTexts = document.querySelectorAll(".landIn")
        landInTexts.forEach(landInText => {
          let letters = landInText.textContent.split("")
          landInText.textContent = ""
          letters.forEach((letter, i) => {
            let span = document.createElement("span")
            span.textContent = letter;
            span.style.animationDelay = `${i * 0.05}s`
            landInText.append(span);
          })
        })
      },
      secondShow() {
        this.animationEffect()
      }
    }
  }
</script>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css?family=Lora:400,400i,700");

  .module-textani1 {
    font-size: 3px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(rgba(16, 16, 16, 0.8),
        rgba(16, 16, 16, 0.8)),
      url(https://i.loli.net/2019/10/18/buDT4YS6zUMfHst.jpg);
    background-size: cover;
  }

  p {
    margin: 0 9em;
    font-size: 13Px;
    font-weight: 600;
  }

  .landIn {
    display: flex;
    flex-wrap: wrap;
    line-height: 1.8;
    color: white;
    font-family: Lora, serif;
    white-space: pre;

    span {
      animation: landIn 0.8s ease-out both;
    }
  }

  @keyframes landIn {
    from {
      opacity: 0;
      transform: translateY(-20%);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>