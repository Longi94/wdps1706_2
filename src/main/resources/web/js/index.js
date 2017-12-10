const SAMPLE_DATA = [];

var currentWidth = $('#bubbles').width();

var w = 1280,
    h = 800;

var nodes = d3.range(200).map(function () {
        return {
            radius: Math.random() * 24 + 4,
            x: Math.random() * w,
            y: Math.random() * h
        };
    }),
    color = d3.scaleOrdinal(d3.schemeCategory10);

var center = {x: currentWidth / 2, y: (currentWidth * h / w) / 2};

var simulation = d3.forceSimulation()
    .velocityDecay(0.2)
    .alphaDecay(0)
    .force('x', d3.forceX().strength(0.002).x(center.x))
    .force('y', d3.forceY().strength(0.002).y(center.y))
    .force("collide", d3.forceCollide().radius(function (d) {
        return d.radius;
    }).iterations(2))
    .nodes(nodes)
    .on("tick", tick);

var svg = d3.select("#bubbles").append("svg:svg")
    .attr("preserveAspectRatio", "xMidYMid")
    .attr("viewBox", "0 0 " + w + " " + h)
    .attr("width", currentWidth)
    .attr("height", currentWidth * h / w);

$(window).resize(function () {
    currentWidth = $("#bubbles").width();
    svg.attr("width", currentWidth);
    svg.attr("height", currentWidth * h / w);
});


svg.selectAll("circle")
    .data(nodes)
    .enter()
    .append("svg:circle")
    .attr("r", function (d) {
        return d.radius;
    })
    .style("fill", function (d, i) {
        return color(i % 3);
    })
    .on("click", function (d) {
    })
    .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended)
    );

function dragstarted(d) {
    d.drag = true;
    d3.select(this).raise().classed("active", true);
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
}

function dragended(d) {
    d.drag = false;
    d3.select(this).classed("active", false);
    d.fx = null;
    d.fy = null;
}

function tick() {
    svg.selectAll("circle")
        .attr("cx", function (d) {
            return d.x;
        })
        .attr("cy", function (d) {
            return d.y;
        });
}
