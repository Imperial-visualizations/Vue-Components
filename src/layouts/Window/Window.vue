<template>
  <div>
      <div class="modalContainer" :style="styleWindow">

          <header >
              <slot name="header"></slot>
          </header>

          <section >
              <slot name="body"></slot>
          </section>

          <footer >
              <slot name="footer"></slot>
          </footer>

      </div>

      <div class="modal-backdrop">
      </div>

  </div>
</template>
<script>
export default {
    name:"iv-modal",
    props:{
      positionModal:{
      },
      color:{
        default: "rgb(230,230,255)",
      }
    },
    computed: {
      styleWindow(){
        return {
                //gridRowStart: this.positionModal[0],
                //gridRowEnd: this.positionModal[1],
                //gridColumnStart: this.positionModal[2],
                //gridColumnEnd: this.positionModal[3],
                backgroundColor: this.color,//THIS IS THE KEY LINE THAT SETS THE COLOUT
                }
      },
      styleGrid(){
          return {
                  display: "grid",
                  top: `${document.getElementById("ivTitleBar").offsetHeight}px`,
                  gridTemplateColumns: "repeat(10, 10%)",
                  gridTemplateRows: "repeat(10, 10%)",
                  }
      }
    },
}
</script>

<style lang="scss">
@import "src/globals.scss";
.modal-backdrop {
  z-index: 100;//$middleZLevel;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
}

.modalContainer{
  position: absolute;
  top: 25%;
  left: 25%;

  z-index: 500;
  
  box-shadow: 1px 1px 30px 0px  rgba(0, 0, 0, 0.4);
  >*{
    box-sizing:border-box;
  }

}
</style>