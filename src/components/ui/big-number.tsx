export default function BigNumber({
  number,
  label,
}: {
  number: number;
  label: string;
}) {
  return (
    <div className="flex flex-col items-start">
      <h1 className="text-7xl font-bold tracking-widest">+{number}</h1>
      <p className="text-muted text-base uppercase max-w-11">{label}</p>
    </div>
  );
}
