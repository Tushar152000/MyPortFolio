import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"


export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];


export const info = {
    firstName: "Tushar",
    lastName: "Chauhan",
    initials: "js",
    position: "a Full Stack Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '🥛',
            text: 'fueled by Protein'
        },
        {
            emoji: '🇮🇳',
            text: 'based in the India'
        },
        {
            emoji: "💼",
            text: "Engineering Student "
        },
        {
            emoji: "📧",
            text: "chauhantushar538@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/tushar.chauhan.39982631",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com/__tushar_15_?igshid=YmMyMTA2M2Y=",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/Tushar152000",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/feed/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }


    ],
    bio: "Hello! I'm Tushar. I'm a Engineering Student I study Infomation Technology in Abes Engineering College Gzb, I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'NodeJs','C/C++'],
            exposedTo: ['Express', 'python','Mongodb','firebase']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'Weight Training',
            emoji: '🏋'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'Swimming',
            emoji: '🏊'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/Tushar152000/ModernRestaurant", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            source: "https://github.com/Tushar152000/whatgp-3",
            image: mock2
        },
        {
            title: "Project 3",
            source: "https://github.com/Tushar152000/Oasis-Info-Task-01",
            image: mock3
        },
       
    ]
}