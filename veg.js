const vegTimes =  [
    {
      "name": "Artichoke",
      "steamed": "30 to 60",
      "microwaved": "4 to 5 each",
      "blanched": "NR",
      "boiled": "25 to 40",
      "other": "NR"
    },
    {
      "name": "Asparagus",
      "steamed": "8 to 10",
      "microwaved": "4 to 6",
      "blanched": "2 to 3",
      "boiled": "5 to 12",
      "other": "Stir-fry pieces 5"
    },
    {
      "name": "Green Beans",
      "steamed": "5 to 15",
      "microwaved": "6 to 12",
      "blanched": "4 to 5",
      "boiled": "10 to 20",
      "other": "Stir-fry 3 to 4"
    },
    {
      "name": "Beets",
      "steamed": "40 to 60",
      "microwaved": "14 to 18",
      "blanched": "NR",
      "boiled": "30 to 60",
      "other": "Bake 60 at 350°F"
    },
    {
      "name": "Broccoli",
      "steamed": "5 to 6",
      "microwaved": "4 to 5",
      "blanched": "2 to 3",
      "boiled": "4 to 5",
      "other": "Stir-fry 3 to 4"
    },
    {
      "name": "Brussels sprouts",
      "steamed": "6 to 12",
      "microwaved": "7 to 8",
      "blanched": "4 to 5",
      "boiled": "5 to 10",
      "other": "Halve; stir-fry 3 to 4"
    },
    {
      "name": "Cabbage Wedges",
      "steamed": "6 to 9",
      "microwaved": "10 to 12",
      "blanched": "NR",
      "boiled": "10 to 15",
      "other": "Blanch leaves, stuff and bake"
    },
    {
      "name": "Whole Carrots",
      "steamed": "10 to 15",
      "microwaved": "8 to 10",
      "blanched": "4 to 5",
      "boiled": "15 to 20",
      "other": "Bake 30 to 40 at 350°F"
    },
    {
      "name": "Whole Cauliflower",
      "steamed": "15 to 20",
      "microwaved": "6 to 7",
      "blanched": "4 to 5",
      "boiled": "10 to 15",
      "other": "Blanch, then back 20 at 350°F"
    },
    {
      "name": "Corn on cob",
      "steamed": "6 to 10",
      "microwaved": "3 to 4",
      "blanched": "3 to 4",
      "boiled": "4 to 7",
      "other": "Soak 10; bake at 375°F"
    },
    {
      "name": "Eggplant, diced",
      "steamed": "5 to 6",
      "microwaved": "5 to 6",
      "blanched": "3 to 4",
      "boiled": "5 to 10",
      "other": "Bake 10 to 15 425°F"
    },
    {
      "name": "Greens, collard/mustard/turnip",
      "steamed": "NR",
      "microwaved": "18 to 20",
      "blanched": "8 to 15",
      "boiled": "30 to 60",
      "other": "Stir-fry mustard greens 4 to 6"
    },
    {
      "name": "Kohlrabi",
      "steamed": "30 to 35",
      "microwaved": "8 to 12",
      "blanched": "NR",
      "boiled": "15 to 30",
      "other": "Bake 50 to 60 at 350°F"
    },
    {
      "name": "Mushrooms",
      "steamed": "4 to 5",
      "microwaved": "3 to 4",
      "blanched": "NR",
      "boiled": "3 to 4 in broth or wine",
      "other": "Stir-fry or broil 4 to 5"
    },
    {
      "name": "Onions, whole",
      "steamed": "20 to 25",
      "microwaved": "6 to 10",
      "blanched": "NR",
      "boiled": "20 to 30",
      "other": "Bake 60 at 400°F"
    },
    {
      "name": "Parsnips",
      "steamed": "8 to 10",
      "microwaved": "4 to 6",
      "blanched": "3 to 4",
      "boiled": "5 to 10",
      "other": "Bake 30 at 325°F"
    },
    {
      "name": "Peas",
      "steamed": "3 to 5",
      "microwaved": "5 to 7",
      "blanched": "1 to 2",
      "boiled": "8 to 12",
      "other": "Stir-fry 2 to 3"
    },
    {
      "name": "Peppers, bell",
      "steamed": "2 to 4",
      "microwaved": "2 to 4",
      "blanched": "2 to 3",
      "boiled": "4 to 5",
      "other": "Stir-fry 2 to 3"
    },
    {
      "name": "Potatoes, whole",
      "steamed": "12 to 30",
      "microwaved": "6 to 8",
      "blanched": "NR",
      "boiled": "20 to 30",
      "other": "Bake 40 to 60 at 400°F"
    },
    {
      "name": "Spinach",
      "steamed": "5 to 6",
      "microwaved": "3 to 4",
      "blanched": "2 to 3",
      "boiled": "2 to 5",
      "other": "Stir-fry 3"
    },
    {
      "name": "Squash, whole",
      "steamed": "NR",
      "microwaved": "5 to 6",
      "blanched": "NR",
      "boiled": "20 to 30",
      "other": "Bake 40 to 90 at 350°F"
    },
    {
      "name": "Tomatoes",
      "steamed": "2 to 3",
      "microwaved": "3 to 4",
      "blanched": "1 to 2",
      "boiled": "NR",
      "other": "Bake havles 8 to 15 at 400"
    },
    {
      "name": "Whole Turnips",
      "steamed": "20 to 25",
      "microwaved": "9 to 12",
      "blanched": "NR",
      "boiled": "15 to 20",
      "other": "Bake 30 to 45 at 350°F"
    },
    {
      "name": "Zucchini",
      "steamed": "5 to 10",
      "microwaved": "3 to 6",
      "blanched": "2 to 3",
      "boiled": "5 to 10",
      "other": "Broil halves 5"
    }
]
