echo "$(<veg.js)" | perl -pe 's/\sto\s.+",/,/g' | perl -pe 's/"(\d)/\1/g'