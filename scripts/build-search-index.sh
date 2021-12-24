#!/bin/bash

DIR=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
cd "$DIR"

# Start building the stork TOML
echo "BUILDING SEARCH-INDEX.TOML..."

cat << EOF > ./search-index.toml
[input]
base_directory = "../data"

EOF

# Loop through all data and 
DATA=../data/*/*.md

for filename in $DATA; do
  [ -e "$filename" ] || continue

  filename_regex='^..\/data\/(.+)\/(.+).md'

  if [[ $filename =~ $filename_regex ]]
  then
      route="${BASH_REMATCH[1]}"
      slug="${BASH_REMATCH[2]}"

      contents=$(cat "$filename")
      contents_regex="title: (.+)description:"
      title=$slug

      # Update title from Frontmatter if it exists
      if [[ $contents =~ $contents_regex ]]
      then
        title=$(echo ${BASH_REMATCH[1]} | tr -d '"')
      fi

      # Don't add second-brain to search index
      if [ "$route" != "second-brain" ]
      then
cat << EOF >> ./search-index.toml
[[input.files]]
path = "./${route}/${slug}.md"
url = "/${route}/${slug}"
title = "${title}"

EOF
      fi
  fi
done

# Finish up the stork TOML
cat << EOF >> ./search-index.toml
[output]
filename = "../public/search-index.st"
EOF

echo "FINISHED BUILDING SEARCH-INDEX.TOML..."

# Install stork
echo "INSTALLING STORK..."
wget https://files.stork-search.net/releases/v1.2.1/stork-ubuntu-latest -O ./stork
chmod +x ./stork

# Build the search index
echo "BUILDING SEARCH INDEX..."
./stork build --input search-index.toml

