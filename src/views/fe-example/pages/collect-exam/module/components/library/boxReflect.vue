<template>
  <div class="module">
    <slot>
      <div class="scene">
        <div class="card">
          <div class="card__face card__face--front">
            <img src="https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg" />
          </div>
          <div class="card__face card__face--back">
            <img src="https://i.loli.net/2019/11/16/cqyJiYlRwnTeHmj.jpg" />
          </div>
        </div>
        <div class="card">
          <div class="card__face card__face--front">
            <img src="https://i.loli.net/2019/11/16/FLnzi5Kq4tkRZSm.jpg" />
          </div>
          <div class="card__face card__face--back">
            <img src="https://i.loli.net/2019/10/18/buDT4YS6zUMfHst.jpg" />
          </div>
        </div>
        <div class="card">
          <div class="card__face card__face--front">
            <img src="https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg" />
          </div>
          <div class="card__face card__face--back">
            <img src="https://i.loli.net/2019/11/03/RtVq2wxQYySDb8L.jpg" />
          </div>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
  export default {
    name: 'boxReflect'
  }
</script>

<style scoped lang="scss">
  // Thanks to https://3dtransforms.desandro.com/card-flip
  .module {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: black;
  }

  .scene {
    width: 100%;
    display: flex;
    justify-content: space-between;
    // perspective: 800Px;

    .card {
      position: relative;
      width: 150Px;
      height: 150Px;
      color: white;
      cursor: pointer;
      transition: 1s ease-in-out;
      transform-style: preserve-3d;

      &:hover {
        transform: rotateY(0.5turn);
      }

      .card__face {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        transition: 1s ease-in-out;
        -webkit-box-reflect: below 2Px linear-gradient(transparent, transparent, rgba(0, 0, 0, 0.4));

        img {
          width: 150Px;
          height: 150Px;
          object-fit: cover;
        }

        &--back {
          transform: rotateY(0.5turn);
        }
      }
    }
  }
</style>