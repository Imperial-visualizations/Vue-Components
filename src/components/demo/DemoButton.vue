git <template>
    <button class="impvis-button"><slot>Button</slot></button>
</template>
<script>
export default {
    name:"iv-demobutton"
}
</script>
<style>
.impvis-button{
    color:white;
    background-color:darkblue;
}
</style>