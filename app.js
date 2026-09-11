/* ============================================================
   MPI EXAM — APPLICATION CONTROLLER
   BE05000551 | Microprocessor & Interfacing
   ============================================================ */


/* ============================================================
   01. APPLICATION STATE
   ============================================================ */

const state = {

    filter: "all",

    query: "",

    current: null,

    theme:
        localStorage.getItem("mpi-theme") || "light",

    completed:
        JSON.parse(
            localStorage.getItem("mpi-completed") || "[]"
        )

};


/* ============================================================
   02. DOM HELPERS
   ============================================================ */

const $ = selector =>
    document.querySelector(selector);


const $$ = selector =>
    [...document.querySelectorAll(selector)];


/* ============================================================
   03. HTML ESCAPING
   Used for dynamically inserted text.
   ============================================================ */

function escapeHTML(value) {

    return String(value).replace(
        /[&<>"']/g,

        character => ({

            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"

        })[character]
    );

}


/* ============================================================
   04. CHECK TOPIC DATA
   ============================================================ */

function getTopics() {

    if (
        typeof TOPICS === "undefined" ||
        !Array.isArray(TOPICS)
    ) {

        console.error(
            "TOPICS data was not loaded. Check topics.js."
        );

        return [];

    }

    return TOPICS;

}


/* ============================================================
   05. FILTER TOPICS
   ============================================================ */

function visibleTopics() {

    const topics = getTopics();

    const search =
        state.query
            .trim()
            .toLowerCase();


    return topics.filter(topic => {

        const priorityMatch =
            state.filter === "all" ||
            topic.priority === state.filter;


        const searchableText = (

            topic.title +
            " " +
            topic.unit +
            " " +
            topic.body

        )
            .replace(/<[^>]*>/g, " ")
            .toLowerCase();


        const searchMatch =
            !search ||
            searchableText.includes(search);


        return priorityMatch && searchMatch;

    });

}


/* ============================================================
   06. SIDEBAR NAVIGATION
   ============================================================ */

function renderSidebar() {

    const container = $("#sideNav");

    if (!container) return;


    const topics = getTopics();


    const units = [
        ...new Set(
            topics.map(topic => topic.unit)
        )
    ];


    container.innerHTML = units
        .map((unit, index) => {

            return `
                <a
                    href="#quick"
                    data-unit="${escapeHTML(unit)}"
                    title="View ${escapeHTML(unit)} topics"
                >

                    <span class="num">
                        ${String(index + 1).padStart(2, "0")}
                    </span>

                    <span>
                        ${escapeHTML(unit)}
                    </span>

                </a>
            `;

        })
        .join("");


    $$("#sideNav a").forEach(link => {

        link.addEventListener(
            "click",
            event => {

                event.preventDefault();

                const unit =
                    link.dataset.unit;

                state.query = "";

                $("#search").value = "";

                state.filter = "all";


                $$(".filter").forEach(button => {

                    button.classList.toggle(
                        "active",
                        button.dataset.filter === "all"
                    );

                });


                renderGrid();


                const firstTopic =
                    getTopics().find(
                        topic =>
                            topic.unit === unit
                    );


                if (firstTopic) {

                    openTopic(firstTopic.id);

                }


                closeMobileMenu();

            }
        );

    });

}


/* ============================================================
   07. UNIT MAP / REVISION DASHBOARD
   ============================================================ */

function renderUnitMap() {

    const container = $("#unitMap");

    if (!container) return;


    const topics = getTopics();


    const units = [
        ...new Set(
            topics.map(topic => topic.unit)
        )
    ];


    container.innerHTML =
        units
            .map(unit => {

                const unitTopics =
                    topics.filter(
                        topic =>
                            topic.unit === unit
                    );


                const total =
                    unitTopics.length;


                const completed =
                    unitTopics.filter(
                        topic =>
                            state.completed.includes(
                                topic.id
                            )
                    ).length;


                const percentage =
                    total
                        ? Math.round(
                            (completed / total) * 100
                        )
                        : 0;


                return `
                    <div class="unit-row">

                        <b>
                            ${escapeHTML(
                                unit.replace(
                                    "Unit ",
                                    "U"
                                )
                            )}
                        </b>

                        <div
                            class="bar"
                            aria-label="${completed} of ${total} completed"
                        >
                            <i
                                style="width:${percentage}%"
                            ></i>
                        </div>

                        <span>
                            ${completed}/${total}
                        </span>

                    </div>
                `;

            })
            .join("");

}


/* ============================================================
   08. TOPIC CARD
   ============================================================ */

function createTopicCard(topic) {

    const isCompleted =
        state.completed.includes(
            topic.id
        );


    const priorityClass =
        topic.priority === "Must Prepare"
            ? "must"
            : "high";


    const priorityLabel =
        topic.priority === "Must Prepare"
            ? "🔥 MUST PREPARE"
            : "⭐ HIGH PRIORITY";


    return `

        <article
            class="topic-card ${isCompleted ? "completed" : ""}"
            data-id="${topic.id}"
            tabindex="0"
            role="button"
            aria-label="Open topic ${topic.id}: ${escapeHTML(topic.title)}"
        >

            <div class="meta">

                <span class="unit-tag">
                    ${escapeHTML(topic.unit)}
                </span>

                <span
                    class="priority ${priorityClass}"
                >
                    ${priorityLabel}
                </span>

            </div>


            <h3>
                ${topic.id}.
                ${escapeHTML(topic.title)}
            </h3>


            <p>
                Full 8-mark answer
                • Simple exam language
            </p>


            ${
                isCompleted
                    ? `
                        <span
                            class="completed-label"
                            aria-label="Completed"
                        >
                            ✓ Done
                        </span>
                    `
                    : ""
            }


            <span
                class="topic-num"
                aria-hidden="true"
            >
                ${String(topic.id).padStart(2, "0")}
            </span>

        </article>

    `;

}


/* ============================================================
   09. RENDER TOPIC GRID
   ============================================================ */

function renderGrid() {

    const container =
        $("#topicGrid");

    const count =
        $("#resultCount");


    if (!container) return;


    const topics =
        visibleTopics();


    if (count) {

        count.textContent =
            `${topics.length} ${
                topics.length === 1
                    ? "topic"
                    : "topics"
            }`;

    }


    if (!topics.length) {

        container.innerHTML = `

            <div class="empty">

                <strong>
                    No matching topics
                </strong>

                <br>

                Try another keyword,
                unit or priority filter.

            </div>

        `;

        return;

    }


    container.innerHTML =
        topics
            .map(createTopicCard)
            .join("");


    $$(".topic-card").forEach(card => {

        card.addEventListener(
            "click",
            () => {

                openTopic(
                    Number(card.dataset.id)
                );

            }
        );


        card.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    openTopic(
                        Number(card.dataset.id)
                    );

                }

            }
        );

    });

}


