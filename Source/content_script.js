let WORD_LIST = [
        ["accept", "except"],
        ["ad", "add"],
        ["advice", "advise"],
        ["affect", "effect"],
        ["aid", "aid"],
        ["ail", "ale"],
        ["air", "heir"],
        ["aisle", "isle"],
        ["all", "awl"],
        ["allowed", "aloud"],
        ["allusion", "illusion"],
        ["aloud", "allowed"],
        ["altar", "alter"],
        ["arc", "ark"],
        ["assent", "ascent"],
        ["ate", "eight"],
        ["aural", "oral"],
        ["aww", "awe"],
        ["aye", "I", "eye"],
        ["bail", "bale"],
        ["bald", "balled", "bawled"],
        ["ball", "bawl"],
        ["band", "banned"],
        ["bard", "barred"],
        ["barren", "baron"],
        ["bass", "base"],
        ["bazaar", "bizarre"],
        ["be", "bee"],
        ["bear", "bare"],
        ["beat", "beet"],
        ["berry", "bury"],
        ["berth", "birth"],
        ["blew", "blue"],
        ["boar", "bore"],
        ["board", "bored"],
        ["bode", "bowed"],
        ["bot", "bought"],
        ["bow", "bough"],
        ["break", "brake"],
        ["breath", "breathe"],
        ["build", "billed"],
        ["but", "butt"],
        ["buy", "by", "bye"],
        ["byte", "bite"],
        ["cache", "cash"],
        ["capital", "capitol"],
        ["caret", "carat", "carrot"],
        ["cede", "seed"],
        ["cellar", "seller"],
        ["censor", "sensor"],
        ["cent", "sent", "scent"],
        ["cents", "scents", "sense"],
        ["cereal", "serial"],
        ["cheap", "cheep"],
        ["chilly", "chili", "Chile"],
        ["choose", "chose"],
        ["chord", "cord"],
        ["chute", "shoot"],
        ["claws", "clause"],
        ["cock", "caulk", "collar", "caller"],
        ["colonel", "kernel"],
        ["come", "cum"],
        ["complement", "compliment"],
        ["complementary", "complimentary"],
        ["copy right", "copywrite"],
        ["council", "counsel"],
        ["course", "coarse"],
        ["creak", "creek"],
        ["crude", "crewed"],
        ["cruise", "crews"],
        ["cue", "queue", "que"],
        ["cues", "queues"],
        ["cymbal", "symbol"],
        ["dam", "damn"],
        ["days", "daze"],
        ["deer", "dear"],
        ["dense", "dents"],
        ["descent", "dissent"],
        ["desert", "dessert"],
        ["dew", "do", "due"],
        ["diffuse", "defuse"],
        ["dire", "dyer"],
        ["discrete", "discreet"],
        ["doc", "dock"],
        ["dotter", "daughter"],
        ["drier", "dryer"],
        ["dual", "duel"],
        ["dye", "die"],
        ["earn", "urn"],
        ["eave", "eve"],
        ["elicit", "illicit"],
        ["ensure", "insure"],
        ["exercise", "exorcise"],
        ["eyed", "I'd"],
        ["faint", "feint"],
        ["feat", "feet"],
        ["find", "fined"],
        ["flea", "flee"],
        ["flew", "flu"],
        ["flier", "flyer"],
        ["flower", "flour"],
        ["for", "fore", "four"],
        ["foul", "fowl"],
        ["fourth", "forth"],
        ["freeze", "frees"],
        ["further", "father"],
        ["gait", "gate"],
        ["gauge", "gage"],
        ["gaze", "gays"],
        ["gorilla", "guerilla"],
        ["graze", "grays"],
        ["grease", "Greece"],
        ["great", "grate"],
        ["grisly", "grizzly"],
        ["groan", "grown"],
        ["hair", "hare"],
        ["hall", "haul"],
        ["have", "halve"],
        ["hay", "hey"],
        ["heal", "heel"],
        ["hear", "here"],
        ["heard", "herd"],
        ["heed", "he'd"],
        ["heel", "heal"],
        ["heroin", "heroine"],
        ["hi", "high"],
        ["higher", "hire"],
        ["him", "hymn"],
        ["hoard", "horde", "whored"],
        ["hoe", "ho"],
        ["hold", "holed"],
        ["holy", "wholly", "hose", "hoes"],
        ["hurts", "hertz"],
        ["idle", "idol"],
        ["in", "inn"],
        ["its", "it's"],
        ["its", "it's"],
        ["jean", "gene"],
        ["Khan", "con"],
        ["knead", "need", "kneed"],
        ["knew", "new"],
        ["knight", "night"],
        ["knock", "nock"],
        ["know", "no"],
        ["knows", "nose", "noes"],
        ["lays", "laze"],
        ["lead", "led"],
        ["lean", "lien"],
        ["liar", "lyre"],
        ["life", "live"],
        ["links", "lynx"],
        ["loan", "lone"],
        ["lock", "loch"],
        ["lose", "loose"],
        ["maid", "made"],
        ["mail", "male"],
        ["main", "mane"],
        ["mall", "maul"],
        ["manner", "manor"],
        ["marshal", "martial"],
        ["mat", "matte", "Matt"],
        ["meat", "meet"],
        ["medal", "meddle"],
        ["merry", "marry"],
        ["metal", "mettle"],
        ["might", "mite"],
        ["mince", "mints"],
        ["mind", "mined"],
        ["miner", "minor"],
        ["moan", "mown"],
        ["mode", "mowed"],
        ["mood", "mooed"],
        ["moot", "mute"],
        ["mote", "moat"],
        ["muscle", "mussel"],
        ["naval", "navel"],
        ["nay", "neigh"],
        ["nod", "gnawed"],
        ["not", "knot", "naught"],
        ["ode", "owed"],
        ["or", "oar", "ore"],
        ["our", "hour"],
        ["pail", "pale"],
        ["pain", "pane"],
        ["pair", "pear", "pare"],
        ["parish", "perish"],
        ["patience", "patients"],
        ["paws", "pause"],
        ["pea", "pee"],
        ["peak", "peek", "pique"],
        ["peal", "peel"],
        ["pedal", "peddle"],
        ["phase", "faze"],
        ["phrase", "frays"],
        ["pie", "π"],
        ["piece", "peace"],
        ["pier", "peer"],
        ["plain", "plane"],
        ["plum", "plumb"],
        ["pole", "poll"],
        ["pore", "pour", "poor"],
        ["praise", "prays", "preys"],
        ["pray", "prey"],
        ["precede", "proceed"],
        ["presence", "presents"],
        ["pride", "pried"],
        ["prince", "prints"],
        ["principal", "principle"],
        ["profit", "prophet"],
        ["put", "putt"],
        ["raid", "rayed"],
        ["raise", "rays", "raze"],
        ["rap", "wrap"],
        ["rapped", "wrapped", "rapt"],
        ["rapper", "wrapper"],
        ["rapping", "wrapping"],
        ["red", "read"],
        ["rein", "reign"],
        ["rest", "wrest"],
        ["rigor", "rigger"],
        ["rime", "rhyme"],
        ["ring", "wring"],
        ["ringer", "wringer"],
        ["road", "rode", "rowed"],
        ["roam", "Rome"],
        ["rogue", "rouge"],
        ["role", "roll"],
        ["rot", "wrought"],
        ["rote", "wrote"],
        ["row", "roe"],
        ["rows", "rose", "rye", "wry"],
        ["sadist", "saddest"],
        ["scene", "seen"],
        ["seal", "ceil"],
        ["seam", "seem"],
        ["sear", "seer"],
        ["see", "sea"],
        ["sees", "seas", "sieze"],
        ["sell", "cell"],
        ["semen", "seamen"],
        ["serf", "surf"],
        ["sew", "so", "sow"],
        ["shear", "sheer"],
        ["shoo", "shoe"],
        ["side", "sighed"],
        ["sigh", "psi"],
        ["sighs", "size"],
        ["sign", "sine"],
        ["sink", "sync"],
        ["sire", "sigher"],
        ["site", "sight", "cite"],
        ["sleigh", "slay"],
        ["slight", "sleight"],
        ["soar", "sore"],
        ["some", "sum"],
        ["son", "sun"],
        ["sown", "sewn"],
        ["stair", "stare"],
        ["stake", "steak"],
        ["stalk", "stock"],
        ["steal", "steel"],
        ["step", "steppe"],
        ["strait", "straight"],
        ["sweet", "suite"],
        ["tacks", "tax"],
        ["tail", "tale"],
        ["taught", "taut"],
        ["tea", "tee"],
        ["team", "teem"],
        ["tearer", "terror"],
        ["teas", "tees", "tease"],
        ["theirs", "there's"],
        ["then", "than"],
        ["there", "their", "they're"],
        ["thinker", "tinker"],
        ["threw", "through"],
        ["throne", "thrown"],
        ["tie", "Thai"],
        ["tied", "tide"],
        ["toad", "toed", "towed"],
        ["told", "tolled"],
        ["toon", "tune"],
        ["tow", "toe"],
        ["two", "to", "too"],
        ["vary", "very"],
        ["veil", "vale"],
        ["vial", "vile"],
        ["ward", "warred"],
        ["warn", "worn"],
        ["waste", "waist"],
        ["wave", "waive"],
        ["waver", "waiver"],
        ["way", "weigh"],
        ["wear", "ware", "where"],
        ["weather", "whether"],
        ["weave", "we've"],
        ["weed", "we'd"],
        ["weigh", "way"],
        ["weighed", "wade"],
        ["weight", "wait"],
        ["whale", "wail"],
        ["wheather", "whether"],
        ["wheeled", "wield"],
        ["where", "were"],
        ["while", "wile"],
        ["whoa", "woe"],
        ["whole", "hole"],
        ["wild", "wiled"],
        ["won", "one"],
        ["wood", "would"],
        ["world", "whirled"],
        ["wreak", "reek"],
        ["wreck", "reck"],
        ["wretch", "retch"],
        ["write", "right", "rite"],
        ["wrung", "rung"],
        ["you", "u", "ewe", "yew"],
        ["your", "you're", "ur", "yore"],
];

