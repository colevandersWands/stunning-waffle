// https://jsfiddle.net/qpd63j7r/

var nodes = new vis.DataSet([
    {id: 00,    label: 'developering', title: 'developering is collaboration and communication',
                group: 'entry',
                color: { background: '#8c8c8c' }, notDone: true,
                url: 'https://github.com/jankeLearning/preview/tree/master/nodes/patience.md',                
                // url: 'https://github.com/jankeLearning/preview/tree/master/nodes/entry',
                level: 0, x: -550, y: 50 },
    {id: 01,    label: 'friendly code', title: 'code is meant to be read, not written \n -- in progress --',
                group: 'md',
                color: { background: '#8c8c8c' }, notDone: true,
                url: 'https://github.com/jankeLearning/preview/tree/master/nodes/patience.md',
                // url: 'https://github.com/jankeLearning/sample-lesson/blob/master/nodes/markdown/friendly-code.md',
                level: 1, x: -450, y: -50},
    {id: 02,    label: 'apps', title: 'app = {data, logic} + User Interaction',
                group: 'md',
                color: { background: '#8c8c8c' }, notDone: true,
                url: 'https://github.com/jankeLearning/preview/tree/master/nodes/patience.md',
                // url: 'https://github.com/jankeLearning/sample-lesson/blob/master/nodes/markdown/apps.md',
                level: 1, x: -400, y: 60  },
    {id: 03,    label: 'git and Hub', title: 'tools for sharing, collaborating, and preserving \n -- in progress --',
                group: 'md',
                color: { background: '#8c8c8c' }, notDone: true,
                url: 'https://github.com/jankeLearning/preview/tree/master/nodes/patience.md',
                // url: 'https://github.com/jankeLearning/sample-lesson/blob/master/nodes/markdown/git-and-hub.md',
                level: 1, x: -350, y: 175  },
    {id: 04,    label: 'planning apps', title: 'programmers code apps, developers plan them \n -- in progress --',
                group: 'md',
                color: { background: '#8c8c8c' }, notDone: true,
                url: 'https://github.com/jankeLearning/preview/tree/master/nodes/patience.md',
                // url: 'https://github.com/jankeLearning/sample-lesson/blob/master/nodes/markdown/planning-apps.md',
                level: 1, x: -250, y: 100 },
    {id: 05,    label: 'pure functions', title: 'kind of like a factory \n -- in progress --',
                group: 'md',
                color: { background: '#8c8c8c' }, notDone: true,
                url: 'https://github.com/jankeLearning/preview/tree/master/nodes/patience.md',
                // url: 'https://github.com/jankeLearning/sample-lesson/blob/master/nodes/markdown/pure-functions.md',
                level: 1, x: -300, y: -100 },
    {id: 06,    label: 'OOP in JS', title: 'single-purpose bags \n -- in progress --',
                group: 'md',
                color: { background: '#8c8c8c' }, notDone: true,
                url: 'https://github.com/jankeLearning/preview/tree/master/nodes/patience.md',
                // url: 'https://github.com/jankeLearning/sample-lesson/blob/master/nodes/markdown/oop-in-js.md',
                level: 1, x: -300, y: 0 },
    {id: 07,    label: 'specs', title: 'how developers talk about code \n -- in progress --',
                group: 'md',
                color: { background: '#8c8c8c' }, notDone: true,
                url: 'https://github.com/jankeLearning/preview/tree/master/nodes/patience.md',
                // url: 'https://github.com/jankeLearning/sample-lesson/blob/master/nodes/markdown/specs.md',
                level: 1, x: -200, y: -50 },
    {id: 09,    label: 'testing 101', title: 'just the basics, all the basics \n -- in progress --',
                group: 'md',
                color: { background: '#8c8c8c' }, notDone: true,
                url: 'https://github.com/jankeLearning/preview/tree/master/nodes/patience.md',
                // url: 'https://github.com/jankeLearning/sample-lesson/blob/master/nodes/markdown/testing-101.md',
                level: 1, x: -50, y: -100 },
    {id: 11,    label: 'objects as apps', title: 'thinking of objects as self-contained units of user story \n -- in progress --',
                group: 'we',
                color: { background: '#8c8c8c' }, notDone: true,
                url: 'https://github.com/jankeLearning/preview/tree/master/nodes/patience.md',
                // url: 'https://github.com/jankeLearning/sample-lesson/tree/master/nodes/worked-example/objects-as-apps',
                level: 2, x: 0, y: 0 },
    {id: 12,    label: 'model objects', title: 'not glamorous, but worth your time. we promise \n -- in progress --',
                group: 'we',
                color: { background: '#8c8c8c' }, notDone: true,
                url: 'https://github.com/jankeLearning/preview/tree/master/nodes/patience.md',
                // url: 'https://github.com/jankeLearning/sample-lesson/tree/master/nodes/worked-example/model-objects',
                level: 2, x: 150, y: -50 },
    {id: 13,    label: 'logic vs framework', title: 'probably the most important lesson here \n -- in progress --',
                group: 'we',
                color: { background: '#8c8c8c' }, notDone: true,
                url: 'https://github.com/jankeLearning/preview/tree/master/nodes/patience.md',
                // url: 'https://github.com/jankeLearning/sample-lesson/tree/master/nodes/worked-example/logic-vs-framework',
                level: 2, x: 300, y: 25 },
    {id: 14,    label: 'repoing', title: 'how to build useful github repos \n -- in progress --',
                group: 'we',
                color: { background: '#8c8c8c' }, notDone: true,
                url: 'https://github.com/jankeLearning/preview/tree/master/nodes/patience.md',
                // url: 'https://github.com/jankeLearning/sample-lesson/tree/master/nodes/worked-example/repoing',
                level: 2, x: 200, y: 150 },
    {id: 15,    label: 'project planning', title: 'all your code is no good if you never write it \n -- in progress --',
                group: 'we',
                color: { background: '#8c8c8c' }, notDone: true,
                url: 'https://github.com/jankeLearning/preview/tree/master/nodes/patience.md',
                // url: 'https://github.com/jankeLearning/sample-lesson/tree/master/nodes/worked-example/project-planning',
                level: 2, x: -100, y: 75 },
    {id: 16,    label: 'final project', title: 'put it all together in this guided project \n -- in progress --',
                group: 'project',
                color: { background: '#8c8c8c' }, notDone: true,
                url: 'https://github.com/jankeLearning/preview/tree/master/nodes/patience.md',
                // url: 'https://github.com/jankeLearning/sample-lesson/tree/master/nodes/projects/janke-project \n -- in progress --',
                level: 3, x: 450, y: 50 }
]);

