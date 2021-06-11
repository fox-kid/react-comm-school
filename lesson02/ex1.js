const data = [
    {
        id: 1,
        firstname: "Molly",
        lastname: "Begbie",
        email: "mbegbie0@parallels.com",
        gender: "Non-binary",
        age: 74,
        job: "Tax Accountant",
    },
    {
        id: 2,
        firstname: "Mayer",
        lastname: "Kuhnke",
        email: "mkuhnke1@myspace.com",
        gender: "Agender",
        age: 39,
        job: "Legal Assistant",
    },
    {
        id: 3,
        firstname: "Susy",
        lastname: "Kyneton",
        email: "skyneton2@buzzfeed.com",
        gender: "Male",
        age: 36,
        job: "Director of Sales",
    },
    {
        id: 4,
        firstname: "Raquela",
        lastname: "Littlefield",
        email: "rlittlefield3@google.co.uk",
        gender: "Genderqueer",
        age: 69,
        job: "Business Systems Development Analyst",
    },
    {
        id: 5,
        firstname: "Robinetta",
        lastname: "Loughney",
        email: "rloughney4@typepad.com",
        gender: "Female",
        age: 40,
        job: "Financial Advisor",
    },
    {
        id: 6,
        firstname: "Orelle",
        lastname: "Domanski",
        email: "odomanski5@angelfire.com",
        gender: "Polygender",
        age: 32,
        job: "VP Accounting",
    },
    {
        id: 7,
        firstname: "Brandi",
        lastname: "Haliburton",
        email: "bhaliburton6@baidu.com",
        gender: "Bigender",
        age: 57,
        job: "Engineer IV",
    },
    {
        id: 8,
        firstname: "Ario",
        lastname: "Cormack",
        email: "acormack7@sfgate.com",
        gender: "Bigender",
        age: 43,
        job: "Speech Pathologist",
    },
    {
        id: 9,
        firstname: "Kirsti",
        lastname: "Kimmerling",
        email: "kkimmerling8@statcounter.com",
        gender: "Female",
        age: 27,
        job: "Design Engineer",
    },
    {
        id: 10,
        firstname: "Orton",
        lastname: "Renachowski",
        email: "orenachowski9@amazon.co.uk",
        gender: "Genderfluid",
        age: 55,
        job: "Technical Writer",
    },
    {
        id: 11,
        firstname: "Myca",
        lastname: "Blinkhorn",
        email: "mblinkhorna@geocities.jp",
        gender: "Bigender",
        age: 42,
        job: "Recruiter",
    },
    {
        id: 12,
        firstname: "Willdon",
        lastname: "Jennaway",
        email: "wjennawayb@wunderground.com",
        gender: "Non-binary",
        age: 35,
        job: "Design Engineer",
    },
    {
        id: 13,
        firstname: "Clarinda",
        lastname: "Cockley",
        email: "ccockleyc@plala.or.jp",
        gender: "Genderqueer",
        age: 72,
        job: "Design Engineer",
    },
    {
        id: 14,
        firstname: "Alister",
        lastname: "Grayham",
        email: "agrayhamd@technorati.com",
        gender: "Genderfluid",
        age: 24,
        job: "Speech Pathologist",
    },
    {
        id: 15,
        firstname: "Gloria",
        lastname: "Nell",
        email: "gnelle@parallels.com",
        gender: "Non-binary",
        age: 58,
        job: "Senior Cost Accountant",
    },
    {
        id: 16,
        firstname: "Lanette",
        lastname: "Jendas",
        email: "ljendasf@cdc.gov",
        gender: "Polygender",
        age: 49,
        job: "Quality Control Specialist",
    },
    {
        id: 17,
        firstname: "Emmalee",
        lastname: "McLenahan",
        email: "emclenahang@samsung.com",
        gender: "Female",
        age: 54,
        job: "Research Associate",
    },
    {
        id: 18,
        firstname: "Cory",
        lastname: "Mayhew",
        email: "cmayhewh@nyu.edu",
        gender: "Agender",
        age: 71,
        job: "VP Product Management",
    },
    {
        id: 19,
        firstname: "Neil",
        lastname: "Marchington",
        email: "nmarchingtoni@163.com",
        gender: "Female",
        age: 21,
        job: "Senior Cost Accountant",
    },
    {
        id: 20,
        firstname: "Sidney",
        lastname: "Wiltshire",
        email: "swiltshirej@timesonline.co.uk",
        gender: "Genderfluid",
        age: 52,
        job: "Tax Accountant",
    },
    {
        id: 21,
        firstname: "Kitti",
        lastname: "Syfax",
        email: "ksyfaxk@wunderground.com",
        gender: "Female",
        age: 61,
        job: "Internal Auditor",
    },
    {
        id: 22,
        firstname: "Anatole",
        lastname: "Goodfield",
        email: "agoodfieldl@desdev.cn",
        gender: "Genderqueer",
        age: 56,
        job: "Mechanical Systems Engineer",
    },
    {
        id: 23,
        firstname: "Kennith",
        lastname: "Winridge",
        email: "kwinridgem@nba.com",
        gender: "Female",
        age: 48,
        job: "Safety Technician III",
    },
    {
        id: 24,
        firstname: "Gard",
        lastname: "Klosa",
        email: "gklosan@amazon.co.uk",
        gender: "Agender",
        age: 56,
        job: "GIS Technical Architect",
    },
    {
        id: 25,
        firstname: "Bethanne",
        lastname: "Gyrgorcewicx",
        email: "bgyrgorcewicxo@addtoany.com",
        gender: "Agender",
        age: 53,
        job: "Teacher",
    },
    {
        id: 26,
        firstname: "Yancey",
        lastname: "Bilson",
        email: "ybilsonp@washingtonpost.com",
        gender: "Female",
        age: 22,
        job: "Financial Advisor",
    },
    {
        id: 27,
        firstname: "Gerrie",
        lastname: "Borgesio",
        email: "gborgesioq@uol.com.br",
        gender: "Polygender",
        age: 61,
        job: "Food Chemist",
    },
    {
        id: 28,
        firstname: "Corny",
        lastname: "Garnham",
        email: "cgarnhamr@ed.gov",
        gender: "Bigender",
        age: 79,
        job: "Assistant Professor",
    },
    {
        id: 29,
        firstname: "Hervey",
        lastname: "Hackwell",
        email: "hhackwells@jigsy.com",
        gender: "Bigender",
        age: 67,
        job: "Web Designer I",
    },
    {
        id: 30,
        firstname: "Carey",
        lastname: "Swindall",
        email: "cswindallt@comsenz.com",
        gender: "Female",
        age: 81,
        job: "Nuclear Power Engineer",
    },
];
  
