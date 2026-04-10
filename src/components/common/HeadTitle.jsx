export function HeadTitle({ title, color = "text-dove" }) {
  return (
    <div className="relative h-[50px] w-full border-b border-silver">
      <div className="absolute top-0 left-0 size-[25px] rounded-full bg-lime" />
      <p className={`absolute bottom-0 left-[13px] font-orelega text-h3 leading-normal ${color}`}>
        {title}
      </p>
    </div>
  );
}
