<template>
    <div class="modal-backdrop">
        <div class="modalContainer">
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
/*
import Vue from 'vue';
const windowBus = new Vue();
export {windowBus};
*/
export default {
    name:"iv-modal"
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
  display: flex;
  justify-content: center;
  align-items: center;
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