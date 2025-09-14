//for popup

const searchInput = document.getElementById("searchbar");
const popup = document.querySelector('.popup-cantainer');
const closeBtn = document.querySelector('.close');
//for scrolling

function scrollItemByid(id) {
    const valueforsearch = document.getElementById(id);
    {
        if (valueforsearch) {
            history.pushState(null, '', `#${id}`);

            valueforsearch.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        };
    };
};

// for searching
let timeout;

function searchFun() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        let searchInput = document.getElementById("searchbar").value.toLowerCase();

        switch (searchInput) {
            case "about":
            case "about me":
                scrollItemByid("about");
                break;
            case "home":
                scrollItemByid("home");
                break;
            case "hobbies":
                case "hobby":
                scrollItemByid("hobb");
                break;
            case "skills":
                case "skill":
                scrollItemByid("Skills");
                break;
            case "contact":
            case "contect":
                scrollItemByid("contact");
                break;
            case "project":
                case "projects":
                scrollItemByid("project");
                break;
            case "library":
            case "library website":
            case "website":
                scrollItemByid("library");
                break;
            case "sport scout":
            case "sport":
            case "sport website":
                scrollItemByid("sport-scout");
                break;
            case "textutile":
            case "textutile website":
                scrollItemByid("textutile");
                break;
            case "transaction app":
            case "transaction website":
            case "transaction":
                scrollItemByid("transaction-app");
                break;
            default:
                popup.classList.add('active');
                setTimeout(() => {
                    popup.classList.remove('active');
                }, 1000);
                break;
        }
    }, 300);
}


searchInput.addEventListener('keypress', (event) => {
    searchFun();
});

closeBtn.addEventListener('click', () => {
    popup.classList.remove('active');
});

// for hamburger
document.addEventListener(
    "DOMContentLoaded", function () {
        const hamburger = document.getElementById('hamburger');
        const navItems = document.querySelector('.nav-items');

        hamburger.addEventListener('click', () => {
            navItems.classList.toggle('active');
        });
    }
);

// for button view projects
document.getElementById('gotoProjects').addEventListener('click', function () {
    scrollItemByid("project");
});

//library website
document.getElementById('library').addEventListener('click', function () {
    window.location.href = "https://www.figma.com/proto/s7mqgWc56O5DbuRbaOiWLA/Untitled?node-id=0-1&t=aGDT4nlWMVIOC2wQ-1";
});

document.getElementById('sport-scout').addEventListener('click', function () {
    window.location.href = "https://sport-scout-rohitbairagi.vercel.app/";
});

document.getElementById('textutile').addEventListener('click', function () {
    window.location.href = "https://text-utile-tau.vercel.app/";
});

document.getElementById('transaction-app').addEventListener('click', function () {
    window.location.href = "https://transaction-app-ten.vercel.app/";
});
