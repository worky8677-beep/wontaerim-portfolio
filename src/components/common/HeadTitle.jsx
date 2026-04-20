export function HeadTitle({ title, color = "text-dove" }) {
  return (
    <div className="relative h-[50px] w-full border-b border-silver">
      <div className="absolute top-2 left-0 size-[20px] rounded-full bg-lime" />
      <p className={`absolute bottom-0 left-[13px] font-a2z text-[30px] leading-normal ${color}`}>
        {title}
      </p>
    </div>
  );
}