// console.log("Monkey Business");
walk(document.body);

NotImplementedError()

if (window.MutationObserver) {
    let observer = new MutationObserver(function (mutations) {
        Array.prototype.forEach.call(mutations, function (m) {
            if (m.type === 'childList') {
                walk(m.target);
            } else if (m.target.nodeType === 3) {
                handleText(m.target);
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        attributes: false,
        characterData: true,
        subtree: true
    });
}

function walk(node) {
    let child, next;

    switch (node.nodeType) {
        // Element, Document, DocumentFragment
        case 1:
        case 9:
        case 11:
            child = node.firstChild;
            while (child) {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;

        // text
        case 3:
            handleText(node);
            break;
    }
}

function random_array_item(items) {
    return items[Math.floor(Math.random()*items.length)];
}

function handleText(textNode) {
    if (textNode.parentElement.tagName.toLowerCase() === "script" ||
    		textNode.parentElement.isContentEditable === true) {
        return false;
    }

    let oldValue = textNode.nodeValue;
    let v = oldValue;

    replacement_list.forEach(function(replacement) {

        let original_list = replacement.original;

        original_list.forEach(function(original) {
            // Haven't fully decided whether to use boundries
            // let match_original = "\\b" + original + "\\b";
            let match_original = original;
            let re = new RegExp(match_original, 'gi');
            let new_value = random_array_item(replacement.new_value);

            // console.log("re:", re, "\nnew:", new_value); // note: console is very slow
            v = v.replace(re, new_value);
        });

        if (v !== oldValue) {
            textNode.nodeValue = v;
        }
    });

}