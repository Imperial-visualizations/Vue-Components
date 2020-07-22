<template>
    <div class="modal-backdrop">
        <div class="modalGuidance">
            <header class="modal-header">
                <div name="header">{{guidanceHeaderText}}</div>
                <button @click="closeGuidance">{{buttonElement}}</button>
            </header>

            <section class="modal-body">
                <div name="body"><p>{{guidanceText}}</p></div>
            </section>

            <footer class="modal-footer">
                <div name="footer"></div>
                <button v-if="prevButton" @click="prevGuidance">PREV</button>
                <button v-if="nextButton" @click="nextGuidance">NEXT</button>
            </footer>
        </div>
    </div>
</template>
<script>
export default {
    name:"iv-guidance-modal",
    props:{
        guidanceText:{
            type: String,
            default: "This is the guidance"
        },
        guidanceHeaderText:{
            type: String,
            default: "Help!"
        },
        prevButton:{
            type:Boolean,
            default:false
        },
        nextButton:{
            type:Boolean,
            default:false
        }
    },
    data(){ 
        return{
            buttonElement:"X",
        }
    },
    methods:{
        closeGuidance(){
            this.$emit('close-guidance');
        },
        prevGuidance(){
            this.$emit('prevGuidance');
        },
        nextGuidance(){
            this.$emit('nextGuidance');
        },
    },
    mounted(){
        console.log("modal", this.guidanceText);
    }
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
.modalGuidance{
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

.modal-body p{
    color:black;
}


</style>