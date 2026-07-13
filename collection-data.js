const collectionData = [
    {
        "artist":  "Aquilus",
        "id":  7938487,
        "styles":  [
                       "Folk Rock",
                       "Neo-Classical",
                       "Black Metal"
                   ],
        "year":  2015,
        "label":  "A Sad Sadness Song",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/aSV0yqin3IV0efEW8yCy4A6tLaYCijPuGJcuGEexAMs/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc5Mzg0/ODctMTczNjUyNjk2/MS03NTI5LmpwZWc.jpeg",
        "title":  "Griseus",
        "catno":  "SSS013"
    },
    {
        "artist":  "Goatpsalm",
        "id":  3464601,
        "styles":  [
                       "Dark Ambient",
                       "Black Metal",
                       "Industrial"
                   ],
        "year":  2012,
        "label":  "Aesthetic Death",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/fW_f-OhjUOyWqLP9TGT98jFHgxW4BqMsojFnfH1gHps/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM0NjQ2/MDEtMTMzMTQwOTg4/MC5qcGVn.jpeg",
        "title":  "Erset La Tari",
        "catno":  "ADCD023"
    },
    {
        "artist":  "Ordo Blasphemus",
        "id":  7018185,
        "styles":  [
                       "Black Metal"
                   ],
        "year":  2010,
        "label":  "Antiq Records",
        "format":  "CDr",
        "thumb":  "https://i.discogs.com/ib9-btny0ZFgJSTtL2TkVHATRPBodn3Van88A3nOFGI/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTcwMTgx/ODUtMTQzMTc5NTIz/Ny0xMzg3LmpwZWc.jpeg",
        "title":  "Chaotic Loom",
        "catno":  "ANTIQ006"
    },
    {
        "artist":  "Shining",
        "id":  2577696,
        "styles":  [
                       "Dark Ambient",
                       "Black Metal"
                   ],
        "year":  2008,
        "label":  "Avantgarde Music",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/Nao4T7AUe_6fPv3RWV04RzywVk_spVYqCRHdBpvrmZo/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI1Nzc2/OTYtMTYyMzA5OTMz/My03NDM5LmpwZWc.jpeg",
        "title":  "III - Angst, SjÃ¤lvdestruktivitetens Emissarie",
        "catno":  "AV066-JK"
    },
    {
        "artist":  "Raventale",
        "id":  7612983,
        "styles":  [
                       "Black Metal"
                   ],
        "year":  2015,
        "label":  "BadMoodMan Music",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/mAcugvy4uYYO7F9YZcnuhrzy4ak3Frdk05yjcm35dF4/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc2MTI5/ODMtMTQ0NTE2MDc1/NC03Njg2LmpwZWc.jpeg",
        "title":  "Dark Substance Of Dharma",
        "catno":  "BMM. 073-15"
    },
    {
        "artist":  "Vindland",
        "id":  10254431,
        "styles":  [
                       "Black Metal",
                       "Avantgarde"
                   ],
        "year":  2018,
        "label":  "Black Lion Records",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/s83fDpVhSI8lW3Vw6nZi3wA9bFNExyCe3qd5u7X1CL8/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMjU0/NDMxLTE0OTc2MTMz/MjItNzIxMy5qcGVn.jpeg",
        "title":  "Hanter Savet",
        "catno":  "BLP0037"
    },
    {
        "artist":  "Dimmu Borgir",
        "id":  3254996,
        "styles":  [
                       "Black Metal"
                   ],
        "year":  1996,
        "label":  "Cacophonous Records",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/PYWoOivxpq5IrKB8535Y_LoMVPvy4Ep59eyeFDVnWPs/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMyNTQ5/OTYtMTMyMjU1OTc0/My5qcGVn.jpeg",
        "title":  "StormblÃ¥st",
        "catno":  "NIHIL 12CD"
    },
    {
        "artist":  "Emperor",
        "id":  372997,
        "styles":  [
                       "Black Metal",
                       "Symphonic Metal"
                   ],
        "year":  1997,
        "label":  "Candlelight Records",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/hgQtlOyfu5D9EuIiJQcAm03QguvCo3-6oqdZb-Ju5RM/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM3Mjk5/Ny0xMzYwMjY2NDI5/LTE3MDguanBlZw.jpeg",
        "title":  "Anthems To The Welkin At Dusk",
        "catno":  "Candle023CD"
    },
    {
        "artist":  "Krieg",
        "id":  6480831,
        "styles":  [
                       "Black Metal"
                   ],
        "year":  2014,
        "label":  "Candlelight Records",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/G3P-N_mSchXe020wfFIWdvNHNsBsarLw7wkyC2DcqoE/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY0ODA4/MzEtMTQyMDI3MjA2/Ny0zMjcyLmpwZWc.jpeg",
        "title":  "Transient",
        "catno":  "CANDLE437CD"
    },
    {
        "artist":  "Dawn",
        "id":  5604539,
        "styles":  [
                       "Black Metal",
                       "Melodic Death Metal"
                   ],
        "year":  2014,
        "label":  "Century Media",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/5L4coIMEyg1xsmsZ89t_Drz43WDNPoN4i8XEiT5DMAg/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU2MDQ1/MzktMTM5ODA5NTk0/MS00NTM4LmpwZWc.jpeg",
        "title":  "NÃ¦r SÃ³len Gar NiÃ¾er For Evogher",
        "catno":  "9984162"
    },
    {
        "artist":  "Perennial Isolation",
        "id":  9534342,
        "styles":  [
                       "Depressive Black Metal"
                   ],
        "year":  2016,
        "label":  "Darkwoods",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/fChI5ZLYiYUGRvzws2hALqGoGc_ucnlH2K2ix5ntYyc/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk1MzQz/NDItMTQ4MzEzOTM3/NC0xMjY4LmpwZWc.jpeg",
        "title":  "Epiphanies Of The Orphaned Light",
        "catno":  "FLAMMA XI CD"
    },
    {
        "artist":  "Skyforest",
        "id":  9762849,
        "styles":  [
                       "Atmospheric Black Metal"
                   ],
        "year":  2017,
        "label":  "Depressive Illusions Records",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/1cX5wwosAkN0gc5eAF6rLQ6BO8y6C4J--EIBcv8Kv6E/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk3NjI4/NDktMTY2NzEzNDUw/OC01Nzc5LmpwZWc.jpeg",
        "title":  "Aftermath",
        "catno":  "cut 2605"
    },
    {
        "artist":  "Nachtreich",
        "id":  6445535,
        "styles":  [
                       "Black Metal",
                       "Neo-Classical"
                   ],
        "year":  2014,
        "label":  "Eihwaz Recordings",
        "format":  "Vinyl",
        "thumb":  "https://i.discogs.com/KELz1DVrubSs8_RIqEsc7lbwteG_4_YdVIQD5T14hSY/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY0NDU1/MzUtMTQxOTM5OTIz/NC05NzM2LmpwZWc.jpeg",
        "title":  "The Quivering Lights",
        "catno":  "ER004"
    },
    {
        "artist":  "Uada",
        "id":  8368874,
        "styles":  [
                       "Black Metal"
                   ],
        "year":  2016,
        "label":  "Eisenwald Tonschmiede",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/sEcwrMQKD9VjAr9XVRdPYifIWQGvmL74qArfLeLu-8k/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTgzNjg4/NzQtMTc3MDk4NzEw/MC0zNDY3LmpwZWc.jpeg",
        "title":  "Devoid Of Light",
        "catno":  "Eisen104"
    },
    {
        "artist":  "Nekros Manteia",
        "id":  2135686,
        "styles":  [
                       "Black Metal"
                   ],
        "year":  2010,
        "label":  "Fall Of Nature Records",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/CwBxGOLEPJwiNQTIw0Gaz4Ip1dHjFeiL2qUnHT-54HQ/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxMzU2/ODYtMTcxMzE5NjM2/Ny01OTM3LmpwZWc.jpeg",
        "title":  "Deus Otiosus",
        "catno":  "FN03"
    },
    {
        "artist":  "Aeternus",
        "id":  770065,
        "styles":  [
                       "Black Metal",
                       "Death Metal"
                   ],
        "year":  1998,
        "label":  "Hammerheart Records",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/dB3V-fTlBVGvq_ULirFuvOPSBW982KYLM9eMevFKXEE/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc3MDA2/NS0xMjc2MTQ5NTc4/LmpwZWc.jpeg",
        "title":  "Dark Sorcery",
        "catno":  "HHR 018"
    },
    {
        "artist":  "Troll",
        "id":  4331707,
        "styles":  [
                       "Black Metal"
                   ],
        "year":  0,
        "label":  "Head Not Found",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/wRKhIRQGKOMPAbY3-QBsvR_9jVCCw86nnCNEqqbSXEM/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQzMzE3/MDctMTM2MTk2OTY3/Mi00NTE0LmpwZWc.jpeg",
        "title":  "Drep De Kristne",
        "catno":  "HNF042"
    },
    {
        "artist":  "Troll",
        "id":  1094769,
        "styles":  [
                       "Black Metal",
                       "Symphonic Metal"
                   ],
        "year":  0,
        "label":  "Head Not Found",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/qEL9JwcXf9rsIkLu_EhYighFcS5a3IlkKLxCdreFF5Q/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwOTQ3/NjktMTMzNjI1NDM2/Ni5qcGVn.jpeg",
        "title":  "Drep De Kristne",
        "catno":  "HNF042"
    },
    {
        "artist":  "Styggmyr",
        "id":  1942332,
        "styles":  [
                       "Black Metal",
                       "Death Metal"
                   ],
        "year":  2008,
        "label":  "Heidenwut Productions",
        "format":  "Vinyl",
        "thumb":  "https://i.discogs.com/knuK4SbI8XODnVu2dPsuxqpp2LqhLZAziWgZXbW6bqA/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5NDIz/MzItMTUyNjI4MTI1/NS0xODMwLmpwZWc.jpeg",
        "title":  "Sathanas Supreme",
        "catno":  "HP003"
    },
    {
        "artist":  "Pure Wrath",
        "id":  9863708,
        "styles":  [
                       "Atmospheric Black Metal"
                   ],
        "year":  2017,
        "label":  "Hitam Kelam",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/ryptQP1g92w_DsumpWWyw0A27aWalNfd0peG4qki8gQ/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk4NjM3/MDgtMTU2ODkxNDU2/NC03NTc3LmpwZWc.jpeg",
        "title":  "Ascetic Eventide ",
        "catno":  "HKCD021"
    },
    {
        "artist":  "Spectral Lore",
        "id":  15661359,
        "styles":  [
                       "Black Metal",
                       "Avantgarde"
                   ],
        "year":  2020,
        "label":  "I, Voidhanger Records",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/EGMc_fYUjLsLVLYPzjLYILnaLdsOXF30-eLB73pdRd8/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1NjYx/MzU5LTE1OTU0NDM5/MzYtNzI3MS5qcGVn.jpeg",
        "title":  "Gnosis",
        "catno":  "IVR050B"
    },
    {
        "artist":  "Spectral Lore",
        "id":  7748770,
        "styles":  [
                       "Black Metal",
                       "Avantgarde"
                   ],
        "year":  2015,
        "label":  "I, Voidhanger Records",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/FNzmPVvkIL9N3VWst-vSsVOsm0K-4-EIWIXTDeOgwcg/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc3NDg3/NzAtMTczMTI1MDI0/My05MzEzLmpwZWc.jpeg",
        "title":  "Gnosis",
        "catno":  "IVR050"
    },
    {
        "artist":  "Gehenna",
        "id":  6172445,
        "styles":  [
                       "Black Metal"
                   ],
        "year":  2014,
        "label":  "Indie Recordings",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/dyvV-NHX7x9bLYZbuNqc3V3lQh0NVWyTKWWT_-VvZd4/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYxNzI0/NDUtMTQxMjg3MzQ4/MC00MzQ4LmpwZWc.jpeg",
        "title":  "First Spell",
        "catno":  "INDIE012CD"
    },
    {
        "artist":  "Ill Omen",
        "id":  8724099,
        "styles":  [
                       "Black Metal",
                       "Death Metal"
                   ],
        "year":  2016,
        "label":  "Iron Bonehead Productions",
        "format":  "Vinyl",
        "thumb":  "https://i.discogs.com/UM6BXRTmw0ue1PgCb6RxPK7h-nNyLGIIoCiwasu7hL4/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg3MjQw/OTktMTUwODI3OTM0/MS0yMTM0LmpwZWc.jpeg",
        "title":  "Pestilential Hierophanies",
        "catno":  "IBP287"
    },
    {
        "artist":  "Vuohivasara",
        "id":  2728264,
        "styles":  [
                       "Black Metal"
                   ],
        "year":  2007,
        "label":  "Iron, Blood \u0026 Death Corp.",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/vSpb8I3m-_LOAyNe-BrfuIXEKRE05dJeKASvE1kIOLA/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3Mjgy/NjQtMTI5ODMzNTIx/Mi5qcGVn.jpeg",
        "title":  "The Sigil",
        "catno":  "IBDC66606"
    },
    {
        "artist":  "Illnath",
        "id":  1991579,
        "styles":  [
                       "Black Metal",
                       "Symphonic Metal"
                   ],
        "year":  2006,
        "label":  "Irond",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/lF3deRbfHHj_yJy5VcKLp3hINBivyEE0LsjFptkqsX0/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5OTE1/NzktMTI3MDY4MTAy/NS5qcGVn.jpeg",
        "title":  "Second Skin Of Harlequin",
        "catno":  "IROND CD 06-1221"
    },
    {
        "artist":  "Taake",
        "id":  3513625,
        "styles":  [
                       "Black Metal"
                   ],
        "year":  0,
        "label":  "Karisma Records",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/2RcPcSwIp-k33Vn2nNv4bgjCMTIF_moNFTf9IcctIuI/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM1MTM2/MjUtMTcxOTIwNzI2/OS02MDg1LmpwZWc.jpeg",
        "title":  "Taake",
        "catno":  "KAR043"
    },
    {
        "artist":  "Thy Serpent",
        "id":  8030801,
        "styles":  [
                       "Black Metal"
                   ],
        "year":  2016,
        "label":  "KVLT",
        "format":  "Vinyl",
        "thumb":  "https://i.discogs.com/pu3oK8OYW2paHrnig6dF7c7TwPNhTCedyszGX5SP8EQ/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTgwMzA4/MDEtMTYyMzE3NjI1/Ni02NTMxLmpwZWc.jpeg",
        "title":  "Forests Of Witchery",
        "catno":  "KVLT013LP"
    },
    {
        "artist":  "Aeba",
        "id":  4946198,
        "styles":  [
                       "Black Metal"
                   ],
        "year":  1998,
        "label":  "Last Episode",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/jZO_5Zu0oVNxxtyFXUkEPxmQwetz6EuOyaRl8s7gL1M/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ5NDYx/OTgtMTczODE1MDQ5/NC00NzU1LmpwZWc.jpeg",
        "title":  "Im Schattenreich...",
        "catno":  "LEP 024"
    },
    {
        "artist":  "Violet Cold",
        "id":  8446189,
        "styles":  [
                       "Atmospheric Black Metal",
                       "Depressive Black Metal",
                       "Experimental",
                       "Post-Metal",
                       "Blackgaze"
                   ],
        "year":  2016,
        "label":  "Loony Tunes Records",
        "format":  "Vinyl",
        "thumb":  "https://i.discogs.com/LYD7e0n-tqaz07n9_LsjVd3rfsZ0NRfHzwfEX7oVaWk/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg0NDYx/ODktMTY5MDEzODky/NS04MTUxLmpwZWc.jpeg",
        "title":  "Desperate Dreams",
        "catno":  "TUNE 50"
    },
    {
        "artist":  "Lebensabend",
        "id":  4675276,
        "styles":  [
                       "Black Metal"
                   ],
        "year":  2013,
        "label":  "Margin Art Records",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/5f3eWE426P7rMI6ZHJ2NdCUV4vk357qIGM1olyKpg6Y/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ2NzUy/NzYtMTQyMTc3OTM2/Ni03MzE1LmpwZWc.jpeg",
        "title":  "Blood Is Always Nameless",
        "catno":  "MAR 010"
    },
    {
        "artist":  "Rexor",
        "id":  3500976,
        "styles":  [
                       "Black Metal"
                   ],
        "year":  2012,
        "label":  "Metallic Media",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/N-FpsVBoWJyZV4MGiyMxNsUSnrCUH2t37CrPiLKPv7U/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM1MDA5/NzYtMTc3Njc4Mjc4/Mi04NDkwLmpwZWc.jpeg",
        "title":  "Nox Obscura Sortis",
        "catno":  "METALLIC 008"
    },
    {
        "artist":  "Burzum",
        "id":  5551211,
        "styles":  [
                       "Black Metal",
                       "Dark Ambient"
                   ],
        "year":  0,
        "label":  "Misanthropy Records",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/HB839iWZpbBlLLYOxn3xQ73AHDzWfiM8UGZeqaIzVqc/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU1NTEy/MTEtMTc2NzgwMzcy/NC04NDI2LmpwZWc.jpeg",
        "title":  "Det Som Engang Var",
        "catno":  "AMAZON 002"
    },
    {
        "artist":  "Setherial",
        "id":  7280570,
        "styles":  [
                       "Black Metal"
                   ],
        "year":  1998,
        "label":  "Napalm Records",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/xd0mEnhlVe4ua-HUFUMoTgCGNDMMm_2ZJ4LoC3pfwVU/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTcyODA1/NzAtMTQzNzkxMjUx/OC02MzY4LmpwZWc.jpeg",
        "title":  "Nord...",
        "catno":  "NPR 017"
    },
    {
        "artist":  "Vintersorg",
        "id":  3063335,
        "styles":  [
                       "Black Metal",
                       "Viking Metal",
                       "Folk Metal"
                   ],
        "year":  2011,
        "label":  "Napalm Records",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/Cep-fNebw00l0PiNSg_7_YTKLL_So6C8tcwUEJv719k/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMwNjMz/MzUtMTQ1NzYyMjEx/MC00MTMyLmpwZWc.jpeg",
        "title":  "Jordpuls",
        "catno":  "NPR 367"
    },
    {
        "artist":  "Dismal Euphony",
        "id":  14601674,
        "styles":  [
                       "Black Metal"
                   ],
        "year":  0,
        "label":  "Napalm Records",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/pNO4YpqEv_0ZyMyxCA19mtwRWfwfSZWeGAH7wWwkYjU/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0NjAx/Njc0LTE2MDA1MTIx/NzYtNDk3NC5qcGVn.jpeg",
        "title":  "Dismal Euphony",
        "catno":  "NPR018"
    },
    {
        "artist":  "Summoning",
        "id":  369942,
        "styles":  [
                       "Black Metal",
                       "Symphonic Metal",
                       "Atmospheric Black Metal"
                   ],
        "year":  2001,
        "label":  "Napalm Records",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/MZ7UROgJHoGBAetlUfyBK663aT0M8dR7VpRdC8eKKds/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM2OTk0/Mi0xMTI3MDM2ODcz/LmpwZWc.jpeg",
        "title":  "Let Mortal Heroes Sing Your Fame",
        "catno":  "NPR097"
    },
    {
        "artist":  "Wormwood",
        "id":  9724118,
        "styles":  [
                       "Black Metal",
                       "Folk Metal",
                       "Melodic Death Metal"
                   ],
        "year":  2017,
        "label":  "Non Serviam Records",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/MlouvUAd5ka4VAra9FO2ZW8A2vdwDlfn4odQC3tLAgg/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk3MjQx/MTgtMTQ4NTM2NjMx/My04MDU1LmpwZWc.jpeg",
        "title":  "Ghostlands - Wounds From A Bleeding Earth",
        "catno":  "NSR 016"
    },
    {
        "artist":  "MgÅa",
        "id":  7396815,
        "styles":  [
                       "Black Metal"
                   ],
        "year":  2015,
        "label":  "Northern Heritage",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/8nrf7panV4Vh5yZLcrpvJ7MKLnm0x_6ONBLylO8wV-c/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTczOTY4/MTUtMTQ0MDYwOTky/MC04NTEzLmpwZWc.jpeg",
        "title":  "Exercises In Futility",
        "catno":  "NH-089"
    },
    {
        "artist":  "Heretoir",
        "id":  10264266,
        "styles":  [
                       "Black Metal",
                       "Shoegaze"
                   ],
        "year":  2017,
        "label":  "Northern Silence Productions",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/qZCmV_AUgU06sjm6nFBsqehbc__GB-aMCcJBZS-8w3w/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMjY0/MjY2LTE0OTQzMzY1/NzUtMzAxNC5qcGVn.jpeg",
        "title":  "The Circle",
        "catno":  "NSP 149"
    },
    {
        "artist":  "Saor",
        "id":  9339377,
        "styles":  [
                       "Atmospheric Black Metal",
                       "Folk Metal"
                   ],
        "year":  2016,
        "label":  "Northern Silence Productions",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/M2Oz73KHffbNJ2htp9A1KdvH5rE_Pg8op6Ldpl-l3Fg/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTkzMzkz/NzctMTQ3ODg3ODAz/Ny00MjMwLmpwZWc.jpeg",
        "title":  "Guardians",
        "catno":  "NSP 145"
    },
    {
        "artist":  "Woods Of Desolation",
        "id":  2740305,
        "styles":  [
                       "Atmospheric Black Metal",
                       "Depressive Black Metal"
                   ],
        "year":  2011,
        "label":  "Northern Silence Productions",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/jpODsEjcAKRXYpFNGVTkI8I7cO1OMJ4AoPbXB2PRLqA/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDAz/MDUtMTI5ODg5MDc4/OC5qcGVn.jpeg",
        "title":  "Torn Beyond Reason",
        "catno":  "NSP100"
    },
    {
        "artist":  "Nokturnal Mortum",
        "id":  8514549,
        "styles":  [
                       "Black Metal"
                   ],
        "year":  0,
        "label":  "Nuclear Blast",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/8MTLNDmLgIzDExrYjuvwj9ddha0g6OdfOa6AjMr2_WI/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg1MTQ1/NDktMTQ2MzQ3NTI0/Ni00MTUxLmpwZWc.jpeg",
        "title":  "Goat Horns",
        "catno":  "NB 355"
    },
    {
        "artist":  "The Abyss",
        "id":  3768000,
        "styles":  [
                       "Black Metal"
                   ],
        "year":  1996,
        "label":  "Nuclear Blast America",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/65i73Y2fwp0iQ41z2VysMv4n3BaNrhgG2T14f5ZoZak/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM3Njgw/MDAtMTM0MzYwNzIx/Mi0xMTg4LmpwZWc.jpeg",
        "title":  "Summon The Beast",
        "catno":  "NBA 6209-2"
    },
    {
        "artist":  "Glaciation",
        "id":  6681208,
        "styles":  [
                       "Black Metal"
                   ],
        "year":  2015,
        "label":  "Osmose Productions",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/whIfBTEjzcVjUGlmQXxf6Wh55AzoLDNGEvUqr0DWYeM/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY2ODEy/MDgtMTQyNDUxODc5/OS03NTUzLmpwZWc.jpeg",
        "title":  "Sur Les Falaises De Marbre",
        "catno":  "OPCD 301"
    },
    {
        "artist":  "Various",
        "id":  1310620,
        "styles":  [
                       "Thrash",
                       "Hardcore",
                       "Black Metal",
                       "Death Metal"
                   ],
        "year":  1998,
        "label":  "Osmose Productions",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/6FXtAl_BWD1fhem3_hOPAqUlyjnOvBWdIO7LJO1NFC8/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzMTA2/MjAtMTIxMzQ2NDYw/MC5qcGVn.jpeg",
        "title":  "The World Domination III",
        "catno":  "OPCD 067"
    },
    {
        "artist":  "Lifelover",
        "id":  2012906,
        "styles":  [
                       "Avantgarde",
                       "Depressive Black Metal"
                   ],
        "year":  2009,
        "label":  "Osmose Productions",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/yKWfxsPyLGraiQLkQ4_D5mnHfRHyiEcCl-goadcpjc4/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIwMTI5/MDYtMTcxNzA3NjY4/NS0yMDAyLmpwZWc.jpeg",
        "title":  "Pulver",
        "catno":  "OPCD 213"
    },
    {
        "artist":  "Ghost Bath",
        "id":  5963691,
        "styles":  [
                       "Black Metal"
                   ],
        "year":  2014,
        "label":  "Pest Productions",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/7xkC4rlisppVioJ6DQzUfEDmud5qpoQGuGu2hYbStiY/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU5NjM2/OTEtMTQ0ODc5NjA1/OC00MTA0LmpwZWc.jpeg",
        "title":  "Funeral",
        "catno":  "PEST096"
    },
    {
        "artist":  "Gromm",
        "id":  2773530,
        "styles":  [
                       "Black Metal"
                   ],
        "year":  2009,
        "label":  "Propaganda",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/qCHHTOnQXqglbnjRWIAG4sKmLHv7RWduXrNECUbCHew/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NzM1/MzAtMTU5MTU1NTMw/Ny0zNTI5LmpwZWc.jpeg",
        "title":  "Pilgrimage Amidst The Catacombs Of Negativism",
        "catno":  "none"
    },
    {
        "artist":  "Violet Cold",
        "id":  10437307,
        "styles":  [
                       "Atmospheric Black Metal",
                       "Depressive Black Metal",
                       "Post-Metal",
                       "Blackgaze"
                   ],
        "year":  2017,
        "label":  "Razed Soul Productions",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/AgVQ5KrGdZSo_G19qif2zlr_6E4iEAc6FF_kRyrus1o/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNDM3/MzA3LTE0OTc0NTM4/ODQtNzcyOS5wbmc.jpeg",
        "title":  "Anomie",
        "catno":  "rzd129"
    },
    {
        "artist":  "Marduk",
        "id":  4874197,
        "styles":  [
                       "Black Metal"
                   ],
        "year":  2008,
        "label":  "Regain Records",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/7KnrYHWAFAC8RA9pWu7jpbL5lBJhZovbAB_nyiQLtO0/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ4NzQx/OTctMTM3ODEzNjU2/OC01NDc1LmpwZWc.jpeg",
        "title":  "Plague Angel",
        "catno":  "REG-CD-1078"
    },
    {
        "artist":  "Raventale",
        "id":  5128998,
        "styles":  [
                       "Atmospheric Black Metal",
                       "Doom Metal"
                   ],
        "year":  2013,
        "label":  "Satanath Records",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/Lyt8Paw55DDOvk3cKMCwTUpB9K-ytz4tG5A7imgFJf0/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUxMjg5/OTgtMTUyMDI3MzI0/Ni0yNjczLmpwZWc.jpeg",
        "title":  "MÃ©moires",
        "catno":  "SAT055"
    },
    {
        "artist":  "Stormlord",
        "id":  393935,
        "styles":  [
                       "Black Metal"
                   ],
        "year":  2004,
        "label":  "Scarlet",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/O1WGE-kV40ZqbuQEFj1vbD_qdgXrNVAhoKWauJgP8ZU/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM5Mzkz/NS0xMzg3NDEzMzUz/LTMwNzUuanBlZw.jpeg",
        "title":  "The Gorgon Cult",
        "catno":  "SC 082-2"
    },
    {
        "artist":  "...And Oceans",
        "id":  3356846,
        "styles":  [
                       "Black Metal",
                       "Avantgarde",
                       "Symphonic Metal"
                   ],
        "year":  0,
        "label":  "Season Of Mist",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/UhZb2hYk4o0Yzhacw7s8_jb8mn4u_c0VkMZwSN6VSAY/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMzNTY4/NDYtMTU1MjAzNDY2/Mi01MTkwLmpwZWc.jpeg",
        "title":  "The Dynamic Gallery Of Thoughts",
        "catno":  "SOM 008"
    },
    {
        "artist":  "Seth",
        "id":  4945761,
        "styles":  [
                       "Black Metal"
                   ],
        "year":  1998,
        "label":  "Season Of Mist",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/vBG_yCCXpl-O3egdi5rbvW4WK8f4NQdoBTl-gwJByPU/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ5NDU3/NjEtMTM4MDMxNjUz/Ny00MzM1LmpwZWc.jpeg",
        "title":  "Les Blessures De L\u0027Ame",
        "catno":  "SOM 010"
    },
    {
        "artist":  "Graveworm",
        "id":  5313168,
        "styles":  [
                       "Black Metal"
                   ],
        "year":  2001,
        "label":  "Serenades Records",
        "format":  "CDr",
        "thumb":  "https://i.discogs.com/k0bBWUm50u60rqMbpCdVcKUBd9M4R2anyzcmroqsTZI/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUzMTMx/NjgtMTM5MDI5NzEw/My0yMjIxLmpwZWc.jpeg",
        "title":  "Scourge Of Malice",
        "catno":  "SR 031"
    },
    {
        "artist":  "Greifenstein",
        "id":  1497033,
        "styles":  [
                       "Black Metal"
                   ],
        "year":  2008,
        "label":  "Sleaszy Rider",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/TXuWzHwP4D7ML-LPu0DQDYy33-666iOephfM4JvzwsA/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0OTcw/MzMtMTMxNTU0MDY3/Ny5qcGVn.jpeg",
        "title":  "Von Inneren Welten",
        "catno":  "SR-0077"
    },
    {
        "artist":  "Nyktalgia",
        "id":  2372620,
        "styles":  [
                       "Black Metal"
                   ],
        "year":  2004,
        "label":  "Tanhu Records",
        "format":  "Cassette",
        "thumb":  "https://i.discogs.com/2dc77QdnC2baVKKL-pfGP_2kw9RWYh8wiE91yyXb2b8/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIzNzI2/MjAtMTMwNzYwNDk0/Ni5qcGVn.jpeg",
        "title":  "Nyktalgia",
        "catno":  "TR12"
    },
    {
        "artist":  "Vinterland",
        "id":  2914260,
        "styles":  [
                       "Black Metal"
                   ],
        "year":  2010,
        "label":  "Temple Of Darkness Records",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/14YblCi6v6nm07nTbUXr_aos9AqWV1CgpZVj69tBD3I/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI5MTQy/NjAtMTU2OTA4MTM0/NS00OTc2LmpwZWc.jpeg",
        "title":  "Welcome My Last Chapter - 15 Year Old Blood",
        "catno":  "TOD020"
    },
    {
        "artist":  "Prosternatur",
        "id":  10191104,
        "styles":  [
                       "Black Metal"
                   ],
        "year":  2017,
        "label":  "Terratur Possessions",
        "format":  "Vinyl",
        "thumb":  "https://i.discogs.com/bD5w2tM8oZtiQ_6c_XpjORbMZVDr26klTk6DhbgN_Jc/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMTkx/MTA0LTE0OTMxMzQ1/MTUtNjU0MS5qcGVn.jpeg",
        "title":  "Abyssus Abyssum Invocat",
        "catno":  "VOICE 065"
    },
    {
        "artist":  "Peste Noire",
        "id":  1466591,
        "styles":  [
                       "Black Metal"
                   ],
        "year":  2008,
        "label":  "Transcendental Creations",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/_BDl3QP2qDn9WSmhkcJe_3fnmQ3e0Oeq_5AltHhG1s8/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0NjY1/OTEtMTUyNjIxNDQ1/NC03NjM1LmpwZWc.jpeg",
        "title":  "La Sanie Des SiÃ¨cles - PanÃ©gyrique De La DÃ©gÃ©nÃ©rescence",
        "catno":  "TC006"
    },
    {
        "artist":  "Omitir",
        "id":  3396951,
        "styles":  [
                       "Black Metal"
                   ],
        "year":  2007,
        "label":  "Warfront Productions",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/sdJUDULEoNGsRVFZGYjwOgDOqjzaLqiMpjV0YAFWfdg/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMzOTY5/NTEtMTMyODgwNDUz/MC5qcGVn.jpeg",
        "title":  "Old Temple Of Depression",
        "catno":  "WFP-CD 004"
    },
    {
        "artist":  "WÄdrujÄ\u0085cy Wiatr",
        "id":  9334410,
        "styles":  [
                       "Atmospheric Black Metal",
                       "Depressive Black Metal"
                   ],
        "year":  2016,
        "label":  "Werewolf Promotion",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/mvSoSRuv0A0e07h6VEvLq7j9e72DW_5brNW4cUsG2zY/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTkzMzQ0/MTAtMTQ3ODc4NzUz/OS0xNTUxLmpwZWc.jpeg",
        "title":  "O Turniach, Jeziorach I Nocnych Szlakach",
        "catno":  "WP-CD56"
    },
    {
        "artist":  "ÐÐ°ÑÑÑÐºÐ°",
        "id":  7853888,
        "styles":  [
                       "Black Metal",
                       "Doom Metal"
                   ],
        "year":  2015,
        "label":  "Witching Hour Productions",
        "format":  "Vinyl",
        "thumb":  "https://i.discogs.com/7I8mg3TXxG4LWamC_WiGTNgQPX2E0S6ojSmfV6qcVCU/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc4NTM4/ODgtMTQ2NTA0MDI5/My02OTI2LmpwZWc.jpeg",
        "title":  "ÐÐ¸ÑÐ¾ÑÑÐ³Ð¸iÐ°",
        "catno":  "EVIL 079 LP"
    },
    {
        "artist":  "ÐÐ°ÑÑÑÐºÐ°",
        "id":  9074465,
        "styles":  [
                       "Atmospheric Black Metal"
                   ],
        "year":  2016,
        "label":  "Witching Hour Productions",
        "format":  "CD",
        "thumb":  "https://i.discogs.com/qp7reAE36jUt1mQyEGw8v-mmMi2J02qbzC9mFwjEsk4/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTkwNzQ0/NjUtMTQ3NDMwOTg2/NC02NzEzLmpwZWc.jpeg",
        "title":  "ÐÐ¸ÑÐ¾ÑÑÐ³Ð¸iÐ°",
        "catno":  "none"
    },
    {
        "artist":  "Elderwind",
        "id":  6252716,
        "styles":  [
                       "Atmospheric Black Metal"
                   ],
        "year":  2014,
        "label":  "Wolfspell Records",
        "format":  "Cassette",
        "thumb":  "https://i.discogs.com/ao1-6BHt41SJM-7Ex9-m4BpQG2fI5Xphj7_k2i-MYpE/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYyNTI3/MTYtMTcwNDI4MjY1/Ny00ODM4LmpwZWc.jpeg",
        "title":  "ÐÐ¾Ð»ÑÐµÐ±ÑÑÐ²Ð¾ ÐÐ¸Ð²Ð¾Ð¹ ÐÑÐ¸ÑÐ¾Ð´Ñ",
        "catno":  "SPELL007"
    }
];
