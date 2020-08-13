export default{
    data(){
        return{
            shade_Factor_1:0.5,
            shade_Factor_2:0.3,
            shade_Factor_3:0.2,
            shade_Factor_4:0.1,
            tint_Factor_1:0.1,
            tint_Factor_2:0.2,
            tint_Factor_3:0.3,
            tint_Factor_4:0.5,
        }
    },
    methods:{
        calcDarker(){
            this.color.shade_100="rgb("+(this.color_rgb[0]*(1-this.shade_Factor_1)).toString()+","+ (this.color_rgb[1]*(1-this.shade_Factor_1)).toString() + "," + (this.color_rgb[2]*(1-this.shade_Factor_1)).toString()+ ")";
            this.color.shade_200="rgb("+(this.color_rgb[0]*(1-this.shade_Factor_2)).toString()+","+ (this.color_rgb[1]*(1-this.shade_Factor_2)).toString() + "," + (this.color_rgb[2]*(1-this.shade_Factor_2)).toString()+ ")";
            this.color.shade_300="rgb("+(this.color_rgb[0]*(1-this.shade_Factor_3)).toString()+","+ (this.color_rgb[1]*(1-this.shade_Factor_3)).toString() + "," + (this.color_rgb[2]*(1-this.shade_Factor_3)).toString()+ ")";
            this.color.shade_400="rgb("+(this.color_rgb[0]*(1-this.shade_Factor_4)).toString()+","+ (this.color_rgb[1]*(1-this.shade_Factor_4)).toString() + "," + (this.color_rgb[2]*(1-this.shade_Factor_4)).toString()+ ")";
        },
        calcBrighter(){
            this.color.shade_600="rgb("+(this.color_rgb[0] + (255 - this.color_rgb[0])*this.tint_Factor_1).toString()+","+ (this.color_rgb[1] + (255 - this.color_rgb[1])*this.tint_Factor_1).toString() + "," + (this.color_rgb[2] + (255 - this.color_rgb[2])*this.tint_Factor_1).toString()+ ")";
            this.color.shade_700="rgb("+(this.color_rgb[0] + (255 - this.color_rgb[0])*this.tint_Factor_2).toString()+","+ (this.color_rgb[1] + (255 - this.color_rgb[1])*this.tint_Factor_2).toString() + "," + (this.color_rgb[2] + (255 - this.color_rgb[2])*this.tint_Factor_2).toString()+ ")";
            this.color.shade_800="rgb("+(this.color_rgb[0] + (255 - this.color_rgb[0])*this.tint_Factor_3).toString()+","+ (this.color_rgb[1] + (255 - this.color_rgb[1])*this.tint_Factor_3).toString() + "," + (this.color_rgb[2] + (255 - this.color_rgb[2])*this.tint_Factor_3).toString()+ ")";
            this.color.shade_900="rgb("+(this.color_rgb[0] + (255 - this.color_rgb[0])*this.tint_Factor_4).toString()+","+ (this.color_rgb[1] + (255 - this.color_rgb[1])*this.tint_Factor_4).toString() + "," + (this.color_rgb[2] + (255 - this.color_rgb[2])*this.tint_Factor_4).toString()+ ")";
        },
        produceColor(){
            this.color = {shade_500:"rgb("+(this.color_rgb[0]).toString()+","+ (this.color_rgb[1]).toString() + "," + (this.color_rgb[2]).toString()+ ")" };
            this.calcDarker();
            this.calcBrighter();
        }
    },
    computed:{
        modalHeader(){
            //console.log("setting it header",this.color.shade_300);
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
    created(){
        this.produceColor();
    },
}