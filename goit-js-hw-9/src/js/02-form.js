const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

// Yerel depodaki verileri yükleme
function loadFormData() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    form.elements.email.value = email || "";
    form.elements.message.value = message || "";
  }
}

// Form verilerini yerel depoya kaydetme
function saveFormData() {
  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// Form gönderildiğinde işlemler
function handleSubmit(event) {
  event.preventDefault();

  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };

  if (!formData.email || !formData.message) {
    alert("Both fields must be filled out!");
    return;
  }

  console.log("Form submitted:", formData);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}

// Olay dinleyicileri
form.addEventListener("input", saveFormData);
form.addEventListener("submit", handleSubmit);

// Sayfa yüklendiğinde yerel depodaki verileri doldurma
document.addEventListener("DOMContentLoaded", loadFormData);