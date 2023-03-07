import "reactflow/dist/style.css";
import ReactFlow, {
  Background,
  Controls,
  applyEdgeChanges,
  applyNodeChanges,
  addEdge,
} from "reactflow";
import { useState, useCallback } from "react";
import TextUpdaterNode from "./TextUpdaterNode.jsx";
import "./text-updater-node.css";

const nodeTypes = { textUpdater: TextUpdaterNode };

const Flow = () => {
  console.log("loaded");
  const initialEdges = [{ id: "1-2", source: "1", target: "2" }];
  const initialNodes = [
    {
      id: "1",
      position: { x: 0, y: 0 },
      data: { label: "Hello" },
      type: "textUpdater",
      data: { value: 123 },
    },
    {
      id: "2",
      position: { x: 100, y: 100 },
      data: { label: "World" },
    },
  ];

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  return (
    <div style={{ height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onNodesChange={onNodesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Flow;
