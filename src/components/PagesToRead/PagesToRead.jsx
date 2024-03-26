import { BarChart, Bar, XAxis, YAxis, Tooltip, LabelList, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';


const PagesToRead = () => {
    const [readList, setReadList] = useState([]);

    useEffect(() => {
        const readBooks = JSON.parse(localStorage.getItem('readBooks')) || [];
        setReadList(readBooks);
    }, []);

    const TriangleBar = (props) => {
        const { x, y, width, height } = props;
        const radius = 5;

        const points = [
            { x: x, y: y + height },
            { x: x + width / 2, y: y },
            { x: x + width, y: y + height }
        ];
        const path = `M${points[0].x},${points[0].y} ` +
            `Q${points[0].x + width / 4},${points[0].y - radius} ${points[1].x},${points[1].y} ` +
            `Q${points[2].x - width / 4},${points[2].y - radius} ${points[2].x},${points[2].y} ` +
            'Z';

        return <path d={path} fill={props.fill} />;
    };

    const chartData = readList.map((book, index) => ({
        name: book.bookName,
        totalPages: book.totalPages,
        color: index % 2 === 0 ? '#8884d8' : '#82ca9d',
    }));

    return (
        <div className="pages-to-read mx-4 lg:mx-32">
            <h2 className="text-5xl font-bold text-center mb-6">Pages to Read</h2>
            <div className="chart-container">
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={chartData}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="totalPages" shape={<TriangleBar />} fill="#59C6D2">
                            <LabelList dataKey="totalPages" position="top" />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default PagesToRead;
