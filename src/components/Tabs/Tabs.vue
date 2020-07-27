<template>
    <div class="tabContainer">
            <toggle-advance :modes="tabNames" @toggleswitched="selectTab" />
            <div class="tabDetails">
            <slot></slot>
            </div>
    </div>

</template>
<script>
import ToggleAdvance from '../ToggleAdvance';
export default {
    name: "iv-tabs",
    components:{
      ToggleAdvance
    },
    data() {
        return {
          tabs: [],
          tabActivated:"Tab 1 is opened",
          initialIndex: 0
          };
    },
    mounted() {
      this.tabs = this.$children.filter(mtab => mtab.$options._componentTag != 'toggle-advance');
    },
    computed:{
      tabNames(){
        let tabNames = [];
        for(let tab of this.tabs){
          tabNames.push(tab.tabName);
        }
        return tabNames;
      }
    },
    methods: {
        selectTab(selectedTabIndex) {
          for(let i=0; i<this.tabs.length;i++){
            this.tabs[i].isActive = i === selectedTabIndex;
            if(i === selectedTabIndex){
              this.tabActivated = this.tabs[i].tabName + i + " is opened";
            }
          }
        },
    }
}
</script>
<style>
.tabContainer{
  display: block;
  position: relative;
  left:50px;
}
.tabContainer .tabDetails{
  display: block;
  height: 600px;
  width: 400px;
  background-color: powderblue;
  border-width: 1px;
  border-style: solid;
  border-color:black;
  text-align:center;
}
.tabContainer ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.tabContainer li {
  float: left;
}

.tabContainer li a {
  display: block;
  background-color: #1996df;
  color: rgb(1, 1, 1);
  text-align: center;
  padding: 16px;
  text-decoration: none;
  border-width: 2px;
  border-style: solid;
  border-color:black;
  margin-right: -2px; 
}

.tabContainer li a:hover {
  background-color: #0c62be;
}
.tabContainer .is-active a{
  background-color: #0b4188;
}
</style>