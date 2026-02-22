// শুরুতে কিছু ডামি ডাটা নিয়ে নিচ্ছি
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

// এই ফাংশনটি দিয়ে সব কার্ড শো করা হয়
function showJobs() {
    const container = document.getElementById('main-container');
    const noData = document.getElementById('no-data');
    
    // ফিল্টার করা ডাটা বের করি
    let list = [];
    if (activeTab === "all") {
        list = myJobs;
    } else {
        list = myJobs.filter(item => item.status === activeTab);
    }

    // কন্টেইনার খালি করি
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

// স্ট্যাটাস পরিবর্তন করার ফাংশন
function setStatus(id, newStatus) {
    for (let i = 0; i < myJobs.length; i++) {
        if (myJobs[i].id === id) {
            if (myJobs[i].status === newStatus) {
                myJobs[i].status = "all"; // Toggle back
            } else {
                myJobs[i].status = newStatus;
            }
        }
    }
    showJobs();
}

// ট্যাব পরিবর্তন
function showOnly(tabName) {
    activeTab = tabName;
    // বাটন কালার পরিবর্তন
    document.getElementById('btn-all').className = "btn btn-sm " + (tabName === 'all' ? 'bg-blue-600 text-white' : '');
    document.getElementById('btn-interview').className = "btn btn-sm " + (tabName === 'interview' ? 'bg-blue-600 text-white' : '');
    document.getElementById('btn-rejected').className = "btn btn-sm " + (tabName === 'rejected' ? 'bg-blue-600 text-white' : '');
    
    showJobs();
}

// ডিলিট ফাংশন
function removeJob(id) {
    myJobs = myJobs.filter(item => item.id !== id);
    showJobs();
}

// ড্যাশবোর্ড কাউন্ট আপডেট
function updateDashboard() {
    let intCount = myJobs.filter(j => j.status === 'interview').length;
    let rejCount = myJobs.filter(j => j.status === 'rejected').length;
    
    document.getElementById('total-jobs').innerText = myJobs.length;
    document.getElementById('top-count').innerText = myJobs.length + " jobs";
    document.getElementById('interview-count').innerText = intCount;
    document.getElementById('rejected-count').innerText = rejCount;
}

// প্রথমবার রান করার জন্য
showJobs();








// let jobs = [
//     { id: 1, company: "Mobile First Corp", pos: "React Native Developer", loc: "Remote", type: "Full-time", salary: "$130,000 - $175,000", status: "all", desc: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide." },
//     { id: 2, company: "WebFlow Agency", pos: "Web Designer & Developer", loc: "Los Angeles, CA", type: "Part-time", salary: "$80,000 - $100,000", status: "all", desc: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends." },
//     { id: 3, company: "DataViz Solutions", pos: "Data Visualization Specialist", loc: "Boston, MA", type: "Full-time", salary: "$125,000 - $155,000", status: "all", desc: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking." },
//     { id: 4, company: "CloudFirst Inc", pos: "Backend Developer", loc: "Seattle, WA", type: "Full-time", salary: "$140,000 - $190,000", status: "all", desc: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices." },
//     { id: 5, company: "Innovation Labs", pos: "UI/UX Engineer", loc: "Austin, TX", type: "Full-time", salary: "$110,000 - $150,000", status: "all", desc: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required." },
//     { id: 6, company: "MegaCorp Solutions", pos: "JavaScript Developer", loc: "New York, NY", type: "Full-time", salary: "$130,000 - $170,000", status: "all", desc: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation and health insurance." },
//     { id: 7, company: "StartUpXYZ", pos: "Full Stack Engineer", loc: "Remote", type: "Full-time", salary: "$120,000 - $160,000", status: "all", desc: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required." },
//     { id: 8, company: "TechCorp Industries", pos: "Senior Frontend Developer", loc: "San Francisco, CA", type: "Full-time", salary: "$150,000 - $175,000", status: "all", desc: "We are looking for an experienced Frontend Developer to lead scalable web applications using React and TypeScript." }
// ];

// let currentFilter = 'all';

// // Main Render Function
// function render() {
//     const container = document.getElementById('job-container');
//     const emptyState = document.getElementById('empty-state');
//     const filteredJobs = currentFilter === 'all' ? jobs : jobs.filter(j => j.status === currentFilter);
    
//     container.innerHTML = '';
    
//     if (filteredJobs.length === 0) {
//         emptyState.classList.remove('hidden');
//     } else {
//         emptyState.classList.add('hidden');
//         filteredJobs.forEach(job => {
//             const card = document.createElement('div');
//             card.className = "bg-white p-6 rounded-lg border border-slate-200 relative hover:shadow-md transition-all";
//             card.innerHTML = `
//                 <button onclick="deleteJob(${job.id})" class="absolute top-4 right-4 text-slate-300 hover:text-rose-500 transition-colors">
//                     <i class="fa-solid fa-trash-can"></i>
//                 </button>
//                 <div class="mb-2">
//                     <h4 class="text-lg font-bold text-slate-800">${job.company}</h4>
//                     <p class="text-sm font-semibold text-slate-500">${job.pos}</p>
//                 </div>
//                 <div class="text-xs text-slate-400 mb-2 font-medium">
//                     ${job.loc} • ${job.type} • ${job.salary}
//                 </div>
//                 <div class="mb-3">
//                     <span class="badge badge-sm rounded bg-slate-100 text-slate-500 border-none font-bold">NOT APPLIED</span>
//                 </div>
//                 <p class="text-sm text-slate-500 mb-6 leading-relaxed">${job.desc}</p>
//                 <div class="flex gap-3">
//                     <button onclick="updateStatus(${job.id}, 'interview')" class="btn btn-sm px-6 font-bold border-emerald-500 text-emerald-600 bg-transparent hover:bg-emerald-500 hover:text-white ${job.status === 'interview' ? 'bg-emerald-500 text-white' : ''}">INTERVIEW</button>
//                     <button onclick="updateStatus(${job.id}, 'rejected')" class="btn btn-sm px-6 font-bold border-rose-500 text-rose-600 bg-transparent hover:bg-rose-500 hover:text-white ${job.status === 'rejected' ? 'bg-rose-500 text-white' : ''}">REJECTED</button>
//                 </div>
//             `;
//             container.appendChild(card);
//         });
//     }
//     updateUIState();
// }

// // Functionality: Status Toggle
// function updateStatus(id, newStatus) {
//     const job = jobs.find(j => j.id === id);
//     // Toggle logic
//     job.status = (job.status === newStatus) ? 'all' : newStatus;
//     render();
// }

// // Functionality: Delete Card
// function deleteJob(id) {
//     jobs = jobs.filter(j => j.id !== id);
//     render();
// }

// // Functionality: Tab Switching
// function filterJobs(tab) {
//     currentFilter = tab;
    
//     // Update active tab UI
//     ['all', 'interview', 'rejected'].forEach(t => {
//         const btn = document.getElementById(`tab-${t}`);
//         if (t === tab) {
//             btn.classList.add('bg-blue-600', 'text-white', 'tab-active');
//         } else {
//             btn.classList.remove('bg-blue-600', 'text-white', 'tab-active');
//         }
//     });
    
//     render();
// }

// // Update Counters and Indicator
// function updateUIState() {
//     const count = currentFilter === 'all' ? jobs.length : jobs.filter(j => j.status === currentFilter).length;
//     document.getElementById('job-count-indicator').innerText = `${count} jobs`;
    
//     document.getElementById('total-count').innerText = jobs.length;
//     document.getElementById('interview-count').innerText = jobs.filter(j => j.status === 'interview').length;
//     document.getElementById('rejected-count').innerText = jobs.filter(j => j.status === 'rejected').length;
// }

// // Initial Rendering
// render();