/**
 * Hand-drawn inline SVG icons — no external icon libraries.
 * All icons are decorative (`aria-hidden`); accompanying text carries meaning.
 */

import type { ReactNode } from "react";

interface IconProps {
  className?: string;
}

function StrokeIcon({
  className,
  children,
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </StrokeIcon>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="m6 6 12 12M18 6 6 18" />
    </StrokeIcon>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M4 12h16m-6-6 6 6-6 6" />
    </StrokeIcon>
  );
}

export function DropletIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M12 3s6 6.2 6 10.2a6 6 0 1 1-12 0C6 9.2 12 3 12 3Z" />
    </StrokeIcon>
  );
}

export function BeakerIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M9 3h6M10 3v5.5L5.5 17a3 3 0 0 0 2.8 4h7.4a3 3 0 0 0 2.8-4L14 8.5V3" />
      <path d="M7.5 13.5h9" />
    </StrokeIcon>
  );
}

export function BoltIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </StrokeIcon>
  );
}

export function LinkIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1.5 1.5" />
      <path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7L12.5 18.5" />
    </StrokeIcon>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <circle cx={12} cy={12} r={9} />
      <path d="M12 7v5l3 2" />
    </StrokeIcon>
  );
}

export function ChatIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.5 0-3-.4-4.2-1L3 20l1-5.3A8.5 8.5 0 1 1 21 11.5Z" />
    </StrokeIcon>
  );
}

export function ClipboardIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M15 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x={9} y={2} width={6} height={4} rx={1} />
      <path d="M9 12h6M9 16h4" />
    </StrokeIcon>
  );
}

export function TagIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M3 12V4h8l10 9.5-8.5 8L3 12Z" />
      <circle cx={7.5} cy={8.5} r={1.5} />
    </StrokeIcon>
  );
}

export function CheckCircleIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <circle cx={12} cy={12} r={9} />
      <path d="m8.5 12.5 2.5 2.5 5-5.5" />
    </StrokeIcon>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="m5 13 4 4L19 7" />
    </StrokeIcon>
  );
}

export function MillIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M3 21V10l5 3.5V10l5 3.5V4h5.5L20 21H3Z" />
      <path d="M2 21h20" />
    </StrokeIcon>
  );
}

export function ShirtIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="m8 4-4.5 2.7L6 10.2 8 9v11h8V9l2 1.2 2.5-3.5L16 4a4 4 0 0 1-8 0Z" />
    </StrokeIcon>
  );
}

export function GlobeIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <circle cx={12} cy={12} r={9} />
      <path d="M3 12h18" />
      <path d="M12 3a13.5 13.5 0 0 1 0 18 13.5 13.5 0 0 1 0-18Z" />
    </StrokeIcon>
  );
}

export function BoxIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M21 8 12 3 3 8v8l9 5 9-5V8Z" />
      <path d="m3 8 9 5 9-5M12 13v8" />
    </StrokeIcon>
  );
}

export function LayersIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12.5 9 5 9-5" />
      <path d="m3 16.5 9 5 9-5" />
    </StrokeIcon>
  );
}
