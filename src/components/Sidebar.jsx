import RoutineForm from "./RoutineForm";

export default function Sidebar({
  form,
  setForm,
  isEdit,
  onSubmit,
  onCancel,
  busy,
}) {
  return (
    <aside className="space-y-4">
      {/* FORM */}
      <div className="rounded-2xl border border-slate-200 bg-white">
        <div className="px-5 py-4 border-b border-slate-100">
          <h2 className="text-sm font-semibold text-slate-900">
            Add your routine
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Save your skincare product along with step, time, and frequency.
          </p>
        </div>

        <RoutineForm
          form={form}
          setForm={setForm}
          isEdit={isEdit}
          onSubmit={onSubmit}
          onCancel={onCancel}
          busy={busy}
        />
      </div>

      {/* TIPS */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <h3 className="text-sm font-semibold text-slate-900">Tips</h3>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
          Save your step and time to keep your routine consistent.
          For exfoliant and mask, frequency is important to avoid overuse.
        </p>
      </div>
    </aside>
  );
}