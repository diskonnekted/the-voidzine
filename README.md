# THE VOID
> **"In Union With The Cold Nature. No Commerce. No Compromise."**

```
 ━━━━━┓━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓━━━━━
      ┃  ████████╗██╗  ██╗███████╗    ██╗   ██╗ ██████╗ ██╗██████╗  ┃
      ┃  ╚══██╔══╝██║  ██║██╔════╝    ██║   ██║██╔═══██╗██║██╔══██╗ ┃
      ┃     ██║   ███████║█████╗      ██║   ██║██║   ██║██║██║  ██║ ┃
      ┃     ██║   ██╔══██║██╔══╝      ╚██╗ ██╔╝██║   ██║██║██║  ██║ ┃
      ┃     ██║   ██║  ██║███████╗     ╚████╔╝ ╚██████╔╝██║██████╔╝ ┃
      ┃     ╚═╝   ╚═╝  ╚═╝╚══════╝      ╚═══╝   ╚═════╝ ╚═╝╚═════╝  ┃
 ━━━━━┛━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛━━━━━
```

**THE VOID** adalah website fanzine interaktif dan arsip digital bawah tanah (*underground*) yang didedikasikan untuk mendokumentasikan filosofi, sejarah, seni visual, dan musik era awal (*first wave*) dan gelombang kedua (*second wave*) **Black Metal**. 

Website ini dirancang secara khusus mengadopsi estetika visual **fanzine cetak tahun 90-an**—mentah (*raw*), monokromatis fotokopi (*photocopied high-contrast*), terpotong-potong, bertekstur kasar, dan bernada dingin menolak kemapanan digital modern.

---

## ⚡ Fitur Utama (Features)

### 1. Chronicles (Jurnal Filosofi)
Jurnal artikel esensial yang membedah akar ideologis pergerakan Black Metal secara mendalam:
*   **Corpse Paint**: Penyelidikan transendensi identitas spiritual di balik riasan wajah sinister.
*   **Perang Melawan Modernitas**: Kritik radikal filosofis menolak rasionalisme sekuler perkotaan.
*   **Meromantisasi Kematian**: Cara pandang kematian sebagai ritual epik dan pelarian dari kemunduran peradaban modern.
*   **Senjata Akustik Tradisional**: Makna nostalgia dan pra-industrialisasi di balik instrumen tradisional.

### 2. Voidcast Chronicles (Immersive Podcast)
Media pemutar podcast interaktif untuk mendengarkan transmisi audio fanzine:
*   Dipersenjatai dengan artwork kaset tape animasi yang berputar responsif ketika audio dimainkan.
*   **Real-time Canvas Visualizer**: Memanfaatkan *Web Audio API* untuk membaca frekuensi audio podcast secara langsung dan menggambar spektrum visual gotik monokrom secara real-time.
*   Pencegahan tabrakan audio terintegrasi (*anti-overlapping sound*).

### 3. The Vault (Interactive Cassette Deck)
Gerbang pemutar musik demo kaset pita kuno era gelombang awal dan kedua hasil salinan rekaman pita magnetik:
*   **5 Demo Pita Legendaris**:
    *   *Burzum* — Demo 1991
    *   *Darkthrone* — Land Of Frost (1988)
    *   *Samael* — Into The Infernal Storm Of Evil (1987)
    *   *Emperor* — Wrath of the Tyrant (1993)
    *   *Mayhem* — Pure Fucking Armageddon (1986)
*   Panel navigasi interaktif, kendali volume, *scrubber* durasi, putaran roda pita kaset (*reels*), dan canvas visualizer real-time.

### 4. Elder Runes Decoder (Penerjemah Runa)
Alat interaktif mistis untuk menerjemahkan teks alfabet Latin biasa menjadi deretan huruf runa kuno (**Elder Futhark Runes**) secara instan. Dilengkapi glosarium simbol runik lengkap makna spiritualnya (Fehu, Uruz, Thurisaz, dll.).

### 5. Covenant Store (Underground Market)
Daftar koleksi rilisan fisik (CD, Kaset, Vinyl) pribadi pemilik website yang dijual secara bawah tanah:
*   **Integrasi Discogs API**: Mengambil data koleksi secara langsung dari akun Discogs `oksigenhitam` dan menyaring hanya rilisan bergenre Black Metal secara dinamis.
*   Fitur cari (*live search*) dan saring format media (CD, Kaset, Vinyl).
*   **WhatsApp Ordering**: Integrasi tombol pesan instan dengan draf teks pesanan terisi otomatis berisi detail band, album, format, dan kode katalog rilis.

---

## 🛠️ Detail Teknis (Technical Specs)

Website ini menolak penggunaan framework modern yang berat dan berlebihan (*bloated*). Dibangun sepenuhnya secara minimalis menggunakan standar web murni:
*   **Core**: HTML5 Semantik & Vanilla Javascript (ES6+)
*   **Styling**: Vanilla CSS3 Custom Properties (CSS Variables) untuk performa memuat instan.
*   **Audio Engine**: *Web Audio API* untuk pemrosesan visualizer frekuensi dan synthesizer ambient soundscape.
*   **Data Integration**: Skrip ekstraktor berbasis PowerShell untuk integrasi Discogs API.

---

## 🚀 Cara Menjalankan (How to Run)

Website ini dirancang portabel dan dapat dijalankan secara instan tanpa proses kompilasi (*no build steps*).

1.  Clone repositori ini ke komputer lokal Anda:
    ```bash
    git clone https://github.com/diskonnekted/the-voidzine.git
    cd the-voidzine
    ```

2.  Jalankan server lokal.
    *   Menggunakan **NodeJS / npm**:
        ```bash
        npx serve .
        ```
    *   Menggunakan **Python**:
        ```bash
        python -m http.server 3000
        ```

3.  Buka browser Anda dan akses:
    ```
    http://localhost:3000
    ```

---

## 🕯️ Kredit & Sumber (Credits)
*   Seluruh konten audio podcast dan demo musik dimiliki oleh band masing-masing dan diarsipkan murni untuk tujuan dokumentasi budaya bawah tanah.
*   Data koleksi bersumber dari database publik **Discogs**.
*   Simbol-simbol runik diadaptasi dari tradisi alfabet rune kuno **Elder Futhark**.

```
THE VOID © 2026. ALL WRONGS RESERVED.
```
