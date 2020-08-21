export default{
    computed:{
        modalHeader(){
            return{
                backgroundColor: this.color.shade_300,
            }
        },
        modalCloseButton(){
            return{
                backgroundColor: this.color.shade_100,
            }
        },
        modalBody(){
            return{
                backgroundColor: this.color.shade_900,
            }
        },
        modalFooterButton(){
            return{
                backgroundColor: this.color.shade_500,
            }
        }
    },
}