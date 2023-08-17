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

    return (
        <div
            onClick={handleClick}
            style={{
                height: '100vh',
                width: '100vw'
            }}
        >
            {
                points.map(p => <div 
                    style={{
                        position: 'absolute',
                        top: p.y + 'px',
                        left: p.x + 'px'
                    }}
                    >o</div>)
            }
        </div>
    )
}

export default Canvas;