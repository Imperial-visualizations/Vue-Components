<template>
    <div class="modalBackdrop"  :style="styleBackdrop">
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
</template>
<script>
export default {
    name:"iv-modal",
    props:{
        window_pos_left:{
          type: String,
          default: null
        },
        window_pos_right:{
          type: String,
          default: null
        },
        window_pos_top:{
          type: String,
          default: null
        },
        window_pos_bottom:{
          type: String,
          default: null
        },
        gridStructure:{
          type: Boolean,
          default: true
        }
    },
    computed: {
      styleWindow(){
        return {
                gridTemplateColumns: "25% 50% 75%",
                gridTemplateRows: "25% 50% 75%",
                gridColumnStart: this.window_pos_left,
                gridColumnEnd: this.window_pos_right,
                gridRowStart: this.window_pos_top,
                gridRowEnd: this.window_pos_bottom,
                }
      },
      styleBackdrop(){
        if(this.gridStructure){
          return {display: "grid"}
        }
      }
    },
}
</script>
<style>

.modalBackdrop {
  z-index: 1;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
}
.modalContainer{
  min-width: 300px;
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
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