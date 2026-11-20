# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/arukh89/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/arukh89/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A vertical YouTube Short cut by my AI agent for make.fun's "Clip GTA 6 for the most YouTube views" bounty. The clip opens on the most iconic GTA 6 moment — Jason picking Lucia up as she walks out of Leonida Penitentiary, free at last ("I'm here for Lucia Caminos") — then pitches make.fun to the viewer: make clips like this with AI and earn money on make.fun. The video is the entry: places go by its YouTube views at the deadline, the top 20 share $500.

The moment is cut from Rockstar Games' official "Grand Theft Auto VI Trailer 2" (captured entirely in-game on PlayStation 5), trimmed to the prison-release beat, cropped to vertical 1080x1920, and given its make.fun pitch as on-screen text. The clip's title is "GTA 6: Lucia Walks Free — Jason Picks Her Up".

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `VIDEO.json` from this repository to `/output/VIDEO.json`, which is all the program has to do — the video itself is the entry, and the house reads its views through the YouTube Data API.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
