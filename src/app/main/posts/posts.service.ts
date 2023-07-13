import { Posts } from "src/app/interfaces";
import { Injectable } from "@angular/core";
import { CreateService } from "src/app/create/create.service";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
private postsList: Posts[] = [
  {
    postId: 1,
    userId: 10,
    categoryId: 4,
    title: "Final Fantasy VII Remake",
    content: "Relive the epic adventure of Cloud Strife and his allies in the reimagined -Final Fantasy VII Remake.- Engage in strategic combat, explore the city of Midgar, and unravel a captivating story.",
    viewCount: 7209,
    creationDate: "15.10.2021",
    isPublished: false
  },
  {
    postId: 2,
    userId: 17,
    categoryId: 3,
    title: "The Shawshank Redemption",
    content: "Experience the powerful tale of hope and friendship in -The Shawshank Redemption.- Follow Andy Dufresne as he navigates life in prison and seeks redemption in this critically acclaimed movie.",
    viewCount: 9987,
    creationDate: "5.02.2021",
    isPublished: false
  },
  {
    postId: 3,
    userId: 7,
    categoryId: 3,
    title: "The Godfather",
    content: "Immerse yourself in the world of organized crime with -The Godfather.- Witness the Corleone familys rise to power and the complex dynamics of loyalty and betrayal in this iconic film.",
    viewCount: 219,
    creationDate: "24.04.2017",
    isPublished: false
  },
  {
    postId: 4,
    userId: 20,
    categoryId: 5,
    title: "The Great Gatsby",
    content: "Experience the glamour and tragedy of the Jazz Age in F. Scott Fitzgeralds masterpiece, -The Great Gatsby.- Follow Jay Gatsbys pursuit of the American Dream in this iconic novel.",
    viewCount: 4566,
    creationDate: "8.04.2020",
    isPublished: true
  },
  {
    postId: 5,
    userId: 1,
    categoryId: 1,
    title: "The Power of Music",
    content: "Discover the transformative power of music and its ability to evoke emotions, bring people together, and inspire creativity.",
    viewCount: 9350,
    creationDate: "1.05.2018",
    isPublished: true
  },
  {
    postId: 6,
    userId: 14,
    categoryId: 4,
    title: "Overwatch",
    content: "Join the team-based shooter phenomenon in -Overwatch.- Select from a diverse cast of heroes, work together with your team, and compete in intense multiplayer matches in this fast-paced game.",
    viewCount: 5395,
    creationDate: "8.03.2019",
    isPublished: false
  },
  {
    postId: 7,
    userId: 13,
    categoryId: 5,
    title: "Pride and Prejudice",
    content: "Delve into Jane Austens timeless classic, -Pride and Prejudice,- a story of love, societal expectations, and personal growth. Join Elizabeth Bennet on her journey to find true happiness.",
    viewCount: 1487,
    creationDate: "25.04.2019",
    isPublished: true
  },
  {
    postId: 8,
    userId: 17,
    categoryId: 2,
    title: "Mona Lisa",
    content: "Explore the enigmatic beauty of Leonardo da Vincis -Mona Lisa.- Discover the allure and mystery behind one of the worlds most famous paintings in this iconic masterpiece.",
    viewCount: 6856,
    creationDate: "16.07.2021",
    isPublished: true
  },
  {
    postId: 9,
    userId: 16,
    categoryId: 2,
    title: "The Starry Night",
    content: "Immerse yourself in the swirling colors and expressive brushstrokes of Vincent van Goghs -The Starry Night.- Experience the emotional depth and beauty of this renowned artwork.",
    viewCount: 2852,
    creationDate: "13.12.2020",
    isPublished: false
  },
  {
    postId: 10,
    userId: 7,
    categoryId: 3,
    title: "Inception",
    content: "Dive into the mind-bending world of -Inception.- Join a team of skilled thieves as they navigate dreams within dreams, blurring the line between reality and imagination in this mind-bending movie.",
    viewCount: 6349,
    creationDate: "3.04.2019",
    isPublished: true
  },
  {
    postId: 11,
    userId: 6,
    categoryId: 4,
    title: "Uncharted 4: A Thiefs End",
    content: "Embark on a thrilling treasure-hunting adventure in -Uncharted 4: A Thiefs End.- Join Nathan Drake on his final journey, solve intricate puzzles, and face dangerous adversaries in this cinematic action game.",
    viewCount: 8942,
    creationDate: "2.02.2021",
    isPublished: false
  },
  {
    postId: 12,
    userId: 17,
    categoryId: 4,
    title: "League of Legends",
    content: "Enter the competitive world of online multiplayer battle arenas with -League of Legends.- Choose from a vast roster of champions, strategize with your team, and strive for victory in this highly popular game.",
    viewCount: 7460,
    creationDate: "11.06.2018",
    isPublished: false
  },
  {
    postId: 13,
    userId: 7,
    categoryId: 4,
    title: "The Elder Scrolls V: Skyrim",
    content: "Immerse yourself in the rich and immersive world of -The Elder Scrolls V: Skyrim.- Embark on epic quests, discover ancient secrets, and customize your character in this legendary RPG.",
    viewCount: 7567,
    creationDate: "20.01.2019",
    isPublished: true
  },
  {
    postId: 14,
    userId: 3,
    categoryId: 5,
    title: "To Kill a Mockingbird",
    content: "Harper Lees -To Kill a Mockingbird- explores themes of racial injustice and moral courage through the eyes of Scout Finch. Discover the power of empathy and the importance of standing up for what is right.",
    viewCount: 309,
    creationDate: "20.07.2020",
    isPublished: false
  },
  {
    postId: 15,
    userId: 3,
    categoryId: 2,
    title: "The Persistence of Memory",
    content: "Contemplate Salvador DalÃ\u00ads surreal masterpiece, -The Persistence of Memory.- Dive into the dreamlike world of melting clocks and mysterious landscapes in this iconic artwork.",
    viewCount: 9624,
    creationDate: "2.11.2020",
    isPublished: false
  },
  {
    postId: 16,
    userId: 6,
    categoryId: 1,
    title: "Classical Masterpieces",
    content: "Immerse yourself in the timeless beauty of classical music. Explore the works of Mozart, Beethoven, and Bach, and experience the richness and complexity of these masterpieces.",
    viewCount: 1989,
    creationDate: "27.10.2018",
    isPublished: false
  },
  {
    postId: 17,
    userId: 13,
    categoryId: 5,
    title: "1984",
    content: "George Orwells dystopian novel, -1984,- paints a chilling portrait of a totalitarian society where Big Brother watches everyone. Dive into this thought-provoking exploration of power, surveillance, and freedom.",
    viewCount: 1790,
    creationDate: "6.04.2017",
    isPublished: false
  },
  {
    postId: 18,
    userId: 7,
    categoryId: 3,
    title: "Pulp Fiction",
    content: "Indulge in the non-linear storytelling and memorable characters of -Pulp Fiction.- Quentin Tarantinos iconic film weaves together multiple interconnected stories with wit, violence, and dark humor.",
    viewCount: 2986,
    creationDate: "17.09.2016",
    isPublished: true
  },
  {
    postId: 19,
    userId: 12,
    categoryId: 2,
    title: "Guernica",
    content: "Witness the raw emotion and political commentary of Pablo Picassos -Guernica.- Explore the powerful imagery and symbolism depicting the horrors of war in this iconic artwork.",
    viewCount: 2313,
    creationDate: "25.03.2023",
    isPublished: false
  },
  {
    postId: 20,
    userId: 13,
    categoryId: 1,
    title: "The Evolution of Jazz",
    content: "Trace the history and evolution of jazz music, from its roots in African rhythms and blues to the improvisation and syncopation that define this uniquely American art form.",
    viewCount: 4391,
    creationDate: "17.02.2016",
    isPublished: false
  },
  {
    postId: 21,
    userId: 8,
    categoryId: 4,
    title: "FIFA 22",
    content: "Experience the thrill of soccer with -FIFA 22.- Take control of your favorite teams, compete in realistic matches, and showcase your skills in this popular sports game.",
    viewCount: 6490,
    creationDate: "13.10.2017",
    isPublished: false
  },
  {
    postId: 22,
    userId: 18,
    categoryId: 4,
    title: "Minecraft",
    content: "Unleash your creativity and build your own virtual world in -Minecraft.- Mine resources, craft tools, and construct anything you can imagine in this beloved sandbox game.",
    viewCount: 6905,
    creationDate: "26.05.2019",
    isPublished: false
  },
  {
    postId: 23,
    userId: 13,
    categoryId: 1,
    title: "Exploring Different Music Genres",
    content: "Dive into the diverse world of music genres, from rock and pop to hip-hop, country, and electronic music. Discover the characteristics and influences that shape each genre.",
    viewCount: 7508,
    creationDate: "21.01.2023",
    isPublished: false
  },
  {
    postId: 24,
    userId: 3,
    categoryId: 5,
    title: "The Catcher in the Rye",
    content: "Join Holden Caulfield on his journey of self-discovery and rebellion in J.D. Salingers -The Catcher in the Rye.- Explore themes of alienation, identity, and the loss of innocence.",
    viewCount: 9306,
    creationDate: "14.02.2016",
    isPublished: false
  },
  {
    postId: 25,
    userId: 3,
    categoryId: 4,
    title: "Assassins Creed Odyssey",
    content: "Step into the shoes of a legendary Greek hero in -Assassins Creed Odyssey.- Explore ancient Greece, engage in epic battles, and uncover the truth behind your familys history in this massive open-world game.",
    viewCount: 3248,
    creationDate: "20.06.2019",
    isPublished: false
  },
  {
    postId: 26,
    userId: 1,
    categoryId: 3,
    title: "Fight Club",
    content: "Uncover the underground world of -Fight Club.- Join an insomniac office worker and a soap salesman as they form an underground fight club that evolves into something much more profound.",
    viewCount: 3435,
    creationDate: "17.10.2016",
    isPublished: true
  },
  {
    postId: 27,
    userId: 11,
    categoryId: 3,
    title: "The Matrix",
    content: "Enter the mind-bending reality of -The Matrix.- Follow Neo as he discovers the truth about the simulated world and becomes humanitys last hope for survival in this groundbreaking sci-fi film.",
    viewCount: 4373,
    creationDate: "17.10.2021",
    isPublished: false
  },
  {
    postId: 28,
    userId: 12,
    categoryId: 4,
    title: "The Last of Us Part II",
    content: "Experience a gripping and emotional post-apocalyptic story in -The Last of Us Part II.- Navigate through a dangerous world, face moral dilemmas, and fight for survival in this highly anticipated game.",
    viewCount: 8016,
    creationDate: "11.03.2021",
    isPublished: false
  },
  {
    postId: 29,
    userId: 7,
    categoryId: 1,
    title: "Music and Emotion",
    content: "Explore the deep connection between music and emotions. Learn how different melodies, harmonies, and rhythms can elicit joy, sadness, excitement, or nostalgia.",
    viewCount: 4868,
    creationDate: "24.09.2017",
    isPublished: false
  },
  {
    postId: 30,
    userId: 9,
    categoryId: 2,
    title: "The Scream",
    content: "Experience the haunting and iconic imagery of Edvard Munchs -The Scream.- Delve into the depths of human anguish and existential dread captured in this powerful artwork.",
    viewCount: 5523,
    creationDate: "4.11.2018",
    isPublished: true
  },
  {
    postId: 31,
    userId: 9,
    categoryId: 1,
    title: "The Magic of Live Performances",
    content: "Experience the exhilaration of live music performances. From intimate acoustic sets to grand symphony concerts, live music creates a unique and unforgettable atmosphere.",
    viewCount: 2362,
    creationDate: "14.01.2020",
    isPublished: false
  },
  {
    postId: 32,
    userId: 14,
    categoryId: 2,
    title: "The Last Supper",
    content: "Uncover the religious and artistic significance of Leonardo da Vincis -The Last Supper.- Study the intricate details and composition of this iconic depiction of the biblical event.",
    viewCount: 7793,
    creationDate: "8.08.2020",
    isPublished: true
  },
  {
    postId: 33,
    userId: 13,
    categoryId: 4,
    title: "God of War",
    content: "Unleash your rage and embark on a mythological journey in -God of War.- Join Kratos and his son Atreus as they face gods, monsters, and their own inner demons in this epic action-adventure.",
    viewCount: 6638,
    creationDate: "3.06.2022",
    isPublished: true
  },
  {
    postId: 34,
    userId: 12,
    categoryId: 5,
    title: "Moby-Dick",
    content: "Embark on a thrilling adventure with Captain Ahab in Herman Melvilles epic tale, -Moby-Dick.- Explore the depths of obsession, fate, and the power of nature in this literary masterpiece.",
    viewCount: 1276,
    creationDate: "29.12.2015",
    isPublished: true
  },
  {
    postId: 35,
    userId: 8,
    categoryId: 2,
    title: "The Birth of Venus",
    content: "Marvel at the beauty and elegance of Sandro Botticellis -The Birth of Venus.- Explore the mythological symbolism and graceful portrayal of the goddess emerging from the sea.",
    viewCount: 5440,
    creationDate: "8.01.2022",
    isPublished: false
  },
  {
    postId: 36,
    userId: 20,
    categoryId: 2,
    title: "The Persistence of Memory",
    content: "Contemplate Salvador DalÃ\u00ads surreal masterpiece, -The Persistence of Memory.- Dive into the dreamlike world of melting clocks and mysterious landscapes in this iconic artwork.",
    viewCount: 3408,
    creationDate: "20.07.2020",
    isPublished: false
  },
  {
    postId: 37,
    userId: 9,
    categoryId: 2,
    title: "The Great Wave off Kanagawa",
    content: "Immerse yourself in the dynamic energy of Katsushika Hokusais -The Great Wave off Kanagawa.- Experience the iconic Japanese woodblock print depicting a towering wave.",
    viewCount: 3053,
    creationDate: "7.10.2021",
    isPublished: false
  },
  {
    postId: 38,
    userId: 15,
    categoryId: 4,
    title: "Dark Souls III",
    content: "Test your skills and determination in the unforgiving world of -Dark Souls III.- Face challenging enemies, overcome deadly traps, and uncover the mysteries of this atmospheric action RPG.",
    viewCount: 6350,
    creationDate: "5.08.2017",
    isPublished: false
  },
  {
    postId: 39,
    userId: 18,
    categoryId: 4,
    title: "Red Dead Redemption 2",
    content: "Immerse yourself in the gritty and expansive world of the Wild West in -Red Dead Redemption 2.- Become an outlaw, engage in thrilling gunfights, and experience an unforgettable story.",
    viewCount: 5174,
    creationDate: "27.10.2015",
    isPublished: true
  },
  {
    postId: 40,
    userId: 3,
    categoryId: 3,
    title: "Forrest Gump",
    content: "Experience the heartwarming and inspirational journey of -Forrest Gump.- Follow Forrest through decades of American history as he touches the lives of those around him with his simple wisdom.",
    viewCount: 4345,
    creationDate: "2.07.2019",
    isPublished: true
  },
  {
    postId: 41,
    userId: 9,
    categoryId: 1,
    title: "The Impact of Music on Society",
    content: "Discover how music has influenced society throughout history. From protest songs to anthems of unity, music has played a powerful role in shaping cultural movements.",
    viewCount: 6525,
    creationDate: "12.10.2020",
    isPublished: true
  },
  {
    postId: 42,
    userId: 8,
    categoryId: 5,
    title: "Jane Eyre",
    content: "Charlotte BrontÃ«s -Jane Eyre- is a hauntingly beautiful novel that follows the life of the independent and passionate Jane. Discover themes of love, identity, and social class in this timeless classic.",
    viewCount: 7592,
    creationDate: "12.07.2015",
    isPublished: true
  },
  {
    postId: 43,
    userId: 4,
    categoryId: 4,
    title: "The Legend of Zelda: Breath of the Wild",
    content: "Discover the breathtaking open-air adventure in -The Legend of Zelda: Breath of the Wild.- Explore the vast land of Hyrule, solve puzzles, and defeat challenging enemies in this highly acclaimed game.",
    viewCount: 5917,
    creationDate: "22.02.2016",
    isPublished: true
  },
  {
    postId: 44,
    userId: 11,
    categoryId: 3,
    title: "The Dark Knight",
    content: "Immerse yourself in the gritty and intense world of -The Dark Knight.- Witness the battle between Batman and the Joker in this iconic superhero film that explores themes of chaos and morality.",
    viewCount: 1259,
    creationDate: "9.08.2018",
    isPublished: false
  },
  {
    postId: 45,
    userId: 3,
    categoryId: 2,
    title: "Girl with a Pearl Earring",
    content: "Admire the timeless beauty of Johannes Vermeers -Girl with a Pearl Earring.- Discover the subtle play of light and the enigmatic expression of this captivating portrait.",
    viewCount: 495,
    creationDate: "17.06.2021",
    isPublished: true
  },
  {
    postId: 46,
    userId: 9,
    categoryId: 4,
    title: "Grand Theft Auto V",
    content: "Experience the sprawling and action-packed world of Los Santos in -Grand Theft Auto V.- Engage in heists, explore the city, and unleash chaos in this critically acclaimed open-world game.",
    viewCount: 1261,
    creationDate: "2.11.2017",
    isPublished: false
  },
  {
    postId: 47,
    userId: 19,
    categoryId: 5,
    title: "The Odyssey",
    content: "Journey alongside the legendary hero Odysseus in Homers epic poem, -The Odyssey.- Experience the trials, adventures, and mythical creatures that await him on his quest to return home.",
    viewCount: 5838,
    creationDate: "7.09.2020",
    isPublished: false
  },
  {
    postId: 48,
    userId: 15,
    categoryId: 2,
    title: "The Creation of Adam",
    content: "Witness the divine touch in Michelangelos -The Creation of Adam.- Explore the powerful depiction of God reaching out to Adam in one of the most iconic frescoes of all time.",
    viewCount: 596,
    creationDate: "8.01.2020",
    isPublished: true
  },
  {
    postId: 49,
    userId: 20,
    categoryId: 5,
    title: "Brave New World",
    content: "Aldous Huxleys -Brave New World- presents a dystopian future where technology, consumerism, and conformity rule. Explore themes of individuality, societal control, and the price of happiness.",
    viewCount: 9623,
    creationDate: "17.02.2016",
    isPublished: true
  },
  {
    postId: 50,
    userId: 3,
    categoryId: 5,
    title: "Crime and Punishment",
    content: "Delve into Fyodor Dostoevskys psychological masterpiece, -Crime and Punishment.- Follow the troubled Raskolnikov as he grapples with guilt, redemption, and the consequences of his actions.",
    viewCount: 9515,
    creationDate: "12.03.2018",
    isPublished: false
  },
  {
    postId: 51,
    userId: 18,
    categoryId: 3,
    title: "Interstellar",
    content: "Embark on a breathtaking space odyssey with -Interstellar.- Join a team of explorers as they venture beyond the boundaries of our solar system in search of a new home for humanity.",
    viewCount: 560,
    creationDate: "9.04.2019",
    isPublished: true
  },
  {
    postId: 52,
    userId: 9,
    categoryId: 1,
    title: "Music and Memory",
    content: "Uncover the fascinating connection between music and memory. Explore how music can evoke nostalgic memories and enhance cognitive functions, providing comfort and healing.",
    viewCount: 665,
    creationDate: "9.12.2015",
    isPublished: false
  },
  {
    postId: 53,
    userId: 13,
    categoryId: 3,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    content: "Journey into the enchanting world of Middle-earth with -The Lord of the Rings: The Fellowship of the Ring.- Follow Frodo Baggins on his epic quest to destroy the One Ring and save Middle-earth from darkness.",
    viewCount: 1601,
    creationDate: "19.03.2021",
    isPublished: false
  },
  {
    postId: 54,
    userId: 8,
    categoryId: 5,
    title: "Wuthering Heights",
    content: "Emily BrontÃ«s -Wuthering Heights- is a passionate tale of love, revenge, and the haunting power of the Yorkshire moors. Immerse yourself in this Gothic masterpiece of literature.",
    viewCount: 6811,
    creationDate: "3.11.2022",
    isPublished: false
  },
  {
    postId: 55,
    userId: 20,
    categoryId: 5,
    title: "The Lord of the Rings",
    content: "Enter the enchanting world of Middle-earth in J.R.R. Tolkiens epic fantasy trilogy, -The Lord of the Rings.- Join Frodo Baggins on his perilous quest to destroy the One Ring and save Middle-earth from darkness.",
    viewCount: 545,
    creationDate: "27.02.2023",
    isPublished: true
  },
  {
    postId: 56,
    userId: 13,
    categoryId: 5,
    title: "The Picture of Dorian Gray",
    content: "Oscar Wildes -The Picture of Dorian Gray- explores the pursuit of eternal youth and the consequences of living a life solely dedicated to pleasure. Dive into this provocative and philosophical novel.",
    viewCount: 9864,
    creationDate: "22.10.2017",
    isPublished: false
  },
  {
    postId: 57,
    userId: 1,
    categoryId: 3,
    title: "The Avengers",
    content: "Witness the epic team-up of Earths mightiest heroes in -The Avengers.- Marvels blockbuster film brings together iconic superheroes to defend the world against a formidable threat.",
    viewCount: 1064,
    creationDate: "14.09.2019",
    isPublished: false
  },
  {
    postId: 58,
    userId: 15,
    categoryId: 4,
    title: "The Witcher 3: Wild Hunt",
    content: "Embark on a dark and immersive adventure in -The Witcher 3: Wild Hunt.- Explore a vast open world, make impactful choices, and engage in thrilling combat in this award-winning RPG.",
    viewCount: 6737,
    creationDate: "19.10.2018",
    isPublished: false
  },
  {
    postId: 59,
    userId: 14,
    categoryId: 5,
    title: "The Alchemist",
    content: "Paulo Coelhos -The Alchemist- is a mesmerizing tale of self-discovery and following ones dreams. Join Santiago on his journey through the desert as he learns valuable lessons about life and destiny.",
    viewCount: 5199,
    creationDate: "30.08.2022",
    isPublished: true
  },
  {
    postId: 60,
    userId: 1,
    categoryId: 2,
    title: "Les Demoiselles dAvignon",
    content: "Delve into the groundbreaking and provocative nature of Pablo Picassos -Les Demoiselles dAvignon.- Explore the radical departure from traditional art and the influence it had on modern art movements.",
    viewCount: 8047,
    creationDate: "23.12.2019",
    isPublished: true
  },
  {
    postId: 61,
    userId: 20,
    categoryId: 3,
    title: "Sharknado",
    content: "It was a desester.",
    viewCount: 1051,
    creationDate: "15.11.2022",
    isPublished: true
  }
]
postsListName: string = 'postsList'
  constructor(private createService: CreateService) {
    this.createService.setDataList(this.postsList, this.postsListName);
    this.postsList = this.createService.getDataList(this.postsList, this.postsListName);
 
  
}
}

