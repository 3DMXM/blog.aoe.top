<script lang='ts' setup>
import {
    select,
    forceSimulation,
    forceLink,
    forceManyBody,
    forceCenter,
    scaleOrdinal,
    schemeCategory10,
    drag
} from "d3";

let chartRef = ref<HTMLElement | null>(null);

let data = {
    nodes: [
        { name: 'A人物' },
        { name: 'B人物' },
        { name: 'C人物' },
        { name: 'D人物' },
        { name: 'E人物' },
        { name: 'F人物' },
        { name: 'G人物' },
        { name: 'H人物' },
        { name: 'I人物' },
        { name: 'J人物' },
        { name: 'K人物' },
        { name: 'L人物' },
        { name: 'M人物' }
    ],
    edges: [
        // value越小关系越近
        { source: 0, target: 1, relation: '朋友', value: 3 },
        { source: 0, target: 2, relation: '朋友', value: 3 },
        { source: 0, target: 3, relation: '朋友', value: 6 },
        { source: 1, target: 2, relation: '朋友', value: 6 },
        { source: 1, target: 3, relation: '朋友', value: 7 },
        { source: 2, target: 3, relation: '朋友', value: 7 },
        { source: 0, target: 4, relation: '朋友', value: 3 },
        { source: 0, target: 5, relation: '朋友', value: 3 },
        { source: 4, target: 5, relation: '夫妻', value: 1 },
        { source: 0, target: 6, relation: '兄弟', value: 2 },
        { source: 4, target: 6, relation: '同学', value: 3 },
        { source: 5, target: 6, relation: '同学', value: 3 },
        { source: 4, target: 7, relation: '同学', value: 4 },
        { source: 5, target: 7, relation: '同学', value: 3 },
        { source: 6, target: 7, relation: '同学', value: 3 },
        { source: 4, target: 8, relation: '师生', value: 4 },
        { source: 5, target: 8, relation: '师生', value: 5 },
        { source: 6, target: 8, relation: '师生', value: 3 },
        { source: 7, target: 8, relation: '师生', value: 5 },
        { source: 8, target: 9, relation: '师生', value: 4 },
        { source: 3, target: 9, relation: '师生', value: 5 },
        { source: 2, target: 10, relation: '母子', value: 1 },
        { source: 10, target: 11, relation: '雇佣', value: 6 },
        { source: 10, target: 12, relation: '雇佣', value: 6 },
        { source: 11, target: 12, relation: '同事', value: 7 }
    ]
}

onMounted(() => {
    const containerWidth = 150;
    const margin = { top: 60, right: 60, bottom: 60, left: 60 }
    const width = containerWidth - margin.left - margin.right
    const height = 700 - margin.top - margin.bottom
    let chart = select(chartRef.value)
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)

    let g = chart
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')') // 设最外包层在总图上的相对位置
    let simulation = forceSimulation() // 构建力导向图
        .force(
            'link',
            forceLink()
                .id(function (d, i) {
                    return i
                })
                .distance(function (d) {
                    // return d.value * 50
                    console.log(d);
                    return 100
                })
        )
        .force('charge', forceManyBody())
        .force('center', forceCenter(width / 2, height / 2))

    let z = scaleOrdinal(schemeCategory10) // 通用线条的颜色

    let link = g
        .append('g') // 画连接线
        .attr('class', 'links')
        .selectAll('line')
        .data(data.edges)
        .enter()
        .append('line')

    let linkText = g
        .append('g') // 画连接连上面的关系文字
        .attr('class', 'link-text')
        .selectAll('text')
        .data(data.edges)
        .enter()
        .append('text')
        .text(function (d) {
            return d.relation
        })

    let node = g
        .append('g') // 画圆圈和文字
        .attr('class', 'nodes')
        .selectAll('g')
        .data(data.nodes)
        .enter()
        .append('g')
        .on('mouseover', function (d, i) {
            //显示连接线上的文字
            linkText.style('fill-opacity', function (edge) {
                if (edge.source === d || edge.target === d) {
                    return 1
                }
                return null
            })
            //连接线加粗
            link
                .style('stroke-width', function (edge) {
                    if (edge.source === d || edge.target === d) {
                        return '2px'
                    }
                    return null
                })
                .style('stroke', function (edge) {
                    if (edge.source === d || edge.target === d) {
                        return '#000'
                    }
                    return null
                })
        })
        .on('mouseout', function (d, i) {
            //隐去连接线上的文字
            linkText.style('fill-opacity', function (edge) {
                if (edge.source === d || edge.target === d) {
                    return 0
                }
                return null
            })
            //连接线减粗
            link
                .style('stroke-width', function (edge) {
                    if (edge.source === d || edge.target === d) {
                        return '1px'
                    }
                    return null
                })
                .style('stroke', function (edge) {
                    if (edge.source === d || edge.target === d) {
                        return '#ddd'
                    }
                    return null
                })
        })
        .call(
            drag()
            // .on('start', dragstarted)
            // .on('drag', dragged)
            // .on('end', dragended)
        )

    node
        .append('circle')
        .attr('r', 5)
        .attr('fill', function (d, i) {
            return z(i.toString())
        })

    node
        .append('text')
        .attr('fill', function (d, i) {
            return z(i.toString())
        })
        .attr('y', -20)
        .attr('dy', '.71em')
        .text(function (d) {
            return d.name
        })

    simulation // 初始化力导向图
        .nodes()

    chart.append('g') // 输出标题
        .attr('class', 'bar--title')
        .append('text')
        .attr('fill', '#000')
        .attr('font-size', '16px')
        .attr('font-weight', '700')
        .attr('text-anchor', 'middle')
        .attr('color', '#fff')
        .attr('x', containerWidth / 2)
        .attr('y', 20)
        .text('人物关系图')

    function dragstarted(d: any) {

    }

    function dragged(d: any) {

    }

    function dragended(d: any) {

        d.fx = null
        d.fy = null
    }

})





</script>
<template>
    <div class="tags module">
        <h3 class="title">分类</h3>
        <div class="force">
            <svg ref="chartRef">
            </svg>
        </div>
    </div>
</template>
<script lang='ts'>

export default {
    name: 'LayoutsTags',
}
</script>
<style lang='less' scoped>

</style>