//定义全国省份的数组
//var myChart = echarts.init(document.getElementById('map1'));
var worldMapContainer = document.getElementById('map4');

        ////用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
        //var resizeWorldMapContainer = function () {
        //worldMapContainer.style.width = window.innerWidth+'px';
        //worldMapContainer.style.height = window.innerHeight+'px';
        //};
        ////设置容器高宽
        //resizeWorldMapContainer();
        // 基于准备好的dom，初始化echarts实例
        var myChartMap4 = echarts.init(worldMapContainer);


var name_title = "";
var subname = '';
var nameColor = " rgb(55, 75, 113)";
var name_fontFamily = '等线';
var subname_fontSize = 22;
var name_fontSize = 26;
var mapName = '山东';
var data = [
    {name:"济南市",value:177},
    {name:"青岛市",value:42},
    {name:"淄博市",value:102},
    {name:"枣庄市",value:81},
    {name:"东营市",value:47},
    {name:"烟台市",value:67},
    {name:"潍坊市",value:82},
    {name:"济宁市",value:66},
    {name:"泰安市",value:24},
    {name:"威海市",value:92},
    {name:"日照市",value:114},
    {name:"滨州市",value:109},
    {name:"德州市",value:116},
    {name:"聊城市",value:91},
    {name:"临沂市",value:119},
    {name:"菏泽市",value:137},
];
var dataFrom = '济南市';
var geoCoordMap = {};
var toolTipData = [
    {name:"济南市",value:[{name:"舆情量",value:95},{name:"发稿量",value:82}]},
    {name:"青岛市",value:[{name:"舆情量",value:22},{name:"发稿量",value:20}]},
    {name:"淄博市",value:[{name:"舆情量",value:60},{name:"发稿量",value:42}]},
    {name:"枣庄市",value:[{name:"舆情量",value:40},{name:"发稿量",value:41}]},
    {name:"东营市",value:[{name:"舆情量",value:23},{name:"发稿量",value:24}]},
    {name:"烟台市",value:[{name:"舆情量",value:39},{name:"发稿量",value:28}]},
    {name:"潍坊市",value:[{name:"舆情量",value:41},{name:"发稿量",value:41}]},
    {name:"济宁市",value:[{name:"舆情量",value:35},{name:"发稿量",value:31}]},
    {name:"泰安市",value:[{name:"舆情量",value:12},{name:"发稿量",value:12}]},
    {name:"威海市",value:[{name:"舆情量",value:47},{name:"发稿量",value:45}]},
    {name:"日照市",value:[{name:"舆情量",value:57},{name:"发稿量",value:57}]},
    {name:"滨州市",value:[{name:"舆情量",value:57},{name:"发稿量",value:52}]},
    {name:"德州市",value:[{name:"舆情量",value:59},{name:"发稿量",value:57}]},
    {name:"聊城市",value:[{name:"舆情量",value:49},{name:"发稿量",value:42}]},
    {name:"临沂市",value:[{name:"舆情量",value:67},{name:"发稿量",value:52}]},
    {name:"菏泽市",value:[{name:"舆情量",value:69},{name:"发稿量",value:68}]},
];

/*获取地图数据*/
/*myChart.showLoading();*/
var mapFeatures = echarts.getMap(mapName).geoJson.features;
/*myChart.hideLoading();*/
mapFeatures.forEach(function(v) {
    // 地区名称
    var name = v.properties.name;
    // 地区经纬度
    geoCoordMap[name] = v.properties.cp;

});

// console.log("============geoCoordMap===================")
// console.log(geoCoordMap)
// console.log("================data======================")
console.log(data)
console.log(toolTipData)
var max = 480,
    min = 9; // todo
var maxSize4Pin = 100,
    minSize4Pin = 20;

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
            });
        }
    }
    return res;
};

