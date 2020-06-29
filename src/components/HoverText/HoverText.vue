<template>
    <div class="dropdown">
        <div @mouseover="displayOrHide" @mouseleave="displayOrHide" @mousemove="updatePosition" class="dropdownhover">
            <slot>Hover over me</slot>
        </div>
        <div class="dropdown-content" v-show="showContent">        
            <slot >{{dropdownText}}</slot>
        </div>
    </div>
</template>

<script>
export default {
    name:"iv-hover-text",
    props:{
        dropdownText:{
            type: String,
            default: "This is a secret message."
        },
        textXPosition:{
            type: Number
        },
        textYPosition:{
            type: Number
        },
        showContent:{
            type: Boolean,
            default: false
        }
    },
    methods:{
        displayOrHide(){
            this.showContent = !this.showContent;
            this.$emit("hovered", this.showContent);
        },
        updatePosition(e){
            this.textXPosition = e.clientX;
            this.textYPosition = e.clientY;
            this.$emit("textreposition", e);
        }
    }
}
</script>

<style scoped>
/* The container <div> - needed to position the dropdown content */
.dropdown {
    font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
    position: relative;
    display: inline-block;
    font-size: 16px;
    font-weight: normal;
    letter-spacing: .05rem;
    text-align: left;
}

/* Dropdown hover */
.dropdownhover {
    padding: 6px 12px 5px 10px;
    cursor: pointer;
    text-decoration: underline;
}

/* Dropdown hover on hover */
.dropdownhover:hover {
    cursor: help;
    background-color: #2980B9;
    color: rgba(255, 255, 255, 0.9);
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition:    all 0.4s ease-in-out;
    -ms-transition:     all 0.4s ease-in-out;
    -o-transition:      all 0.4s ease-in-out;
    transition:         all 0.4s ease-in-out;
}

/* Dropdown Content*/
.dropdown-content {
    display: block;
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