import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts"

function Item() {
    const data = [
        { x: 6, y: 100 },
        { x: 4.7, y: 93.7 },
        { x: 6.3, y: 86.6 },
        { x: 8, y: 93.7 },
        { x: 4.5, y: 85.6 },
        { x: 4.5, y: 83.6 },
        { x: 8.2, y: 100 },
        { x: 6.5, y: 93.6 },
        { x: 4.1, y: 88 },
        { x: 6.1, y: 82.3 },
        { x: 4.1, y: 90.8 },
        { x: 4.1, y: 81 },
        { x: 5.5, y: 100 },
        { x: 1.2, y: 58.7 },
        { x: 1.6, y: 80.7 },
        { x: 3.9, y: 82.2 },
        { x: 3, y: 70.7 },
        { x: 5.6, y: 80.3 },
        { x: 3.2, y: 73.3 },
        { x: 2.2, y: 76.3 },
        { x: 7.9, y: 97 },
        { x: 4.5, y: 78.5 },
        { x: 5.1, y: 82.5 },
        { x: 2.2, y: 89.5 },
        { x: 3.9, y: 90.8 },
        { x: 5.2, y: 83.7 },
        { x: 2.7, y: 69.6 },
        { x: 5.8, y: 88.2 },
        { x: 3.8, y: 83.9 },
        { x: 4.4, y: 70.7 },
        { x: 3.8, y: 77.9 },
        { x: 8.7, y: 82.9 },
        { x: 5, y: 86.7 },
        { x: 2.9, y: 76.4 },
        { x: 6.6, y: 85.7 },
        { x: 2.6, y: 85.5 },
        { x: 5.4, y: 73.7 },
        { x: 1.1, y: 53.4 },
        { x: 2.3, y: 76.1 },
        { x: 5.4, y: 92.5 },
        { x: 6.5, y: 100 },
        { x: 5.3, y: 78.8 },
        { x: 4.8, y: 92.7 },
        { x: 4.4, y: 84.3 },
        { x: 2, y: 62.9 },
        { x: 3.6, y: 82.3 },
        { x: 4.1, y: 86.3 },
        { x: 7.1, y: 80.1 },
        { x: 5.7, y: 99.6 },
        { x: 1.5, y: 77.4 },
        { x: 5.6, y: 81.9 },
        { x: 4.2, y: 83.1 },
        { x: 3.6, y: 84.5 },
        { x: 6.2, y: 92 },
        { x: 7.1, y: 89.5 },
        { x: 6.9, y: 85.7 },
        { x: 3.3, y: 74.8 },
        { x: 4.4, y: 89.3 },
        { x: 5.7, y: 92.1 },
        { x: 7, y: 88.5 },
        { x: 4, y: 86.3 },
        { x: 4.6, y: 63 },
        { x: 2.8, y: 85.2 },
        { x: 2.6, y: 58.3 },
        { x: 6.6, y: 91.2 },
        { x: 7.7, y: 86 },
        { x: 4.9, y: 67.6 },
        { x: 7, y: 99.5 },
        { x: 5.7, y: 78.6 },
        { x: 3.7, y: 79.8 },
        { x: 5.7, y: 86.7 },
        { x: 8.1, y: 100 },
        { x: 4.9, y: 84.9 },
        { x: 8.1, y: 87 },
        { x: 0, y: 71.3 },
        { x: 6.6, y: 81.7 },
        { x: 5.2, y: 72.7 },
        { x: 4.4, y: 79.6 },
        { x: 5.2, y: 92.9 },
        { x: 1, y: 75.5 },
        { x: 4.6, y: 79.8 },
        { x: 5.7, y: 83.1 },
        { x: 8, y: 96.1 },
        { x: 4, y: 99.4 },
        { x: 3.4, y: 80 },
        { x: 4, y: 83.3 },
        { x: 6.8, y: 99.1 },
        { x: 5.7, y: 86.5 },
        { x: 3.9, y: 79 },
        { x: 6, y: 84.7 },
        { x: 5.2, y: 84.2 },
        { x: 6.9, y: 91 },
        { x: 3.6, y: 84.5 },
        { x: 4.3, y: 82.1 },
        { x: 4.2, y: 88.7 },
        { x: 2.1, y: 68.7 },
        { x: 5.6, y: 86.4 },
        { x: 5.5, y: 67.7 },
        { x: 5, y: 90 },
    ]

    const m = 3.706364973;
    const b = 65.49921457;

    const lineData = data.map((point)=>({
        x: point.x,
        y: m * point.x + b,
    }) )
    return (
        <div style={{minHeight:"100vh", background:"linear-gradient(to right, purple, blue, pink"}}>
            <h1>Regrasi Linear - by Melii & Rachell</h1>
            <ScatterChart width={400} height={300}>
                <CartesianGrid/>
                <XAxis type="number" dataKey="x"/>
                <YAxis type="number" dataKey="y"/>

                <Tooltip/>
                <Scatter data={data} fill="white"/>
                <Scatter data={lineData} line shape="none" fill="pink"/>
            </ScatterChart>
        </div>
    )
}
export default Item