option = {
    title: {
        text: name_title,
        subtext: subname,
        x: 'center',
        textStyle: {
            color: nameColor,
            fontFamily: name_fontFamily,
            fontSize: name_fontSize
        },
        subtextStyle:{
            fontSize:subname_fontSize,
            fontFamily:name_fontFamily
        }
    },
    tooltip: {
        trigger: 'item',
        textStyle:{
            fontSize: setFontSize(20),
        },
        formatter: function(params) {
            if (typeof(params.value)[2] == "undefined") {
                var toolTiphtml = ''
                for(var i = 0;i<toolTipData.length;i++){
                    if(params.name==toolTipData[i].name){
                        toolTiphtml += toolTipData[i].name+':<br>'
                        for(var j = 0;j<toolTipData[i].value.length;j++){
                            toolTiphtml+=toolTipData[i].value[j].name+':'+toolTipData[i].value[j].value+"<br>"
                        }
                    }
                }
                console.log(toolTiphtml)
                // console.log(convertData(data))
                return toolTiphtml;
            } else {
                var toolTiphtml = ''
                for(var i = 0;i<toolTipData.length;i++){
                    if(params.name==toolTipData[i].name){
                        toolTiphtml += toolTipData[i].name+':<br>'
                        for(var j = 0;j<toolTipData[i].value.length;j++){
                            toolTiphtml+=toolTipData[i].value[j].name+':'+toolTipData[i].value[j].value+"<br>"
                        }
                    }
                }
                console.log(toolTiphtml)
                // console.log(convertData(data))
                return toolTiphtml;
            }
        }
    },
    // legend: {
    //     orient: 'vertical',
    //     y: 'bottom',
    //     x: 'right',
    //     data: ['credit_pm2.5'],
    //     textStyle: {
    //         color: '#fff'
    //     }
    // },
    visualMap: {
        show: false,
        min: 0,
        max: 200,
        right: '5%',
        bottom: '4%',
        textStyle:{
            color:'#fff',
            fontSize:setFontSize(20),
        },
        itemWidth:setFontSize(26),
        itemHeight:setFontSize(300),
        orient:'horizontal',
        text: ['高', '低'], // 文本，默认为数值文本
        calculable: true,
        seriesIndex: [1],
        inRange: {
            // color: ['#3B5077', '#031525'] // 蓝黑
            // color: ['#ffc0cb', '#800080'] // 红紫
            // color: ['#3C3B3F', '#605C3C'] // 黑绿
            // color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
            // color: ['#23074d', '#cc5333'] // 紫红
            /*color: ['#00467F', '#A5CC82']*/ // 蓝绿
            color:['#0098b7','#0d4a61','#08242f']// 蓝绿
            // color: ['#1488CC', '#2B32B2'] // 浅蓝
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿

        }
    },
    /*工具按钮组*/
    // toolbox: {
    //     show: true,
    //     orient: 'vertical',
    //     left: 'right',
    //     top: 'center',
    //     feature: {
    //         dataView: {
    //             readOnly: false
    //         },
    //         restore: {},
    //         saveAsImage: {}
    //     }
    // },
    geo: {
        show: true,
        map: mapName,
        zoom:1.1,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false,
            }
        },
        roam: true,
        itemStyle: {
            normal:{
                color: 'rgba(101,255,248,0.6)',
                //borderColor: 'rgba(255, 255, 0, 0.9)'
                borderColor:'#00feff',
                borderWidth: 1,
            },
            emphasis:{
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 1.5,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                color: '#d96209'
            }
        }

    },
    series: [
        {
        name: '散点',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: convertData(data),
        symbolSize: function(val) {
            return val[2] / 10;
        },

        label: {
            normal: {
                formatter: '{b}',
                position: 'right',
                show: true,
                fontSize:setFontSize(24),
            },
            emphasis: {
                show: true
            }
        },
        itemStyle: {
            normal: {
                color: '#fff'
            }
        }
    },
        {
            type: 'map',
            map: mapName,
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
                normal: {
                    show: true,
                },

                emphasis: {
                    show: false,
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#031525',
                    borderColor: '#3B5077',
                },
                emphasis: {
                    areaColor: '#2B91B7'
                }
            },
            animation: false,
            data: data
        },
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort(function(a, b) {
                return b.value - a.value;
            }).slice(0, 5)),
            symbolSize: function(val) {
                return val[2] / 10;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke',
                scale:'6',
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true,
                    fontSize:setFontSize(24),
                }
            },
            itemStyle: {
                normal: {
                    color: '#fccb02',
                    shadowBlur: 10,
                    shadowColor: ''
                }
            },
            zlevel: 1
        },
        {
            name:  '济南市',
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color:'#a6c84c',
                    width: 0,
                    curveness: 0.2
                }
            },
            data: data.map(function (dataItem) {
                return {
                    fromName: dataFrom,
                    toName: dataItem.name,
                    coords: [
                        geoCoordMap[dataFrom],
                        geoCoordMap[dataItem.name]
                    ]
                }
            })
        },
        {
            name: '济南市',
            type: 'lines',
            zlevel: 2,
            symbol: ['none', 'arrow'],
            symbolSize: 10,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,

            },
            lineStyle: {
                normal: {
                    color:'#a6c84c',
                    width: 1,
                    opacity: 0.6,
                    curveness: 0.2
                }
            },
            data: data.map(function (dataItem) {
                return {
                    fromName: dataFrom,
                    toName: dataItem.name,
                    coords: [
                        geoCoordMap[dataFrom],
                        geoCoordMap[dataItem.name]
                    ]
                }
            })
        },
        /*{
            name: '点',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin', //气泡
            symbolSize: function(val) {
                var a = (maxSize4Pin - minSize4Pin) / (max - min);
                var b = minSize4Pin - a * min;
                b = maxSize4Pin - a * max;
                return a * val[2] + b;
            },
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 9,
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#F62157', //标志颜色
                }
            },
            zlevel: 6,
            data: convertData(data),
        },*/


    ]
};



// 使用刚指定的配置项和数据显示图表。
myChartMap4.setOption(option);

//浏览器大小改变时重置大小
//window.onresize = myChartMap4.resize;
//用于使chart自适应高度和宽度
window.onresize = function () {
//重置容器高宽
resizeWorldMapContainer();
myChartMap4.resize();
};
