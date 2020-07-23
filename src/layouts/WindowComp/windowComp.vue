<template>
    <div class="modal-backdrop">
      <template style="positon:relative">
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
      </template>
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
        }
    },
    computed: {
      styleWindow() {
        return {left: this.window_pos_left,
                right: this.window_pos_right,
                top: this.window_pos_top,
                bottom: this.window_pos_bottom,
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
.modalContainer{
  position: absolute;
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