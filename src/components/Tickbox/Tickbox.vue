<template>
  <div>
    <label class="checkbox-container">
      <input type="checkbox" @click="changeStatus" :disabled="disable">
      <span class="checkmark"></span>{{showText}}
    </label>
    <p v-if="disable">Checkbox disabled</p>
    <p v-else>Checkbox actived</p>
  </div>
</template>
<script>
export default {
    name:"iv-tickbox",
    props:{
      checkbox: {
        type: Boolean,
        default: true
      },
      disable: {
        type: Boolean,
        default: false
      }
    },
    data() {
        return {
            checkboxStatus: this.checkbox,
            isDisabled: this.disable,
            showText:"Check this box!",
            checkedMessage: "The box is checked!",
            uncheckedMessage: "The box is unchecked!"
            }
        },
    methods:{
        changeStatus(){
          this.checkboxStatus = !this.checkboxStatus;
          if(this.checkboxStatus == false){
            this.showText = this.checkedMessage
          }else{
            this.showText = this.uncheckedMessage 
          }
          this.$emit("checkboxstatuschanged", this.checkboxStatus)
        }
        
    }
}
</script>
<style>
.checkbox-container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  outline: 1px solid #000305;
}


.checkbox-container:hover input ~ .checkmark {
  background-color: #ccc;
  outline: 1px solid #000305;
}

.checkbox-container input:checked ~ .checkmark {
  background-color: #2196F3;
  outline: 1px solid #000305;
}


.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

.checkbox-container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.checkbox-container:disabled ~ label {
  background: #d5d5d5;
  pointer-events: none;
}
.checkbox-container:disabled ~ label:after { background: #bcbdbc; }
.hidden { display: none; }
</style>