/* ============================================================
   10. OPEN TOPIC
   ============================================================ */

function openTopic(
    id,
    scroll = true
) {

    const topics =
        getTopics();


    const topic =
        topics.find(
            item =>
                Number(item.id) === Number(id)
        );


    if (!topic) return;


    state.current =
        Number(topic.id);


    const currentIndex =
        topics.findIndex(
            item =>
                Number(item.id) ===
                Number(topic.id)
        );


    const previous =
        currentIndex > 0
            ? topics[currentIndex - 1]
            : null;


    const next =
        currentIndex < topics.length - 1
            ? topics[currentIndex + 1]
            : null;


    const completed =
        state.completed.includes(
            topic.id
        );


    const reader =
        $("#readerContent");


    if (!reader) return;


    reader.innerHTML = `

        <article
            class="answer"
            id="topic-${topic.id}"
        >


            <!-- =========================================
                 ANSWER HEADER
            ========================================== -->

            <header class="answer-head">

                <div class="eyebrow">

                    ${escapeHTML(topic.unit)}

                    • TOPIC

                    ${String(topic.id).padStart(2, "0")}

                </div>


                <h2>
                    ${escapeHTML(topic.title)}
                </h2>


                <div class="chips">

                    <span
                        class="chip ${
                            topic.priority === "Must Prepare"
                                ? "must"
                                : ""
                        }"
                    >

                        ${
                            topic.priority ===
                            "Must Prepare"

                                ? "🔥 MUST PREPARE"

                                : "⭐ HIGH PRIORITY"
                        }

                    </span>


                    <span class="chip">
                        8-MARK ANSWER
                    </span>


                    <span class="chip">
                        EXAM LEVEL • SIMPLE LANGUAGE
                    </span>


                    ${
                        completed
                            ? `
                                <span class="chip">
                                    ✓ COMPLETED
                                </span>
                            `
                            : ""
                    }

                </div>

            </header>



            <!-- =========================================
                 ANSWER CONTENT
            ========================================== -->

            <div class="answer-body">

                ${topic.body}


                <!-- =====================================
                     EXAM WRITING TIP
                ====================================== -->

                <div class="exam-box">

                    <strong>
                        ✍️ 8-Mark Writing Tip:
                    </strong>

                    <br>

                    Start with a clear definition or
                    introduction. Use proper subheadings,
                    explain the concept step-by-step,
                    include the relevant diagram,
                    table or 8085 program, and finish
                    with applications or a short
                    conclusion.

                </div>


                <!-- =====================================
                     COMPLETION CONTROL
                ====================================== -->

                <div class="completion-area">

                    <button
                        id="completeBtn"
                        class="secondary-btn"
                        type="button"
                    >

                        ${
                            completed
                                ? "✓ Marked as Completed"
                                : "✓ Mark Topic as Completed"
                        }

                    </button>

                </div>

            </div>



            <!-- =========================================
                 PREVIOUS / NEXT
            ========================================== -->

            <div class="reader-nav">

                <button
                    id="prev"
                    type="button"
                    ${
                        previous
                            ? ""
                            : "disabled"
                    }
                >

                    ←

                    ${
                        previous
                            ? escapeHTML(
                                previous.title
                            )
                            : "Previous"
                    }

                </button>


                <button
                    id="next"
                    type="button"
                    ${
                        next
                            ? ""
                            : "disabled"
                    }
                >

                    ${
                        next
                            ? escapeHTML(
                                next.title
                            )
                            : "Next"
                    }

                    →

                </button>

            </div>

        </article>

    `;


    const previousButton =
        $("#prev");


    const nextButton =
        $("#next");


    const completeButton =
        $("#completeBtn");


    if (previousButton && previous) {

        previousButton.onclick =
            () => openTopic(
                previous.id
            );

    }


    if (nextButton && next) {

        nextButton.onclick =
            () => openTopic(
                next.id
            );

    }


    if (completeButton) {

        completeButton.onclick =
            () => toggleCompleted(
                topic.id
            );

    }


    if (scroll) {

        $("#reader").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }


    updateURL(topic.id);

}


