const url = 'https://api.openweathermap.org/data/2.5/weather?q=Kanpur&appid=08944be3d93b96381bb076f055633247&units=metric'
const obj =
{
    "coord": {
        "lon": 80.35, "lat": 26.4667
    },
    "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
    }],
    "base": "stations",
    "main": {
        "temp": 285.93,
        "feels_like": 284.2,
        "temp_min": 285.93,
        "temp_max": 285.93,
        "pressure": 1019,
        "humidity": 36,
        "sea_level": 1019,
        "grnd_level": 1003
    },
    "visibility": 10000,
    "wind": {
        "speed": 1.78,
        "deg": 34,
        "gust": 1.8
    },
    "clouds": {
        "all": 1
    },
    "dt": 1672339443,
    "sys": {
        "country": "IN",
        "sunrise": 1672363555,
        "sunset": 1672401340
    },
    "timezone": 19800,
    "id": 1267995,
    "name": "Kanpur",
    "cod": 200
}


const url2 = `https://api.dictionaryapi.dev/api/v2/entries/en/hello`
const obj2 = [
    {
        "word": "hello",
        "phonetics": [
            {
                "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/hello-au.mp3",
                "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=75797336",
                "license": {
                    "name": "BY-SA 4.0",
                    "url": "https://creativecommons.org/licenses/by-sa/4.0"
                }
            },
            {
                "text": "/həˈləʊ/",
                "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/hello-uk.mp3",
                "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=9021983",
                "license": {
                    "name": "BY 3.0 US",
                    "url": "https://creativecommons.org/licenses/by/3.0/us"
                }
            },
            {
                "text": "/həˈloʊ/",
                "audio": ""
            }
        ],
        "meanings": [
            {
                "partOfSpeech": "noun",
                "definitions": [
                    {
                        "definition": "\"Hello!\" or an equivalent greeting.",
                        "synonyms": [],
                        "antonyms": []
                    }
                ],
                "synonyms": [
                    "greeting"
                ],
                "antonyms": []
            },
            {
                "partOfSpeech": "verb",
                "definitions": [
                    {
                        "definition": "To greet with \"hello\".",
                        "synonyms": [],
                        "antonyms": []
                    }
                ],
                "synonyms": [],
                "antonyms": []
            },
            {
                "partOfSpeech": "interjection",
                "definitions": [
                    {
                        "definition": "A greeting (salutation) said when meeting someone or acknowledging someone’s arrival or presence.",
                        "synonyms": [],
                        "antonyms": [],
                        "example": "Hello, everyone."
                    },
                    {
                        "definition": "A greeting used when answering the telephone.",
                        "synonyms": [],
                        "antonyms": [],
                        "example": "Hello? How may I help you?"
                    },
                    {
                        "definition": "A call for response if it is not clear if anyone is present or listening, or if a telephone conversation may have been disconnected.",
                        "synonyms": [],
                        "antonyms": [],
                        "example": "Hello? Is anyone there?"
                    },
                    {
                        "definition": "Used sarcastically to imply that the person addressed or referred to has done something the speaker or writer considers to be foolish.",
                        "synonyms": [],
                        "antonyms": [],
                        "example": "You just tried to start your car with your cell phone. Hello?"
                    },
                    {
                        "definition": "An expression of puzzlement or discovery.",
                        "synonyms": [],
                        "antonyms": [],
                        "example": "Hello! What’s going on here?"
                    }
                ],
                "synonyms": [],
                "antonyms": [
                    "bye",
                    "goodbye"
                ]
            }
        ],
        "license": {
            "name": "CC BY-SA 3.0",
            "url": "https://creativecommons.org/licenses/by-sa/3.0"
        },
        "sourceUrls": [
            "https://en.wiktionary.org/wiki/hello"
        ]
    }
]


const url3 = `https://meme-api.com/gimme/1`
const obj3 = {
    "count": 1,
    "memes": [
        {
            "postLink": "https://redd.it/zyxhhv",
            "subreddit": "dankmemes",
            "title": "woo yeah baby! that's what i've been waiting for, that's what its all about",
            "url": "https://i.redd.it/vdhdodaoj09a1.jpg",
            "nsfw": false,
            "spoiler": false,
            "author": "petrioteer",
            "ups": 99,
            "preview": [
                "https://preview.redd.it/vdhdodaoj09a1.jpg?width=108&crop=smart&auto=webp&s=3f733e64e0be91580b7bedf30af35f70b1320da2",
                "https://preview.redd.it/vdhdodaoj09a1.jpg?width=216&crop=smart&auto=webp&s=62c42e5e65efe5e7b63cab1cb5386a2a8af39e76",
                "https://preview.redd.it/vdhdodaoj09a1.jpg?width=320&crop=smart&auto=webp&s=b2fe40ddcf369869e4f93bcae9c37dbcc7e033bc"
            ]
        }
    ]
}