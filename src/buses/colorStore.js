import Vue from 'vue';
const colorStore = new Vue({
    data(){
        return{
            color_input_list:{//THESE ARE THE BLOOMIN COLOURS
                "navy": [14,64,111],
                "blue": [0,139,210],
                "teal": [17,177,162],
                "green": [168,204,106],
                "purple": [98,41,107],
                "berry": [207,16,63],
                "orange": [239,120,20],
                "tangerine": [246,176,15],
                "yellow": [252,217,22]
            },
            color_full_list:{
                "navy": {},
                "blue": {},
                "teal": {},
                "green": {},
                "purple": {},
                "berry": {},
                "orange": {},
                "tangerine": {},
                "yellow": {}
            },
            shade_Factor_1:0.5,
            shade_Factor_2:0.3,
            shade_Factor_3:0.2,
            shade_Factor_4:0.1,
            tint_Factor_1:0.1,
            tint_Factor_2:0.2,
            tint_Factor_3:0.3,
            tint_Factor_4:0.5,
        };
    },
    methods:{
        produceColors(){
            for(let k in this.color_input_list){
                let color_rgb = this.color_input_list[k];
                this.color_full_list[k].shade_100="rgb("+(color_rgb[0]*(1-this.shade_Factor_1)).toString()+","+ (color_rgb[1]*(1-this.shade_Factor_1)).toString() + "," + (color_rgb[2]*(1-this.shade_Factor_1)).toString()+ ")";
                this.color_full_list[k].shade_200="rgb("+(color_rgb[0]*(1-this.shade_Factor_2)).toString()+","+ (color_rgb[1]*(1-this.shade_Factor_2)).toString() + "," + (color_rgb[2]*(1-this.shade_Factor_2)).toString()+ ")";
                this.color_full_list[k].shade_300="rgb("+(color_rgb[0]*(1-this.shade_Factor_3)).toString()+","+ (color_rgb[1]*(1-this.shade_Factor_3)).toString() + "," + (color_rgb[2]*(1-this.shade_Factor_3)).toString()+ ")";
                this.color_full_list[k].shade_400="rgb("+(color_rgb[0]*(1-this.shade_Factor_4)).toString()+","+ (color_rgb[1]*(1-this.shade_Factor_4)).toString() + "," + (color_rgb[2]*(1-this.shade_Factor_4)).toString()+ ")";
                this.color_full_list[k].shade_500="rgb("+(color_rgb[0]).toString()+","+ (color_rgb[1]).toString() + "," + (color_rgb[2]).toString()+ ")";
                this.color_full_list[k].shade_600="rgb("+(color_rgb[0] + (255 - color_rgb[0])*this.tint_Factor_1).toString()+","+ (color_rgb[1] + (255 - color_rgb[1])*this.tint_Factor_1).toString() + "," + (color_rgb[2] + (255 - color_rgb[2])*this.tint_Factor_1).toString()+ ")";
                this.color_full_list[k].shade_700="rgb("+(color_rgb[0] + (255 - color_rgb[0])*this.tint_Factor_2).toString()+","+ (color_rgb[1] + (255 - color_rgb[1])*this.tint_Factor_2).toString() + "," + (color_rgb[2] + (255 - color_rgb[2])*this.tint_Factor_2).toString()+ ")";
                this.color_full_list[k].shade_800="rgb("+(color_rgb[0] + (255 - color_rgb[0])*this.tint_Factor_3).toString()+","+ (color_rgb[1] + (255 - color_rgb[1])*this.tint_Factor_3).toString() + "," + (color_rgb[2] + (255 - color_rgb[2])*this.tint_Factor_3).toString()+ ")";
                this.color_full_list[k].shade_900="rgb("+(color_rgb[0] + (255 - color_rgb[0])*this.tint_Factor_4).toString()+","+ (color_rgb[1] + (255 - color_rgb[1])*this.tint_Factor_4).toString() + "," + (color_rgb[2] + (255 - color_rgb[2])*this.tint_Factor_4).toString()+ ")";    
            }
        },
    },
    created(){
        this.produceColors();
    }
});
export default colorStore;