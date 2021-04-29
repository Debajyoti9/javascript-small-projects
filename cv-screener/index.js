console.log('Welcome to cv-screener app');

let data = [{
        name: 'Debajyoti Shee',
        Age: '22',
        Exprience: 'Fresher',
        IndustryKnowledge: 'Web Devlopment',
        language: 'javascript',
        grade: '8.2',
        education: 'B.Tech',
        image: 'https://randomuser.me/api/portraits/thumb/men/88.jpg'
    },
    {
        name: 'Sunanda Samanta',
        Age: '23',
        Exprience: 'Fresher',
        IndustryKnowledge: 'Web Devlopment & App Devlopment',
        language: 'javascript,go,flutter,php',
        grade: '7.8',
        education: 'B.Tech',
        image: 'https://randomuser.me/api/portraits/thumb/men/42.jpg'
    },
    {
        name: 'Ayush Gupta',
        Age: '24',
        Exprience: 'Fresher',
        IndustryKnowledge: 'Machine Learning',
        language: 'python,c++',
        grade: '8.8',
        education: 'B.Tech',
        image: 'https://randomuser.me/api/portraits/thumb/men/58.jpg'
    },
    {
        name: 'Asish Singh',
        Age: '24',
        Exprience: 'Fresher',
        IndustryKnowledge: 'Web Devlopment & Software Devlopment',
        language: 'javascript,c++,python,java',
        grade: '9.6',
        education: 'B.Tech',
        image: 'https://randomuser.me/api/portraits/thumb/men/65.jpg'
    },
    {
        name: 'Bhaskar Biswas',
        Age: '23',
        Exprience: 'Fresher',
        IndustryKnowledge: 'Web Devlopment',
        language: 'javascript,css',
        grade: '7.5',
        education: 'B.Tech',
        image: 'https://randomuser.me/api/portraits/thumb/men/35.jpg'
    },
    {
        name: 'Harry Gurney',
        Age: '22',
        Exprience: 'Fresher',
        IndustryKnowledge: 'Web Devlopment & App-devlopment',
        language: 'javascript,php,django',
        grade: '9.1',
        education: 'B.Tech',
        image: 'https://randomuser.me/api/portraits/thumb/men/22.jpg'
    },
    {
        name: 'Diya Samanta',
        Age: '22',
        Exprience: 'Fresher',
        IndustryKnowledge: 'Web Scrapping',
        language: 'python',
        grade: '9.0',
        education: 'B.Tech',
        image: 'https://randomuser.me/api/portraits/thumb/women/25.jpg'
    },
    {
        name: 'maria sarapova',
        Age: '29',
        Exprience: '3 yr expreince',
        IndustryKnowledge: 'Web Devlopment',
        language: 'javascript',
        grade: '8.2',
        education: 'B.Tech',
        image: 'https://randomuser.me/api/portraits/thumb/women/20.jpg'
    },
    {
        name: 'Silpi Ghosal',
        Age: '22',
        Exprience: 'Fresher',
        IndustryKnowledge: 'Web Devlopment',
        language: 'java,c++',
        grade: '8.4',
        education: 'B.Tech',
        image: 'https://randomuser.me/api/portraits/thumb/women/29.jpg'
    },
    {
        name: 'Ruchi ramoni',
        Age: '26',
        Exprience: '2 yr expreience',
        IndustryKnowledge: 'Web Devlopment',
        language: 'javascript',
        grade: '8.8',
        education: 'B.Tech',
        image: 'https://randomuser.me/api/portraits/thumb/women/65.jpg'
    },

];


let candidateIterators = (profiles) => {
    let nextIndex = 0;
    console.log(profiles.length)
    return {
        next: function() {
            return nextIndex < profiles.length ? {
                values: profiles[nextIndex++],
                done: false
            } : {
                done: true
            }
        }
    };
};
let next = document.getElementById('next');
let candidates = candidateIterators(data);

const Nextprofile = () => {

    const currnetCandidate = candidates.next().values;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (currnetCandidate != undefined) {
        image.innerHTML = ` <img src="${currnetCandidate.image}" alt="">`

        profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item list-group-item-primary"><span class="badge bg-primary">Name Of Candidate:</span> ${currnetCandidate.name}</li>
    <li class="list-group-item list-group-item-secondary"><span class="badge bg-warning">Age of Candidate:</span> ${currnetCandidate.Age}</li>
    <li class="list-group-item list-group-item-success"><span class="badge bg-secondary">Exprience of Candidate:</span> ${currnetCandidate.Exprience}</li>
    <li class="list-group-item list-group-item-danger"><span class="badge bg-success">Candidate Industry Knowledge:</span> ${currnetCandidate.IndustryKnowledge}</li>
    <li class="list-group-item list-group-item-warning"><span class="badge bg-primary">Candidate coding language:</span> ${currnetCandidate.language}</li>
    <li class="list-group-item list-group-item-info"><span class="badge bg-secondary">Candidate Education Grade:</span> ${currnetCandidate.grade}</li>
    <li class="list-group-item list-group-item-dark"><span class="badge bg-warning">Candidate Higher Studies:</span> ${currnetCandidate.education}</li>
  </ul>`
    } else {
        alert('there are no more candidates left so thank you :)')
        window.location.reload()
    }
}
Nextprofile();
next.addEventListener('click', Nextprofile);
console.log(data);