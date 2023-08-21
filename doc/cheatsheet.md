# wwwBasic cheat sheet

(Information below was obtained by skimming the source code, so it's likely to be incomplete and/or inexact.)

## Data types

| Type name | Suffix |
| --------- | ------ |
| byte   |
| short  | %
| long   | &
| single | !
| double | #
| string | $

User defined types are supported.

## Screen modes

The default mode is `screen 0` as usual.

All modes are stretched to a 4:3 aspect ratio.

| Mode # | Resolution | Font height | Colors |
| ------ | -----------| ----------- | ------ |
| 0 | 640x200 | 8 | 16
| 1 | 320x200 | 8 | 4
| 2 | 640x200 | 8 | 2
| 7 | 320x200 | 8 | 16
| 8 | 640x200 | 8 | 16
| 9 | 640x350 | 14 | 16
| 11 | 640x480 | 16 | 2
| 12 | 640x480 | 16 | 16
| 13 | 320x200 | 8 | 16m
| 14 | 320x240 | 16 | 16m
| 15 | 400x300 | 16 | 16m
| 16 | 512x384 | 16 | 16m
| 17 | 640x400 | 16 | 16m
| 18 | 640x480 | 16 | 16m
| 19 | 800x600 | 16 | 16m
| 20 | 1024x768 | 16 | 16m
| 21 | 1280x1024 | 16 | 16m

