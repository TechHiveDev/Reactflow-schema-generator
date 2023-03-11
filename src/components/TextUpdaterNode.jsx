import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import Entity from "./Entity";

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
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
      />
      <div>
        <Entity data={data} />
      </div>
    </div>
  );
}

export default TextUpdaterNode;
