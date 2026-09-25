# ScyterCorp — Design System

Dokumen ini adalah panduan resmi desain untuk website ScyterCorp (software house).
Tujuannya: memastikan setiap halaman, komponen, dan konten baru punya tampilan yang konsisten dengan identitas brand.

---

## 1. Brand Identity

**Nama:** ScyterCorp
**Industri:** Software House (jasa pengembangan software, portofolio, layanan)
**Karakter brand:** modern, tegas, teknikal, sedikit "sharp" — divisualkan lewat bentuk logo seperti kilat/goresan pena yang membentuk huruf "Y".
**Tone komunikasi:** profesional, percaya diri, tidak kaku (bisa sedikit bold/berani di copywriting).

### Logo
- Logogram: bentuk kilat emas yang membentuk huruf "Y", dipakai sebagai pengganti huruf "Y" pada wordmark "SC**Y**TER".
- Wordmark: **"SCYTER"** ditulis tebal (bold, huruf kapital, sans-serif geometris), **"CORP"** ditulis dengan gaya outline/light sebagai pelengkap — menciptakan kontras "berat vs ringan" dalam satu logo.
- Logogram boleh dipakai berdiri sendiri sebagai favicon/app icon/watermark.

### Logo Usage Rules
- Selalu beri clear space minimal setinggi logogram "Y" di semua sisi logo.
- Jangan mengubah rasio (stretch) logo.
- Di background terang → gunakan versi warna penuh (gold gradient + hitam/gold text).
- Di background gelap → gunakan versi gold gradient dengan wordmark putih.
- Jangan menaruh logo di atas foto/background yang ramai tanpa overlay/kontras yang cukup.
- Minimum size: logogram tidak boleh lebih kecil dari 24px tinggi agar detail lekukan tidak hilang.

---

## 2. Color Palette

Diambil langsung dari gradasi logo (sampled dari asset resmi).

### Primary — Gold Gradient
Warna utama brand. Dipakai untuk logo, aksen utama, CTA, highlight.

| Nama | Hex | Preview | Kegunaan |
|---|---|---|---|
| Gold 50 (Cream) | `#FFFBE6` | 🟨 (sangat terang) | Ujung gradient teratas, glow effect |
| Gold 100 | `#FFF4C2` | 🟨 | Highlight lembut, hover state ringan |
| Gold 300 | `#FFE873` | 🟨 | Transisi gradient |
| Gold 500 (Core) | `#FFD700` | 🟨 | **Warna utama brand** — logo, ikon, aksen |
| Gold 600 | `#F2C200` | 🟨 | Hover/active state dari elemen gold |
| Gold 700 (Deep) | `#D9A900` | 🟨 | Teks/border di atas background terang, kontras lebih aman |

**Brand Gradient (untuk logo & elemen dekoratif):**
```css
--gradient-brand: linear-gradient(180deg, #FFFBE6 0%, #FFE873 40%, #FFD700 100%);
```

### Neutral — Base
| Nama | Hex | Kegunaan |
|---|---|---|
| Ink / Black | `#0D0D0D` | Teks utama, background dark mode, wordmark "SCYTER" |
| Charcoal | `#1A1A1A` | Section background gelap, navbar dark |
| Graphite | `#3D3D3D` | Teks sekunder di light mode |
| Slate | `#7A7A7A` | Teks tersier / caption / placeholder |
| Border Grey | `#E5E5E5` | Divider, border card |
| Off White | `#FAFAFA` | Background utama (light mode) |
| Pure White | `#FFFFFF` | Card background, teks di atas dark bg |

### Semantic Colors
| Nama | Hex | Kegunaan |
|---|---|---|
| Success | `#2ECC71` | Status sukses, badge "selesai" |
| Warning | `#F5A623` | Status pending / perhatian |
| Error | `#E74C3C` | Error, validasi gagal |
| Info | `#3B82F6` | Notifikasi info, link sekunder |

