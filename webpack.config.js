module.exports = {
    module:{
    rules:[
        {
            test: /\.(jpg|png|svg)$/,
            loader: "url-loader",
            options: {
              limit: Infinity // everything
            }
        }
    ]}
}