// არ ვარ დარწმუნებული თუ ნამდვილად იყო საჭირო დამრგვალება და აღარ ვქენი, არ ვიცი
function averageAge(data) {
    return data.reduce((ageSum, item) => {
        return ageSum + item.age
    }, 0) / data.length;
}
 
// Filters an array to array consisting of only objects where age's >25, then returns only first names from left objects as an array
function moreThen25(data) {
    return data.filter(item => item.age > 25).map(a => a.firstname); 
}

// Filters an array with regexp test of emails ending with ".com", then returns only last names as an array
function emailCom(data) {
    let regex = /.com$/;
    return data.filter(item => regex.test(item.email)).map(a => a.lastname);
}

// Looks over array objects finding genders and counts male and female quantity 
// Freaked out because it'd return 1 and 8 and turns out there are other genders written too.
// არადა else-ის ნაცვლად if else-ის დაწერა თავიდანვე მაგის გათვალისწინებას ემსახურებოდა :დ
function genderCount(data) {
    return data.reduce((count, item) => {
        if (item.gender === "Male"){
            count.male += 1;
        } else if (item.gender === "Female"){
            count.female += 1;
        }
        return count;
    }, {male: 0, female: 0});
}

console.log(averageAge(data));
console.log(moreThen25(data));
console.log(emailCom(data));
console.log(genderCount(data));