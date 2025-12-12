export default function Header({ query, setQuery, filterTime, setFilterTime, filterStep, setFilterStep }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
          Skincare Routine
        </h1>
        <p className="text-sm text-slate-600 mt-1">
          Track your daily skincare routine easily and effectively.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full sm:w-[620px]">
        <div className="sm:col-span-1">
          <label className="text-xs font-medium text-slate-600">Search</label>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="search product name or notes..."
            className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm
                       focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
          />
        </div>

        <div>
          <label className="text-xs font-medium text-slate-600">Time</label>
          <select
            value={filterTime}
            onChange={(e) => setFilterTime(e.target.value)}
            className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm
                       focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
          >
            <option value="ALL">All</option>
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>

        <div>
          <label className="text-xs font-medium text-slate-600">Step</label>
          <select
            value={filterStep}
            onChange={(e) => setFilterStep(e.target.value)}
            className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm
                       focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
          >
            <option value="ALL">All</option>
            <option value="Cleanser">Cleanser</option>
            <option value="Toner">Toner</option>
            <option value="Serum">Serum</option>
            <option value="Moisturizer">Moisturizer</option>
            <option value="Sunscreen">Sunscreen</option>
            <option value="Exfoliant">Exfoliant</option>
            <option value="Mask">Mask</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
    </div>
  );
}
