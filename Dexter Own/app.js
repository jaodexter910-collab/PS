const loginForm = document.querySelector("#loginForm");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const errorElement = document.querySelector("#error");
const loginClock = document.querySelector("#loginClock");
const openLoginButton = document.querySelector("#openLoginButton");
const loginCard = document.querySelector("#loginCard");
const loginOverlay = document.querySelector("#loginOverlay");
const currentDate = document.querySelector("#currentDate");
const currentTime = document.querySelector("#currentTime");
const statusMessage = document.querySelector("#statusMessage");
const dailyQuote = document.querySelector("#dailyQuote");
const dailyQuoteAuthor = document.querySelector("#dailyQuoteAuthor");
const averageFlightsValue = document.querySelector("#averageFlightsValue");
const averageFlightsNote = document.querySelector("#averageFlightsNote");
const averageOutgoingFlightsValue = document.querySelector("#averageOutgoingFlightsValue");
const averageOutgoingFlightsNote = document.querySelector("#averageOutgoingFlightsNote");
const averagePassengersValue = document.querySelector("#averagePassengersValue");
const averagePassengersNote = document.querySelector("#averagePassengersNote");
const averageOutgoingPassengersValue = document.querySelector("#averageOutgoingPassengersValue");
const averageOutgoingPassengersNote = document.querySelector("#averageOutgoingPassengersNote");
const staffOnDutyName = document.querySelector("#staffOnDutyName");
const staffAttendanceTime = document.querySelector("#staffAttendanceTime");
const assignedTaskCount = document.querySelector("#assignedTaskCount");
const assignedTaskPreview = document.querySelector("#assignedTaskPreview");
const assignedTaskNote = document.querySelector("#assignedTaskNote");
const headDutyPanel = document.querySelector("#headDutyPanel");
const headDutyList = document.querySelector("#headDutyList");
const doneTaskCount = document.querySelector("#doneTaskCount");
const pendingTaskCount = document.querySelector("#pendingTaskCount");
const doneTaskPreview = document.querySelector("#doneTaskPreview");
const pendingTaskPreview = document.querySelector("#pendingTaskPreview");
const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");
const taskAssignee = document.querySelector("#taskAssignee");
const taskBoard = document.querySelector("#taskBoard");
const meetingForm = document.querySelector("#meetingForm");
const meetingTitle = document.querySelector("#meetingTitle");
const meetingDate = document.querySelector("#meetingDate");
const meetingTime = document.querySelector("#meetingTime");
const meetingPlace = document.querySelector("#meetingPlace");
const meetingBoard = document.querySelector("#meetingBoard");
const messengerToggle = document.querySelector("#messengerToggle");
const messengerUnreadCount = document.querySelector("#messengerUnreadCount");
const messengerPanel = document.querySelector("#messengerPanel");
const messengerClose = document.querySelector("#messengerClose");
const messengerThread = document.querySelector("#messengerThread");
const messengerForm = document.querySelector("#messengerForm");
const messengerRecipient = document.querySelector("#messengerRecipient");
const messengerInput = document.querySelector("#messengerInput");
const workspaceOverlay = document.querySelector("#workspaceOverlay");
const workspacePanel = document.querySelector("#workspacePanel");
const workspaceTitle = document.querySelector("#workspaceTitle");
const workspaceFrame = document.querySelector("#workspaceFrame");
const closeWorkspaceButton = document.querySelector("#closeWorkspaceButton");
const workspaceButtons = document.querySelectorAll("[data-workspace-url]");
const logoutButton = document.querySelector("#logoutButton");

const staffAccounts = [
  {
    username: "wendixter",
    password: "Wendixter123",
    name: "Wendixter Cutanda"
  },
  {
    username: "johnbenedict",
    password: "JohnBenedict123",
    name: "John Benedict Andaya"
  },
  {
    username: "chienna",
    password: "Chienna123",
    name: "Chienna Rell Langutan"
  },
  {
    username: "unfernie",
    password: "Unfernie123",
    name: "Unfernie Pulvera"
  },
  {
    username: "erica",
    password: "Erica123",
    name: "Erica Santillan"
  },
  {
    username: "jayoyao",
    password: "JayOyao123",
    name: "Jay A. Oyao"
  }
];

const rotatingStatuses = [
  "Systems normal",
  "Morning queues under control"
];

const inspirationalQuotes = [
  {
    quote: "You have to believe in yourself when no one else does.",
    author: "Serena Williams"
  },
  {
    quote: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "Keep smiling, because life is a beautiful thing.",
    author: "Marilyn Monroe"
  },
  {
    quote: "Be persistent and never give up hope.",
    author: "George Lucas"
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "Life has no limitations, except the ones you make.",
    author: "Les Brown"
  },
  {
    quote: "Be the change you wish to see in the world.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "May you live every day of your life.",
    author: "Jonathan Swift"
  }
];

const defaultTasks = [
  {
    id: "task-1",
    title: "Review passenger manifest endorsements",
    completed: false,
    assignedTo: "General Queue",
    createdBy: "System",
    updatedBy: "System"
  },
  {
    id: "task-2",
    title: "Finalize front desk daily summary",
    completed: true,
    assignedTo: "General Queue",
    createdBy: "System",
    updatedBy: "System"
  }
];

const meetingsStorageKey = "officePortalSirJayMeetings";
const defaultMeetings = [
  {
    id: "meeting-1",
    title: "Morning alignment",
    date: "2026-03-31",
    time: "09:00",
    place: "Admin, records, and operations teams"
  },
  {
    id: "meeting-2",
    title: "Leadership briefing",
    date: "2026-03-31",
    time: "10:00",
    place: "Conference Room A"
  },
  {
    id: "meeting-3",
    title: "IT maintenance window",
    date: "2026-03-31",
    time: "13:00",
    place: "Shared systems observation"
  },
  {
    id: "meeting-4",
    title: "Endorsement cutoff",
    date: "2026-03-31",
    time: "15:30",
    place: "Urgent release processing"
  }
];

