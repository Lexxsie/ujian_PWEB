const API_BASE = "http://localhost/skincare_api/index.php";

async function handle(res) {
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(json?.error || "Request gagal");
  return json;
}

export async function getRoutines() {
  const res = await fetch(API_BASE);
  if (!res.ok) throw new Error("Gagal mengambil data");
  const json = await res.json();
  return Array.isArray(json) ? json : [];
}

export async function createRoutine(payload) {
  const res = await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return handle(res);
}

export async function updateRoutine(id, payload) {
  const res = await fetch(`${API_BASE}?id=${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return handle(res);
}

export async function deleteRoutine(id) {
  const res = await fetch(`${API_BASE}?id=${id}`, { method: "DELETE" });
  return handle(res);
}