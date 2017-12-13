var currentWidth = $('#bubbles').width();
var w = 1280,
    h = 800;

var svg = d3.select("#bubbles").append("svg")
    .attr("preserveAspectRatio", "xMidYMid")
    .attr("viewBox", "0 0 " + w + " " + h)
    .attr("width", currentWidth)
    .attr("height", currentWidth * h / w);

var data = [];

var color = d3.scaleLinear()
    .domain([0, 1])
    .range(["red", "lime"])
    .interpolate(d3.interpolateHcl);

var simulation = d3.forceSimulation()
    .velocityDecay(0.2)
    .alphaDecay(0.03)
    .force('x', d3.forceX().strength(0.015).x(w / 2))
    .force('y', d3.forceY().strength(0.015).y(h / 2))
    .force("collide", d3.forceCollide().radius(function (d) {
        return d.r;
    }).iterations(4))
    .on("tick", tick);

simulation.stop();

var selectedEntity;
var selectedText = 0;

$.get("json/data.json", function (result) {

    var types = result.map(function (value) {
        return value.t;
    }).filter(function (value, index, self) {
        return self.indexOf(value) === index;
    });

    types.sort();

    for (var i = 0; i < types.length; i++) {
        $("#type-select").append("<option value='" + types[i] + "'>" + types[i] + " " + result.filter(function (entity) {
            return entity.t === types[i];
        }).length + "</option>");
    }

    data = result.map(function (entity) {
        return {
            name: entity.a,
            positive: entity.pa,
            negative: entity.na,
            positiveAll: entity.p,
            negativeAll: entity.n,
            texts: entity.x.filter(function (value, index, self) {
                return self.indexOf(value) === index;
            }),
            textAll: entity.x,
            type: entity.t,
            indices: entity.i,
            lengths: entity.l
        }
    });

    initSimulation();
    initScatter();

    $("#loading-div").hide();
}).fail(function () {

});

function onEntityFilterChange() {
    resetAll();
    initSimulation();
    initScatter();
    simulation.alpha(1).restart();
}

function resetAll() {
    if (simulation) {
        simulation.stop();
    }

    $("#bubbles").find("> svg").empty();
    $("#scatter").find("circle").remove();

    selectedEntity = undefined;
    selectedText = 0;

    $("#text").empty();

    $("#entity-name").text("-");
    $("#entity-type").text("-");
    $("#entity-positive").text("-");
    $("#entity-negative").text("-");
    $("#entity-texts").text("-");

    $("#text-progress")
        .attr("aria-valuenow", 0)
        .css("width", 0);
}

function selectEntity() {
    $("g").removeClass("selected");
    $("circle").removeClass("selected");
    $('*[value="' + selectedEntity.name + '"]').addClass("selected");

    $("#entity-name").text(selectedEntity.name);
    $("#entity-type").text(selectedEntity.type);
    $("#entity-positive").text(selectedEntity.positive);
    $("#entity-negative").text(selectedEntity.negative);
    $("#entity-texts").text(selectedEntity.texts.length);

    $("#text-progress")
        .css("width", 0)
        .attr("aria-valuenow", 0)
        .attr("aria-valuemax", selectedEntity.texts.length - 1);
}

function initSimulation() {
    var typeFilter = $("#type-select").val();

    var maxMention = data.reduce(function (a, b) {
        return a.texts.length >= b.texts.length ? a : b;
    }).texts.length;

    var logScale = d3.scaleLog()
        .domain([1, maxMention])
        .range([0, 50]);

    var nodes = data
        .filter(function (value) {
            return (typeFilter === "" || value.type === typeFilter) && value.texts.length > 3;
        })
        .map(function (entity) {
            return {
                x: Math.random() * w,
                y: Math.random() * h,
                entity: entity,
                r: logScale(entity.texts.length)
            };
        });

    simulation.nodes(nodes);
    simulation.alpha(1).restart();

    var gEnter = svg.selectAll("g")
        .data(nodes)
        .enter()
        .append("g")
        .attr("value", function (d) {
            return d.entity.name;
        })
        .on("click", function (d) {
            if (selectedEntity !== d.entity) {
                selectedText = 0;
                selectedEntity = d.entity;

                selectEntity();
                loadText();
            }
        })
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended)
        );

    gEnter.append("circle")
        .attr("r", function (d) {
            return d.r;
        })
        .style("fill", function (d) {
            return color(d.entity.positive);
        });

    gEnter.append("text")
        .text(function (d) {
            return d.entity.name;
        })
        .style("text-anchor", "middle")
        .style("font-size", "12");
}

function dragstarted(d) {
    d.drag = true;
    $(this).addClass("active");
    d.fx = d.x;
    d.fy = d.y;
    simulation.alpha(1).restart();
}

