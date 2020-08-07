<template>
  <div>

    <div class="modal-grid" :style="styleGrid" >
      <div class="modalContainer" :style="styleWindow">
          <header class="modal-header">
              <slot name="header"></slot>
          </header>
          <section class="modal-body">
              <slot></slot>
          </section>
          <footer class="modal-footer">
              <slot name="footer"></slot>
          </footer>
      </div>
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
    },
    computed: {
      styleWindow(){
        return {
                gridRowStart: this.positionModal[0],
                gridRowEnd: this.positionModal[1],
                gridColumnStart: this.positionModal[2],
                gridColumnEnd: this.positionModal[3],
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
  z-index: $middleZLevel;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-grid{
  z-index: $highZLevel;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.modalContainer{
  z-index: $topZLevel;
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  border:2px solid black;
  background-color: white;
  overflow-x: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  //align-items: center;

}

.modal-header,
.modal-footer {
  flex: 0 0;
  position: relative;
  height: 15%;
  min-height: 50px;
  width: 100%;
  padding: 5px 0px 5px 0px;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
}

.modal-body {
  flex: 1 1;
  position: relative;
  padding: 10px 10px 10px 10px;
}

</style>