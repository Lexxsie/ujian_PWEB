function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2 py-0.5 text-xs text-slate-700">
      {children}
    </span>
  );
}

export default function RoutineList({ items, onEdit, onDelete }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-[#E8F9FF] overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
        <div className="text-sm font-semibold text-slate-900">Routine List</div>
        <div className="text-xs text-slate-500">{items.length} item</div>
      </div>

      {items.length === 0 ? (
        <div className="p-6 text-sm text-slate-500">
            No routines found. Please add your skincare routine.
        </div>
      ) : (
        <ul className="divide-y divide-slate-100">
          {items.map((r) => (
            <li key={r.id} className="px-5 py-4 hover:bg-slate-50/60 transition">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="font-medium text-slate-900 truncate">
                      {r.product_name}
                    </div>
                    <Badge>{r.step}</Badge>
                    <Badge>{r.time_of_day}</Badge>
                    <Badge>{r.frequency}</Badge>
                  </div>

                  <div className="mt-1 text-sm text-slate-600">
                    {r.notes ? r.notes : <span className="text-slate-400">No notes</span>}
                  </div>

                  <div className="mt-2 text-xs text-slate-400">
                    ID: {r.id} {r.created_at ? `• ${r.created_at}` : ""}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => onEdit(r)}
                    className="rounded-xl border border-slate-200 px-3 py-2 text-sm hover:bg-white"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(r.id)}
                    className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 hover:bg-red-100"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}