var edges = new vis.DataSet([
    {from: 00, to: 01, arrows: 'to'},
    {from: 00, to: 02, arrows: 'to'},
    {from: 00, to: 03, arrows: 'to'},
    {from: 01, to: 05, arrows: 'to'},
    {from: 01, to: 06, arrows: 'to'},
    {from: 02, to: 04, arrows: 'to'},
    {from: 02, to: 11, arrows: 'to'},
    {from: 03, to: 14, arrows: 'to'},
    {from: 04, to: 15, arrows: 'to'},
    {from: 05, to: 07, arrows: 'to'},
    {from: 06, to: 07, arrows: 'to'},
    {from: 07, to: 09, arrows: 'to'},
    {from: 07, to: 11, arrows: 'to'},
    {from: 07, to: 15, arrows: 'to'},
    {from: 09, to: 12, arrows: 'to'},
    {from: 11, to: 12, arrows: 'to'},
    {from: 12, to: 13, arrows: 'to'},
    {from: 13, to: 16, arrows: 'to'},
    {from: 14, to: 16, arrows: 'to'},
    {from: 15, to: 13 , arrows: 'to'},
    {from: 15, to: 14 , arrows: 'to'}
]);

var options = {
    //interaction:{hover:true},
    improvedLayout:true,
    hierarchical: {
      enabled: true,
      levelSeparation: 15,
      nodeSpacing: 100,
      treeSpacing: 200,
      blockShifting: true,
      // edgeMinimization: true,
      // parentCentralization: true,
      direction: 'LR',        // UD, DU, LR, RL
      sortMethod: 'directed'   // hubsize, directed
    },
    physics: {
        enabled: false,
        barnesHut: {
            nodeDistance: 100,
            gravitationalConstant: 1000,
            centralGravity: 14,
            springLength: 10,
            springConstant: 1
        },
        maxVelocity: 80,
        minVelocity: 1,
        // solver: 'repulsion',
        timestep: 0.1,
        stabilization: { iterations: 100 }
    },    
    groups: {
      'entry': {     
        color: {
          border: '#2B7CE9',
          background: '#a8d387',
          highlight: {
            border: '#2B7CE9',
            background: '#D2E5FF'
          },
          hover: {
            border: '#2B7CE9',
            background: '#E2D05B'
          }
        } 
      },
      'md': {    
        color: {
          border: '#2B7CE9',
          background: '#42b0f4',
          highlight: {
            border: '#2B7CE9',
            background: '#D2E5FF'
          },
          hover: {
            border: '#2B7CE9',
            background: '#E2D05B'
          }
        } 
      },
      'we': {    
        color: {
          border: '#2B7CE9',
          background: '#A977D0',
          highlight: {
            border: '#2B7CE9',
            background: '#D2E5FF'
          },
          hover: {
            border: '#2B7CE9',
            background: '#E2D05B'
          }
        } 
      },
      'project': {    
        color: {
          border: '#2B7CE9',
          background: '#FE3D3D',
          highlight: {
            border: '#2B7CE9',
            background: '#D2E5FF'
          },
          hover: {
            border: '#2B7CE9',
            background: '#E2D05B'
          }
        } 
      }
    },
    nodes: {
      shape: 'circle'
    }
};

// create a network
var container = document.getElementById('mynetwork');
var data = {
    nodes: nodes,
    edges: edges
};

var network = new vis.Network(container, data, options);

// event listeners
network.on("selectNode", function (params) {
    if (params.nodes.length === 1) {
        var node = nodes.get(params.nodes[0]);
        window.open(node.url, '_blank');
        window.open('#');
    }
});

network.on("selectNode", function (params) {
  var node = nodes.get(params.nodes[0]);
  node.color = '#ffff00';
  nodes.update(node);
  console.log(node);
});

network.on("deselectNode", function (params) {
  var node = nodes.get(params.previousSelection.nodes[0]);
  if (node.notDone) {
    node.color = '#8c8c8c';
  } else {
    node.color.background = options.groups[node.group].color.background;
  };
  nodes.update(node);
  console.log(node);
}); 
 