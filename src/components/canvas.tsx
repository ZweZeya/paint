import { useState } from "react";

interface Point {
    x: number,
    y: number
}

const Canvas = () => {
    const [points, setPoint] = useState<Point[]>([]);

    const handleClick = (e) => {
        setPoint([...points, { x: e.clientX, y: e.clientY }]);
    }

    const elements = points.map(p => <div 
        style={{
            position: 'absolute',
            top: p.y + 'px',
            left: p.x + 'px'
        }}
        >o</div>)

    return (
        <div
            onClick={handleClick}
            style={{
                height: '100vh',
                width: '100vw'
            }}
        >
            {
                elements
            }
        </div>
    )
}

export default Canvas;