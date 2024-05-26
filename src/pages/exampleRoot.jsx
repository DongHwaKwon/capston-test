import React, { useState } from 'react';
import './StoreMap.css';

const storeMap = [
  // 0: 통로, 1: 벽, 2: 과자 코너, 3: 베이커리 코너
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 2, 1, 1, 3, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const corners = {
  snacks: { x: 3, y: 3 },
  bakery: { x: 3, y: 6 },
};

const findPath = (start, end) => {
  const directions = [
    { x: 1, y: 0 },
    { x: -1, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: -1 },
  ];
  const queue = [start];
  const visited = new Set();
  visited.add(`${start.x},${start.y}`);
  const path = {};

  while (queue.length > 0) {
    const current = queue.shift();
    if (current.x === end.x && current.y === end.y) {
      break;
    }

    for (const direction of directions) {
      const next = {
        x: current.x + direction.x,
        y: current.y + direction.y,
      };
      if (
        next.x >= 0 &&
        next.x < storeMap.length &&
        next.y >= 0 &&
        next.y < storeMap[0].length &&
        storeMap[next.x][next.y] !== 1 &&
        !visited.has(`${next.x},${next.y}`)
      ) {
        queue.push(next);
        visited.add(`${next.x},${next.y}`);
        path[`${next.x},${next.y}`] = current;
      }
    }
  }

  const fullPath = [];
  let current = end;
  while (current) {
    fullPath.unshift(current);
    current = path[`${current.x},${current.y}`];
  }

  return fullPath;
};

const StoreMap = () => {
  const [path, setPath] = useState([]);

  const handleFindPath = () => {
    const start = corners.snacks;
    const end = corners.bakery;
    const calculatedPath = findPath(start, end);
    setPath(calculatedPath);
  };

  return (
    <div>
      <h1>매장 내 길찾기</h1>
      <button onClick={handleFindPath}>경로 찾기</button>
      <div className="store-map">
        {storeMap.map((row, x) => (
          <div key={x} className="map-row">
            {row.map((cell, y) => {
              const isPath = path.some(point => point.x === x && point.y === y);
              let cellClass = '';
              switch (cell) {
                case 0:
                  cellClass = isPath ? 'path' : 'aisle';
                  break;
                case 1:
                  cellClass = 'wall';
                  break;
                case 2:
                  cellClass = 'corner snacks';
                  break;
                case 3:
                  cellClass = 'corner bakery';
                  break;
                default:
                  break;
              }
              return <div key={y} className={`map-cell ${cellClass}`}></div>;
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreMap;
