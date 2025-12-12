<?php
require_once __DIR__ . "/config.php";

$method = $_SERVER["REQUEST_METHOD"];
$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);

// Jika pakai XAMPP dan folder bernama skincare_api,
// biasanya URL jadi: http://localhost/skincare_api/index.php
// Agar routing simpel, kita pakai parameter ?id=
// Contoh:
// GET    /skincare_api/index.php           -> list
// GET    /skincare_api/index.php?id=1      -> detail
// POST   /skincare_api/index.php           -> create
// PUT    /skincare_api/index.php?id=1      -> update
// DELETE /skincare_api/index.php?id=1      -> delete

$id = isset($_GET["id"]) ? intval($_GET["id"]) : null;

function readJsonBody() {
  $raw = file_get_contents("php://input");
  $data = json_decode($raw, true);
  return is_array($data) ? $data : [];
}

if ($method === "GET") {
  if ($id) {
    $stmt = $conn->prepare("SELECT * FROM routines WHERE id = ?");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $res = $stmt->get_result();
    $row = $res->fetch_assoc();

    if (!$row) {
      http_response_code(404);
      echo json_encode(["error" => "Not found"]);
      exit;
    }
    echo json_encode($row);
    exit;
  }

  $result = $conn->query("SELECT * FROM routines ORDER BY id DESC");
  $rows = [];
  while ($r = $result->fetch_assoc()) $rows[] = $r;
  echo json_encode($rows);
  exit;
}

if ($method === "POST") {
  $data = readJsonBody();
  $product_name = trim($data["product_name"] ?? "");
  $step = $data["step"] ?? "Other";
  $time_of_day = $data["time_of_day"] ?? "AM";
  $frequency = $data["frequency"] ?? "Daily";
  $notes = $data["notes"] ?? "";

  if ($product_name === "") {
    http_response_code(422);
    echo json_encode(["error" => "product_name wajib diisi"]);
    exit;
  }

  $stmt = $conn->prepare("INSERT INTO routines (product_name, step, time_of_day, frequency, notes) VALUES (?,?,?,?,?)");
  $stmt->bind_param("sssss", $product_name, $step, $time_of_day, $frequency, $notes);

  if (!$stmt->execute()) {
    http_response_code(500);
    echo json_encode(["error" => "Insert gagal"]);
    exit;
  }

  echo json_encode(["message" => "Created", "id" => $conn->insert_id]);
  exit;
}

if ($method === "PUT") {
  if (!$id) {
    http_response_code(400);
    echo json_encode(["error" => "id wajib"]);
    exit;
  }

  $data = readJsonBody();
  $product_name = trim($data["product_name"] ?? "");
  $step = $data["step"] ?? "Other";
  $time_of_day = $data["time_of_day"] ?? "AM";
  $frequency = $data["frequency"] ?? "Daily";
  $notes = $data["notes"] ?? "";

  if ($product_name === "") {
    http_response_code(422);
    echo json_encode(["error" => "product_name wajib diisi"]);
    exit;
  }

  $stmt = $conn->prepare("UPDATE routines SET product_name=?, step=?, time_of_day=?, frequency=?, notes=? WHERE id=?");
  $stmt->bind_param("sssssi", $product_name, $step, $time_of_day, $frequency, $notes, $id);

  if (!$stmt->execute()) {
    http_response_code(500);
    echo json_encode(["error" => "Update gagal"]);
    exit;
  }

  echo json_encode(["message" => "Updated"]);
  exit;
}

if ($method === "DELETE") {
  if (!$id) {
    http_response_code(400);
    echo json_encode(["error" => "id wajib"]);
    exit;
  }

  $stmt = $conn->prepare("DELETE FROM routines WHERE id=?");
  $stmt->bind_param("i", $id);

  if (!$stmt->execute()) {
    http_response_code(500);
    echo json_encode(["error" => "Delete gagal"]);
    exit;
  }

  echo json_encode(["message" => "Deleted"]);
  exit;
}

http_response_code(405);
echo json_encode(["error" => "Method not allowed"]);
