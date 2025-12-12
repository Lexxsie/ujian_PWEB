const STEPS = ["Cleanser","Toner","Serum","Moisturizer","Sunscreen","Exfoliant","Mask","Other"];
const TIMES = ["AM","PM"];
const FREQS = ["Daily","2-3x/week","Weekly","As Needed"];

export default function RoutineForm({
  form,
  setForm,
  isEdit,
  onSubmit,
  onCancel,
  busy,
}) {
  const setField = (k, v) => setForm(p => ({ ...p, [k]: v }));

  return (
    <form onSubmit={onSubmit} className="p-5 grid grid-cols-1 gap-4">
      <div>
        <label className="text-xs font-medium text-slate-600">
          Product Name
        </label>
        <input
          value={form.product_name}
          onChange={(e) => setField("product_name", e.target.value)}
          placeholder="Example: Hada Labo Gokujyun, Azarine Sunscreen..."
          className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm
                     focus:outline-none focus:ring-2 focus:ring-slate-900/10"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-medium text-slate-600">Step</label>
          <select
            value={form.step}
            onChange={(e) => setField("step", e.target.value)}
            className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
          >
            {STEPS.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>

        <div>
          <label className="text-xs font-medium text-slate-600">Time</label>
          <select
            value={form.time_of_day}
            onChange={(e) => setField("time_of_day", e.target.value)}
            className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
          >
            {TIMES.map(t => <option key={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-medium text-slate-600">Frequency</label>
          <select
            value={form.frequency}
            onChange={(e) => setField("frequency", e.target.value)}
            className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
          >
            {FREQS.map(f => <option key={f}>{f}</option>)}
          </select>
        </div>

        <div>
          <label className="text-xs font-medium text-slate-600">Notes</label>
          <input
            value={form.notes}
            onChange={(e) => setField("notes", e.target.value)}
            placeholder="Example: don't use everyday"
            className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
          />
        </div>
      </div>

      <div className="flex gap-2 pt-2">
        <button
          type="submit"
          disabled={busy}
          className="rounded-xl bg-slate-900 text-white px-4 py-2 text-sm
                     hover:bg-slate-800 disabled:opacity-60"
        >
          {isEdit ? "Update" : "Add"}
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="rounded-xl border border-slate-200 px-4 py-2 text-sm hover:bg-slate-50"
        >
          Clear
        </button>
      </div>
    </form>
  );
}
