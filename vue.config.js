module.exports = {
    // TODO: We are bundleing CSS directly into the .js file rn, at some stage we may wish to include as seperate file...
    css:{extract:true},
    chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()

    svgRule
      .test(/\.svg$/)
      .use('svg-url-loader') // npm install --save-dev svg-url-loader
      .loader('svg-url-loader')
  }
}