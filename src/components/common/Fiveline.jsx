const lineUrl = "https://www.figma.com/api/mcp/asset/d0050814-997e-4a85-af21-7d823e173335";

export function Fiveline({ className = "" }) {
  const offsets = [0, 11.73, 23.46, 35.2, 46.93, 58.66];
  return (
    <div className={`relative w-[2087px] h-[343px] ${className}`}>
      {offsets.map((top, i) => (
        <div
          key={i}
          className="absolute left-0 w-full h-[252px]"
          style={{ top: `${top}px` }}
        >
          <img src={lineUrl} alt="" className="w-full h-full" />
        </div>
      ))}
    </div>
  );
}
