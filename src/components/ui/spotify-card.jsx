import { ExternalLink } from "lucide-react";

const PLAYLIST_ID = "2SULC9kN6Ls2Ciryk0jxWS";
const PLAYLIST_URL = `https://open.spotify.com/playlist/${PLAYLIST_ID}`;
const EMBED_URL = `https://open.spotify.com/embed/playlist/${PLAYLIST_ID}?utm_source=generator&theme=0`;

export default function SpotifyCard({ className = "" }) {
  return (
    <section
      className={`group relative w-full max-w-[470px] overflow-hidden rounded-xl border border-[rgba(255,255,255,0.07)] shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-[rgba(37,99,235,0.35)] hover:shadow-[0_0_30px_rgba(37,99,235,0.12)] ${className}`}
      style={{ background: "rgba(255,255,255,0.03)" }}
      aria-label="Spotify player"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "radial-gradient(circle at 50% 0%, rgba(37,99,235,0.08) 0%, transparent 70%)" }}
      />
      
      {/* ── Text Section ── */}
      <div className="relative p-6 pb-2 mt-2">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-3">
          Daily Rotation
        </h2>
        
        <p className="text-sm text-zinc-400 leading-relaxed mb-4">
          A curated collection of tracks that keep me in the zone and inspired while coding.
        </p>
      </div>

      {/* ── Spotify Iframe ── */}
      <div className="relative p-2 pt-0">
        <iframe
          title="Spotify Playlist"
          src={EMBED_URL}
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          className="relative block overflow-hidden rounded-xl border-0"
        />
      </div>
    </section>
  );
}