const flightsEncodingSheetQueryUrl = "https://docs.google.com/spreadsheets/d/186Q3joyEyPqKRHXpS0q7rkOjCrqfzHjT19LKWyLZ_bQ/gviz/tq";
const flightsSummarySheetCsvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRlQcWVBhOijZfJBKpynW1fInjUtBDiYhNKKo7fdwkGFFw1hpN1n6n10oev3BNrttOgr1HOmgTlMN1g/pub?output=csv";
const averageFlightsCacheKey = "officePortalAverageFlightsWeekly";
const averageOutgoingFlightsCacheKey = "officePortalAverageOutgoingFlightsWeekly";
const averagePassengersCacheKey = "officePortalAveragePassengersWeekly";
const averageOutgoingPassengersCacheKey = "officePortalAverageOutgoingPassengersWeekly";
const attendanceLogKey = "officePortalAttendanceLog";
const messengerStorageKey = "officePortalMessengerMessages";
const messengerReadKey = "officePortalMessengerLastReadAt";
const messengerPositionKey = "officePortalMessengerPosition";
const messengerLastNotifiedKey = "officePortalMessengerLastNotifiedAt";
const headOfPassengerServiceName = "Jay A. Oyao";
let messengerAudioContext = null;
const sessionAccessKey = "officePortalAccess";
const sessionStaffNameKey = "officePortalStaffName";
const sessionAttendanceTimeKey = "officePortalAttendanceTime";

function getSessionItem(key) {
  return sessionStorage.getItem(key);
}

function setSessionItem(key, value) {
  sessionStorage.setItem(key, value);
}

function removeSessionItem(key) {
  sessionStorage.removeItem(key);
}
const fallbackWeeklyFlights = {
  weekKey: "2026-03-23_2026-03-29",
  value: "30",
  note: "Based on Flights Summary data from 2026-03-23 to 2026-03-29."
};
const fallbackWeeklyOutgoingFlights = {
  weekKey: "2026-03-23_2026-03-29",
  value: "30",
  note: "Based on Flights Summary data from 2026-03-23 to 2026-03-29."
};
const fallbackWeeklyPassengers = {
  weekKey: "2026-03-23_2026-03-29",
  value: "4,931",
  note: "Based on Flights Summary data from 2026-03-23 to 2026-03-29."
};
const fallbackWeeklyOutgoingPassengers = {
  weekKey: "2026-03-23_2026-03-29",
  value: "5,533",
  note: "Based on Flights Summary data from 2026-03-23 to 2026-03-29."
};

function formatTime() {
  return new Intl.DateTimeFormat("en-PH", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Manila"
  }).format(new Date());
}

function updateLoginClock() {
  if (loginClock) {
    loginClock.textContent = formatTime();
  }
}

function updateDashboardClock() {
  const now = new Date();

  if (currentDate) {
    currentDate.textContent = new Intl.DateTimeFormat("en-PH", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      timeZone: "Asia/Manila"
    }).format(now);
  }

  if (currentTime) {
    currentTime.textContent = new Intl.DateTimeFormat("en-PH", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "Asia/Manila"
    }).format(now);
  }
}

function rotateStatus() {
  if (!statusMessage) {
    return;
  }

  const index = Math.floor(Date.now() / 8000) % rotatingStatuses.length;
  statusMessage.textContent = rotatingStatuses[index];
}

function updateDailyQuote() {
  if (!dailyQuote || !dailyQuoteAuthor) {
    return;
  }

  const now = new Date();
  const manilaDate = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Manila",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(now);

  const daySeed = Number(manilaDate.replaceAll("-", ""));
  const selectedQuote = inspirationalQuotes[daySeed % inspirationalQuotes.length];

  dailyQuote.textContent = selectedQuote.quote;
  dailyQuoteAuthor.textContent = selectedQuote.author;
}

function getManilaNow() {
  return new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Manila" }));
}

function formatIsoDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function addDays(date, days) {
  const copy = new Date(date);
  copy.setDate(copy.getDate() + days);
  return copy;
}

function getWeeklyFlightsWindow() {
  const manilaNow = getManilaNow();
  const currentDay = manilaNow.getDay();
  const daysSinceMonday = (currentDay + 6) % 7;
  const thisMonday = new Date(manilaNow);
  thisMonday.setHours(0, 0, 0, 0);
  thisMonday.setDate(manilaNow.getDate() - daysSinceMonday);

  const releaseTime = new Date(thisMonday);
  releaseTime.setHours(6, 30, 0, 0);

  const lastWeekMonday = addDays(thisMonday, -7);
  const lastWeekSunday = addDays(thisMonday, -1);

  return {
    manilaNow,
    releaseTime,
    startDate: formatIsoDate(lastWeekMonday),
    endDate: formatIsoDate(lastWeekSunday),
    weekKey: `${formatIsoDate(lastWeekMonday)}_${formatIsoDate(lastWeekSunday)}`
  };
}

