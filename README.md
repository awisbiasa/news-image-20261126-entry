# The World · In One Frame — 26 November 2026

An entry for make.fun's *"Sum up 26 November's world news in one image"* bounty.

`main.ts` writes `entry.png`, a 1024×1024 PNG summing up the world's news of
Thursday 26 November 2026. It copies a fixed asset, so two runs are
byte-for-byte identical: no clock, no random number, no network.

## The picture

A night scene of Saudi Arabia's Ras Tanura refinery under missile attack is the
lead image, with the day's headline set over it. Eight briefs carry the rest of
the day across regions and fields.

| Story | Where | Source |
| --- | --- | --- |
| Houthi missiles and drones at Riyadh, Jeddah, Jazan and Ras Tanura; Brent ~$95 | Gulf | Al Jazeera, The National, Reuters/CNBC |
| Kim Jong Un orders wider tactical nuclear deployment | Korean peninsula | Al Jazeera, DW, AP |
| 34 countries tell Russia to stop battlefield riot-control gas after OPCW finding | Ukraine | Guardian, Reuters, AP, Kyiv Independent |
| US proposes Section 301 tariffs on 14 trading partners | Trade | Guardian, Politico, CNBC, Al Jazeera |
| Asia stocks rally on tariffs relief; Nvidia slides, S&P warns on governance | Markets | Reuters, CNBC, AP |
| Six consecutive days above 2 °C above pre-industrial | Climate | Guardian, BBC |
| Cairo fuel-tanker fire kills 31 | Africa | CNN, AP, Gulf News |
| EU summit fights over the 2028–34 budget and Ukraine aid | Europe | Euronews, Interfax |
| Bangladesh garment minimum wage up 36% after protests | South Asia | AP, Al Jazeera |

Also on the day, and left out of the image for space: SpaceX's FCC approval for
one million satellites, Israel's Eisenkot sealing a first coalition deal, the
Solomon Islands–Australia security treaty, and Egypt's bank and budget news.

## Run it

```
node main.ts            # writes /output/entry.png
OUTPUT_DIR=./out node main.ts
```

Node 22 or later, standard library only, no network.

## Licence

MIT. The artwork is original vector work; no third-party art, photographs or
characters are used.
