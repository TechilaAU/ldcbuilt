# Hero Video Assets

Drop your hero video files here:

- `hero.mp4` — H.264, 1920x1080 recommended, 10-30 seconds, seamless loop, no audio track needed (will be muted)
- `hero.webm` — Optional VP9/AV1 alternative for better compression
- `../images/hero-poster.jpg` — Fallback poster image shown before video loads (1920x1080)

## Recommended specs

- **Resolution**: 1920x1080 minimum, 2560x1440 ideal
- **Length**: 10-20s looping
- **Bitrate**: ~4-6 Mbps for MP4 (keep file under 5MB if possible)
- **Content ideas**:
  - Aerial drone footage of a recently completed build
  - Slow pan across a completed home's exterior/facade
  - Construction site time-lapse
  - Slow dolly through a finished interior
  - B-roll of key details (hands on joinery, light through windows, etc.)

## Encoding recommendation

```bash
ffmpeg -i source.mov -vf "scale=1920:1080" -c:v libx264 -crf 23 -preset slow -an -movflags +faststart hero.mp4
ffmpeg -i source.mov -vf "scale=1920:1080" -c:v libvpx-vp9 -crf 32 -b:v 0 -an hero.webm
```

The `-an` flag strips audio (videos are muted anyway, saves bytes).
The `-movflags +faststart` is important for faster web playback.