/* ============================================================
   11. MARK TOPIC COMPLETE
   ============================================================ */

function toggleCompleted(id) {

    const index =
        state.completed.indexOf(id);


    if (index === -1) {

        state.completed.push(id);

        showToast(
            "Topic marked as completed ✓"
        );

    } else {

        state.completed.splice(
            index,
            1
        );

        showToast(
            "Topic removed from completed list"
        );

    }


    localStorage.setItem(
        "mpi-completed",
        JSON.stringify(
            state.completed
        )
    );


    renderGrid();

    renderUnitMap();

    openTopic(
        id,
        false
    );

}


/* ============================================================
   12. RANDOM TOPIC
   ============================================================ */

function openRandomTopic() {

    const topics =
        visibleTopics();


    if (!topics.length) {

        showToast(
            "No topics available for this filter"
        );

        return;

    }


    const randomIndex =
        Math.floor(
            Math.random() *
            topics.length
        );


    openTopic(
        topics[randomIndex].id
    );

}


/* ============================================================
   13. SEARCH
   ============================================================ */

function setupSearch() {

    const search =
        $("#search");


    if (!search) return;


    search.addEventListener(
        "input",
        event => {

            state.query =
                event.target.value;

            renderGrid();

        }
    );

}


/* ============================================================
   14. FILTER BUTTONS
   ============================================================ */

function setupFilters() {

    $$(".filter").forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    $$(".filter").forEach(
                        item =>
                            item.classList.remove(
                                "active"
                            )
                    );


                    button.classList.add(
                        "active"
                    );


                    state.filter =
                        button.dataset.filter;


                    renderGrid();

                }
            );

        }
    );

}


/* ============================================================
   15. START MUST-PREPARE
   ============================================================ */

function setupStartButton() {

    const button =
        $("#startBtn");


    if (!button) return;


    button.addEventListener(
        "click",
        () => {

            state.filter =
                "Must Prepare";


            state.query = "";


            $("#search").value = "";


            $$(".filter").forEach(
                item => {

                    item.classList.toggle(
                        "active",
                        item.dataset.filter ===
                            "Must Prepare"
                    );

                }
            );


            renderGrid();


            $("#quick").scrollIntoView({
                behavior: "smooth",
                block: "start"
            });


            showToast(
                "Showing Must-Prepare topics 🔥"
            );

        }
    );

}


