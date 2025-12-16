const rentersTab = document.getElementById('rentersTab');
const ownersTab = document.getElementById('ownersTab');
const rentersContainer = document.getElementById('rentersContainer');
const ownersContainer = document.getElementById('ownersContainer');

const ACTIVE_RENTERS_BG_CLASS = 'bg-[rgba(7,26,84,1)]';
const ACTIVE_OWNERS_BG_CLASS = "bg-[rgba(251,188,4,1)]";
const ACTIVE_TEXT_CLASS = 'text-white';
const INACTIVE_TEXT_CLASS = "text-gray-700";

const ALL_ACTIVE_BG_CLASSES = [ACTIVE_RENTERS_BG_CLASS, ACTIVE_OWNERS_BG_CLASS];

function switchTab(activeTab, inactiveTab, activeContainer, inactiveContainer, activeBgClass) {

    inactiveTab.classList.remove(ACTIVE_TEXT_CLASS, ...ALL_ACTIVE_BG_CLASSES);
    inactiveTab.classList.add(INACTIVE_TEXT_CLASS);

    activeTab.classList.remove(INACTIVE_TEXT_CLASS);
    activeTab.classList.add(ACTIVE_TEXT_CLASS, activeBgClass);

    activeContainer.classList.remove('hidden');
    inactiveContainer.classList.add('hidden');
}

rentersTab.addEventListener('click', (e) => {
    e.preventDefault();
    switchTab(rentersTab, ownersTab, rentersContainer, ownersContainer, ACTIVE_RENTERS_BG_CLASS);
});

ownersTab.addEventListener('click', (e) => {
    e.preventDefault();
    switchTab(ownersTab, rentersTab, ownersContainer, rentersContainer, ACTIVE_OWNERS_BG_CLASS);
});
// Initialize with renters tab activ

switchTab(rentersTab, ownersTab, rentersContainer, ownersContainer, ACTIVE_RENTERS_BG_CLASS);


