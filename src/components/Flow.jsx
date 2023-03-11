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
import Sidebar from "./Sidebar.jsx";
import "../styles/text-updater-node.module.css";
import validFields from "../util/validate";

import toast, { Toaster } from "react-hot-toast";

const nodeTypes = { textUpdater: TextUpdaterNode };

const Flow = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [id, setId] = useState(1);
  const addNode = (entityData) => {
    const validData = validFields(entityData);
    if (!validData) {
      toast.error("error, Data aren't complete", {
        duration: 2000,
      });
      return;
    }
    setNodes([
      ...nodes,
      {
        id: `${id}`,
        type: "textUpdater",
        position: {
          x: (Math.random() * window.innerWidth) / 2,
          y: (Math.random() * window.innerHeight) / 2,
        },
        data: {
          id: `${id}`,
          entityData,
        },
        value: { data: 1 },
      },
    ]);
    setId((id) => id + 1);
  };

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
    <div style={{ display: "flex", flexDirection: "row-reverse" }}>
      <div style={{ height: "100vh", width: "80vw" }}>
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
      <Sidebar addNode={addNode} />
      <Toaster />
    </div>
  );
};

export default Flow;
