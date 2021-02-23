# guitar

The guitar website I always felt was missing - for those looking to master the fretboard, scales, chords and the guitar in general.

https://torgeir.github.io/guitar/

## Plans

- [x] show the notes of a guitar neck
- [x] visualize scales on the neck
- [x] visualize different positions of scales on the neck
- [x] support a variety of scales
- [ ] show what notes selected scales have in common
- [x] visualize root, thirds, fifths, sevents in each position of each scale 
- [ ] visualize ninths, thirteens in each position of each scale
- [ ] an easy to use drum machine with support for more interesting measures than 4/4

## Setup

Install rum support for clj-kondo.

`clojure -A:clj-kondo/config --lib rum`

Jack in via `cider-jack-in-clj&cljs` from a cljs file or run `clojure
-A:fig:build` in the terminal.
