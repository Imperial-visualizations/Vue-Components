<template>
    <div class="dropdown">
        <div @mouseover="displayOrHide" @mouseleave="displayOrHide" @mousemove="updatePosition" class="dropdownhover">
            <slot>{{hoverElement}}</slot>
        </div>
        <div class="dropdown-content" v-show="showContent" v-bind:style="moveDiv">        
            <slot name="hoverElement">{{defaultText}}</slot>
        </div>
    </div>
</template>

<script>
export default {
    name:"iv-hover-text",
    props:{
        hoverElement:{
            type: String,
            default: "Hover over me"
        },
        defaultText:{
            type: String,
            default: "This is a secret message."
        }
    },
    data: function () {
        return {
            positions: {
                clientX: undefined,
                clientY: undefined
            },
            showContent: false
        }
    },
    computed: {
        moveDiv: function () {
            return {
                left: this.positions.clientX + 'px', top: this.positions.clientY + 'px'
            }
        }
    },
    methods:{
        displayOrHide(){
            this.showContent = !this.showContent;
        },
        updatePosition(event){
            var rect = event.target.getBoundingClientRect();
            this.positions.clientX = event.clientX - rect.left + 3;
            this.positions.clientY = event.clientY - rect.top + 3;
        }
    }
}
</script>

<style scoped>
/* The container <div> - needed to position the dropdown content */
.dropdown {
    font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
    position: relative;
    font-size: 16px;
    font-weight: normal;
    letter-spacing: .05rem;
    text-align: left;
}

/* Dropdown hover */
.dropdownhover {
    display: inline-block;
    padding: 6px 12px 5px 10px;
    cursor: pointer;
    text-decoration: underline;
}

/* Dropdown hover on hover */
.dropdownhover:hover {
    background-color: #2980B9;
    color: rgba(255, 255, 255, 0.9);
    -webkit-box-shadow:0 0 7.5px rgba(9, 89, 160, 0.9); 
    -moz-box-shadow: 0 0 7.5px rgba(9, 89, 160, 0.9); 
    box-shadow:0 0 7.5px rgba(9, 89, 160, 0.9);
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition:    all 0.4s ease-in-out;
    -ms-transition:     all 0.4s ease-in-out;
    -o-transition:      all 0.4s ease-in-out;
    transition:         all 0.4s ease-in-out;
}

/* Dropdown Content*/
.dropdown-content {
    position: absolute;
    display: inline-block;
    border: 1px solid rgba(0, 0, 0, 0.2);
    color: black;
    font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 12px;
    font-weight: normal;
    letter-spacing: .05rem;
    text-align: center;
    background-color: #f1f1f1;
    color: black;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 0px 12px 5px 10px;
    word-wrap: break-word;
}

</style>