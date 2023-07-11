import { Injectable } from '@angular/core';
import { Users } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
private usersList: Users[] = [
  {
    userId: 1,
    username: "kgori0",
    email: "aomrod0@amazon.co.uk",
    creationDate: "22.11.2010",
    isActive: true
  },
  {
    userId: 2,
    username: "fbensley1",
    email: "rgloucester1@nyu.edu",
    creationDate: "23.11.2015",
    isActive: false
  },
  {
    userId: 3,
    username: "aaristide2",
    email: "mmongain2@kickstarter.com",
    creationDate: "26.02.2016",
    isActive: true
  },
  {
    userId: 4,
    username: "soshiels3",
    email: "nkiltie3@va.gov",
    creationDate: "12.03.2016",
    isActive: true
  },
  {
    userId: 5,
    username: "tappleford4",
    email: "uantoniewicz4@cnbc.com",
    creationDate: "22.10.2015",
    isActive: true
  },
  {
    userId: 6,
    username: "ogadeaux5",
    email: "sfound5@cbc.ca",
    creationDate: "4.09.2017",
    isActive: true
  },
  {
    userId: 7,
    username: "dmichel6",
    email: "hearl6@bizjournals.com",
    creationDate: "1.01.2016",
    isActive: false
  },
  {
    userId: 8,
    username: "kcuerda7",
    email: "ameek7@sakura.ne.jp",
    creationDate: "16.03.2016",
    isActive: false
  },
  {
    userId: 9,
    username: "hstanding8",
    email: "isimunek8@g.co",
    creationDate: "26.11.2015",
    isActive: true
  },
  {
    userId: 10,
    username: "amenham9",
    email: "ljarvie9@guardian.co.uk",
    creationDate: "27.09.2016",
    isActive: false
  },
  {
    userId: 11,
    username: "gmouncha",
    email: "bleninga@mac.com",
    creationDate: "5.08.2015",
    isActive: true
  },
  {
    userId: 12,
    username: "vscholteb",
    email: "bgyfordb@jalbum.net",
    creationDate: "2.03.2014",
    isActive: false
  },
  {
    userId: 13,
    username: "mwilberc",
    email: "fborehamc@zdnet.com",
    creationDate: "19.09.2016",
    isActive: true
  },
  {
    userId: 14,
    username: "thodjettsd",
    email: "wthoresbyd@sbwire.com",
    creationDate: "4.05.2010",
    isActive: false
  },
  {
    userId: 15,
    username: "tguilayne",
    email: "jbahiae@epa.gov",
    creationDate: "24.04.2012",
    isActive: false
  },
  {
    userId: 16,
    username: "ebowshiref",
    email: "nrickerseyf@ucla.edu",
    creationDate: "14.05.2015",
    isActive: true
  },
  {
    userId: 17,
    username: "blawlang",
    email: "anorthgravesg@woothemes.com",
    creationDate: "13.08.2011",
    isActive: true
  },
  {
    userId: 18,
    username: "rguillardh",
    email: "vchiversh@51.la",
    creationDate: "3.02.2013",
    isActive: true
  },
  {
    userId: 19,
    username: "ilamanbyi",
    email: "rpothergilli@nymag.com",
    creationDate: "17.06.2014",
    isActive: true
  },
  {
    userId: 20,
    username: "jinchleyj",
    email: "tretterj@hatena.ne.jp",
    creationDate: "16.04.2015",
    isActive: true
  }
]


setUsersList() {
  if(!localStorage.getItem('usersList'))
    localStorage.setItem('userlist', JSON.stringify(this.usersList));
  else {
    this.usersList = JSON.parse(String(localStorage.getItem(String(this.usersList))))
  }
};

getUsersList(): Users[] {
  if(localStorage.getItem('userList') !== null)
    this.usersList = JSON.parse(localStorage.getItem('userList') || '{}');
  else {
    this.setUsersList();
  }
  return this.usersList;
}

}
  