function parseSheetDate(value) {
  if (!value) {
    return null;
  }

  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }

  if (typeof value === "string") {
    const normalized = value.trim();
    const parsed = new Date(normalized);

    if (!Number.isNaN(parsed.getTime())) {
      return parsed.toISOString().slice(0, 10);
    }

    const slashMatch = normalized.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2,4})$/);
    if (slashMatch) {
      const [, month, day, year] = slashMatch;
      const fullYear = year.length === 2 ? `20${year}` : year;
      return `${fullYear.padStart(4, "0")}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }
  }

  return null;
}

function extractCellValue(cell) {
  if (!cell) {
    return null;
  }

  return cell.v ?? cell.f ?? null;
}

function parseCsvRow(row) {
  const values = [];
  let current = "";
  let insideQuotes = false;

  for (let index = 0; index < row.length; index += 1) {
    const character = row[index];
    const nextCharacter = row[index + 1];

    if (character === '"' && insideQuotes && nextCharacter === '"') {
      current += '"';
      index += 1;
      continue;
    }

    if (character === '"') {
      insideQuotes = !insideQuotes;
      continue;
    }

    if (character === "," && !insideQuotes) {
      values.push(current.trim());
      current = "";
      continue;
    }

    current += character;
  }

  values.push(current.trim());
  return values;
}

function updateAverageFlightsDisplay(value, note) {
  if (!averageFlightsValue || !averageFlightsNote) {
    return;
  }

  averageFlightsValue.textContent = value;
  averageFlightsNote.textContent = note;
}

function updateAverageOutgoingFlightsDisplay(value, note) {
  if (!averageOutgoingFlightsValue || !averageOutgoingFlightsNote) {
    return;
  }

  averageOutgoingFlightsValue.textContent = value;
  averageOutgoingFlightsNote.textContent = note;
}

function updateAveragePassengersDisplay(value, note) {
  if (!averagePassengersValue || !averagePassengersNote) {
    return;
  }

  averagePassengersValue.textContent = value;
  averagePassengersNote.textContent = note;
}

function updateAverageOutgoingPassengersDisplay(value, note) {
  if (!averageOutgoingPassengersValue || !averageOutgoingPassengersNote) {
    return;
  }

  averageOutgoingPassengersValue.textContent = value;
  averageOutgoingPassengersNote.textContent = note;
}

function normalizeWholeNumber(value, useGrouping = false) {
  const numericValue = Number(String(value ?? "").replace(/,/g, ""));

  if (!Number.isFinite(numericValue)) {
    return String(value ?? "--");
  }

  const roundedValue = Math.round(numericValue);
  return useGrouping ? new Intl.NumberFormat("en-PH").format(roundedValue) : String(roundedValue);
}

function loadAveragePassengersCache() {
  try {
    const cache = JSON.parse(localStorage.getItem(averagePassengersCacheKey) || "null");
    if (cache?.value) {
      cache.value = normalizeWholeNumber(cache.value, true);
    }
    return cache;
  } catch {
    return null;
  }
}

function saveAveragePassengersCache(cache) {
  localStorage.setItem(averagePassengersCacheKey, JSON.stringify(cache));
}

function loadAverageOutgoingPassengersCache() {
  try {
    const cache = JSON.parse(localStorage.getItem(averageOutgoingPassengersCacheKey) || "null");
    if (cache?.value) {
      cache.value = normalizeWholeNumber(cache.value, true);
    }
    return cache;
  } catch {
    return null;
  }
}

function saveAverageOutgoingPassengersCache(cache) {
  localStorage.setItem(averageOutgoingPassengersCacheKey, JSON.stringify(cache));
}

function loadAverageOutgoingFlightsCache() {
  try {
    const cache = JSON.parse(localStorage.getItem(averageOutgoingFlightsCacheKey) || "null");
    if (cache?.value) {
      cache.value = normalizeWholeNumber(cache.value);
    }
    return cache;
  } catch {
    return null;
  }
}

function saveAverageOutgoingFlightsCache(cache) {
  localStorage.setItem(averageOutgoingFlightsCacheKey, JSON.stringify(cache));
}

function calculateAverageFlightsFromSummaryCsv(rows, windowRange) {
  const groupedByDate = new Map();
  const headers = rows[0] ?? [];
  const dateColumnIndex = headers.findIndex((header) => /date\s*of\s*arrival/i.test(String(header).toLowerCase()));
  const flightArrivalColumnIndex = headers.findIndex((header) => /flight\s*arrivals|flight\s*arrivalls/i.test(String(header).toLowerCase()));

  if (dateColumnIndex === -1 || flightArrivalColumnIndex === -1) {
    return null;
  }

  rows.slice(1).forEach((row) => {
    const possibleDate = parseSheetDate(row[dateColumnIndex]);

    if (!possibleDate || possibleDate < windowRange.startDate || possibleDate > windowRange.endDate) {
      return;
    }

    const cellValue = row[flightArrivalColumnIndex];
    const numericFlightTotal = Number(String(cellValue ?? "").replace(/,/g, ""));

    if (numericFlightTotal > 0) {
      groupedByDate.set(possibleDate, (groupedByDate.get(possibleDate) ?? 0) + numericFlightTotal);
    }
  });

  if (!groupedByDate.size) {
    return null;
  }

  const totalFlights = Array.from(groupedByDate.values()).reduce((sum, count) => sum + count, 0);
  return String(Math.round(totalFlights / groupedByDate.size));
}

function calculateAveragePassengersFromSummaryCsv(rows, windowRange) {
  const groupedByDate = new Map();
  const headers = rows[0] ?? [];
  const dateColumnIndex = headers.findIndex((header) => /date\s*of\s*arrival/i.test(String(header).toLowerCase()));
  const passengerColumnIndex = headers.findIndex((header) => /total\s*arriving\s*travelers/i.test(String(header).toLowerCase()));

  if (dateColumnIndex === -1 || passengerColumnIndex === -1) {
    return null;
  }

  rows.slice(1).forEach((row) => {
    const possibleDate = parseSheetDate(row[dateColumnIndex]);

    if (!possibleDate || possibleDate < windowRange.startDate || possibleDate > windowRange.endDate) {
      return;
    }

    const cellValue = row[passengerColumnIndex];
    const numericPassengerTotal = Number(String(cellValue ?? "").replace(/,/g, ""));

    if (numericPassengerTotal > 0) {
      groupedByDate.set(possibleDate, (groupedByDate.get(possibleDate) ?? 0) + numericPassengerTotal);
    }
  });

  if (!groupedByDate.size) {
    return null;
  }

  const totalPassengers = Array.from(groupedByDate.values()).reduce((sum, count) => sum + count, 0);
  return new Intl.NumberFormat("en-PH").format(Math.round(totalPassengers / groupedByDate.size));
}

function calculateAverageOutgoingFlightsFromSummaryCsv(rows, windowRange) {
  const groupedByDate = new Map();
  const headers = rows[0] ?? [];
  const dateColumnIndex = headers.findIndex((header) => /date\s*of\s*arrival/i.test(String(header).toLowerCase()));
  const departuresColumnIndex = headers.findIndex((header) => /flight\s*departures/i.test(String(header).toLowerCase()));

  if (dateColumnIndex === -1 || departuresColumnIndex === -1) {
    return null;
  }

  rows.slice(1).forEach((row) => {
    const possibleDate = parseSheetDate(row[dateColumnIndex]);

    if (!possibleDate || possibleDate < windowRange.startDate || possibleDate > windowRange.endDate) {
      return;
    }

    const cellValue = row[departuresColumnIndex];
    const numericDepartureTotal = Number(String(cellValue ?? "").replace(/,/g, ""));

    if (numericDepartureTotal > 0) {
      groupedByDate.set(possibleDate, (groupedByDate.get(possibleDate) ?? 0) + numericDepartureTotal);
    }
  });

  if (!groupedByDate.size) {
    return null;
  }

  const totalOutgoingFlights = Array.from(groupedByDate.values()).reduce((sum, count) => sum + count, 0);
  return String(Math.round(totalOutgoingFlights / groupedByDate.size));
}

function calculateAverageOutgoingPassengersFromSummaryCsv(rows, windowRange) {
  const groupedByDate = new Map();
  const headers = rows[0] ?? [];
  const dateColumnIndex = headers.findIndex((header) => /date\s*of\s*arrival/i.test(String(header).toLowerCase()));
  const outgoingPassengersColumnIndex = headers.findIndex((header) => /total\s*departing\s*travelers/i.test(String(header).toLowerCase()));

  if (dateColumnIndex === -1 || outgoingPassengersColumnIndex === -1) {
    return null;
  }

  rows.slice(1).forEach((row) => {
    const possibleDate = parseSheetDate(row[dateColumnIndex]);

    if (!possibleDate || possibleDate < windowRange.startDate || possibleDate > windowRange.endDate) {
      return;
    }

    const cellValue = row[outgoingPassengersColumnIndex];
    const numericOutgoingPassengersTotal = Number(String(cellValue ?? "").replace(/,/g, ""));

    if (numericOutgoingPassengersTotal > 0) {
      groupedByDate.set(possibleDate, (groupedByDate.get(possibleDate) ?? 0) + numericOutgoingPassengersTotal);
    }
  });

  if (!groupedByDate.size) {
    return null;
  }

  const totalOutgoingPassengers = Array.from(groupedByDate.values()).reduce((sum, count) => sum + count, 0);
  return new Intl.NumberFormat("en-PH").format(Math.round(totalOutgoingPassengers / groupedByDate.size));
}

function loadAverageFlightsCache() {
  try {
    const cache = JSON.parse(localStorage.getItem(averageFlightsCacheKey) || "null");
    if (cache?.value) {
      cache.value = normalizeWholeNumber(cache.value);
    }
    return cache;
  } catch {
    return null;
  }
}

function saveAverageFlightsCache(cache) {
  localStorage.setItem(averageFlightsCacheKey, JSON.stringify(cache));
}

function updateAverageFlights() {
  if (!averageFlightsValue || !averageFlightsNote) {
    return;
  }

  const windowRange = getWeeklyFlightsWindow();
  const cachedAverage = loadAverageFlightsCache();
  const cachedOutgoingFlights = loadAverageOutgoingFlightsCache();
  const cachedPassengers = loadAveragePassengersCache();
  const cachedOutgoingPassengers = loadAverageOutgoingPassengersCache();

  if (!cachedAverage && windowRange.weekKey === fallbackWeeklyFlights.weekKey) {
    saveAverageFlightsCache(fallbackWeeklyFlights);
  }

  if (!cachedOutgoingFlights && windowRange.weekKey === fallbackWeeklyOutgoingFlights.weekKey) {
    saveAverageOutgoingFlightsCache(fallbackWeeklyOutgoingFlights);
  }

  if (!cachedPassengers && windowRange.weekKey === fallbackWeeklyPassengers.weekKey) {
    saveAveragePassengersCache(fallbackWeeklyPassengers);
  }

  if (!cachedOutgoingPassengers && windowRange.weekKey === fallbackWeeklyOutgoingPassengers.weekKey) {
    saveAverageOutgoingPassengersCache(fallbackWeeklyOutgoingPassengers);
  }

  const resolvedCache = loadAverageFlightsCache();
  const resolvedOutgoingFlightsCache = loadAverageOutgoingFlightsCache();
  const resolvedPassengersCache = loadAveragePassengersCache();
  const resolvedOutgoingPassengersCache = loadAverageOutgoingPassengersCache();

  if (resolvedOutgoingFlightsCache && (windowRange.manilaNow < windowRange.releaseTime || resolvedOutgoingFlightsCache.weekKey === windowRange.weekKey)) {
    updateAverageOutgoingFlightsDisplay(
      resolvedOutgoingFlightsCache.value,
      `${resolvedOutgoingFlightsCache.note} Weekly refresh is scheduled every Monday at 6:30 AM Manila time.`
    );
  }

  if (resolvedPassengersCache && (windowRange.manilaNow < windowRange.releaseTime || resolvedPassengersCache.weekKey === windowRange.weekKey)) {
    updateAveragePassengersDisplay(
      resolvedPassengersCache.value,
      `${resolvedPassengersCache.note} Weekly refresh is scheduled every Monday at 6:30 AM Manila time.`
    );
  }

  if (resolvedOutgoingPassengersCache && (windowRange.manilaNow < windowRange.releaseTime || resolvedOutgoingPassengersCache.weekKey === windowRange.weekKey)) {
    updateAverageOutgoingPassengersDisplay(
      resolvedOutgoingPassengersCache.value,
      `${resolvedOutgoingPassengersCache.note} Weekly refresh is scheduled every Monday at 6:30 AM Manila time.`
    );
  }

  if (resolvedCache && (windowRange.manilaNow < windowRange.releaseTime || resolvedCache.weekKey === windowRange.weekKey)) {
    updateAverageFlightsDisplay(
      resolvedCache.value,
      `${resolvedCache.note} Weekly refresh is scheduled every Monday at 6:30 AM Manila time.`
    );
    return;
  }

  updateAverageFlightsDisplay("--", "Loading Flights Summary data...");

  if (!resolvedOutgoingFlightsCache || (windowRange.manilaNow >= windowRange.releaseTime && resolvedOutgoingFlightsCache.weekKey !== windowRange.weekKey)) {
    updateAverageOutgoingFlightsDisplay("--", "Loading Flights Summary data...");
  }

  if (!resolvedPassengersCache || (windowRange.manilaNow >= windowRange.releaseTime && resolvedPassengersCache.weekKey !== windowRange.weekKey)) {
    updateAveragePassengersDisplay("--", "Loading Flights Summary data...");
  }

  if (!resolvedOutgoingPassengersCache || (windowRange.manilaNow >= windowRange.releaseTime && resolvedOutgoingPassengersCache.weekKey !== windowRange.weekKey)) {
    updateAverageOutgoingPassengersDisplay("--", "Loading Flights Summary data...");
  }

  fetch(flightsSummarySheetCsvUrl)
    .then((response) => response.text())
    .then((text) => {
      const rows = text
        .split(/\r?\n/)
        .map((row) => row.trim())
        .filter(Boolean)
        .map(parseCsvRow);

      const average = calculateAverageFlightsFromSummaryCsv(rows, windowRange);
      const averageOutgoingFlights = calculateAverageOutgoingFlightsFromSummaryCsv(rows, windowRange);
      const averagePassengers = calculateAveragePassengersFromSummaryCsv(rows, windowRange);
      const averageOutgoingPassengers = calculateAverageOutgoingPassengersFromSummaryCsv(rows, windowRange);

      if (average) {
        const cache = {
          weekKey: windowRange.weekKey,
          value: average,
          note: `Based on Flights Summary data from ${windowRange.startDate} to ${windowRange.endDate}.`
        };
        saveAverageFlightsCache(cache);
        updateAverageFlightsDisplay(
          average,
          `${cache.note} Refreshes every Monday at 6:30 AM Manila time.`
        );
      } else {
        updateAverageFlightsDisplay("--", `No last-week flights data was found from ${windowRange.startDate} to ${windowRange.endDate}.`);
      }

      if (averageOutgoingFlights) {
        const outgoingFlightsCache = {
          weekKey: windowRange.weekKey,
          value: averageOutgoingFlights,
          note: `Based on Flights Summary data from ${windowRange.startDate} to ${windowRange.endDate}.`
        };
        saveAverageOutgoingFlightsCache(outgoingFlightsCache);
        updateAverageOutgoingFlightsDisplay(
          averageOutgoingFlights,
          `${outgoingFlightsCache.note} Refreshes every Monday at 6:30 AM Manila time.`
        );
      } else {
        updateAverageOutgoingFlightsDisplay("--", `No last-week outgoing flights data was found from ${windowRange.startDate} to ${windowRange.endDate}.`);
      }

      if (averagePassengers) {
        const passengerCache = {
          weekKey: windowRange.weekKey,
          value: averagePassengers,
          note: `Based on Flights Summary data from ${windowRange.startDate} to ${windowRange.endDate}.`
        };
        saveAveragePassengersCache(passengerCache);
        updateAveragePassengersDisplay(
          averagePassengers,
          `${passengerCache.note} Refreshes every Monday at 6:30 AM Manila time.`
        );
      } else {
        updateAveragePassengersDisplay("--", `No last-week passenger data was found from ${windowRange.startDate} to ${windowRange.endDate}.`);
      }

      if (averageOutgoingPassengers) {
        const outgoingPassengerCache = {
          weekKey: windowRange.weekKey,
          value: averageOutgoingPassengers,
          note: `Based on Flights Summary data from ${windowRange.startDate} to ${windowRange.endDate}.`
        };
        saveAverageOutgoingPassengersCache(outgoingPassengerCache);
        updateAverageOutgoingPassengersDisplay(
          averageOutgoingPassengers,
          `${outgoingPassengerCache.note} Refreshes every Monday at 6:30 AM Manila time.`
        );
      } else {
        updateAverageOutgoingPassengersDisplay("--", `No last-week outgoing passenger data was found from ${windowRange.startDate} to ${windowRange.endDate}.`);
      }
    })
    .catch(() => {
      updateAverageFlightsDisplay("--", "Could not read Flights Summary data from Google Sheets.");
      updateAverageOutgoingFlightsDisplay("--", "Could not read Flights Summary data from Google Sheets.");
      updateAveragePassengersDisplay("--", "Could not read Flights Summary data from Google Sheets.");
      updateAverageOutgoingPassengersDisplay("--", "Could not read Flights Summary data from Google Sheets.");
    });
}

function scheduleWeeklyFlightsRefresh() {
  const { manilaNow, releaseTime } = getWeeklyFlightsWindow();
  let nextRun = new Date(releaseTime);

  if (manilaNow >= releaseTime) {
    nextRun = addDays(releaseTime, 7);
  }

  const delay = nextRun.getTime() - manilaNow.getTime();

  window.setTimeout(() => {
    updateAverageFlights();
    window.setInterval(updateAverageFlights, 7 * 24 * 60 * 60 * 1000);
  }, delay);
}

function updateStaffOnDuty() {
  if (!staffOnDutyName || !staffAttendanceTime) {
    return;
  }

  const currentStaffName = getSessionItem(sessionStaffNameKey);
  const currentAttendanceTime = getSessionItem(sessionAttendanceTimeKey);
  staffOnDutyName.textContent = currentStaffName || "Name of staff will appear here";
  staffAttendanceTime.textContent = currentAttendanceTime || "Attendance timestamp will appear here";
}

function formatAttendanceTimestamp() {
  return new Intl.DateTimeFormat("en-PH", {
    timeZone: "Asia/Manila",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }).format(new Date());
}

function loadAttendanceLog() {
  try {
    const log = JSON.parse(localStorage.getItem(attendanceLogKey) || "[]");
    return Array.isArray(log) ? log : [];
  } catch {
    return [];
  }
}

function saveAttendanceLog(log) {
  localStorage.setItem(attendanceLogKey, JSON.stringify(log.slice(0, 20)));
}

function recordAttendanceLog(staffName, timestamp) {
  const log = loadAttendanceLog();
  log.unshift({
    staffName,
    timestamp
  });
  saveAttendanceLog(log);
}

function getCurrentStaffName() {
  return getSessionItem(sessionStaffNameKey) || "PS Staff";
}

function formatMessageTimestamp() {
  return new Intl.DateTimeFormat("en-PH", {
    timeZone: "Asia/Manila",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date());
}

function loadMessengerMessages() {
  try {
    const messages = JSON.parse(localStorage.getItem(messengerStorageKey) || "[]");
    return Array.isArray(messages) ? messages : [];
  } catch {
    return [];
  }
}

function saveMessengerMessages(messages) {
  localStorage.setItem(messengerStorageKey, JSON.stringify(messages.slice(-100)));
}

function ensureMessengerAudioReady() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;

  if (!AudioContextClass) {
    return null;
  }

  if (!messengerAudioContext) {
    messengerAudioContext = new AudioContextClass();
  }

  if (messengerAudioContext.state === "suspended") {
    messengerAudioContext.resume().catch(() => {});
  }

  return messengerAudioContext;
}

function playMessengerNotificationSound() {
  const audioContext = ensureMessengerAudioReady();

  if (!audioContext || audioContext.state !== "running") {
    return;
  }
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  const now = audioContext.currentTime;

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(880, now);
  oscillator.frequency.exponentialRampToValueAtTime(660, now + 0.18);

  gainNode.gain.setValueAtTime(0.0001, now);
  gainNode.gain.exponentialRampToValueAtTime(0.08, now + 0.02);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  oscillator.start(now);
  oscillator.stop(now + 0.24);
}

function notifyForNewMessengerMessages() {
  const currentStaffName = getCurrentStaffName();
  const messages = getVisibleMessengerMessages();
  const lastNotifiedAt = Number(getSessionItem(messengerLastNotifiedKey) || "0");
  const latestIncomingMessage = messages
    .filter((message) =>
      message.from !== currentStaffName &&
      (message.to === "All Staff" || message.to === currentStaffName)
    )
    .sort((first, second) => second.createdAt - first.createdAt)[0];

  if (!latestIncomingMessage) {
    return;
  }

  if (latestIncomingMessage.createdAt > lastNotifiedAt) {
    playMessengerNotificationSound();
    setSessionItem(messengerLastNotifiedKey, String(latestIncomingMessage.createdAt));
  }
}

function getVisibleMessengerMessages() {
  const currentStaffName = getCurrentStaffName();
  return loadMessengerMessages().filter((message) =>
    message.to === "All Staff" ||
    message.to === currentStaffName ||
    message.from === currentStaffName
  );
}

function renderMessenger() {
  if (!messengerThread || !messengerUnreadCount) {
    return;
  }

  const currentStaffName = getCurrentStaffName();
  const messages = getVisibleMessengerMessages();
  const lastReadAt = Number(getSessionItem(messengerReadKey) || "0");
  const unreadCount = messages.filter((message) =>
    message.from !== currentStaffName &&
    message.createdAt > lastReadAt &&
    (message.to === "All Staff" || message.to === currentStaffName)
  ).length;

  messengerUnreadCount.textContent = String(unreadCount);
  messengerUnreadCount.hidden = unreadCount === 0;

  messengerThread.innerHTML = messages.length
    ? messages.map((message) => `
      <article class="messenger-bubble ${message.from === currentStaffName ? "is-own" : ""}">
        <div class="messenger-bubble-top">
          <p class="messenger-meta">${message.from} to ${message.to}</p>
          <button type="button" class="btn messenger-delete-btn" data-delete-message-id="${message.id}">
            Delete
          </button>
        </div>
        <p class="messenger-text">${message.text}</p>
        <p class="messenger-time">${message.timestamp}</p>
      </article>
    `).join("")
    : '<p class="messenger-empty">No staff messages yet.</p>';

  messengerThread.querySelectorAll("[data-delete-message-id]").forEach((button) => {
    button.addEventListener("click", () => deleteMessengerMessage(button.dataset.deleteMessageId));
  });

  messengerThread.scrollTop = messengerThread.scrollHeight;
}

function applyMessengerPosition(position) {
  if (!messengerToggle || !position) {
    return;
  }

  messengerToggle.style.left = `${position.left}px`;
  messengerToggle.style.top = `${position.top}px`;
  messengerToggle.style.right = "auto";
  messengerToggle.style.bottom = "auto";
}

function loadMessengerPosition() {
  try {
    const position = JSON.parse(localStorage.getItem(messengerPositionKey) || "null");
    if (typeof position?.left === "number" && typeof position?.top === "number") {
      applyMessengerPosition(position);
    }
  } catch {
    localStorage.removeItem(messengerPositionKey);
  }
}

function saveMessengerPosition(position) {
  localStorage.setItem(messengerPositionKey, JSON.stringify(position));
}

function enableMessengerDrag() {
  if (!messengerToggle) {
    return;
  }

  let isDragging = false;
  let pointerOffsetX = 0;
  let pointerOffsetY = 0;
  let startLeft = 0;
  let startTop = 0;
  let moved = false;

  messengerToggle.addEventListener("pointerdown", (event) => {
    const rect = messengerToggle.getBoundingClientRect();
    isDragging = true;
    moved = false;
    pointerOffsetX = event.clientX - rect.left;
    pointerOffsetY = event.clientY - rect.top;
    startLeft = rect.left;
    startTop = rect.top;
    messengerToggle.style.cursor = "grabbing";
    messengerToggle.setPointerCapture(event.pointerId);
  });

  messengerToggle.addEventListener("pointermove", (event) => {
    if (!isDragging) {
      return;
    }

    const maxLeft = window.innerWidth - messengerToggle.offsetWidth;
    const maxTop = window.innerHeight - messengerToggle.offsetHeight;
    const nextLeft = Math.min(Math.max(0, event.clientX - pointerOffsetX), maxLeft);
    const nextTop = Math.min(Math.max(0, event.clientY - pointerOffsetY), maxTop);

    if (Math.abs(nextLeft - startLeft) > 4 || Math.abs(nextTop - startTop) > 4) {
      moved = true;
    }

    applyMessengerPosition({
      left: nextLeft,
      top: nextTop
    });
  });

  messengerToggle.addEventListener("pointerup", (event) => {
    if (!isDragging) {
      return;
    }

    isDragging = false;
    messengerToggle.style.cursor = "grab";
    messengerToggle.releasePointerCapture(event.pointerId);

    const rect = messengerToggle.getBoundingClientRect();
    saveMessengerPosition({
      left: rect.left,
      top: rect.top
    });

    if (moved) {
      messengerToggle.dataset.dragged = "true";
      window.setTimeout(() => {
        if (messengerToggle) {
          delete messengerToggle.dataset.dragged;
        }
      }, 0);
    }
  });
}

function openMessenger() {
  if (!messengerPanel) {
    return;
  }

  messengerPanel.classList.remove("messenger-panel-hidden");
  messengerPanel.classList.add("messenger-panel-visible");
  setSessionItem(messengerReadKey, String(Date.now()));
  renderMessenger();

  if (messengerInput) {
    messengerInput.focus();
  }
}

function closeMessenger() {
  if (!messengerPanel) {
    return;
  }

  messengerPanel.classList.remove("messenger-panel-visible");
  messengerPanel.classList.add("messenger-panel-hidden");
}

function handleMessengerSubmit(event) {
  event.preventDefault();

  if (!messengerRecipient || !messengerInput) {
    return;
  }

  const text = messengerInput.value.trim();
  const to = messengerRecipient.value;

  if (!text) {
    return;
  }

  const messages = loadMessengerMessages();
  messages.push({
    id: `message-${Date.now()}`,
    from: getCurrentStaffName(),
    to,
    text,
    timestamp: formatMessageTimestamp(),
    createdAt: Date.now()
  });
  saveMessengerMessages(messages);
  messengerInput.value = "";
  renderMessenger();
}

function deleteMessengerMessage(messageId) {
  const messages = loadMessengerMessages();
  const updatedMessages = messages.filter((message) => message.id !== messageId);
  saveMessengerMessages(updatedMessages);
  renderMessenger();
}

function loadMeetings() {
  const storedMeetings = localStorage.getItem(meetingsStorageKey);

  if (!storedMeetings) {
    localStorage.setItem(meetingsStorageKey, JSON.stringify(defaultMeetings));
    return [...defaultMeetings];
  }

  try {
    const meetings = JSON.parse(storedMeetings);
    return Array.isArray(meetings)
      ? meetings.map((meeting) => ({
          ...meeting,
          date: meeting.date || "",
          place: meeting.place || meeting.note || ""
        }))
      : [...defaultMeetings];
  } catch {
    localStorage.setItem(meetingsStorageKey, JSON.stringify(defaultMeetings));
    return [...defaultMeetings];
  }
}

function saveMeetings(meetings) {
  localStorage.setItem(meetingsStorageKey, JSON.stringify(meetings));
}

function renderMeetingBoard() {
  if (!meetingBoard) {
    return;
  }

  const meetings = loadMeetings();

  if (!meetings.length) {
    meetingBoard.innerHTML = '<p class="task-empty">No meetings added yet.</p>';
    return;
  }

  meetingBoard.innerHTML = meetings.map((meeting) => `
    <article class="schedule-item">
      <p class="schedule-time">${meeting.time}</p>
      <div>
        <p class="schedule-title">${meeting.title}</p>
        <p class="schedule-copy">${meeting.date || "No date set"}</p>
        <p class="schedule-copy">${meeting.place || "No place set"}</p>
      </div>
      <button type="button" class="btn task-delete-btn meeting-delete-btn" data-delete-meeting-id="${meeting.id}">
        Delete
      </button>
    </article>
  `).join("");

  meetingBoard.querySelectorAll("[data-delete-meeting-id]").forEach((button) => {
    button.addEventListener("click", () => deleteMeeting(button.dataset.deleteMeetingId));
  });
}

function deleteMeeting(meetingId) {
  const meetings = loadMeetings();
  const updatedMeetings = meetings.filter((meeting) => meeting.id !== meetingId);
  saveMeetings(updatedMeetings);
  renderMeetingBoard();
}

function handleMeetingSubmit(event) {
  event.preventDefault();

  if (!meetingTitle || !meetingDate || !meetingTime || !meetingPlace) {
    return;
  }

  const title = meetingTitle.value.trim();
  const date = meetingDate.value.trim();
  const time = meetingTime.value.trim();
  const place = meetingPlace.value.trim();

  if (!title || !date || !time || !place) {
    return;
  }

  const meetings = loadMeetings();
  meetings.push({
    id: `meeting-${Date.now()}`,
    title,
    date,
    time,
    place
  });

  saveMeetings(meetings);
  meetingTitle.value = "";
  meetingDate.value = "";
  meetingTime.value = "";
  meetingPlace.value = "";
  renderMeetingBoard();
}

function renderHeadDutyLog() {
  if (!headDutyPanel || !headDutyList) {
    return;
  }

  const currentStaffName = getCurrentStaffName();

  if (currentStaffName !== headOfPassengerServiceName) {
    headDutyPanel.hidden = true;
    return;
  }

  const attendanceLog = loadAttendanceLog();
  headDutyPanel.hidden = false;

  headDutyList.innerHTML = attendanceLog.length
    ? attendanceLog.map((entry) => `
      <article class="attendance-item">
        <p class="attendance-name">${entry.staffName}</p>
        <p class="attendance-time">${entry.timestamp}</p>
      </article>
    `).join("")
    : '<p class="task-empty">No staff login records yet.</p>';
}

function loadTasks() {
  const storedTasks = localStorage.getItem("officePortalTasks");

  if (!storedTasks) {
    localStorage.setItem("officePortalTasks", JSON.stringify(defaultTasks));
    return [...defaultTasks];
  }

  try {
    return JSON.parse(storedTasks).map((task) => ({
      ...task,
      assignedTo: task.assignedTo || "General Queue",
      createdBy: task.createdBy || task.updatedBy || "System"
    }));
  } catch {
    localStorage.setItem("officePortalTasks", JSON.stringify(defaultTasks));
    return [...defaultTasks];
  }
}

function saveTasks(tasks) {
  localStorage.setItem("officePortalTasks", JSON.stringify(tasks));
}

function renderTaskPreviews(tasks) {
  if (!doneTaskPreview || !pendingTaskPreview || !doneTaskCount || !pendingTaskCount) {
    return;
  }

  const currentStaffName = getCurrentStaffName();
  const doneTasks = tasks.filter((task) => task.completed);
  const pendingTasks = tasks.filter((task) => !task.completed);
  const assignedTasks = tasks.filter((task) => !task.completed && task.assignedTo === currentStaffName);

  doneTaskCount.textContent = String(doneTasks.length);
  pendingTaskCount.textContent = String(pendingTasks.length);

  doneTaskPreview.innerHTML = doneTasks.length
    ? doneTasks.slice(0, 2).map((task) => `
      <div class="task-preview-item">
        <p class="task-preview-title">${task.title}</p>
        <p class="task-preview-meta">Assigned to ${task.assignedTo}</p>
        <p class="task-preview-meta">Done by ${task.updatedBy}</p>
      </div>
    `).join("")
    : '<p class="task-preview-item">No completed tasks yet.</p>';

  pendingTaskPreview.innerHTML = pendingTasks.length
    ? pendingTasks.slice(0, 2).map((task) => `
      <div class="task-preview-item">
        <p class="task-preview-title">${task.title}</p>
        <p class="task-preview-meta">Assigned to ${task.assignedTo}</p>
      </div>
    `).join("")
    : '<p class="task-preview-item">No pending tasks right now.</p>';

  if (assignedTaskCount && assignedTaskPreview && assignedTaskNote) {
    assignedTaskCount.textContent = String(assignedTasks.length);
    assignedTaskPreview.innerHTML = assignedTasks.length
      ? assignedTasks.slice(0, 3).map((task) => `
        <div class="task-preview-item">
          <p class="task-preview-title">${task.title}</p>
          <p class="task-preview-meta">Created by ${task.createdBy}</p>
        </div>
      `).join("")
      : '<p class="task-preview-item">No assigned tasks for you right now.</p>';

    assignedTaskNote.textContent = assignedTasks.length
      ? "These pending tasks are assigned to the logged-in staff."
      : "No pending tasks are currently assigned to the logged-in staff.";
  }
}

function renderTaskBoard() {
  if (!taskBoard) {
    return;
  }

  const tasks = loadTasks();
  renderTaskPreviews(tasks);

  if (!tasks.length) {
    taskBoard.innerHTML = '<p class="task-empty">No tasks added yet.</p>';
    return;
  }

  taskBoard.innerHTML = tasks.map((task) => `
    <article class="task-row ${task.completed ? "is-complete" : ""}">
      <div class="task-row-copy">
        <p class="task-row-title">${task.title}</p>
        <p class="task-row-meta">Assigned to ${task.assignedTo}</p>
        <p class="task-row-meta">Created by ${task.createdBy}</p>
      </div>
      <span class="task-state-badge ${task.completed ? "done" : "pending"}">
        ${task.completed ? "Done" : "Pending"}
      </span>
      <button type="button" class="btn task-toggle-btn" data-task-id="${task.id}">
        ${task.completed ? "Mark Pending" : "Mark Done"}
      </button>
      <button type="button" class="btn task-delete-btn" data-delete-task-id="${task.id}">
        Delete
      </button>
    </article>
  `).join("");

  taskBoard.querySelectorAll("[data-task-id]").forEach((button) => {
    button.addEventListener("click", () => toggleTask(button.dataset.taskId));
  });

  taskBoard.querySelectorAll("[data-delete-task-id]").forEach((button) => {
    button.addEventListener("click", () => deleteTask(button.dataset.deleteTaskId));
  });
}

function toggleTask(taskId) {
  const tasks = loadTasks();
  const updatedTasks = tasks.map((task) =>
    task.id === taskId
      ? {
          ...task,
          completed: !task.completed,
          updatedBy: getCurrentStaffName()
        }
      : task
  );

  saveTasks(updatedTasks);
  renderTaskBoard();
}

function deleteTask(taskId) {
  const tasks = loadTasks();
  const updatedTasks = tasks.filter((task) => task.id !== taskId);
  saveTasks(updatedTasks);
  renderTaskBoard();
}

function handleTaskSubmit(event) {
  event.preventDefault();

  if (!taskInput || !taskAssignee) {
    return;
  }

  const title = taskInput.value.trim();
  const assignedTo = taskAssignee.value;

  if (!title) {
    return;
  }

  const tasks = loadTasks();
  tasks.unshift({
    id: `task-${Date.now()}`,
    title,
    completed: false,
    assignedTo,
    createdBy: getCurrentStaffName(),
    updatedBy: getCurrentStaffName()
  });

  saveTasks(tasks);
  taskInput.value = "";
  taskAssignee.value = "General Queue";
  renderTaskBoard();
}

function isLoggedIn() {
  return getSessionItem(sessionAccessKey) === "granted";
}

function guardDashboard() {
  if (window.location.pathname.endsWith("dashboard.html") && !isLoggedIn()) {
    window.location.href = "index.html";
  }

  if ((window.location.pathname.endsWith("index.html") || window.location.pathname === "/" || window.location.pathname === "") && isLoggedIn()) {
    window.location.href = "dashboard.html";
  }
}

function handleLogin(event) {
  event.preventDefault();

  if (!usernameInput || !passwordInput || !errorElement) {
    return;
  }

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  const matchedAccount = staffAccounts.find((account) =>
    account.username.toLowerCase() === username.toLowerCase() && account.password === password
  );

  if (matchedAccount) {
    const attendanceTimestamp = `Logged in: ${formatAttendanceTimestamp()}`;
    setSessionItem(sessionAccessKey, "granted");
    setSessionItem(sessionStaffNameKey, matchedAccount.name);
    setSessionItem(sessionAttendanceTimeKey, attendanceTimestamp);
    setSessionItem(messengerReadKey, String(Date.now()));
    setSessionItem(messengerLastNotifiedKey, "0");
    recordAttendanceLog(matchedAccount.name, attendanceTimestamp);
    window.location.href = "dashboard.html";
    return;
  }

  errorElement.textContent = "Invalid username or password.";
}

function handleLogout() {
  removeSessionItem(sessionAccessKey);
  removeSessionItem(sessionStaffNameKey);
  removeSessionItem(sessionAttendanceTimeKey);
  removeSessionItem(messengerReadKey);
  removeSessionItem(messengerLastNotifiedKey);
  window.location.href = "index.html";
}

function showLoginCard() {
  if (!loginCard || !loginOverlay) {
    return;
  }

  loginCard.classList.remove("login-card-hidden");
  loginCard.classList.add("login-card-visible");
  loginOverlay.classList.remove("login-overlay-hidden");
  loginOverlay.classList.add("login-overlay-visible");

  if (usernameInput) {
    usernameInput.focus();
  }
}

function hideLoginCard() {
  if (!loginCard || !loginOverlay) {
    return;
  }

  loginCard.classList.remove("login-card-visible");
  loginCard.classList.add("login-card-hidden");
  loginOverlay.classList.remove("login-overlay-visible");
  loginOverlay.classList.add("login-overlay-hidden");
}

function openWorkspace(button) {
  if (!workspaceOverlay || !workspacePanel || !workspaceFrame || !workspaceTitle) {
    return;
  }

  const title = button.dataset.workspaceTitle || "Workspace";
  const url = button.dataset.workspaceUrl || "";

  workspaceTitle.textContent = title;
  workspaceFrame.src = url;
  workspaceOverlay.classList.remove("workspace-overlay-hidden");
  workspaceOverlay.classList.add("workspace-overlay-visible");
  workspacePanel.classList.remove("workspace-panel-hidden");
  workspacePanel.classList.add("workspace-panel-visible");
  document.body.classList.add("workspace-open");
}

function closeWorkspace() {
  if (!workspaceOverlay || !workspacePanel || !workspaceFrame) {
    return;
  }

  workspaceOverlay.classList.remove("workspace-overlay-visible");
  workspaceOverlay.classList.add("workspace-overlay-hidden");
  workspacePanel.classList.remove("workspace-panel-visible");
  workspacePanel.classList.add("workspace-panel-hidden");
  workspaceFrame.src = "";
  document.body.classList.remove("workspace-open");
}

guardDashboard();
updateLoginClock();
updateDashboardClock();
rotateStatus();
updateDailyQuote();
updateAverageFlights();
updateStaffOnDuty();
renderTaskBoard();
renderMeetingBoard();
renderHeadDutyLog();
renderMessenger();
loadMessengerPosition();
enableMessengerDrag();
scheduleWeeklyFlightsRefresh();

if (loginForm) {
  loginForm.addEventListener("submit", handleLogin);
}

if (taskForm) {
  taskForm.addEventListener("submit", handleTaskSubmit);
}

if (meetingForm) {
  meetingForm.addEventListener("submit", handleMeetingSubmit);
}

if (messengerForm) {
  messengerForm.addEventListener("submit", handleMessengerSubmit);
}

if (openLoginButton) {
  openLoginButton.addEventListener("click", showLoginCard);
}

if (loginOverlay) {
  loginOverlay.addEventListener("click", hideLoginCard);
}

workspaceButtons.forEach((button) => {
  button.addEventListener("click", () => openWorkspace(button));
});

if (workspaceOverlay) {
  workspaceOverlay.addEventListener("click", closeWorkspace);
}

if (closeWorkspaceButton) {
  closeWorkspaceButton.addEventListener("click", closeWorkspace);
}

if (logoutButton) {
  logoutButton.addEventListener("click", handleLogout);
}

if (messengerToggle) {
  messengerToggle.addEventListener("click", () => {
    if (messengerToggle.dataset.dragged === "true") {
      return;
    }

    openMessenger();
  });
}

if (messengerClose) {
  messengerClose.addEventListener("click", closeMessenger);
}

setInterval(updateLoginClock, 1000);
setInterval(updateDashboardClock, 1000);
setInterval(rotateStatus, 8000);
["pointerdown", "keydown"].forEach((eventName) => {
  window.addEventListener(eventName, ensureMessengerAudioReady, { once: true });
});
window.addEventListener("storage", (event) => {
  if (event.key === messengerStorageKey) {
    renderMessenger();
    notifyForNewMessengerMessages();
    return;
  }

  renderMessenger();
});
