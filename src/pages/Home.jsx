import { useEffect, useMemo, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import RoutineList from "../components/RoutineList";
import StatCards from "../components/StatCards";
import {
  getRoutines,
  createRoutine,
  updateRoutine,
  deleteRoutine,
} from "../api/routineApi";

const initialForm = {
  id: null,
  product_name: "",
  step: "Other",
  time_of_day: "AM",
  frequency: "Daily",
  notes: "",
};

export default function Home() {
  const [items, setItems] = useState([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  // Search & filter
  const [query, setQuery] = useState("");
  const [filterTime, setFilterTime] = useState("ALL");
  const [filterStep, setFilterStep] = useState("ALL");

  // Form
  const [form, setForm] = useState(initialForm);
  const isEdit = form.id !== null;

  // Load data
  async function loadData() {
    setError("");
    try {
      const data = await getRoutines();
      setItems(data);
    } catch (e) {
      setError(e.message || "Failed to load data");
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  // Filtering
  const filteredItems = useMemo(() => {
    const q = query.toLowerCase();
    return items.filter((item) => {
      const matchQuery =
        !q ||
        item.product_name.toLowerCase().includes(q) ||
        (item.notes || "").toLowerCase().includes(q);

      const matchTime =
        filterTime === "ALL" || item.time_of_day === filterTime;

      const matchStep =
        filterStep === "ALL" || item.step === filterStep;

      return matchQuery && matchTime && matchStep;
    });
  }, [items, query, filterTime, filterStep]);

  // Submit
  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!form.product_name.trim()) {
      setError("Product name is required.");
      return;
    }

    setBusy(true);
    try {
      const payload = {
        product_name: form.product_name.trim(),
        step: form.step,
        time_of_day: form.time_of_day,
        frequency: form.frequency,
        notes: form.notes,
      };

      if (isEdit) {
        await updateRoutine(form.id, payload);
      } else {
        await createRoutine(payload);
      }

      setForm(initialForm);
      await loadData();
    } catch (e) {
      setError(e.message || "Failed to save data");
    } finally {
      setBusy(false);
    }
  }

  // Edit
  function handleEdit(item) {
    setForm({
      id: item.id,
      product_name: item.product_name,
      step: item.step,
      time_of_day: item.time_of_day,
      frequency: item.frequency,
      notes: item.notes || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Delete
  async function handleDelete(id) {
    if (!confirm("Are you sure you want to delete this routine?")) return;

    setBusy(true);
    try {
      await deleteRoutine(id);
      if (form.id === id) setForm(initialForm);
      await loadData();
    } catch (e) {
      setError(e.message || "Failed to delete data");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-blue-50">

      {/* ================= HEADER ================= */}
      <header className="bg-blue-100 border-b border-blue-200 shadow-sm">
        <div className="w-full px-6 py-6">
          <Header
            query={query}
            setQuery={setQuery}
            filterTime={filterTime}
            setFilterTime={setFilterTime}
            filterStep={filterStep}
            setFilterStep={setFilterStep}
          />
        </div>
      </header>

      {/* ================= BODY ================= */}
      <main className="flex-1 w-full px-6 py-8 space-y-6">

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3 shadow-sm">
            {error}
          </div>
        )}

        {/* STAT CARDS */}
        <StatCards routines={items} />

        {/* SIDEBAR + CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-[360px_minmax(0,1fr)] gap-8 items-start">

          {/* SIDEBAR */}
          <aside
            className="
              lg:sticky lg:top-6
              bg-white
              border border-blue-200
              rounded-2xl
              shadow-sm
            "
          >
            <Sidebar
              form={form}
              setForm={setForm}
              isEdit={isEdit}
              onSubmit={handleSubmit}
              onCancel={() => setForm(initialForm)}
              busy={busy}
            />
          </aside>

          {/* CONTENT */}
          <section
            className="
              bg-white
              border border-blue-200
              rounded-2xl
              shadow-sm
            "
          >
            <RoutineList
              items={filteredItems}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </section>

        </div>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bg-blue-100 border-t border-blue-200 shadow-inner">
        <div className="w-full px-6 py-4 text-xs text-slate-600">
          <span className="ml-1 font-mono text-slate-800">
            Design by : Annisa Ismidabilah, Cristofori Niko Fedrik Sagala, Muhammad Daffa ' Alfiannoor
          </span>
        </div>
      </footer>

    </div>
  );
}