const path = require('path');
const webpack = require('webpack');

/**
 * Objets contenant les configurations générales 
 * Ces configurations peuvent être surchargé lors de l'assignement de l'export
 */
const config = {

    /**
     * Mode de développement 
     * 
     * - production 
     * - development
     * - none
     */
    mode : 'development', 

    /**
     * Modules à charger dans tous les exports
     * 
     */
    module : {

        rules : [
            {
                test : '/\.js$/',
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                loaders: ["style-loader","css-loader"]
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader:"file-loader",
                options:{
                    name:'[name].[ext]',
                    outputPath:'images/'
                }
            }
        ]
    },

    /**
     * Plugins à charger dans tous les exports
     */
    plugins : [

    ]
};

/**
 * 
 */
const entry = Object.assign({}, config, {

   
    //Point d'entrée - string | object | array
    entry : path.resolve(__dirname, 'src/app'),

    //Point de sortie
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : 'app.js'
    }
});

/**
 * Exportation des différents modules
 */
module.exports = [
    entry
]