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
      theme:{
        type:Object,
        required:true
      }
    },
    computed: {
      styleWindow(){
        let translate_X = "0%";
        let translate_Y = "0%";

        if(this.positionModal[3] !== null){
            translate_X = "-50%"
        }
        else{
            translate_X = "50%"
        }

        if(this.positionModal[0] !== null){
            translate_Y = "-50%"
        }
        else{
            translate_Y = "50%"
        }

        return {
                top: this.positionModal[0],
                right: this.positionModal[1],
                bottom: this.positionModal[2],
                left: this.positionModal[3],
                transform: `translate(${translate_X},${translate_Y})`,
                backgroundColor: this.theme.main,
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
  z-index: $middleZLevel;//$middleZLevel;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
}

.modalContainer{
  position: absolute;
  //top: 25%;
  //left: 25%;

  z-index: $topZLevel;
  
  box-shadow: 1px 1px 30px 0px  rgba(0, 0, 0, 0.4);
  >*{
    box-sizing:border-box;
  }

}
</style>