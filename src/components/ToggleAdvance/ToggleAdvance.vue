<template>
  <div class="toggle-radio">
    <input type="radio" name="default" id="default_Option1" value="Option1" @click="mode = $event.target.value" checked>
    <label for="default_Option1">Option 1</label>

    <input type="radio" name="default" id="default_Option2" value="Option2" @click="mode = $event.target.value">
    <label for="default_Option2">Option 2</label>

    <input type="radio" name="default" id="default_Option3" value="Option3" @click="mode = $event.target.value">
    <label for="default_Option3">Option 3</label>
  </div>
</template>
<script>
export default {
    name:"iv-toggleAdvance",
    data:function(){
        return{
            mode:"Option1"
        }
    }
}
</script>
<style>

</style>