require('./ForceDirectedGraph.css');

// Modules
import React from 'react/addons';
import d3 from 'd3';
import _ from 'lodash';

export default React.createClass({

  // Props API For Force Graph Component
  // graphCharge
  // graphLinkDistance
  // graphNodeRadius
  // graphName
  // graphData

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  },

  render() {
    return (<div className={'force-graph-container' + ' ' + this.props.graphName} ref="forceGraphContainer"></div>);
  },

  componentDidMount() {
    this.sizeSVGAreaConstruction();
    this.buildGraph();
  },

  sizeSVGAreaConstruction() {
    this.props.graphStore.setStoreData({
      forceGraphContainer: {
        width:  React.findDOMNode(this.refs.forceGraphContainer).clientWidth,
        height: React.findDOMNode(this.refs.forceGraphContainer).clientHeight
      }
    });
  },

  buildGraph() {

    var forceGraphData      = this.props.graphStore.data.forceGraphData;
    var forceGraphContainer = this.props.graphStore.data.forceGraphContainer;
    var graphCharge         = this.props.graphCharge;
    var linkDistance        = this.props.graphLinkDistance;
    var graphNodeRadius     = this.props.graphNodeRadius;
    var color               = d3.scale.category20(); // Get a D3 color set

    if(forceGraphContainer.width &&
       forceGraphContainer.height) {

      // Create Force graph instance
      var force = d3.layout.force()
                            .charge(graphCharge)
                            .linkDistance(linkDistance)
                            .size([forceGraphContainer.width, forceGraphContainer.height]);

      force.nodes(forceGraphData.nodes)
                .links(forceGraphData.links)
                .start();


      // Setup SVG 'artboard'
      var svg = d3.select('.force-graph-container')
                    .append('svg')
                      .attr('width', forceGraphContainer.width)
                      .attr('height', forceGraphContainer.height);

      // Create link elements
      var link = svg.selectAll('.link')
                           .data(forceGraphData.links)
                           .enter()
                             .append('line') // <line> element
                               .attr('class', 'link')
                               .style('stroke-width', '1px');

      // Create node elements
      var node = svg.selectAll('.node')
                           .data(forceGraphData.nodes)
                           .enter()
                             .append('circle') // <circle> element
                               .attr('class', 'node')
                               .attr('r', graphNodeRadius)
                               .style('fill', function(d) { return color(d.group); })
                             .call(force.drag);

      // Create <title> elements
      node.append('rect')
            .append('text').text(function(d){
              return d.name; 
            });


      // Events
      force.on('tick', function() {

        link.attr('x1', function(d) { return d.source.x; })
            .attr('x2', function(d) { return d.target.x; })
            .attr('y1', function(d) { return d.source.y; })
            .attr('y2', function(d) { return d.target.y; });

        node.attr('cx', function(d) { return d.x; })
            .attr('cy', function(d) { return d.y; });
      });

      window.onresize = () => {
        d3.select('.force-graph-container svg')
          .attr('width',  React.findDOMNode(this.refs.forceGraphContainer).clientWidth)
          .attr('height', React.findDOMNode(this.refs.forceGraphContainer).clientHeight);
      };
    }
  }
});
