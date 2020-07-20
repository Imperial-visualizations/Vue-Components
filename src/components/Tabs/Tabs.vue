<template>
    <div class="tabContainer">
            <ul>
                <li v-for="(tab,index) in tabs" :key="index" :class="{ 'is-active': tab.isActive }">
                    <a :href="tab.href" @click="selectTab(tab)">{{ tab.tabName}}</a>
                </li>
            </ul>
            <div class="tabDetails">
            <slot></slot>
            </div>
    </div>

</template>
<script>
export default {
    name: "iv-tabs",

    data() {
        return {
          tabs: [],
          tabActived:"Tab 1 is opened",
          initialIndex: 1,
          };
    },
    
    created() {
      
        this.tabs = this.$children;
        
    },
    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                clearInterval(this.interval)
                tab.isActive = (tab.tabName == selectedTab.tabName);
                this.tabActived = selectedTab.tabName + selectedTab.tabIndex + " is opened"
            });
        },
    },
    mounted(){
      this.interval= setInterval(function(){
        if (this.initialIndex >= this.tabs.length+1) {
        this.initialIndex = 1;
        }
        this.tabs.forEach(tab => {
              tab.isActive = (tab.tabIndex == this.initialIndex);
        });
        this.initialIndex += 1;
      }.bind(this), 3000)
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