> ⚠️ **Aturan:** Gold (`#FFD700`) TIDAK dipakai sebagai warna teks paragraf panjang di atas putih (kontras terlalu rendah, gagal accessibility AA). Untuk teks di atas putih gunakan `Gold 700 (#D9A900)` atau kombinasikan gold hanya untuk ikon/highlight, teks tetap Ink/Graphite.

---

## 3. Typography

### Font Pairing
- **Heading / Display:** Sans-serif geometris bold — contoh: `Poppins`, `Sora`, atau `Space Grotesk` (mengikuti kesan tebal wordmark "SCYTER").
- **Body text:** Sans-serif netral, mudah dibaca — contoh: `Inter` atau `Plus Jakarta Sans`.
- **Aksen/CORP-style (opsional):** Font dengan varian *Light/Outline* dari font heading yang sama, dipakai untuk sub-label kecil (meniru gaya "CORP" pada logo).

### Type Scale (contoh, base 16px)
| Level | Size | Weight | Line height |
|---|---|---|---|
| H1 / Hero | 56–64px | 800 (ExtraBold) | 1.1 |
| H2 | 40px | 700 (Bold) | 1.2 |
| H3 | 28px | 700 (Bold) | 1.3 |
| H4 | 20px | 600 (SemiBold) | 1.4 |
| Body Large | 18px | 400 (Regular) | 1.6 |
| Body | 16px | 400 (Regular) | 1.6 |
| Small / Caption | 13px | 500 (Medium) | 1.4 |
| Button/CTA text | 16px | 600 (SemiBold) | 1 |

### Aturan Teks
- Heading selalu Ink (`#0D0D0D`) di light mode, White di dark mode — jangan pakai gold untuk heading besar (silau/kontras kurang).
- Gold hanya untuk **satu kata/frasa kunci** dalam heading sebagai highlight (contoh: "Kami Membangun **Software** Masa Depan" — kata "Software" di-gold-kan).
- Hindari huruf kapital semua (UPPERCASE) untuk paragraf panjang.

---

## 4. Layout & Spacing

- Gunakan sistem spacing berbasis kelipatan **8px** (8, 16, 24, 32, 48, 64, 96, 128).
- Max content width: `1280px`, dengan padding horizontal minimal `24px` di mobile, `80px` di desktop.
- Grid: 12-column grid untuk desktop, 4-column untuk mobile.
- Section spacing (jarak antar section besar): minimal `96px` di desktop, `64px` di mobile.

### Border Radius
| Elemen | Radius |
|---|---|
| Button | 8–10px |
| Card | 16px |
| Input field | 8px |
| Badge/Pill | 999px (full round) |
| Image/Thumbnail | 12–16px |

### Shadow / Elevation
```css
--shadow-sm: 0 1px 2px rgba(0,0,0,0.06);
--shadow-md: 0 4px 12px rgba(0,0,0,0.08);
--shadow-lg: 0 12px 32px rgba(0,0,0,0.12);
--shadow-gold-glow: 0 0 24px rgba(255,215,0,0.35); /* untuk hover CTA/logo */
```

---

## 5. Komponen UI

### Button
- **Primary:** background gold gradient (`--gradient-brand`), teks Ink (`#0D0D0D`) — bukan putih, karena kontras terbaik ada di atas gold.
- **Secondary:** background transparan, border 1.5px Ink/White, teks mengikuti mode.
- **Ghost/Tertiary:** tanpa background/border, teks gold-700 dengan underline saat hover.
- Hover state: naikkan brightness sedikit + `--shadow-gold-glow`.
- Disabled: opacity 40%, cursor not-allowed.

### Card (Portofolio / Layanan)
- Background putih (light) / charcoal (dark).
- Border tipis `1px solid var(--border-grey)` atau shadow-md tanpa border.
- Radius 16px, padding 24px.
- Hover: elevasi naik ke shadow-lg + sedikit translateY(-4px).
- Aksen gold di icon/badge kategori, bukan di seluruh card.

