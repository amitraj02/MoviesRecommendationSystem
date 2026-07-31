from django.core.management.base import BaseCommand
from movies.models import Movie

class Command(BaseCommand):
    help = 'Seeds the database with 10 Bollywood, 5 Marvel, 5 South Indian, and 10 Animated movies, mapping local assets'

    def handle(self, *args, **kwargs):
        # 1. Clear existing movie entries
        self.stdout.write('Clearing existing movies...')
        Movie.objects.all().delete()

        # 2. Compile full movies list (10 Bollywood + 5 Marvel + 5 South Indian + 10 Animated)
        all_movies = [
            # === BOLLYWOOD DATASET ===
            {
                "id": 1,
                "title": "3 Idiots",
                "year": 2009,
                "rating": 8.4,
                "duration": "2h 50m",
                "description": "Two friends search for their long-lost college companion. They revisit their college days and remember the memories of their friend who inspired them to think differently, even as the rest of the world called them 'idiots'.",
                "director": "Rajkumar Hirani",
                "poster": "https://image.tmdb.org/t/p/original/66A9MqXOyVFCssoloscw79z8Tew.jpg",
                "genres": ["Comedy", "Drama"],
                "vibe": "Inspirational",
                "intensity": 3,
                "era": "modern"
            },
            {
                "id": 2,
                "title": "Taare Zameen Par",
                "year": 2007,
                "rating": 8.3,
                "duration": "2h 45m",
                "description": "An dyslexic 8-year-old boy is thought to be lazy and a trouble-maker until a new art teacher has the patience and compassion to discover the real problem behind his struggles.",
                "director": "Aamir Khan",
                "poster": "https://image.tmdb.org/t/p/original/samOulmbvQ4bN8gYjM27JZXvC90.jpg",
                "genres": ["Drama", "Family"],
                "vibe": "Emotional",
                "intensity": 3,
                "era": "modern"
            },
            {
                "id": 3,
                "title": "Dangal",
                "year": 2016,
                "rating": 8.3,
                "duration": "2h 41m",
                "description": "Former wrestler Mahavir Singh Phogat trains his daughters to become world-class wrestlers, defying societal norms and expectations along the way.",
                "director": "Nitesh Tiwari",
                "poster": "/images/dangal.jpg",  # Local Image Asset
                "genres": ["Action", "Biography", "Drama", "Sport"],
                "vibe": "Gritty",
                "intensity": 4,
                "era": "modern"
            },
            {
                "id": 4,
                "title": "Gangs of Wasseypur",
                "year": 2012,
                "rating": 8.2,
                "duration": "5h 21m",
                "description": "A clash between mafia dons and power-hungry families in the coal town of Wasseypur leads to a generational blood feud spanning decades.",
                "director": "Anurag Kashyap",
                "poster": "https://image.tmdb.org/t/p/original/vI12o76qZpZzF0l3K1qQ3ZJ3m3K.jpg",
                "genres": ["Action", "Crime", "Drama"],
                "vibe": "Visceral",
                "intensity": 5,
                "era": "modern"
            },
            {
                "id": 5,
                "title": "Rang De Basanti",
                "year": 2006,
                "rating": 8.1,
                "duration": "2h 37m",
                "description": "The story of a young English documentary filmmaker who comes to India to cast a group of carefree university students in a film about freedom fighters, sparking a profound political awakening.",
                "director": "Rakeysh Omprakash Mehra",
                "poster": "https://image.tmdb.org/t/p/original/8h3vB6q2Y3J954S6c8vN0J4G4m8.jpg",
                "genres": ["Crime", "Drama", "History"],
                "vibe": "Rebellious",
                "intensity": 4,
                "era": "modern"
            },
            {
                "id": 6,
                "title": "Andhadhun",
                "year": 2018,
                "rating": 8.2,
                "duration": "2h 19m",
                "description": "A blind piano player inadvertently becomes embroiled in a web of murder, deception, and unexpected twists involving a former actor and his wife.",
                "director": "Sriram Raghavan",
                "poster": "https://image.tmdb.org/t/p/original/x2q4g2qQ9U9bF1X9JqV15v2eG4e.jpg",
                "genres": ["Crime", "Thriller", "Mystery"],
                "vibe": "Suspenseful",
                "intensity": 4,
                "era": "modern"
            },
            {
                "id": 7,
                "title": "Swades",
                "year": 2004,
                "rating": 8.2,
                "duration": "3h 9m",
                "description": "A successful Indian scientist working at NASA travels back to his homeland to find his childhood nanny, rediscovering his roots and connection to his community in the process.",
                "director": "Ashutosh Gowariker",
                "poster": "https://image.tmdb.org/t/p/original/bO4o33Y6T42aRz9bJg1Y1z8Z1G.jpg",
                "genres": ["Drama"],
                "vibe": "Soulful",
                "intensity": 2,
                "era": "modern"
            },
            {
                "id": 8,
                "title": "Sholay",
                "year": 1975,
                "rating": 8.1,
                "duration": "3h 24m",
                "description": "A retired police officer hires two petty criminals to capture a ruthless and bloodthirsty dacoit who has terrorized a remote village.",
                "director": "Ramesh Sippy",
                "poster": "https://image.tmdb.org/t/p/original/qZ4xX18nK2l5v5c6k3K6z7V6f6.jpg",
                "genres": ["Action", "Adventure", "Comedy", "Crime"],
                "vibe": "Classic Masala",
                "intensity": 4,
                "era": "classic"
            },
            {
                "id": 9,
                "title": "12th Fail",
                "year": 2023,
                "rating": 8.8,
                "duration": "2h 27m",
                "description": "Based on true stories, a young man from a poverty-stricken village in Chambal overcomes colossal odds and institutional corruption to clear India's grueling UPSC civil services exams.",
                "director": "Vidhu Vinod Chopra",
                "poster": "/images/12th_Fail.jpg",  # Local Image Asset
                "genres": ["Biography", "Drama"],
                "vibe": "Resilient",
                "intensity": 3,
                "era": "modern"
            },
            {
                "id": 10,
                "title": "Dil Chahta Hai",
                "year": 2001,
                "rating": 8.1,
                "duration": "3h 3m",
                "description": "Three childhood friends drift apart after college due to vastly different approaches to romance and life, only to find their bond tested and reformed as they navigate adulthood.",
                "director": "Farhan Akhtar",
                "poster": "https://image.tmdb.org/t/p/original/vV02QY1d6x8z1T3qZ5v1G3G0z5.jpg",
                "genres": ["Comedy", "Drama", "Romance"],
                "vibe": "Nostalgic",
                "intensity": 2,
                "era": "modern"
            },
            # === MARVEL DATASET ===
            {
                "id": 11,
                "title": "Iron Man",
                "year": 2008,
                "rating": 7.9,
                "duration": "2h 6m",
                "description": "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
                "director": "Jon Favreau",
                "poster": "https://image.tmdb.org/t/p/original/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
                "genres": ["Action", "Sci-Fi", "Adventure"],
                "vibe": "Charismatic",
                "intensity": 3,
                "era": "modern"
            },
            {
                "id": 12,
                "title": "The Avengers",
                "year": 2012,
                "rating": 8.0,
                "duration": "2h 23m",
                "description": "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
                "director": "Joss Whedon",
                "poster": "https://image.tmdb.org/t/p/original/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
                "genres": ["Action", "Sci-Fi", "Adventure"],
                "vibe": "Blockbuster Thrill",
                "intensity": 4,
                "era": "modern"
            },
            {
                "id": 13,
                "title": "Guardians of the Galaxy",
                "year": 2014,
                "rating": 8.0,
                "duration": "2h 1m",
                "description": "A group of intergalactic criminals must pull together to stop a fanatical warrior from purging the universe of all life.",
                "director": "James Gunn",
                "poster": "https://image.tmdb.org/t/p/original/rrvnIBFvklV03xsH4N7X7vjBf4d.jpg",
                "genres": ["Action", "Sci-Fi", "Adventure", "Comedy"],
                "vibe": "Fun & Cosmic",
                "intensity": 3,
                "era": "modern"
            },
            {
                "id": 14,
                "title": "Avengers: Infinity War",
                "year": 2018,
                "rating": 8.4,
                "duration": "2h 29m",
                "description": "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
                "director": "Anthony Russo, Joe Russo",
                "poster": "https://image.tmdb.org/t/p/original/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
                "genres": ["Action", "Adventure", "Sci-Fi"],
                "vibe": "Devastating",
                "intensity": 5,
                "era": "modern"
            },
            {
                "id": 15,
                "title": "Spider-Man: No Way Home",
                "year": 2021,
                "rating": 8.2,
                "duration": "2h 28m",
                "description": "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
                "director": "Jon Watts",
                "poster": "https://image.tmdb.org/t/p/original/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
                "genres": ["Action", "Adventure", "Sci-Fi"],
                "vibe": "Nostalgic",
                "intensity": 4,
                "era": "modern"
            },
            # === SOUTH INDIAN DATASET ===
            {
                "id": 16,
                "title": "Baahubali 2: The Conclusion",
                "year": 2017,
                "rating": 8.2,
                "duration": "2h 47m",
                "description": "When Shiva, the son of Baahubali, learns about his heritage, he begins to search for answers about his father's tragic death and fights to reclaim his rightful throne in Mahishmati.",
                "director": "S.S. Rajamouli",
                "poster": "/images/bagubali2.jpeg",  # Local Image Asset
                "genres": ["Action", "Drama", "Fantasy"],
                "vibe": "Epic",
                "intensity": 5,
                "era": "modern"
            },
            {
                "id": 17,
                "title": "K.G.F: Chapter 1",
                "year": 2018,
                "rating": 8.2,
                "duration": "2h 36m",
                "description": "In the 1970s, a fierce rebel named Rocky rises from the streets of Bombay to the gold mines of Kolar, striking terror into the hearts of his foes as he builds his empire.",
                "director": "Prashanth Neel",
                "poster": "/images/kgf.jpeg",  # Local Image Asset
                "genres": ["Action", "Crime", "Drama"],
                "vibe": "Gritty",
                "intensity": 5,
                "era": "modern"
            },
            {
                "id": 18,
                "title": "Jai Bhim",
                "year": 2021,
                "rating": 8.8,
                "duration": "2h 44m",
                "description": "A tribal woman and a righteous lawyer battle in court to unearth the truth and seek justice for her husband, who is framed and goes missing from police custody.",
                "director": "T.J. Gnanavel",
                "poster": "/images/jaibhem.jpeg",  # Local Image Asset
                "genres": ["Crime", "Drama", "Mystery"],
                "vibe": "Intense",
                "intensity": 4,
                "era": "modern"
            },
            {
                "id": 19,
                "title": "Drishyam",
                "year": 2013,
                "rating": 8.2,
                "duration": "2h 40m",
                "description": "A cable TV operator goes to extreme lengths to protect his family from the legal repercussions of an accidental crime involving an influential threat.",
                "director": "Jeethu Joseph",
                "poster": "/images/Drishyam.jpg",  # Local Image Asset
                "genres": ["Crime", "Drama", "Mystery", "Thriller"],
                "vibe": "Suspenseful",
                "intensity": 4,
                "era": "modern"
            },
            {
                "id": 20,
                "title": "777 Charlie",
                "year": 2022,
                "rating": 8.8,
                "duration": "2h 44m",
                "description": "A lonely factory worker leading a stagnant life finds his world turned upside down when a mischievous Labrador puppy enters his life, leading to an emotional cross-country journey.",
                "director": "Kiranraj K.",
                "poster": "/images/777.jpeg",  # Local Image Asset
                "genres": ["Adventure", "Comedy", "Drama"],
                "vibe": "Heartwarming",
                "intensity": 3,
                "era": "modern"
            },
            # === ANIMATED/CARTOON DATASET ===
            {
                "id": 21,
                "title": "The Lion King",
                "year": 1994,
                "rating": 8.5,
                "duration": "1h 28m",
                "description": "A young lion prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron fist, the prince grows up alongside two carefree outcasts and must decide when to return and take his rightful place.",
                "director": "Roger Allers, Rob Minkoff",
                "poster": "https://image.tmdb.org/t/p/original/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
                "genres": ["Animation", "Adventure", "Drama"],
                "vibe": "Epic",
                "intensity": 4,
                "era": "classic"
            },
            {
                "id": 22,
                "title": "Spider-Man: Into the Spider-Verse",
                "year": 2018,
                "rating": 8.4,
                "duration": "1h 57m",
                "description": "Teenager Miles Morales becomes the Spider-Man of his universe, and must cross paths with five counterpart dimensions to stop a threat for all realities.",
                "director": "Bob Persichetti, Peter Ramsey, Rodney Rothman",
                "poster": "https://image.tmdb.org/t/p/original/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
                "genres": ["Animation", "Action", "Adventure", "Sci-Fi"],
                "vibe": "Stylized & Electric",
                "intensity": 4,
                "era": "modern"
            },
            {
                "id": 23,
                "title": "WALL-E",
                "year": 2008,
                "rating": 8.4,
                "duration": "1h 38m",
                "description": "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
                "director": "Andrew Stanton",
                "poster": "/images/wall_E.jpeg",  # Local Image Asset
                "genres": ["Animation", "Adventure", "Family", "Sci-Fi"],
                "vibe": "Heartwarming",
                "intensity": 2,
                "era": "modern"
            },
            {
                "id": 24,
                "title": "Coco",
                "year": 2017,
                "rating": 8.4,
                "duration": "1h 45m",
                "description": "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
                "director": "Lee Unkrich, Adrian Molina",
                "poster": "https://image.tmdb.org/t/p/original/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
                "genres": ["Animation", "Adventure", "Comedy", "Family"],
                "vibe": "Emotional",
                "intensity": 3,
                "era": "modern"
            },
            {
                "id": 25,
                "title": "Toy Story",
                "year": 1995,
                "rating": 8.3,
                "duration": "1h 21m",
                "description": "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy's bedroom.",
                "director": "John Lasseter",
                "poster": "https://image.tmdb.org/t/p/original/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
                "genres": ["Animation", "Adventure", "Comedy", "Family"],
                "vibe": "Nostalgic",
                "intensity": 2,
                "era": "classic"
            },
            {
                "id": 26,
                "title": "Up",
                "year": 2009,
                "rating": 8.3,
                "duration": "1h 36m",
                "description": "78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway.",
                "director": "Pete Docter, Bob Peterson",
                "poster": "https://image.tmdb.org/t/p/original/mKuacwQcW1T6nOdfp0jL9xX4x.jpg",
                "genres": ["Animation", "Adventure", "Comedy", "Drama"],
                "vibe": "Whimsical",
                "intensity": 3,
                "era": "modern"
            },
            {
                "id": 27,
                "title": "Spider-Man: Across the Spider-Verse",
                "year": 2023,
                "rating": 8.7,
                "duration": "2h 20m",
                "description": "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",
                "director": "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
                "poster": "https://image.tmdb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
                "genres": ["Animation", "Action", "Adventure", "Sci-Fi"],
                "vibe": "Mind-Blowing",
                "intensity": 4,
                "era": "modern"
            },
            {
                "id": 28,
                "title": "Ratatouille",
                "year": 2007,
                "rating": 8.1,
                "duration": "1h 51m",
                "description": "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous Parisian restaurant.",
                "director": "Brad Bird, Jan Pinkava",
                "poster": "https://image.tmdb.org/t/p/original/npHNjldbeEXdKx75mCA0bZqgPZt.jpg",
                "genres": ["Animation", "Comedy", "Family", "Fantasy"],
                "vibe": "Inspiring",
                "intensity": 2,
                "era": "modern"
            },
            {
                "id": 29,
                "title": "Inside Out",
                "year": 2015,
                "rating": 8.1,
                "duration": "1h 35m",
                "description": "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",
                "director": "Pete Docter, Ronnie Del Carmen",
                "poster": "https://image.tmdb.org/t/p/original/2HjdWaufh0Zl20uA7J3Q0rK.jpg",
                "genres": ["Animation", "Adventure", "Comedy", "Drama"],
                "vibe": "Bittersweet",
                "intensity": 3,
                "era": "modern"
            },
            {
                "id": 30,
                "title": "How to Train Your Dragon",
                "year": 2010,
                "rating": 8.1,
                "duration": "1h 38m",
                "description": "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
                "director": "Dean DeBlois, Chris Sanders",
                "poster": "https://image.tmdb.org/t/p/original/ygGmnVu1KuSijIO9aW9GqG9pDk3.jpg",
                "genres": ["Animation", "Action", "Adventure", "Family", "Fantasy"],
                "vibe": "Adventurous",
                "intensity": 4,
                "era": "modern"
            }
        ]

        # 3. Create records
        for movie_info in all_movies:
            Movie.objects.create(
                id=movie_info["id"],
                title=movie_info["title"],
                year=movie_info["year"],
                rating=movie_info["rating"],
                duration=movie_info["duration"],
                description=movie_info["description"],
                director=movie_info["director"],
                poster=movie_info["poster"],
                genres=movie_info["genres"],
                vibe=movie_info["vibe"],
                intensity=movie_info["intensity"],
                era=movie_info["era"]
            )
            self.stdout.write(f"Successfully seeded: {movie_info['title']}")

        self.stdout.write(self.style.SUCCESS(f'Successfully seeded {len(all_movies)} movies into database!'))
