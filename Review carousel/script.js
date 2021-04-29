console.log('Javascript added');

const reviews = [
    {
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ492AnNAAPJR3tuNh9iojWzyaVnyeQ3mApIw&usqp=CAU',
        name:'Jeff Bezzofs',
        profession:'Ceo Amazon',
        about:'Jeff Bezos is the worlds richest person, with a net worth of $190 billion, according to Bloombergs Billionaires Index. In August 2020, the Amazon CEO briefly became the first person in history to be worth $200 billion.'
    },
    {
        image:'https://img.etimg.com/thumb/msid-72141096,width-640,resizemode-4,imgsize-273004/animal-advocacy-efforts.jpg',
        name:'Virat Kholi',
        profession:'crickter',
        about:'Kohli has never been auctioned in the IPL Most runs in a single IPL season.The first cricketer to take a wicket off the 0th delivery in T20Is.First Indian batsman to score a century on World Cup debut.Kohli the wicketkeeper.Only cricketer to score 500+ runs in a bilateral ODI series.'
    },
    {
        image:'https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?size=626&ext=jpg',
        name:'Jenny Hayden',
        profession:'Senior Web Devloper',
        about:'Senior Web Developers design, build, and optimize websites and other online applications. They are familiar with programming languages and SEO best practices, and often work with a team of junior web developers. They may be employed by a company or work on a freelance basis.'
    },
    {
        image:'https://m.economictimes.com/thumb/msid-70119616,width-1200,height-900,resizemode-4,imgsize-160034/rohit-sharma-the-odi-cricket-phenomenon.jpg',
        name:'Rohit Sharma',
        profession:'crickter',
        about:'Rohit Gurunath Sharma is an Indian international cricketer who plays for Mumbai in domestic cricket and captains Mumbai Indians in the Indian Premier League as a right-handed batsman and an occasional right-arm off break bowler.'
    },
    {
        image:'https://i.tribune.com.pk/media/images/2145014-srkk-1580112319/2145014-srkk-1580112319.jpg',
        name:'Shahrukh Khan',
        profession:'Indian actor',
        about:'Shah Rukh Khan, also known by the initialism SRK, is an Indian actor, film producer, and television personality. Referred to in the media as the "Baadshah of Bollywood", "King of Bollywood" and "King Khan", he has appeared in more than 80 Hindi films, and earned numerous accolades'
    },
    {
        image:'https://static.toiimg.com/thumb/msid-74966811,imgsize-451153,width-800,height-600,resizemode-75/74966811.jpg',
        name:'Sunny Leone',
        profession:'Model and Actress',
        about:'Karenjit Kaur Vohra, known by her stage name Sunny Leone, is a model and an actress in the Indian film industry and a former pornographic actress. She has Canadian and American citizenship. She has also used the stage name Karen Malhotra.'
    },
    {
        image:'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/03/23/664072-arijit-singh.jpg',
        name:'Arijit Singh',
        profession:'Singer',
        about:'Arijit Singh is an Indian singer and music composer. He sings predominantly in Hindi and Bengali but has also performed in various other Indian languages. He is the recipient of a National Award and a record six Filmfare Awards.'
    },
];


const review__box__person__name = document.querySelector('.review__box__person__name');

const review__box__person__profession = document.querySelector('.review__box__person__profession');

const review__box__person__about = document.querySelector('.review__box__person__about');

const review__box__person__image = document.getElementById('review__box__person__image');

const review__right__cursoul__btn = document.querySelector('.review__right__cursoul__btn');

const review__left__cursoul__btn = document.querySelector('.review__left__cursoul__btn');

const review__item__change = document.querySelector('.review__item__change');

let currenItem = 0;
window.addEventListener('load',(e)=>{
      showPerson(currenItem);
})


const showPerson = (person)=>{
    const item = reviews[person];
    review__box__person__image.src = item.image;
    review__box__person__name.textContent = item.name;
    review__box__person__profession.textContent = item.profession;
    review__box__person__about.textContent = item.about;
}

review__right__cursoul__btn.addEventListener('click',()=>{
    currenItem++;
    if(currenItem > reviews.length-1)
    {
        currenItem = 0;
    }
    showPerson(currenItem);
})


review__left__cursoul__btn.addEventListener('click',()=>{
    currenItem--;
    if(currenItem < 0 )
    {
        currenItem = reviews.length -1;
    }
    showPerson(currenItem);
})


review__item__change.addEventListener('click',()=>{
    currenItem = Math.floor(Math.random() * reviews.length);
    showPerson(currenItem);
})