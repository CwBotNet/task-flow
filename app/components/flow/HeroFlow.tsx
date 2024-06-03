
"use client"
import React, { useCallback } from 'react'
import ReactFlow, { Background, Controls, useNodesState, useEdgesState, addEdge, BackgroundVariant } from 'reactflow'
import "reactflow/dist/style.css"


const initialNodes = [
    { id: '1', position: { x: 50, y: 0 }, data: { label: 'task 1' } },
    { id: '2', position: { x: 30, y: 100 }, data: { label: 'task 2' } },
    { id: '3', position: { x: 60, y: 200 }, data: { label: 'task 3' } },
    { id: '4', position: { x: 100, y: 300 }, data: { label: 'task 4' } },
];

interface Edge {
    id: string,
    source: string,
    target: string,
    animate?: boolean

}


const initialEdges: Edge[] = [
    { id: 'e1-2', source: '1', target: '2', },
    { id: "el-3", source: "2", target: "3" },
    { id: "el-4", source: "3", target: "4" }
];


const HeroFlow = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
    const [edge, setEdges, onEdgesChange] = useEdgesState(initialEdges)

    const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), [setEdges])
    return (
        <div className='flex justify-center items-center'>
            <div className='p-12 h-[60vh] md:w-[70vw] lg:w-[60vw] w-[100vw] '>
                <ReactFlow
                    nodes={nodes}
                    edges={edge}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    fitView
                >
                    <Background className='bg-white rounded-lg ' variant={BackgroundVariant.Dots} />
                    <Controls />
                </ReactFlow>
            </div>
        </div>
    )
}

export default HeroFlow