### Navbar
- Sticky, background blur (glassmorphism tipis) saat scroll.
- Logo di kiri, menu di tengah/kanan, CTA button ("Konsultasi Gratis" / "Hubungi Kami") gold di paling kanan.

### Badge / Tag (contoh: tech stack, kategori layanan)
- Pill shape, background gold-100, teks gold-700, atau outline style mengikuti aksen "CORP".

---

## 6. Ikonografi & Ilustrasi

- Gaya ikon: **line icon** (stroke 1.5–2px), sudut sedikit tajam (mencerminkan bentuk logogram yang runcing seperti kilat) — hindari ikon yang terlalu bulat/lucu (tidak sesuai brand yang tegas/teknikal).
- Ikon aktif/hover → isi (filled) dengan warna gold.
- Untuk elemen dekoratif section (background pattern), bisa gunakan siluet logogram "Y" dengan opacity rendah (5–10%) sebagai watermark, tidak untuk isi utama.

---

## 7. Motion / Interaksi

- Durasi transisi standar: `200–300ms`, easing `ease-in-out` atau `cubic-bezier(0.4, 0, 0.2, 1)`.
- Hover elemen interaktif: scale 1.02–1.05 atau glow gold, bukan perubahan warna drastis.
- Scroll-reveal untuk section (fade + translateY 16px) dipakai secukupnya, jangan berlebihan.
- Loading state: skeleton shimmer dengan tone gold-100 → gold-50.

---

## 8. Dark Mode

| Elemen | Light Mode | Dark Mode |
|---|---|---|
| Background | `#FAFAFA` | `#0D0D0D` |
| Surface/Card | `#FFFFFF` | `#1A1A1A` |
| Teks utama | `#0D0D0D` | `#FAFAFA` |
| Teks sekunder | `#3D3D3D` | `#B3B3B3` |
| Aksen | Gold 500/700 | Gold 500 (lebih menonjol di dark) |
| Border | `#E5E5E5` | `#2E2E2E` |

Gold justru terlihat lebih "mewah" di dark mode — pertimbangkan dark mode sebagai mode utama untuk hero section jika ingin kesan premium/teknikal yang lebih kuat.

---

## 9. Do & Don't

**Do:**
- Gunakan gold sebagai aksen/highlight, bukan warna dominan di seluruh halaman.
- Jaga rasio 60-30-10 → 60% neutral (putih/hitam), 30% neutral sekunder (abu-abu), 10% gold aksen.
- Konsisten pakai satu font heading & satu font body di seluruh halaman.

**Don't:**
- Jangan pakai gold sebagai background section penuh dengan teks hitam kecil di atasnya (silau, kontras buruk).
- Jangan mencampur lebih dari 2 keluarga font.
- Jangan mengubah bentuk/proporsi logogram "Y" untuk kebutuhan dekoratif.

---

## 10. Referensi Warna Cepat (CSS Variables)

```css
:root {
  /* Gold */
  --gold-50: #FFFBE6;
  --gold-100: #FFF4C2;
  --gold-300: #FFE873;
  --gold-500: #FFD700;
  --gold-600: #F2C200;
  --gold-700: #D9A900;

  /* Neutral */
  --ink: #0D0D0D;
  --charcoal: #1A1A1A;
  --graphite: #3D3D3D;
  --slate: #7A7A7A;
  --border-grey: #E5E5E5;
  --off-white: #FAFAFA;
  --white: #FFFFFF;

  /* Semantic */
  --success: #2ECC71;
  --warning: #F5A623;
  --error: #E74C3C;
  --info: #3B82F6;

  /* Gradient */
  --gradient-brand: linear-gradient(180deg, #FFFBE6 0%, #FFE873 40%, #FFD700 100%);
}
```

---

*Dokumen ini bisa terus diperbarui seiring berkembangnya website ScyterCorp. Simpan sebagai acuan utama sebelum membuat komponen atau halaman baru.*