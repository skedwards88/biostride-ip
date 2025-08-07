#!/bin/bash

# Usage: ./compress_images.sh path/to/image.jpg

if [ -z "$1" ]; then
  echo "Provide the path to file to use: $0 image.jpg"
  exit 1
fi

INPUT="$1"
FILENAME=$(basename "$INPUT")
NAME="${FILENAME%.*}"
DIR=$(dirname "$INPUT")
OUTDIR="$DIR/compressed"

# Create output dir if it doesn't exist
mkdir -p "$OUTDIR"

# Compress + resize (to width 1920, height auto)
cwebp -q 40 -m 6 -resize 1920 0 "$INPUT" -o "$OUTDIR/${NAME}.webp"

echo "Compressed images saved in $OUTDIR"
