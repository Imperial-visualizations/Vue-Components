module.exports = {
    locales:{
        "/":{
            lang:'en-GB',
            title:'ImpVis Component Library',
            description:'The documentation for the component library for the Imperial Visualization project'
        }
    },
    themeConfig:{
        repoLabel:"Join us!",
        repo:"https://github.com/Imperial-visualizations/Vue-Components.git",
        docsDir:'docs',
        editLinks:true,
        docsBranch:"master",
        editLinkText:'Help us improve this page!',
        search:false,
        locales:{
            "/":{
                label:"English",
                selectText:"Languages",
                lastUpdated:'Last Updated',
                serviceWorker:{
                    updatePopup:{
                        message:"New content is available",
                        buttonText:"Refresh"
                    }
                }
            },
            nav:[
                {text:"Playground",link:'/play'},
                {text:"Component Reference",link:"/components"},
                {text:"GitHub",link:"https://github.com/Imperial-visualizations/Vue-Components"}
            ],
            sidebar:{
                '/components/':[
                    {
                        title:"Component Reference",
                        collapsable:false,
                        children:['button']
                    }
                ]
            }
        }
    }
}