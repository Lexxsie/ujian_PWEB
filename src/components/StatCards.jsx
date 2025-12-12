function Card({ title, value, sub }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-[#E8F9FF] p-4">
      <div className="text-xs font-medium text-slate-500">{title}</div>
      <div className="mt-1 text-2xl font-semibold text-slate-900">{value}</div>
      {sub && <div className="mt-1 text-xs text-slate-500">{sub}</div>}
    </div>
  );
}

export default function StatCards({ routines }) {
  const total = routines.length;
  const am = routines.filter((x) => x.time_of_day === "AM").length;
  const pm = routines.filter((x) => x.time_of_day === "PM").length;

  const stepCounts = routines.reduce((acc, r) => {
    const k = r.step || "Other";
    acc[k] = (acc[k] || 0) + 1;
    return acc;
  }, {});
  const topStep = Object.entries(stepCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "-";

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      <Card title="Total items" value={total} sub="Saved routines" />
      <Card title="AM routine" value={am} sub="Morning" />
      <Card title="PM routine" value={pm} sub="Evening" />
      <Card title="Most used step" value={topStep} sub="Most frequent step" />
    </div>
  );
}
