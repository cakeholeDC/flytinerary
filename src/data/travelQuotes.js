console.log("!!! TRAVEL_QUOTES !!!")
const travelQuotes = [
	{
		quote: "The gladdest moment in human life is a departure into unknown lands." ,
		author: "Sir Richard Burton"
	},
	{
		quote: "Be fearless in the pursuit of what sets your soul on fire." ,
		author: "Jennifer Lee"
	},
	{
		quote: "Travel makes one modest. You see what a tiny place you occupy in the world." ,
		author: "Gustav Flaubert"
	},
	{
		quote: "Traveling – it leaves you speechless, then turns you into a storyteller." ,
		author: "Ibn Battuta"
	},
	{
		quote: "Better to see something once than hear about it a thousand times"
	},
	{
		quote: "Adventure may hurt you but monotony will kill you."
	},
	{
		quote: "Don’t listen to what they say. Go see."
	},
	{
		quote: "All you need to know is that it’s possible." ,
		author: "Wolf, an Appalachian Trail Hiker"
	},
	{
		quote: "To Travel is to Live" ,
		author: "Hans Christian Andersen"
	},
	{
		quote: "The life you have led doesn’t need to be the only life you have." ,
		author: "Anna Quindlen"
	},
	{
		quote: "The most beautiful in the world is, of course, the world itself." ,
		author: "Wallace Stevens"
	},
	{
		quote: "Work, Travel, Save, Repeat" ,
		author: ""
	},
	{
		quote: "The journey not the arrival matters." ,
		author: "T.S. Eliot"
	},
	{
		quote: "Life is short and the world is wide"
	},
	{
		quote: "Dare to live the life you’ve always wanted."
	},
	{
		quote: "Travel and change of place impart new vigor to the mind." ,
		author: "Seneca"
	},
	{
		quote: "He who would travel happily must travel light." ,
		author: "Antoine de St. Exupery"
	},
	{
		quote: "And then there is the most dangerous risk of all — the risk of spending your life not doing what you want on the bet you can buy yourself the freedom to do it later." ,
		author: "Randy Komisar"
	},
	{
		quote: "No one realizes how beautiful it is to travel until he comes home and rests his head on his old, familiar pillow." ,
		author: "Lin Yutang"
	},
	{
		quote: "Our battered suitcases were piled on the sidewalk again; we had longer ways to go. But no matter, the road is life." ,
		author: "Jack Kerouac"
	},
	{
		quote: "Life is either a daring adventure or nothing at all." ,
		author: "Helen Keller"
	},
	{
		quote: "One’s destination is never a place, but a new way of seeing things." ,
		author: "Henry Miller"
	},
	{
		quote: "If you reject the food, ignore the customs, fear the religion and avoid the people, you might better stay home." ,
		author: "James Michener"
	},
	{
		quote: "Go, fly, roam, travel, voyage, explore, journey, discover, adventure."
	},
	{
		quote: "All journeys have secret destinations of which the traveler is unaware." ,
		author: "Martin Buber"
	},
	{
		quote: " Travel makes a wise man better but a fool worse." ,
		author: "Thomas Fuller"
	},
	{
		quote: "The world is a book and those who do not travel read only one page." ,
		author: "Agustine of Hippo"
	},
	{
		quote: "To my mind, the greatest reward and luxury of travel is to be able to experience everyday things as if for the first time, to be in a position in which almost nothing is so familiar it is taken for granted." ,
		author: "Bill Bryson"
	},
	{
		quote: "Not all those who wander are lost." ,
		author: "J.R.R. Tolkien"
	},
	{
		quote: "Our happiest moments as tourists always seem to come when we stumble upon one thing while in pursuit of something else." ,
		author: "Lawrence Block"
	},
	{
		quote: "Do not follow where the path may lead. Go instead where there is no path and leave a trail" ,
		author: "Ralph Waldo Emerson"
	},
	{
		quote: "Traveling is a brutality. It forces you to trust strangers and to lose sight of all that familiar comforts of home and friends. You are constantly off balance. Nothing is yours except the essential things. -air, sleep, dreams, the sea, the sky. - all things tending towards the eternal or what we imagine of it.",
		author: "Cesare Pavese"
	},
	{
		quote: "Every man can transform the world from one of monotony and drabness to one of excitement and adventure." ,
		author: "Irving Wallace"
	},
	{
		quote: "What you’ve done becomes the judge of what you’re going to do — especially in other people’s minds.  When you’re traveling, you are what you are right there and then. People don’t have your past to hold against you. No yesterdays on the road." ,
		author: "William Least Heat Moon"
	},
	{
		quote: "We travel, some of us forever, to seek other states, other lives, other souls.",
		author: "Anaïs Nin"
	},
	{
		quote: "A good traveler has no fixed plans and is not intent on arriving." ,
		author: "Lao Tzu"
	},
	{
		quote: "Life is a journey. Make the best of it."
	},
	{
		quote: "We live in a wonderful world that is full of beauty, charm, and adventure. There is no end to the adventures we can have if only we seek them with our eyes open." ,
		author: "Jawaharial Nehru"
	},
	{
		quote: "I have found out that there ain’t no surer way to find out whether you like people or hate them than to travel with them.",
		author: "Mark Twain"
	},
	{
		quote: "Travel is the only thing you buy that makes you richer"
	},
	{
		quote: "A journey is best measured in friends, rather than miles." ,
		author: "Tim Cahill"
	},
	{
		quote: "Man cannot discover new oceans unless he has the courage to lose sight of the shore." ,
		author: "Andre Gide"
	},
	{
		quote: "Like all great travelers, I have seen more than I remember, and remember more than I have seen." ,
		author: "Benjamin Disraeli"
	},
	{
		quote: "Hope is the only thing stronger than fear." ,
		author: "Suzanne Collins"
	},
	{
		quote: "Because in the end, you won’t remember the time you spent working in the office or mowing your lawn. Climb that goddamn mountain.",
		author: "Jack Kerouac"
	},
	{
		quote: "To travel is to discover that everyone is wrong about other countries." ,
		author: "Aldous Huxley"
	},
	{
		quote: "Blessed are the curious for they will have adventures."
	},
	{
		quote: "Remember that happiness is a way of travel – not a destination." ,
		author: "Roy M. Goodman"
	},
	{
		quote: "You can shake the sand from your shoes, but it will never leave your soul."
	},
	{
		quote: "The biggest adventure you can ever take is to live the life of your dreams."
	},
	{
		quote: "Once in a while it really hits people that they don’t have to experience the world in the way they have been told to." ,
		author: "Alan Keightley"
	},
	{
		quote: "Like all great travelers, I have seen more than I remember, and remember more than I have seen." ,
		author: "Benjamin Disraeli"
	},
	{
		quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
		author: "Mark Twain"
	},
	{
		quote: "Take only memories, leave only footprints." ,
		author: "Chief Seattle"
	},
	{
		quote: "I’m in love with cities I’ve never been to and people I’ve never met."
	},
	{
		quote: "Oh the places you’ll go." ,
		author: "Dr. Seuss"
	},
	{
		quote: "Wherever you go, go with all your heart!" ,
		author: "Confucius"
	},
	{
		quote: "Don’t call it a dream…call it a plan"
	},
	{
		quote: "A great way to learn about your country is to leave it." ,
		author: "Henry Rollins"
	},
	{
		quote: "Then I realized adventures are the best way to learn."
	},
	{
		quote: "It is not down in any map; true places never are." ,
		author: "Herman Melville"
	},
	{
		quote: "You don’t have to be rich to travel well." ,
		author: "Eugene Fodor"
	},
	{
		quote: "I love the feeling of being anonymous in a city I’ve never been before."
	},
	{
		quote: "Own only what you can always carry with you: known languages, known countries, known people. Let your memory be your travel bag" ,
		author: "Alexandr Solzhenitsyn"
	},
	{
		quote: "Once a year, go someplace you’ve never been before." ,
		author: "Dalai Lama"
	},
	{
		quote: "When preparing to travel, lay out all your clothes and all your money. Then take half the clothes and twice the money." ,
		author: "Susan Heller"
	},
	{
		quote: "What you’ve done becomes the judge of what you’re going to do – especially in other people’s minds. When you’re traveling, you are what you are right there and then. People don’t have your past to hold against you. No yesterdays on the road." ,
		author: "William Least Heat Moon"
	},
	{
		quote: "Travel is never a matter of money but of courage." ,
		author: "Paolo Coelho"
	},
	{
		quote: "Conventional wisdom tells us… we take our baggage with us. I’m not so sure. Travel, at its best, transforms us in ways that aren’t always apparent until we’re back home. Sometimes we do leave our baggage behind, or, even better, it’s misrouted to Cleveland and is never heard from again." ,
		author: "Eric Weiner"
	},
	{
		quote: "The goal is to die with memories not dreams"
	},
	{
		quote: "Two roads diverged in a wood and I – I took the one less traveled by." ,
		author: "Robert Frost"
	},
	{
		quote: "There was nowhere to go but everywhere, so just keep on rolling under the stars." ,
		author: "Jack Kerouac"
	},
	{
		quote: "Live your life by a compass, not a clock." ,
		author: "Stephen Covey"
	},
	{
		quote: " With the right mindset and spirit, only the sky is the limit"
	},
	{
		quote: "Happiness is letting go of what you think your life is supposed to look like and celebrate it for everything that it is." ,
		author: "Mandy Hale"
	},
	{
		quote: "If you’re twenty-two, physically fit, hungry to learn and be better, I urge you to travel – as far and as widely as possible. Sleep on floors if you have to. Find out how other people live and eat and cook. Learn from them – wherever you go." ,
		author: "Anthony Bourdain"
	},
	{
		quote: "Everything you do is based on the choices you make",
		author: "Wayne Dyer"
	},
	{
		quote: "There’s no way I was born to just pay bills and die"
	},
	{
		quote: "Tourists don’t know where they’ve been, travelers don’t know where they’re going." ,
		author: "Paul Theroux"
	},
	{
		quote: "Adventure is a path. Real adventure – self-determined, self-motivated, often risky – forces you to have firsthand encounters with the world. The world the way it is, not the way you imagine it. Your body will collide with the earth and you will bear witness. In this way you will be compelled to grapple with the limitless kindness and bottomless cruelty of humankind – and perhaps realize that you yourself are capable of both. This will change you. Nothing will ever again be black-and-white.",
		author: "Mark Jenkins"
	},
	{
		quote: "I am not the same, having seen the moon shine on the other side of the world." ,
		author: "Mary Anne Radmacher"
	},
	{
		quote: "At its best, travel should challenge our preconceptions and most cherished views, cause us to rethink our assumptions, shake us a bit, make us broader minded and more understanding." ,
		author: "Arthur Frommer"
	},
	{
		quote: "Travel far enough, you meet yourself" ,
		author: "David Mitchell"
	},
	{
		quote: "Do not follow where the path may lead. Go instead where there is no path and leave a trail" ,
		author: "Ralph Waldo Emerson"
	},
	{
		quote: "It feels good to be in the right direction."
	},
	{
		quote: "To awaken quite alone in a strange town is one of the pleasantest sensations in the world." ,
		author: "Freya Stark"
	},
	{
		quote: "A ship in a harbor is safe, but it not what ships are build for." ,
		author: "John A. Shedd"
	},
	{
		quote: "I travel not to go anywhere, but to go. I travel for travel’s sake. The great affair is to move." ,
		author: "Robert Louis Stevenson"
	},
	{
		quote: "Take only memories, leave only footprints." ,
		author: "Chief Seattle"
	},
	{
		quote: "Wherever you go becomes a part of you somehow." ,
		author: "Anita Desai"
	},
	{
		quote: "Take every chance you get in life, because some things only happen once." ,
		author: "Karen Gibb"
	},
	{
		quote: "I never travel without my diary. One should always have something sensational to read on the train." ,
		author: "Oscar Wilde"
	},
	{
		quote: "Good company in a journey makes the way seem shorter." ,
		author: "Izaak Walton"
	},
	{
		quote: "Live life with no excuses, travel with no regret" ,
		author: "Oscar Wilde"
	},
	{
		quote: "Life is a journey, not a destination."
	},
	{
		quote: "I travel not to cross countries off a list, but to ignite passionate affairs with destinations." ,
		author: "Nyssa P. Chopra"
	},
	{
		quote: "Veni, Vini, Amavi. We came, we saw, we loved."
	},
	{
		quote: "People do not decide to become extraordinary. They decide to accomplish extraordinary things." ,
		author: "Edmund Hillary"
	},
	{
		quote: "Quit your job, buy a ticket, get a tan, fall in love, never return."
	},
	{
		quote: "I’ll look back on this and smile because it was life and I decided to live it"
	}
]

export default travelQuotes