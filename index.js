let currentTab = "all";
const tabActive = ["bg-navy", "border-navy", "text-white"];
const tabInactive = [
  "bg-transparent",
  "text-slate-700",
  "border-state-200",
  "text-black",
];
const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectContainer = document.getElementById("reject-container");

function switchTab(tab) {
  const tabs = ["all", "interview", "rejected"];

  for (const t of tabs) {
    const tabName = document.getElementById("tab-" + t);
    if (t === tab) {
      tabName.classList.remove(...tabInactive);
      tabName.classList.add(...tabActive);
    } else {
      tabName.classList.remove(...tabActive);
      tabName.classList.add(...tabInactive);
    }
  }
  const pages = [allContainer, interviewContainer, rejectContainer];
  for (const page of pages) {
    page.classList.add("hidden");
    if (tab === "all") {
      allContainer.classList.remove("hidden");
    } else if (tab === "interview") {
      interviewContainer.classList.remove("hidden");
    } else if (tab === "rejected") {
      rejectContainer.classList.remove("hidden");
    }
  }
}
const totalStat = document.getElementById("stat-total");
const interviewStat = document.getElementById("stat-interview");
const rejectedStat = document.getElementById("stat-rejected");

switchTab(currentTab);

document
  .getElementById("jobs-container")
  .addEventListener("click", function (event) {
    const clickedElement = event.target;
    const card = clickedElement.closest(".card");
    const parent = card.parentNode;
    const status = card.querySelector(".status");
    if (clickedElement.classList.contains("interview")) {
      status.textContent = "Interviewed";
      interviewContainer.appendChild(card);
      updateStat();
    } else if (clickedElement.classList.contains("reject")) {
      status.textContent = "Rejected";
      rejectContainer.appendChild(card);
      updateStat();
    } else if (clickedElement.classList.contains("delete")) {
      parent.removeChild(card);
      updateStat();
    }
  });

function updateStat() {
  totalStat.innerText = allContainer.children.length;
  interviewStat.innerText = interviewContainer.children.length;
  rejectedStat.innerText = rejectContainer.children.length;
}
updateStat();
