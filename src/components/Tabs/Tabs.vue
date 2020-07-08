<template>
    <div>
            <ul>
                <li v-for="tab in tabs" :key="tab" :class="{ 'is-active': tab.isActive }">
                    <a :href="tab.href" @click="selectTab(tab)">{{ tab.tabName }}</a>
                </li>
            </ul>
            <slot></slot>
    </div>
</template>
<script>
export default {
    name: "iv-tabs",

    data() {
        return {tabs: [] };
    },
    
    created() {
        
        this.tabs = this.$children;
        
    },
    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.tabName == selectedTab.tabName);
            });
        }
    }
}
</script>
<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #2876a3;
}

li {
  float: left;
}

li a {
  display: block;
  color: rgb(1, 1, 1);
  text-align: center;
  padding: 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #0b4079;
}
div { 
  display: block;
  background: #cce5ff;
  margin: 5px;
}
</style>