
let myJobs = [
    { id: 101, name: "Mobile First Corp", role: "React Native Developer", info: "Remote • Full-time • $130k", status: "all", details: "Build cross-platform apps using React Native for global users." },
    { id: 102, name: "WebFlow Agency", role: "Web Designer", info: "LA • Part-time • $80k", status: "all", details: "Create stunning web experiences for high-profile clients." },
    { id: 103, name: "DataViz Solutions", role: "Data Specialist", info: "Boston • Full-time • $120k", status: "all", details: "Transform complex data into compelling visualizations." },
    { id: 104, name: "CloudFirst Inc", role: "Backend Developer", info: "Seattle • Full-time • $140k", status: "all", details: "Design and maintain scalable backend systems using AWS." },
    { id: 105, name: "Innovation Labs", role: "UI/UX Engineer", info: "Austin • Full-time • $110k", status: "all", details: "Create beautiful user interfaces for our products." },
    { id: 106, name: "MegaCorp Solutions", role: "JS Developer", info: "NY • Full-time • $130k", status: "all", details: "Build enterprise applications with JavaScript." },
    { id: 107, name: "StartUpXYZ", role: "Full Stack Engineer", info: "Remote • Full-time • $120k", status: "all", details: "Join our fast-growing startup team." },
    { id: 108, name: "TechCorp Industries", role: "Senior Frontend", info: "SF • Full-time • $150k", status: "all", details: "Lead our frontend team using React and TS." }
];

let activeTab = "all";


function showJobs() {
    const container = document.getElementById('main-container');
    const noData = document.getElementById('no-data');
    
  
    let list = [];
    if (activeTab === "all") {
        list = myJobs;
    } else {
        list = myJobs.filter(item => item.status === activeTab);
    }

    
    container.innerHTML = "";

    if (list.length === 0) {
        noData.classList.remove('hidden');
    } else {
        noData.classList.add('hidden');
        list.forEach(function(job) {
            const div = document.createElement('div');
            div.className = "bg-white p-6 rounded border relative shadow-sm";
            div.innerHTML = `
                <button onclick="removeJob(${job.id})" class="absolute top-4 right-4 text-gray-300 hover:text-red-500">
                    <i class="fa-solid fa-trash"></i>
                </button>
                <h3 class="text-lg font-bold">${job.name}</h3>
                <p class="text-blue-600 text-sm font-semibold">${job.role}</p>
                <p class="text-xs text-gray-400 my-2">${job.info}</p>
                <p class="text-sm text-gray-600 mb-4">${job.details}</p>
                <div class="flex gap-2">
                    <button onclick="setStatus(${job.id}, 'interview')" class="btn btn-xs ${job.status === 'interview' ? 'bg-emerald-500 text-white' : 'btn-outline btn-success'}">Interview</button>
                    <button onclick="setStatus(${job.id}, 'rejected')" class="btn btn-xs ${job.status === 'rejected' ? 'bg-red-500 text-white' : 'btn-outline btn-error'}">Rejected</button>
                </div>
            `;
            container.appendChild(div);
        });
    }
    updateDashboard();
}


function setStatus(id, newStatus) {
    for (let i = 0; i < myJobs.length; i++) {
        if (myJobs[i].id === id) {
            if (myJobs[i].status === newStatus) {
                myJobs[i].status = "all";
            } else {
                myJobs[i].status = newStatus;
            }
        }
    }
    showJobs();
}


function showOnly(tabName) {
    activeTab = tabName;
    
    document.getElementById('btn-all').className = "btn btn-sm " + (tabName === 'all' ? 'bg-blue-600 text-white' : '');
    document.getElementById('btn-interview').className = "btn btn-sm " + (tabName === 'interview' ? 'bg-blue-600 text-white' : '');
    document.getElementById('btn-rejected').className = "btn btn-sm " + (tabName === 'rejected' ? 'bg-blue-600 text-white' : '');
    
    showJobs();
}


function removeJob(id) {
    myJobs = myJobs.filter(item => item.id !== id);
    showJobs();
}


function updateDashboard() {
    let intCount = myJobs.filter(j => j.status === 'interview').length;
    let rejCount = myJobs.filter(j => j.status === 'rejected').length;
    
    document.getElementById('total-jobs').innerText = myJobs.length;
    document.getElementById('top-count').innerText = myJobs.length + " jobs";
    document.getElementById('interview-count').innerText = intCount;
    document.getElementById('rejected-count').innerText = rejCount;
}


showJobs();








