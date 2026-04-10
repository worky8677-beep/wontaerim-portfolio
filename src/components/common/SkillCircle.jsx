export function SkillCircle({ name, image }) {
  return (
    <div className="flex flex-col items-center gap-3 w-[150px]">
      <div className="size-[150px] rounded-full bg-alabaster border border-silver flex items-center justify-center overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="size-[80px] object-contain" />
        ) : (
          <span className="font-gmarket font-bold text-h5 text-dove">{name.charAt(0)}</span>
        )}
      </div>
      <span className="font-gmarket text-body3 text-dove text-center">{name}</span>
    </div>
  );
}
