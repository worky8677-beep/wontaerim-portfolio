export function InfoRow({ label, value }) {
  if (!value) return null;
  return (
    <div className="flex flex-col gap-1">
      <span className="font-a2z text-body3 text-dove">{label}</span>
      <span className="font-a2z text-body2 lg:text-sub font-semibold text-charcoal">
        {value}
      </span>
    </div>
  );
}
