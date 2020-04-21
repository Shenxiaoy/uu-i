<template>
  <div class="module3d">
    <slot>
      <div class="loading11">Loading</div>
    </slot>
  </div>
</template>

<script>
  export default {
    name: 'text3d1',
    mounted() {
      let loading = document.querySelector(".loading11")
      let letters = loading.textContent.split("")
      loading.textContent = ""
      letters.forEach((letter, i) => {
        let span = document.createElement("span")
        span.textContent = letter
        span.style.animationDelay = `${i / 10}s`
        loading.append(span)
      })
    }
  }
</script>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css?family=Baloo+Bhaijaan&display=swap");

  @function float-text-3d($shadow-color: #bbb, $depth: 10, $floating: false) {
    $shadows: ();

    // When dropped, it will shrink like a spring. When floating, it grows into its shape.
    @for $i from 1 to $depth {
      @if ($floating==false and $i > $depth / 2) {
        $shadow-color: transparent;
      }

      $shadows: append($shadows, 0 ($i * 1px) $shadow-color, comma);
    }

    // When dropped, the shadow reveals. When floating, the shadow fades.
    @if ($floating==false) {
      $shadows: append($shadows, 0 10px 10px rgba(0, 0, 0, 0.4), comma);
    }

    @else {
      $shadows: append($shadows, 0 50px 25px rgba(0, 0, 0, 0.2), comma);
    }

    @return $shadows;
  }

  .module3d {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #2980b9;
  }

  .loading11 {
    display: flex;
    color: white;
    font-size: 5em;
    font-family: "Baloo Bhaijaan", cursive;
    text-transform: uppercase;

    span {
      text-shadow: float-text-3d($floating: false);
      transform: translateY(20px);
      animation: bounce 0.4s ease infinite alternate;
    }
  }

  @keyframes bounce {
    to {
      text-shadow: float-text-3d($floating: true);
      transform: translateY(-20px);
    }
  }
</style>