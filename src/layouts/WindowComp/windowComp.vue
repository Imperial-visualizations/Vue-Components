<template>
  <div>
    <div class="modal-backdrop">
    </div>
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
                  gridTemplateRows: "repeat(5, 20%)",
                  }
      }
    },
}
</script>
<style>

.modal-backdrop {
  z-index: 1;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-grid{
  z-index: 3;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.modalContainer{
  z-index: 900;
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  border:2px solid black;
  background-color: burlywood;
  overflow-x: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #003e74;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

</style>