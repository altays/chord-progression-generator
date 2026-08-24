#! /bin/bash

# variable examples
# rawHTML="poemaday.html"
# scrapedText="AsKar.txt"
# url="https://poets.org/poem-a-day"

# if [ "$1" = "a" ] 
# then
#     echo "route a"
#     node main.js a
# elif [ "$1" = "ct" ]
# then
#     echo "route b"
#     node main.js b
# else
#     echo "Please indicate a valid route."
# fi

# always needs to start with 's' - this is the starting chord
# 't' and 'r' are for 'travel' and 'resolution' chords

count=10
counter=0
NOW=${EPOCHSECONDS}

if [ "$1" = "chromatic" ] 
then
    # echo "chromatic progression"

    echo "==================" >> ./data/output/chord-output-$NOW.md
    echo "$LS" >> ./data/output/chord-output-$NOW.md

    while [ $counter -lt $count ]
    do 
        node index.js chromatic srtr >> ./data/output/chord-output-$NOW.md

        counter=`expr $counter + 1`
    done

    echo "$LS" >> ./data/output/chord-output-$NOW.md
    echo "==================" >> ./data/output/chord-output-$NOW.md

    
elif [ "$1" = "tonal" ]
then
    
    echo "==================" >> ./data/output/chord-output-$NOW.md
    echo "$LS" >> ./data/output/chord-output-$NOW.md

    while [ $counter -lt $count ]
    do 
        node index.js tonal >> ./data/output/chord-output-$NOW.md

        counter=`expr $counter + 1`
    done

    echo "$LS" >> ./data/output/chord-output-$NOW.md
    echo "==================" >> ./data/output/chord-output-$NOW.md


else
    echo "Please indicate a valid route."
fi