/* ============================================================
   16. RANDOM BUTTON
   ============================================================ */

function setupRandomButton() {

    const button =
        $("#randomBtn");


    if (!button) return;


    button.addEventListener(
        "click",
        openRandomTopic
    );

}


/* ============================================================
   17. DARK MODE
   ============================================================ */

function applyTheme() {

    document.documentElement
        .dataset.theme =
            state.theme;


    localStorage.setItem(
        "mpi-theme",
        state.theme
    );


    const button =
        $("#themeBtn");


    if (button) {

        button.textContent =
            state.theme === "dark"
                ? "☀"
                : "◐";


        button.setAttribute(
            "aria-label",
            state.theme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
        );

    }

}


function toggleTheme() {

    state.theme =
        state.theme === "dark"
            ? "light"
            : "dark";


    applyTheme();


    showToast(
        state.theme === "dark"
            ? "Dark mode enabled"
            : "Light mode enabled"
    );

}


function setupTheme() {

    const button =
        $("#themeBtn");


    if (!button) return;


    button.addEventListener(
        "click",
        toggleTheme
    );

}


/* ============================================================
   18. FOCUS MODE
   ============================================================ */

function toggleFocusMode() {

    const enabled =
        document.body.classList.toggle(
            "focus"
        );


    const button =
        $("#focusBtn");


    if (button) {

        button.textContent =
            enabled
                ? "Exit Focus"
                : "Focus";

    }


    showToast(
        enabled
            ? "Focus mode enabled"
            : "Focus mode disabled"
    );

}


function setupFocusMode() {

    const button =
        $("#focusBtn");


    if (!button) return;


    button.addEventListener(
        "click",
        toggleFocusMode
    );

}


/* ============================================================
   19. MOBILE MENU
   ============================================================ */

function toggleMobileMenu() {

    const sidebar =
        $("#sidebar");


    const button =
        $("#menuBtn");


    if (!sidebar) return;


    const opened =
        sidebar.classList.toggle(
            "open"
        );


    if (button) {

        button.setAttribute(
            "aria-expanded",
            String(opened)
        );

    }

}


function closeMobileMenu() {

    const sidebar =
        $("#sidebar");


    const button =
        $("#menuBtn");


    if (!sidebar) return;


    sidebar.classList.remove(
        "open"
    );


    if (button) {

        button.setAttribute(
            "aria-expanded",
            "false"
        );

    }

}


function setupMobileMenu() {

    const button =
        $("#menuBtn");


    if (!button) return;


    button.addEventListener(
        "click",
        toggleMobileMenu
    );

}


/* ============================================================
   20. KEYBOARD SHORTCUTS
   ============================================================ */

function setupKeyboardShortcuts() {

    document.addEventListener(
        "keydown",
        event => {

            const tag =
                document.activeElement
                    ?.tagName;


            const typing =
                tag === "INPUT" ||
                tag === "TEXTAREA" ||
                tag === "SELECT";


            /* Search */

            if (
                event.key === "/" &&
                !typing
            ) {

                event.preventDefault();

                $("#search")?.focus();

                return;

            }


            /* Escape */

            if (
                event.key === "Escape"
            ) {

                $("#search")?.blur();

                closeMobileMenu();

                return;

            }


            if (typing) return;


            /* Dark mode */

            if (
                event.key.toLowerCase() ===
                "d"
            ) {

                toggleTheme();

                return;

            }


            /* Focus */

            if (
                event.key.toLowerCase() ===
                "f"
            ) {

                toggleFocusMode();

                return;

            }


            /* Next topic */

            if (
                event.key.toLowerCase() ===
                "n"
            ) {

                navigateTopic(1);

                return;

            }


            /* Previous topic */

            if (
                event.key.toLowerCase() ===
                "p"
            ) {

                navigateTopic(-1);

                return;

            }

        }
    );

}


/* ============================================================
   21. TOPIC NAVIGATION
   ============================================================ */

function navigateTopic(direction) {

    const topics =
        getTopics();


    if (!topics.length) return;


    let currentIndex =
        topics.findIndex(
            topic =>
                Number(topic.id) ===
                Number(state.current)
        );


    if (currentIndex === -1) {

        currentIndex = 0;

    }


    const newIndex =
        currentIndex + direction;


    if (
        newIndex < 0 ||
        newIndex >= topics.length
    ) {

        return;

    }


    openTopic(
        topics[newIndex].id
    );

}


