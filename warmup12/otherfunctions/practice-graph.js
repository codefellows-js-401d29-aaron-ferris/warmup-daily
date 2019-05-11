const graph = require('../../../data-structures-and-algorithms/graphs/graphbase/graph.js')

const g = new graph ();
g.addNode('a')
g.addNode('b')
g.addNode('c')
g.addNode('d')
g.addNode('e')
g.addNode('f')
g.addEdge('a','b')
g.addEdge('b','f')
g.addEdge('f','b')
g.addEdge('c','b')
g.addEdge('f','c')
g.addEdge('f','d')
g.addEdge('f','e')
g.addEdge('c','d')
g.addEdge('d','c')

breadth = ( node, graph, output = [] ) => {

}