function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
    simulation.alpha(1).restart();
}

function dragended(d) {
    d.drag = false;
    $(this).removeClass("active");
    d.fx = null;
    d.fy = null;
    simulation.alpha(1).restart();
}

function tick() {
    svg.selectAll("circle")
        .attr("cx", function (d) {
            return d.x = Math.max(d.r, Math.min(w - d.r, d.x));
        })
        .attr("cy", function (d) {
            return d.y = Math.max(d.r, Math.min(h - d.r, d.y));
        });
    svg.selectAll("text")
        .attr("x", function (d) {
            return d.x = Math.max(d.r, Math.min(w - d.r, d.x));
        })
        .attr("y", function (d) {
            return d.y = Math.max(d.r, Math.min(h - d.r, d.y));
        });
}

function nextText() {
    if (selectedEntity && selectedText < selectedEntity.texts.length - 1) {
        $("#text-progress").attr("aria-valuenow", ++selectedText)
            .css("width", (selectedText / selectedEntity.texts.length * 100) + "%");
        loadText();
    }
}

function previousText() {
    if (selectedEntity && selectedText > 0) {
        $("#text-progress").attr("aria-valuenow", --selectedText)
            .css("width", (selectedText / selectedEntity.texts.length * 100) + "%");
        loadText();
    }
}

function loadText() {
    $.get('text/' + selectedEntity.texts[selectedText], function (str) {

        var sentencesDict = {};

        var i;
        for (i = 0; i < selectedEntity.textAll.length; i++) {
            if (selectedEntity.textAll[i] === selectedEntity.texts[selectedText]) {
                sentencesDict[selectedEntity.indices[i]] = {
                    length: selectedEntity.lengths[i],
                    color: color(selectedEntity.positiveAll[i])
                }
            }
        }

        var sentences = [];
        for (var key in sentencesDict) {
            sentences.push({
                index: parseInt(key),
                length: sentencesDict[key].length,
                color: sentencesDict[key].color
            })
        }

        sentences.sort(function(a, b){
            return b.index - a.index;
        });

        var find = selectedEntity.name;
        var re = new RegExp(find, 'gi');

        for (i = 0; i < sentences.length; i++) {
            str = str.slice(0, sentences[i].index) + "<span style='border-bottom: 2px solid " + sentences[i].color + "'>" +
                str.slice(sentences[i].index, sentences[i].index + sentences[i].length).replace(re, "<b>" + find + "</b>")
                + "</span>" + str.slice(sentences[i].index + sentences[i].length)
        }
        $("#text").html(str);
    })
}

/* SCATTER PLOT */
var svgScatter = d3.select("#scatter > svg")
    .attr("width", currentWidth)
    .attr("height", currentWidth * h / w);

var tooltip = d3.select("body").append("div")
    .attr("class", "tooltip");

function initScatter() {
    var maxMention = data.reduce(function (a, b) {
        return a.texts.length >= b.texts.length ? a : b;
    }).texts.length;

    var logScale = d3.scaleLog()
        .domain([1, maxMention])
        .range([40, w - 40]);

    var typeFilter = $("#type-select").val();

    var points = data
        .filter(function (value) {
            return typeFilter === "" || value.type === typeFilter;
        })
        .map(function (entity) {
            return {
                x: logScale(entity.texts.length),
                y: h - ((h - 80) * entity.positive + 40),
                entity: entity
            };
        });

    svgScatter.selectAll("circle")
        .data(points)
        .enter()
        .append("circle")
        .attr("value", function (d) {
            return d.entity.name;
        })
        .attr("cx", function (d) {
            return d.x;
        })
        .attr("cy", function (d) {
            return d.y;
        })
        .attr("r", 5)
        .style("fill", function (d) {
            return color(d.entity.positive);
        })
        .on("click", function (d) {
            if (selectedEntity !== d.entity) {
                selectedText = 0;
                selectedEntity = d.entity;

                selectEntity();
                loadText();
            }
        })
        .on("mouseover", function (d) {
            tooltip.style("opacity", .75);
            var position = $(this).position();
            tooltip.html(d.entity.name + "<br/>Score: " + d.entity.positive + "<br/>Texts: " + d.entity.texts.length)
                .style("left", position.left - 46 + "px")
                .style("top", position.top - 57 + "px");
        })
        .on("mouseout", function (d) {
            tooltip.style("opacity", 0);
        });
}

$(window).resize(function () {
    currentWidth = $("#bubbles").width();
    svg.attr("width", currentWidth);
    svg.attr("height", currentWidth * h / w);
    svgScatter.attr("width", currentWidth);
    svgScatter.attr("height", currentWidth * h / w);
});