/* ============================================================
   22. URL STATE
   ============================================================ */

function updateURL(id) {

    try {

        const url =
            new URL(
                window.location.href
            );


        url.hash =
            `topic-${id}`;


        history.replaceState(
            null,
            "",
            url
        );

    } catch (error) {

        console.warn(
            "Unable to update URL:",
            error
        );

    }

}


function getTopicFromURL() {

    const hash =
        window.location.hash;


    if (
        !hash.startsWith(
            "#topic-"
        )
    ) {

        return null;

    }


    const id =
        Number(
            hash.replace(
                "#topic-",
                ""
            )
        );


    return Number.isFinite(id)
        ? id
        : null;

}


/* ============================================================
   23. READING PROGRESS
   ============================================================ */

function updateReadingProgress() {

    const progress =
        $("#progress");


    if (!progress) return;


    const documentHeight =
        document.documentElement
            .scrollHeight -
        window.innerHeight;


    if (documentHeight <= 0) {

        progress.style.width =
            "0%";

        return;

    }


    const percentage =
        (
            window.scrollY /
            documentHeight
        ) * 100;


    progress.style.width =
        `${Math.min(
            100,
            Math.max(
                0,
                percentage
            )
        )}%`;

}


/* ============================================================
   24. TOAST NOTIFICATIONS
   ============================================================ */

let toastTimer = null;


function showToast(message) {

    const toast =
        $("#toast");


    if (!toast) return;


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            1800
        );

}


/* ============================================================
   25. CLOSE SIDEBAR ON OUTSIDE CLICK
   ============================================================ */

function setupOutsideClick() {

    document.addEventListener(
        "click",
        event => {

            const sidebar =
                $("#sidebar");


            const menu =
                $("#menuBtn");


            if (
                !sidebar ||
                !sidebar.classList.contains(
                    "open"
                )
            ) {

                return;

            }


            if (
                sidebar.contains(
                    event.target
                ) ||
                menu?.contains(
                    event.target
                )
            ) {

                return;

            }


            closeMobileMenu();

        }
    );

}


/* ============================================================
   26. WINDOW RESIZE
   ============================================================ */

function setupResize() {

    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth >
                900
            ) {

                closeMobileMenu();

            }

        }
    );

}


/* ============================================================
   27. INITIAL TOPIC
   ============================================================ */

function openInitialTopic() {

    const urlTopic =
        getTopicFromURL();


    const topics =
        getTopics();


    if (!topics.length) {

        console.warn(
            "No MPI topics available."
        );

        return;

    }


    const validURLTopic =
        urlTopic &&
        topics.some(
            topic =>
                Number(topic.id) ===
                Number(urlTopic)
        );


    if (validURLTopic) {

        openTopic(
            urlTopic,
            false
        );

    } else {

        openTopic(
            topics[0].id,
            false
        );

    }

}


/* ============================================================
   28. HASH CHANGE
   ============================================================ */

function setupHashNavigation() {

    window.addEventListener(
        "hashchange",
        () => {

            const id =
                getTopicFromURL();


            if (id) {

                openTopic(
                    id,
                    false
                );

            }

        }
    );

}


/* ============================================================
   29. APPLICATION INITIALIZATION
   ============================================================ */

function init() {

    console.log(
        "MPI EXAM application initializing..."
    );


    /* Data validation */

    const topics =
        getTopics();


    if (!topics.length) {

        console.error(
            "MPI EXAM: topics.js contains no topics."
        );

    }


    /* UI */

    renderSidebar();

    renderUnitMap();

    renderGrid();


    /* Controls */

    setupSearch();

    setupFilters();

    setupStartButton();

    setupRandomButton();

    setupTheme();

    setupFocusMode();

    setupMobileMenu();


    /* Keyboard / navigation */

    setupKeyboardShortcuts();

    setupOutsideClick();

    setupResize();

    setupHashNavigation();


    /* Progress */

    window.addEventListener(
        "scroll",
        updateReadingProgress,
        {
            passive: true
        }
    );


    /* Theme */

    applyTheme();


    /* Initial reader */

    openInitialTopic();


    /* Initial progress */

    updateReadingProgress();


    console.log(
        `MPI EXAM loaded successfully: ${topics.length} topics`
    );

}


/* ============================================================
   30. START APPLICATION
   ============================================================ */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        init
    );

} else {

    init();

}