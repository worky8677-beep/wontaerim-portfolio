import lineUrl from "../../img/fiveline.png";

export function Fiveline({ className = "" }) {
  return (
    <div className={`relative w-[2087px] h-[343px] fiveline-wave ${className}`}>
      <img src={lineUrl} alt="" className="w-full h-full" />
    </div>
  );
}
