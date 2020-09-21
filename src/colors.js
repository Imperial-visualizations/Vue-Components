class Theme{
    constructor(baseHex){
        this.main = baseHex;
    }
    generateShade(fraction){
        if(fraction > 1 || fraction < 0) throw Error("fraction must be between 0 and 1");
            const colorRGB = Theme.hexToRGB(this.main)
            return Theme.rgbToHex(...colorRGB.map( (v) => Math.round(fraction * (v))))
    }
    generateTint(fraction){
        if(fraction > 1 || fraction < 0) throw Error("fraction must be between 0 and 1");
        const colorRGB = Theme.hexToRGB(this.main)
        return Theme.rgbToHex(...colorRGB.map( (v) => Math.round(v + fraction * (255 - v))))
    }
    static hexToRGB(hex){
        const subhex = hex.substring(1)
        if(subhex.length < 6) throw Error("Must include hex code starting with #")
        return [parseInt(subhex.substring(0,2),16),parseInt(subhex.substring(2,4),16),parseInt(subhex.substring(4,6),16)]
    }
    static rgbToHex(r,g,b){
        return `#${r.toString(16).padStart(2,"0")}${g.toString(16).padStart(2,"0")}${b.toString(16).padStart(2,"0")}`
    }
}
Theme.DeepBlue = new Theme('#0b3053')
Theme.Blue = new Theme('#008bd2')
Theme.Turqouise = new Theme('#11b1a2')
Theme.Lime = new Theme('#a8cc6a')
Theme.Purple = new Theme('#62296b')
Theme.Red = new Theme('#cf103f')
Theme.Orange = new Theme('#ef7814')
Theme.Yellow = new Theme('#fcd916')
Theme.Gold = new Theme('#f6b00f')
export default Theme;