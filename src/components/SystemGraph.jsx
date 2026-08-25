/**
 * Signature hero element: a quiet, drifting node-and-edge diagram
 * that nods to the subject's system-analysis / architecture background
 * (UML class diagrams, ERDs) without literally depicting one.
 */
export default function SystemGraph() {
  const nodes = [
    { x: 60, y: 80 },
    { x: 230, y: 40 },
    { x: 380, y: 130 },
    { x: 180, y: 220 },
    { x: 420, y: 260 },
    { x: 60, y: 260 },
  ];

  const edges = [
    [0, 1],
    [1, 2],
    [1, 3],
    [3, 0],
    [3, 4],
    [3, 5],
    [2, 4],
  ];

  return (
    <svg
      viewBox="0 0 480 320"
      className="w-full h-full text-accent-500/70 dark:text-accent-500/60"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1" opacity="0.5">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            className="animate-[dash_6s_linear_infinite]"
            strokeDasharray="4 5"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        ))}
      </g>
      <g fill="currentColor">
        {nodes.map((n, i) => (
          <circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={i === 3 ? 5 : 3.5}
            className="animate-pulse"
            style={{ animationDuration: "3s", animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </g>
    </svg>
  );
}
