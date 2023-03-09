import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import Entity from "./Entity";

const handleStyle = { left: 10 };

function TextUpdaterNode({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <div>
        <Entity data={data} />
      </div>
    </div>
  );
}

export default TextUpdaterNode;
