const allQuestions = [ 
  {
    "id": 1,
    "otazka": "Jak se mění vítr s nadmořskou výškou?",
    "moznosti": ["Slábne", "Zůstává stejný", "Roste", "Kolísá nahodile"],
    "odpoved": "Roste",
    "vysvetleni": "Vítr obvykle zesiluje s nadmořskou výškou, protože je méně ovlivněn třením povrchu a překážkami jako jsou budovy a vegetace[cite: 1224, 1229]."
  },
  {
    "id": 2,
    "otazka": "Co značí S na baterii?",
    "moznosti": ["Kapacita baterie", "Zapojení článků baterií do série", "Stabilní napětí", "Výstupní výkon"],
    "odpoved": "Zapojení článků baterií do série",
    "vysvetleni": "Označení S se používá k vyjádření počtu článků zapojených do série, což zvyšuje celkové napětí baterie[cite: 1231, 1236]."
  },
  {
    "id": 3,
    "otazka": "Co značí P na baterii?",
    "moznosti": ["Výkonový režim", "Plošné rozložení", "Zapojení článků baterií paralelně", "Ochranný obvod"],
    "odpoved": "Zapojení článků baterií paralelně",
    "vysvetleni": "Písmeno P indikuje počet paralelně zapojených článků, což zvyšuje celkovou kapacitu baterie (mAh)[cite: 1237, 1242]."
  },
  {
    "id": 4,
    "otazka": "Co značí C na baterii?",
    "moznosti": ["Kapacita článku", "Chemické složení", "Nabíjecí proud", "Cyklus nabíjení"],
    "odpoved": "Nabíjecí proud",
    "vysvetleni": "Písmeno C se vztahuje na kapacitu a určuje, jak rychle může být baterie nabita nebo vybita bez poškození[cite: 1244, 1249]."
  },
  {
    "id": 5,
    "otazka": "Jaké je jmenovité napětí LiPol baterie?",
    "moznosti": ["4,2 V", "3,7 V", "5 V", "3,2 V"],
    "odpoved": "3,7 V",
    "vysvetleni": "Jmenovité napětí jednoho článku LiPol baterie je typicky 3,7 V. Hodnota 4,2 V je maximální nabíjecí napětí[cite: 1250, 1255, 1256]."
  },
  {
    "id": 6,
    "otazka": "Co je GRC a co ho určuje?",
    "moznosti": ["Globální radiokomunikace", "Pozemní riziko, závislé na rozměrech dronu, dopadové energii a scénáři provozu", "Graf rozložení charge", "Geolokační režim"],
    "odpoved": "Pozemní riziko, závislé na rozměrech dronu, dopadové energii a scénáři provozu",
    "vysvetleni": "GRC (Ground Risk Class) určuje úroveň rizika pro osoby na zemi v případě nehody[cite: 1257, 1262]."
  },
  {
    "id": 7,
    "otazka": "Pomocí jakého pravidla můžeme snížit GRC?",
    "moznosti": ["Pravidlo 2:1", "Pravidlo 1:2", "Pravidlo 1:1", "Pravidlo 3:1"],
    "odpoved": "Pravidlo 1:1",
    "vysvetleni": "Dron musíte udržovat od nezapojené osoby v boční vzdálenosti, která není menší než výška letu[cite: 1263, 1268]."
  },
  {
    "id": 8,
    "otazka": "Jaké je riziko při provozu dronu v blízkosti překážek?",
    "moznosti": ["Interference signálu", "Zvýšená spotřeba energie", "Náraz do překážky", "Turbulence"],
    "odpoved": "Turbulence",
    "vysvetleni": "Proudění vzduchu kolem objektů může způsobit nestabilitu dronu a ztížit jeho řízení[cite: 1269, 1274]."
  },
  {
    "id": 9,
    "otazka": "Jaký je nabíjecí proud pro 5C a 1500mAh baterii?",
    "moznosti": ["8 A", "7,5 A", "5 A", "2,5 A"],
    "odpoved": "7,5 A",
    "vysvetleni": "Výpočet: 1,5 Ah (kapacita) x 5 (C) = 7,5 A[cite: 1281, 1286]."
  },
  {
    "id": 10,
    "otazka": "Jak se mění výkonnost při létání v teplých dnech?",
    "moznosti": ["Zvyšuje se", "Klesá kvůli nižší hustotě vzduchu", "Zůstává stejná", "Zvyšuje se kvůli nižší hustotě"],
    "odpoved": "Klesá kvůli nižší hustotě vzduchu",
    "vysvetleni": "V teplých dnech je vzduch řidší, což snižuje vztlakovou sílu vrtulí[cite: 1287, 1292]."
  },
  {
    "id": 11,
    "otazka": "Kdo odpovídá za riziko?",
    "moznosti": ["Výrobce dronu", "Obchod", "Federální letecký úřad", "Pilot"],
    "odpoved": "Pilot",
    "vysvetleni": "Pilot je odpovědný za bezpečné řízení a minimalizaci rizika pro ostatní[cite: 1306, 1311]."
  },
  {
    "id": 12,
    "otazka": "Jaká je maximální rychlost v nízkorychlostním režimu?",
    "moznosti": ["1 m/s", "3 m/s", "5 m/s", "10 m/s"],
    "odpoved": "3 m/s",
    "vysvetleni": "Tento režim omezuje rychlost pro zvýšení bezpečnosti v blízkosti překážek nebo lidí[cite: 1318, 1323]."
  },
  {
    "id": 13,
    "otazka": "Smí se přelétat dav?",
    "moznosti": ["Ano, nad 50m", "Ne", "Ano, nad 120m", "Pouze s povolením"],
    "odpoved": "Ne",
    "vysvetleni": "Přelet davu lidí je v kategorii OPEN zakázán bez ohledu na výšku[cite: 1330, 1335]."
  },
  {
    "id": 14,
    "otazka": "Co je těžiště?",
    "moznosti": ["Fyzikální vlastnost určující rovnováhu", "Myšlený bod na letadle kde je výslednice působiště tíhových sil", "Přední část dronu", "Bod, kde dron zvedne zem"],
    "odpoved": "Myšlený bod na letadle kde je výslednice působiště tíhových sil",
    "vysvetleni": "Těžiště je klíčové pro správnou rovnováhu a stabilitu během letu[cite: 1359, 1364, 1365]."
  },
  {
    "id": 15,
    "otazka": "Jaká je maximální výška letu bez dalšího povolení?",
    "moznosti": ["50 m", "100 m", "120 m", "200 m"],
    "odpoved": "120 m",
    "vysvetleni": "Maximální povolená výška letu v kategorii OPEN je 120 metrů nad zemí[cite: 1431, 1434, 1436]."
  },
  {
    "id": 16,
    "otazka": "Jaká je minimální vzdálenost od nezapojené osoby v A2 (bez štítku C)?",
    "moznosti": ["30 m", "40 m", "50 m", "60 m"],
    "odpoved": "50 m",
    "vysvetleni": "Pro drony bez štítku třídy C je v kategorii A2 stanovena vzdálenost 50 metrů[cite: 1437, 1440, 1442]."
  },
  {
    "id": 17,
    "otazka": "Jaký je minimální věk pilota UA pro kategorii OPEN?",
    "moznosti": ["14 let", "16 let", "18 let", "21 let"],
    "odpoved": "16 let",
    "vysvetleni": "Pro subkategorii A1 a A3 v kategorii OPEN je minimální věk obvykle 16 let[cite: 1539, 1541, 1545]."
  },
  {
    "id": 18,
    "otazka": "Jak se jmenuje největší zeměpisná zóna v ČR?",
    "moznosti": ["LKR8", "LKR10", "LKR5", "LKR7"],
    "odpoved": "LKR10",
    "vysvetleni": "Prostor LKR10 — UAS slouží k vymezení zeměpisných zón a ochraně území ČR[cite: 1003]."
  },
  {
    "id": 19,
    "otazka": "Jaké světlo musí být na UA při nočním letu?",
    "moznosti": ["Červené pevné", "Zelené blikající", "Modré pevné", "Žluté blikající"],
    "odpoved": "Zelené blikající",
    "vysvetleni": "Zelené světlo usnadňuje vizuální identifikaci a indikuje polohu dronu v noci[cite: 1014, 1015]."
  },
  {
    "id": 20,
    "otazka": "Co jsou zkratky TRA, TSA, CTR?",
    "moznosti": ["Názvy dronů", "Typy manévrů", "Typy senzorů", "Zeměpisné zóny"],
    "odpoved": "Zeměpisné zóny",
    "vysvetleni": "Tyto zkratky označují různé typy vzdušných prostorů s omezeními (např. CTR je kontrolní zóna letiště)[cite: 1005, 1006]."
  },
  {
    "id": 21,
    "otazka": "Co se děje s dobou letu při letu v zimě?",
    "moznosti": ["Zvyšuje se", "Zůstává stejná", "Zkrátí se", "Závisí na modelu baterie"],
    "odpoved": "Zkrátí se",
    "vysvetleni": "V zimních podmínkách se doba letu zkracuje, protože chladné počasí snižuje výkon a kapacitu baterií."
  },
  {
    "id": 22,
    "otazka": "Co je těžiště?",
    "moznosti": ["Fyzikální vlastnost tělesa určující jeho rovnováhu", "Myšlený bod na letadle kde je výslednice působiště tíhových sil", "Přední část dronu", "Bod, kde dron zvedne zem"],
    "odpoved": "Myšlený bod na letadle kde je výslednice působiště tíhových sil",
    "vysvetleni": "Těžiště je klíčovým prvkem pro stabilitu a rovnováhu dronu během letu."
  },
  {
    "id": 23,
    "otazka": "Jaký vliv má blízký WiFi vysílač na provoz dronu?",
    "moznosti": ["Zvyšuje dolet dronu", "Může ovlivnit řízení (spojení mezi dronem a RC)", "Zvyšuje kvalitu videa", "Nemá žádný vliv"],
    "odpoved": "Může ovlivnit řízení (spojení mezi dronem a RC)",
    "vysvetleni": "Silné WiFi signály mohou způsobovat interference, což vede k nestabilitě nebo ztrátě spojení."
  },
  {
    "id": 24,
    "otazka": "Jaké jsou třídy C pro A2?",
    "moznosti": ["C1", "C2", "C3", "C4"],
    "odpoved": "C2",
    "vysvetleni": "Provoz v subkategorii A2 je podle evropských regulací určen pro drony třídy C2."
  },
  {
    "id": 25,
    "otazka": "Co hrozí dronu na závětrné straně budov?",
    "moznosti": ["Ztráta signálu", "Zlepšená viditelnost", "Turbulence", "Zvýšení rychlosti letu"],
    "odpoved": "Turbulence",
    "vysvetleni": "Na závětrné straně dochází k nárazovým turbulencím, které narušují stabilitu dronu."
  },
  {
    "id": 26,
    "otazka": "Co je MTOM/MTOW?",
    "moznosti": ["Střední vzletová hmotnost", "Minimální vzletová hmotnost", "Maximální vzletová hmotnost", "Hmotnost bez baterie"],
    "odpoved": "Maximální vzletová hmotnost",
    "vysvetleni": "Maximum Take-Off Mass/Weight označuje nejvyšší hmotnost, se kterou smí dron vzlétnout."
  },
  {
    "id": 27,
    "otazka": "Co udělat, když pilot zjistí, že se blíží bouřka?",
    "moznosti": ["Okamžitě přeruším leteckou činnost", "Pokračovat v létání", "Skrýt dron pod strom", "Letět směrem k bouřce"],
    "odpoved": "Okamžitě přeruším leteckou činnost",
    "vysvetleni": "Bouřky představují riziko blesků a silného větru, které mohou zničit dron nebo způsobit ztrátu kontroly."
  },
  {
    "id": 28,
    "otazka": "Jak poznáme, že Li-Po baterie končí svou životnost?",
    "moznosti": ["Oxidace - zbělá", "Oxidace - zčerná", "Baterie je nafouklá", "Baterie má nižší kapacitu než obvykle"],
    "odpoved": "Baterie je nafouklá",
    "vysvetleni": "Nafouknutí je jasným indikátorem vnitřních chemických procesů, které jsou nebezpečné."
  },
  {
    "id": 29,
    "otazka": "Jaká je minimální vzdálenost od lidí při letu ve 30m v nízkorychlostním režimu?",
    "moznosti": ["1 m", "5 m", "10 m", "15 m"],
    "odpoved": "5 m",
    "vysvetleni": "V nízkorychlostním režimu kategorie A2 je minimální bezpečná vzdálenost stanovena na 5 metrů."
  },
  {
    "id": 30,
    "otazka": "Jaká je minimální vzdálenost od nezapojené osoby v A2 pro drony bez štítku C?",
    "moznosti": ["30 m", "40 m", "50 m", "60 m"],
    "odpoved": "50 m",
    "vysvetleni": "Drony bez štítku (tzv. legacy drony) musí v A2 udržovat odstup minimálně 50 metrů."
  },
  {
    "id": 31,
    "otazka": "Jaký je vztah mezi rychlostí větru a výškou?",
    "moznosti": ["Čím výš, tím je vítr slabší", "Čím výš, tím je vítr rychlejší", "Výška nemá vliv", "Vítr je stejně rychlý"],
    "odpoved": "Čím výš, tím je vítr rychlejší",
    "vysvetleni": "S rostoucí výškou klesá tření o zemský povrch, proto rychlost větru obvykle stoupá."
  },
  {
    "id": 32,
    "otazka": "Jaký je vztah mezi zatížením UA a letovou dobou?",
    "moznosti": ["Zatížení nemá vliv", "Větší zatížení, delší doba letu", "Kratší doba letu", "Větší zatížení, stejná doba letu"],
    "odpoved": "Kratší doba letu",
    "vysvetleni": "Vyšší hmotnost vyžaduje více energie k udržení ve vzduchu, což rychleji vybíjí baterii."
  },
  {
    "id": 33,
    "otazka": "Jak daleko od pilota smí letět UA bez dalšího povolení?",
    "moznosti": ["BVLOS", "VLOS", "500 m", "1 km"],
    "odpoved": "VLOS",
    "vysvetleni": "VLOS (Visual Line of Sight) znamená, že pilot musí mít dron neustále v přímém dohledu."
  },
  {
    "id": 34,
    "otazka": "Jaké jsou základní předpisy evropského nařízení pro drony?",
    "moznosti": ["2017/1234 a 2018/567", "2019/945 a 2019/947", "2019/1123 a 2020/678", "2018/789 a 2019/890"],
    "odpoved": "2019/945 a 2019/947",
    "vysvetleni": "Nařízení 945 se týká produktů a 947 se týká provozních pravidel."
  },
  {
    "id": 35,
    "otazka": "Co musí mít UA před startem ve společném vzdušném prostoru?",
    "moznosti": ["Registrační tabulku pilota", "Osobní údaje vlastníka", "GPS koordináty startu", "Reg. značku provozovatele"],
    "odpoved": "Reg. značku provozovatele",
    "vysvetleni": "Na dronu musí být viditelně umístěna registrační značka přidělená úřadem."
  },
  {
    "id": 36,
    "otazka": "Jaká je minimální vzdálenost od urbanistické oblasti v kategorii OPEN A3?",
    "moznosti": ["50 m", "100 m", "150 m", "200 m"],
    "odpoved": "150 m",
    "vysvetleni": "V kategorii A3 je nutné létat alespoň 150 metrů od obydlených nebo průmyslových zón."
  },
  {
    "id": 37,
    "otazka": "Může UA o hmotnosti 580 g létat v prostoru letiště 3 km od ARP bez povolení?",
    "moznosti": ["Ne, vždy je nutné povolení", "Ano, do 910 g se smí", "Ano, mimo provozní dobu", "Ano, při dobré viditelnosti"],
    "odpoved": "Ne, vždy je nutné povolení",
    "vysvetleni": "V kontrolních zónách letišť (CTR) je pro lety UA obvykle nutné speciální povolení bez ohledu na váhu."
  },
  {
    "id": 38,
    "otazka": "Smí UA přeletět silnici II. třídy bez povolení?",
    "moznosti": ["Ano, nad 100 m", "Ne", "Ano, mimo špičku", "Ano, pokud je vidět"],
    "odpoved": "Ne",
    "vysvetleni": "Přelety nad pozemními komunikacemi jsou regulovány z bezpečnostních důvodů."
  },
  {
    "id": 39,
    "otazka": "Jak se stane z nezapojené osoby osoba zapojená?",
    "moznosti": ["Koupí UA", "Absolvuje kurz", "Výslovným souhlasem", "Studiem zákona"],
    "odpoved": "Výslovným souhlasem",
    "vysvetleni": "Osoba musí být informována o rizicích a musí s účastí na provozu výslovně souhlasit."
  },
  {
    "id": 40,
    "otazka": "Musí dát pilot UA ve vzduchu přednost jinému letadlu?",
    "moznosti": ["Ne, do 250 g nemusí", "Ano", "Ne, v nízkorychlostním režimu", "Jen nad 100 m"],
    "odpoved": "Ano",
    "vysvetleni": "Bezpilotní letadla musí vždy dát přednost všem ostatním letadlům s posádkou."
  },
  {
    "id": 41,
    "otazka": "Jak může pilot FPV pozorovat UA?",
    "moznosti": ["Pomocí teleskopu", "Přes kamery na UA", "Pomocí pozorovatele", "Pomocí radaru"],
    "odpoved": "Pomocí pozorovatele",
    "vysvetleni": "Při FPV letu musí být vedle pilota pozorovatel, který udržuje s dronem vizuální kontakt (VLOS)."
  },
  {
    "id": 42,
    "otazka": "Jaké jsou standardní frekvence spojení dronu s vysílačkou?",
    "moznosti": ["1,2 a 3,4 GHz", "2,4 a 5,8 GHz", "5,2 a 6,6 GHz", "7,8 a 9,0 GHz"],
    "odpoved": "2,4 a 5,8 GHz",
    "vysvetleni": "Toto jsou celosvětově standardizovaná volná pásma pro ovládání a přenos videa."
  },
  {
    "id": 43,
    "otazka": "K čemu slouží zřízený Omezený prostor LKR10 - UAS?",
    "moznosti": ["Provoz pouze pro komerční drony", "Zákaz létání v ČR", "Implementace geografických zón pro úpravu podmínek provozu", "Ochrana letišť"],
    "odpoved": "Implementace geografických zón pro úpravu podmínek provozu",
    "vysvetleni": "LKR10 slouží k vymezení zón, kde platí specifická pravidla pro drony v souladu s EU legislativou."
  },
  {
    "id": 44,
    "otazka": "Jaké jsou základní třídy rizik při provozu UA?",
    "moznosti": ["PRC a SAC", "ERC a LAC", "GRC na zemi a ARC ve vzduchu", "HRC a LRC"],
    "odpoved": "GRC na zemi a ARC ve vzduchu",
    "vysvetleni": "GRC je Ground Risk Class (riziko na zemi) a ARC je Air Risk Class (riziko ve vzduchu)."
  },
  {
    "id": 45,
    "otazka": "Jaká je minimální vzdálenost od nezapojených osob v A2 při nízkorychlostním režimu (u dronu se štítkem C2)?",
    "moznosti": ["1 m", "5 m", "10 m", "20 m"],
    "odpoved": "5 m",
    "vysvetleni": "Pokud je aktivován režim omezující rychlost na max 3 m/s, lze se přiblížit až na 5 metrů k lidem."
  },
  {
    "id": 46,
    "otazka": "Jaký vliv mají WiFi vysílače na spojení RC a UA?",
    "moznosti": ["Zvýší dosah", "Žádný vliv", "Rušení spojení", "Zlepší kvalitu spojení"],
    "odpoved": "Rušení spojení",
    "vysvetleni": "Provoz v oblastech s vysokou koncentrací WiFi signálů může způsobit ztrátu kontroly nad dronem."
  },
  {
    "id": 47,
    "otazka": "Co nesmíte porušit, když na UA přidáváte další zařízení (např. kameru)?",
    "moznosti": ["Výkonový limit", "Limit rychlosti", "MTOM", "Maximální dosah"],
    "odpoved": "MTOM",
    "vysvetleni": "Při montáži příslušenství nesmí celková hmotnost překročit maximální vzletovou hmotnost stanovenou výrobcem."
  },
  {
    "id": 48,
    "otazka": "Jaký je vztah mezi zatížením UA a letovou dobou?",
    "moznosti": ["Zatížení nemá vliv", "Větší zatížení, delší doba letu", "Kratší doba letu", "Větší zatížení, stejná doba letu"],
    "odpoved": "Kratší doba letu",
    "vysvetleni": "Větší hmotnost vyžaduje vyšší otáčky motorů, což vede k rychlejšímu vybití baterie."
  },
  {
    "id": 49,
    "otazka": "Jaké je hmotnostní omezení pro třídu C0?",
    "moznosti": ["Do 150 g", "Do 250 g", "Do 500 g", "Do 900 g"],
    "odpoved": "Do 250 g",
    "vysvetleni": "Třída C0 zahrnuje velmi lehké drony s hmotností pod 250 gramů."
  },
  {
    "id": 50,
    "otazka": "Jaké je hmotnostní omezení pro třídu C1?",
    "moznosti": ["Do 500 g", "Do 700 g", "Do 900 g", "Do 1,5 kg"],
    "odpoved": "Do 900 g",
    "vysvetleni": "Třída C1 zahrnuje drony do hmotnosti 900 g."
  },
  {
    "id": 51,
    "otazka": "Jaké je hmotnostní omezení pro třídu C2?",
    "moznosti": ["Do 2 kg", "Do 3 kg", "Do 4 kg", "Do 5 kg"],
    "odpoved": "Do 4 kg",
    "vysvetleni": "Třída C2, určená pro subkategorii A2, má limit hmotnosti 4 kg."
  },
  {
    "id": 52,
    "otazka": "Jaké je hmotnostní omezení pro třídy C3 a C4?",
    "moznosti": ["Do 15 kg", "Do 20 kg", "Do 25 kg", "Do 50 kg"],
    "odpoved": "Do 25 kg",
    "vysvetleni": "Maximální hmotnost v kategorii OPEN (C3/C4) je 25 kg."
  },
  {
    "id": 53,
    "otazka": "Do jaké maximální hmotnosti UA platí nová legislativa v kategorii OPEN?",
    "moznosti": ["15 kg", "25 kg", "35 kg", "50 kg"],
    "odpoved": "25 kg",
    "vysvetleni": "Kategorie OPEN končí na limitu 25 kg, nad tuto váhu jde o kategorii SPECIFIC."
  },
  {
    "id": 54,
    "otazka": "Smím v kategorii OPEN létat nad shromážděním lidí?",
    "moznosti": ["Ano, ve dne", "Ano, s licencí", "Ne", "Ano, s pojištěním"],
    "odpoved": "Ne",
    "vysvetleni": "Lety nad davy (shromážděním osob) jsou v kategorii OPEN zakázány."
  },
  {
    "id": 55,
    "otazka": "Jaký je rádius od ARP letiště, kde platí přísná pravidla pro UA?",
    "moznosti": ["3 km", "5,5 km", "7 km", "10 km"],
    "odpoved": "5,5 km",
    "vysvetleni": "Standardní ochranné pásmo letiště pro provoz dronů je v okruhu 5,5 km."
  },
  {
    "id": 56,
    "otazka": "Mohou být shazovány předměty z UA za letu?",
    "moznosti": ["Ano, lehké", "Ne", "Ano, s povolením", "Jen mimo město"],
    "odpoved": "Ne",
    "vysvetleni": "Shazování jakéhokoli materiálu nebo předmětů je v kategorii OPEN zakázáno."
  },
  {
    "id": 57,
    "otazka": "Jaké jsou třídy bezpilotních letadel podle nařízení EU?",
    "moznosti": ["A1 až A6", "B0 až B6", "C0 až C6", "D0 až D6"],
    "odpoved": "C0 až C6",
    "vysvetleni": "Drony se dělí do tříd označených písmenem C a číslicí 0 až 6."
  },
  {
    "id": 58,
    "otazka": "Je možný BVLOS v kategorii OPEN?",
    "moznosti": ["Ano, s povolením", "Ne", "Ano, do 1 km", "Ano, s FPV"],
    "odpoved": "Ne",
    "vysvetleni": "V kategorii OPEN je povolen pouze let v přímém vizuálním dohledu (VLOS)."
  },
  {
    "id": 59,
    "otazka": "Jaký vliv má teplota na akumulátor?",
    "moznosti": ["Vyšší teplota, vyšší výkon", "Vyšší teplota, nižší výkon a kratší doba letu", "Žádný vliv", "Pracují nejlépe v mrazu"],
    "odpoved": "Vyšší teplota, nižší výkon a kratší doba letu",
    "vysvetleni": "Extrémní teploty (horko i mráz) negativně ovlivňují chemii baterie a zkracují životnost."
  },
  {
    "id": 60,
    "otazka": "Má stáří vliv na akumulátor?",
    "moznosti": ["Nemá", "Snížená kapacita a delší nabíjení", "Snížená výkonnost a kratší doba letu", "Baterie těžkne"],
    "odpoved": "Snížená výkonnost a kratší doba letu",
    "vysvetleni": "S počtem cyklů a věkem roste vnitřní odpor a klesá schopnost baterie dodávat proud."
  },
  {
    "id": 61,
    "otazka": "Jak mohu snížit provozní rizika na zemi?",
    "moznosti": ["Brýle", "Let v noci", "Padák", "Udržování v nízkorychlostním režimu"],
    "odpoved": "Udržování v nízkorychlostním režimu",
    "vysvetleni": "Snížením rychlosti se výrazně snižuje kinetická energie při případném dopadu."
  },
  {
    "id": 62,
    "otazka": "Co je to ARC?",
    "moznosti": ["Riziko na zemi", "Riziko ve vzduchu (Air Risk Class)", "Nabíjecí křivka", "Automatický návrat"],
    "odpoved": "Riziko ve vzduchu (Air Risk Class)",
    "vysvetleni": "ARC hodnotí riziko kolize UA s jiným letadlem ve vzdušném prostoru."
  },
  {
    "id": 63,
    "otazka": "Jaké napětí má plně nabitý článek LiPo baterie?",
    "moznosti": ["3,7 V", "3,2 V", "4,2 V", "5,0 V"],
    "odpoved": "4,2 V",
    "vysvetleni": "Jmenovité napětí je 3,7 V, ale při plném nabití dosahuje článek 4,2 V."
  },
  {
    "id": 64,
    "otazka": "Jaký je hlavní rozdíl mezi kategorií OPEN a SPECIFIC?",
    "moznosti": ["Váha dronu", "Míra rizika", "Barva dronu", "Značka výrobce"],
    "odpoved": "Míra rizika",
    "vysvetleni": "OPEN je pro nízkorizikové operace, SPECIFIC pro středně rizikové vyžadující povolení (včetně BVLOS)."
  },
  {
    "id": 65,
    "otazka": "Co značí zkratka VLOS?",
    "moznosti": ["Let přes kameru", "Vizuální kontakt s letadlem", "Automatický let", "Výška nad terénem"],
    "odpoved": "Vizuální kontakt s letadlem",
    "vysvetleni": "Visual Line of Sight – pilot musí vidět dron bez pomůcek (kromě brýlí na dálku)."
  },
  {
    "id": 66,
    "otazka": "Jaká je funkce balanceru při nabíjení?",
    "moznosti": ["Zrychluje nabíjení", "Vyrovnává napětí mezi články", "Chladí baterii", "Měří kapacitu"],
    "odpoved": "Vyrovnává napětí mezi články",
    "vysvetleni": "Balancer zajišťuje, aby každý článek v baterii měl stejné napětí, což brání poškození."
  },
  {
    "id": 67,
    "otazka": "Jaká je bezpečná vzdálenost od osob u dronu bez štítku vážícího 1,5 kg (Legacy)?",
    "moznosti": ["5 m", "30 m", "50 m", "150 m"],
    "odpoved": "50 m",
    "vysvetleni": "Dle přechodných ustanovení pro drony bez štítku mezi 500g a 2kg je limit v A2 50 metrů."
  },
  {
    "id": 68,
    "otazka": "Co je to NOTAM?",
    "moznosti": ["Typ baterie", "Oznámení pro letce o dočasných změnách v prostoru", "Značka dronu", "Režim kamery"],
    "odpoved": "Oznámení pro letce o dočasných změnách v prostoru",
    "vysvetleni": "Notice to Airmen – informace o dočasných nebezpečích, omezeních nebo změnách ve vzdušném prostoru."
  },
  {
    "id": 69,
    "otazka": "Může vítr ovlivnit spotřebu energie?",
    "moznosti": ["Ne", "Ano, let proti větru zvyšuje odběr", "Pouze při startu", "Pouze při přistání"],
    "odpoved": "Ano, let proti větru zvyšuje odběr",
    "vysvetleni": "Dron musí vynaložit větší výkon na překonání odporu větru, což zkracuje dobu letu."
  },
  {
    "id": 70,
    "otazka": "Jaká je minimální viditelnost pro lety v kategorii OPEN?",
    "moznosti": ["1 km", "3 km", "5 km", "Není stanovena, ale musí být VLOS"],
    "odpoved": "Není stanovena, ale musí být VLOS",
    "vysvetleni": "Předpisy explicitně neuvádí kilometry, ale pilot musí být schopen dron vidět a ovládat (VLOS)."
  },
  {
    "id": 71,
    "otazka": "Jak se projevuje paměťový efekt u LiPo baterií?",
    "moznosti": ["Výrazně", "Nijak, LiPo netrpí paměťovým efektem", "Pouze v zimě", "Pouze při rychlonabíjení"],
    "odpoved": "Nijak, LiPo netrpí paměťovým efektem",
    "vysvetleni": "Na rozdíl od starších NiCd baterií, moderní lithiové akumulátory paměťový efekt nemají."
  },
  {
    "id": 72,
    "otazka": "Kdo je odpovědný za registraci provozovatele?",
    "moznosti": ["Výrobce", "Majitel/Provozovatel", "Pilot (vždy)", "Úřad ji dělá automaticky"],
    "odpoved": "Majitel/Provozovatel",
    "vysvetleni": "Osoba nebo firma, která dron vlastní nebo provozuje, se musí registrovat a označit dron štítkem."
  },
  {
    "id": 73,
    "otazka": "Co značí zkratka CTR?",
    "moznosti": ["Centrální trasa", "Kontrolní zóna letiště", "Doba nabíjení", "Typ motoru"],
    "odpoved": "Kontrolní zóna letiště",
    "vysvetleni": "Řízený okrsek v okolí letiště, kde platí přísná pravidla pro koordinaci provozu."
  },
  {
    "id": 74,
    "otazka": "Jaká je maximální hmotnost dronu v subkategorii A1?",
    "moznosti": ["250 g", "900 g", "2 kg", "4 kg"],
    "odpoved": "900 g",
    "vysvetleni": "Do subkategorie A1 spadají drony třídy C0 a C1 (do 900g)."
  },
  {
    "id": 75,
    "otazka": "Jaká je definice shromáždění osob (davu)?",
    "moznosti": ["3 a více lidí", "10 a více lidí", "Skupina lidí, kde se jednotlivec nemůže volně vzdálit", "Jakákoli skupina v parku"],
    "odpoved": "Skupina lidí, kde se jednotlivec nemůže volně vzdálit",
    "vysvetleni": "Dav je taková hustota lidí, která znemožňuje únik při pádu dronu (např. koncerty, sportovní akce)."
  },
  {
    "id": 76,
    "otazka": "Co dělat při úplné ztrátě signálu (Failsafe)?",
    "moznosti": ["Vypnout ovladač", "Čekat na automatický návrat (RTH)", "Utíkat za dronem", "Volat policii"],
    "odpoved": "Čekat na automatický návrat (RTH)",
    "vysvetleni": "Většina dronů je nastavena tak, aby se při ztrátě signálu vrátila na místo startu."
  },
  {
    "id": 77,
    "otazka": "Lze létat s dronem pod vlivem alkoholu?",
    "moznosti": ["Ano, do 0,5 promile", "Ano, mimo město", "Ne, je to přísně zakázáno", "Ano, u malých dronů"],
    "odpoved": "Ne, je to přísně zakázáno",
    "vysvetleni": "Pilot UA je považován za účastníka leteckého provozu a platí pro něj nulová tolerance."
  },
  {
    "id": 78,
    "otazka": "Jaký je vliv vlhkosti na elektroniku dronu?",
    "moznosti": ["Žádný", "Zlepšuje chlazení", "Riziko zkratu a koroze", "Zvyšuje dosah"],
    "odpoved": "Riziko zkratu a koroze",
    "vysvetleni": "Vlhkost a kondenzace mohou trvale poškodit citlivé vnitřní obvody."
  },
  {
    "id": 79,
    "otazka": "Který senzor je klíčový pro udržení výšky v nízkých výškách?",
    "moznosti": ["GPS", "Barometr nebo ultrazvuk", "Magnetometr", "Gyroskop"],
    "odpoved": "Barometr nebo ultrazvuk",
    "vysvetleni": "Barometr měří tlak vzduchu a ultrazvuk odraz od země, což pomáhá přesnému vznášení."
  },
  {
    "id": 80,
    "otazka": "Může mít dron v kategorii OPEN namontované zbraně?",
    "moznosti": ["Ano, s povolením", "Ne", "Pouze pro sportovní účely", "Jen do 250 g"],
    "odpoved": "Ne",
    "vysvetleni": "Kategorie OPEN výslovně zakazuje přepravu nebezpečného nákladu a zbraní."
  },
  {
    "id": 81,
    "otazka": "Co je to Geo-fencing?",
    "moznosti": ["Režim focení", "Virtuální hranice bránící vletu do zakázaných zón", "Typ antény", "GPS kalibrace"],
    "odpoved": "Virtuální hranice bránící vletu do zakázaných zón",
    "vysvetleni": "Software v dronu, který automaticky zastaví dron před vletem do zakázaného prostoru (např. letiště)."
  },
  {
    "id": 82,
    "otazka": "Jaký je úkol dálkově řídícího pilota před vzletem?",
    "moznosti": ["Pouze nabít baterie", "Provést předletovou kontrolu a zkontrolovat vzdušný prostor", "Umýt dron", "Zkontrolovat e-maily"],
    "odpoved": "Provést předletovou kontrolu a zkontrolovat vzdušný prostor",
    "vysvetleni": "Zahrnuje kontrolu vrtulí, stavu baterií, počasí a omezení v místě letu (Dronview)."
  },
  {
    "id": 83,
    "otazka": "Co značí zkratka ATZ?",
    "moznosti": ["Automatická trasa", "Letištní provozní zóna", "Typ senzoru", "Výškový limit"],
    "odpoved": "Letištní provozní zóna",
    "vysvetleni": "Okrsek v okolí neřízeného letiště, sloužící k ochraně letištního provozu."
  },
  {
    "id": 84,
    "otazka": "Je nutné mít pojištění pro provoz dronu?",
    "moznosti": ["Ne", "Ano, zákonné pojištění odpovědnosti", "Pouze pro drony nad 20 kg", "Jen při komerčním využití"],
    "odpoved": "Ano, zákonné pojištění odpovědnosti",
    "vysvetleni": "Většina kategorií vyžaduje pojištění pro případ způsobení škody třetím osobám."
  },
  {
    "id": 85,
    "otazka": "Jaká je funkce magnetometru (kompasu)?",
    "moznosti": ["Měří výšku", "Určuje orientaci dronu vůči světovým stranám", "Měří rychlost", "Sleduje stav baterie"],
    "odpoved": "Určuje orientaci dronu vůči světovým stranám",
    "vysvetleni": "Kompas je klíčový pro navigaci a správné fungování GPS režimů."
  },
  {
    "id": 86,
    "otazka": "Co je to 'fail-safe' systém u bezpilotního letadla?",
    "moznosti": ["Systém pro zvýšení rychlosti", "Automatický režim pro bezpečné ukončení letu při poruše", "Funkce pro focení", "Ochrana proti dešti"],
    "odpoved": "Automatický režim pro bezpečné ukončení letu při poruše",
    "vysvetleni": "Fail-safe se aktivuje například při ztrátě signálu nebo vybití baterie a zajistí návrat domů nebo přistání."
  },
  {
    "id": 87,
    "otazka": "Jaký je vliv hustoty vzduchu na vztlak?",
    "moznosti": ["Vyšší hustota = vyšší vztlak", "Nižší hustota = vyšší vztlak", "Hustota nemá vliv", "Závisí pouze na barvě vrtulí"],
    "odpoved": "Vyšší hustota = vyšší vztlak",
    "vysvetleni": "V hustším (chladnějším) vzduchu mají vrtule o co se opřít, proto je let efektivnější."
  },
  {
    "id": 88,
    "otazka": "Může mít dálkově řídící pilot během letu jiné povinnosti?",
    "moznosti": ["Ano, pokud letí automaticky", "Ne, musí se plně věnovat řízení", "Ano, může telefonovat", "Pouze v kategorii A3"],
    "odpoved": "Ne, musí se plně věnovat řízení",
    "vysvetleni": "Pilot musí neustále sledovat dron a okolní provoz, aby mohl okamžitě reagovat na nebezpečí."
  },
  {
    "id": 89,
    "otazka": "Co dělat, pokud se dron začne ve vzduchu nekontrolovaně třást?",
    "moznosti": ["Zrychlit", "Okamžitě bezpečně přistát", "Vypnout GPS", "Ignorovat to"],
    "odpoved": "Okamžitě bezpečně přistát",
    "vysvetleni": "Třesení může signalizovat uvolněnou vrtuli, poškozený motor nebo chybu stabilizace."
  },
  {
    "id": 90,
    "otazka": "Jaká je funkce gyroskopu v UA?",
    "moznosti": ["Měří teplotu", "Udržuje stabilitu a polohu dronu", "Měří vzdálenost od země", "Zvyšuje dosah vysílačky"],
    "odpoved": "Udržuje stabilitu a polohu dronu",
    "vysvetleni": "Gyroskop detekuje náklony a změny orientace, které řídicí jednotka okamžitě kompenzuje motory."
  },
  {
    "id": 91,
    "otazka": "Jaký je rozdíl mezi jmenovitým a maximálním napětím baterie?",
    "moznosti": ["Žádný", "Jmenovité je průměrné (3.7V), maximální je plné nabití (4.2V)", "Jmenovité je vyšší", "Maximální napětí je nebezpečné"],
    "odpoved": "Jmenovité je průměrné (3.7V), maximální je plné nabití (4.2V)",
    "vysvetleni": "Jmenovité napětí slouží k identifikaci typu baterie, maximální k určení stavu nabití."
  },
  {
    "id": 92,
    "otazka": "Co je to 'imu' (Inertial Measurement Unit)?",
    "moznosti": ["Typ motoru", "Jednotka měřící zrychlení a rotaci", "Název aplikace", "Paměťová karta"],
    "odpoved": "Jednotka měřící zrychlení a rotaci",
    "vysvetleni": "IMU kombinuje akcelerometr a gyroskop, je to 'mozek' rovnováhy dronu."
  },
  {
    "id": 93,
    "otazka": "Jaká je bezpečná vzdálenost pro startování UA?",
    "moznosti": ["0 m", "Minimálně několik metrů od osob a překážek", "Vždy 50 m", "Vždy 100 m"],
    "odpoved": "Minimálně několik metrů od osob a překážek",
    "vysvetleni": "Při startu hrozí převrácení nebo selhání, proto je nutný bezpečný odstup."
  },
  {
    "id": 94,
    "otazka": "Může se s dronem létat v mlze?",
    "moznosti": ["Ano, pokud je vidět na ovladač", "Ne, není dodržen VLOS", "Ano, s osvětlením", "Pouze do 10 metrů"],
    "odpoved": "Ne, není dodržen VLOS",
    "vysvetleni": "V mlze pilot ztrácí přímý vizuální kontakt a schopnost orientace v prostoru."
  },
  {
    "id": 95,
    "otazka": "Jak ovlivňuje námraza vlastnosti vrtulí?",
    "moznosti": ["Zlepšuje aerodynamiku", "Snižuje vztlak a zvyšuje hmotnost", "Zvyšuje otáčky", "Nemá vliv"],
    "odpoved": "Snižuje vztlak a zvyšuje hmotnost",
    "vysvetleni": "Námraza mění profil vrtule, což dramaticky zhoršuje její účinnost."
  },
  {
    "id": 96,
    "otazka": "Co je to 'RTH'?",
    "moznosti": ["Rychlý start", "Return to Home (Návrat domů)", "Real Time Heat", "Režim pro lidi"],
    "odpoved": "Return to Home (Návrat domů)",
    "vysvetleni": "Bezpečnostní funkce, která navede dron na místo vzletu pomocí GPS."
  },
  {
    "id": 97,
    "otazka": "Jaká je role 'pozorovatele'?",
    "moznosti": ["Pomáhá s nošením věcí", "Sleduje dron a okolí, aby pilot mohl koukat na displej (FPV)", "Opravuje dron", "Natáčí video"],
    "odpoved": "Sleduje dron a okolí, aby pilot mohl koukat na displej (FPV)",
    "vysvetleni": "Pozorovatel zajišťuje, že let zůstává v režimu VLOS, i když pilot používá brýle nebo displej."
  },
  {
    "id": 98,
    "otazka": "Může pilot létat v blízkosti vedení vysokého napětí?",
    "moznosti": ["Ano, bez omezení", "Ne, hrozí silné elektromagnetické rušení", "Ano, pokud se nedotkne", "Pouze s plastovými vrtulemi"],
    "odpoved": "Ne, hrozí silné elektromagnetické rušení",
    "vysvetleni": "Magnetické pole kolem drátů může zmást kompas a elektroniku dronu."
  },
  {
    "id": 99,
    "otazka": "Co dělat, když dojde k požáru LiPo baterie?",
    "moznosti": ["Hasit vodou", "Hasit pískem nebo speciálním hasicím přístrojem", "Foukat na ni", "Zakrýt dekou"],
    "odpoved": "Hasit pískem nebo speciálním hasicím přístrojem",
    "vysvetleni": "Hořící lithium reaguje s vodou, proto se používá písek nebo třída hasicího přístroje D."
  },
  {
    "id": 100,
    "otazka": "Který dokument musí mít pilot u sebe při provozu v A2?",
    "moznosti": ["Žádný", "Doklad o pojištění a osvědčení o způsobilosti dálkově řídícího pilota", "Návod k obsluze", "Účtenku od dronu"],
    "odpoved": "Doklad o pojištění a osvědčení o způsobilosti dálkově řídícího pilota",
    "vysvetleni": "Při kontrole musí pilot prokázat svou identitu, kvalifikaci a platné pojištění."
  },
  {
    "id": 101,
    "otazka": "Jak se určuje kinetická energie UA?",
    "moznosti": ["Podle výšky", "Podle hmotnosti a rychlosti", "Podle síly motoru", "Podle kapacity baterie"],
    "odpoved": "Podle hmotnosti a rychlosti",
    "vysvetleni": "Kinetická energie určuje závažnost dopadu; čím je dron těžší a rychlejší, tím je nebezpečnější."
  },
  {
    "id": 102,
    "otazka": "Co je to 'předletová příprava'?",
    "moznosti": ["Nabíjení telefonu", "Kontrola technického stavu UA, počasí a omezení prostoru", "Úklid kufru auta", "Nákup svačiny"],
    "odpoved": "Kontrola technického stavu UA, počasí a omezení prostoru",
    "vysvetleni": "Zákonná povinnost pilota zajistit, že let proběhne bezpečně."
  },
  {
    "id": 103,
    "otazka": "Kdo vydává povolení k letu v zakázaném prostoru (P)?",
    "moznosti": ["Policie", "Úřad pro civilní letectví (ÚCL)", "Armáda", "Starosta obce"],
    "odpoved": "Úřad pro civilní letectví (ÚCL)",
    "vysvetleni": "ÚCL je hlavním regulačním orgánem pro civilní letectví v ČR."
  },
  {
    "id": 104,
    "otazka": "Jaká je hlavní výhoda GPS režimu?",
    "moznosti": ["Dron létá rychleji", "Dron drží pozici i ve větru", "Baterie déle vydrží", "Lepší obraz z kamery"],
    "odpoved": "Dron drží pozici i ve větru",
    "vysvetleni": "GPS neustále koriguje polohu dronu, takže při puštění páček zůstane na místě."
  },
  {
    "id": 105,
    "otazka": "Jaký je vliv mokré trávy na start/přistání?",
    "moznosti": ["Žádný", "Riziko zkratu motorů a nasátí vlhkosti", "Lepší chlazení", "Snazší klouzání"],
    "odpoved": "Riziko zkratu motorů a nasátí vlhkosti",
    "vysvetleni": "Voda z trávy se může dostat do elektroniky, proto je lepší používat přistávací plochu."
  },
  {
    "id": 106,
    "otazka": "Co znamená označení mAh na baterii?",
    "moznosti": ["Napětí", "Kapacita (miliampérhodiny)", "Váha", "Maximální rychlost"],
    "odpoved": "Kapacita (miliampérhodiny)",
    "vysvetleni": "Udává, kolik energie je baterie schopna uchovat (nádrž na energii)."
  },
  {
    "id": 107,
    "otazka": "Smí se létat nad národními parky?",
    "moznosti": ["Ano", "Pouze s povolením správy parku", "Ne, je to zakázáno", "Jen nad 120m"],
    "odpoved": "Pouze s povolením správy parku",
    "vysvetleni": "Národní parky mají specifická omezení kvůli ochraně přírody a klidu zvířat."
  },
  {
    "id": 108,
    "otazka": "Jaká je frekvence 5.8 GHz vhodná pro?",
    "moznosti": ["Ovládání na velkou dálku", "Přenos videa na kratší vzdálenost", "Nabíjení", "Hlasovou komunikaci"],
    "odpoved": "Přenos videa na kratší vzdálenost",
    "vysvetleni": "Vyšší frekvence přenese více dat (kvalitnější video), ale má horší prostupnost překážkami."
  },
  {
    "id": 109,
    "otazka": "Co je to 'altimetr'?",
    "moznosti": ["Rychloměr", "Výškoměr", "Teploměr", "Vlhkoměr"],
    "odpoved": "Výškoměr",
    "vysvetleni": "Senzor (často barometrický), který určuje aktuální výšku nad místem startu."
  },
  {
    "id": 110,
    "otazka": "Jaká je max. výška letu u překážky vyšší než 120m?",
    "moznosti": ["Stále 120m", "15m nad výšku překážky (se souhlasem majitele)", "50m nad překážku", "Nelze létat"],
    "odpoved": "15m nad výšku překážky (se souhlasem majitele)",
    "vysvetleni": "Výjimka pro inspekce vysokých objektů v kategorii OPEN."
  },
  {
    "id": 111,
    "otazka": "Může se s UA létat v noci?",
    "moznosti": ["Ne", "Ano, se zeleným zábleskovým světlem", "Pouze v interiéru", "Jen s termokamerou"],
    "odpoved": "Ano, se zeleným zábleskovým světlem",
    "vysvetleni": "Legislativa vyžaduje aktivní osvětlení pro noční lety v kategorii OPEN."
  },
  {
    "id": 112,
    "otazka": "Co je to 'payload'?",
    "moznosti": ["Rychlost", "Užitečné zatížení (náklad, kamera)", "Cesta domů", "Typ motoru"],
    "odpoved": "Užitečné zatížení (náklad, kamera)",
    "vysvetleni": "Vše, co dron nese navíc k vlastní konstrukci a baterii."
  },
  {
    "id": 113,
    "otazka": "Jaký je vliv turbulencí na výdrž baterie?",
    "moznosti": ["Žádný", "Zkracuje výdrž (motory musí neustále korigovat)", "Prodlužuje výdrž", "Baterie se nabíjí"],
    "odpoved": "Zkracuje výdrž (motory musí neustále korigovat)",
    "vysvetleni": "Neustálé změny výkonu pro udržení stability zvyšují odběr proudu."
  },
  {
    "id": 114,
    "otazka": "Co dělat při vletu cizího letadla do prostoru?",
    "moznosti": ["Letět k němu", "Okamžitě klesat nebo přistát", "Ignorovat", "Fotit ho"],
    "odpoved": "Okamžitě klesat nebo přistát",
    "vysvetleni": "Dron musí vždy uvolnit cestu letadlu s posádkou."
  },
  {
    "id": 115,
    "otazka": "Co je to 'link loss'?",
    "moznosti": ["Ztráta vrtule", "Ztráta spojení mezi RC a UA", "Vybití baterie", "Ztráta signálu GPS"],
    "odpoved": "Ztráta spojení mezi RC a UA",
    "vysvetleni": "Stav, kdy dron přestane přijímat povely z ovladače."
  },
  {
    "id": 116,
    "otazka": "K čemu slouží aplikace Dronview?",
    "moznosti": ["Na úpravu fotek", "Sledování omezení vzdušného prostoru v ČR", "Hraní her", "Nákup dronů"],
    "odpoved": "Sledování omezení vzdušného prostoru v ČR",
    "vysvetleni": "Oficiální nástroj Řízení letového provozu ČR pro dálkově řídící piloty."
  },
  {
    "id": 117,
    "otazka": "Co znamená 'C-rating' na baterii?",
    "moznosti": ["Cena", "Schopnost vybíjecího proudu", "Kapacita", "Barva"],
    "odpoved": "Schopnost vybíjecího proudu",
    "vysvetleni": "Udává, jaký maximální proud dokáže baterie bezpečně dodat motorům."
  },
  {
    "id": 118,
    "otazka": "Jaký je úhel záběru kamery (FOV)?",
    "moznosti": ["Rychlost ostření", "Zorné pole (Field of View)", "Rozlišení", "Hloubka ostrosti"],
    "odpoved": "Zorné pole (Field of View)",
    "vysvetleni": "Udává, jak široký prostor kamera dronu vidí."
  },
  {
    "id": 119,
    "otazka": "Může se létat nad dálnicí?",
    "moznosti": ["Ano", "Ne, je to nebezpečné a zakázané bez povolení", "Jen v noci", "Jen do 20m"],
    "odpoved": "Ne, je to nebezpečné a zakázané bez povolení",
    "vysvetleni": "Dálnice jsou kritickou infrastrukturou s vysokým rizikem při pádu dronu."
  },
  {
    "id": 120,
    "otazka": "Co je to 'gimbal'?",
    "moznosti": ["Typ motoru", "Stabilizovaný závěs kamery", "Ovladač", "Podvozek"],
    "odpoved": "Stabilizovaný závěs kamery",
    "vysvetleni": "Mechanické zařízení, které vyrovnává náklony dronu pro plynulé video."
  },
  {
    "id": 121,
    "otazka": "Jaký je limit alkoholu v krvi pro pilota?",
    "moznosti": ["0,2 promile", "0,5 promile", "0 promile (nulová tolerance)", "0,8 promile"],
    "odpoved": "0 promile (nulová tolerance)",
    "vysvetleni": "Letecký provoz vyžaduje naprostou střízlivost."
  },
  {
    "id": 122,
    "otazka": "Co dělat s poškozenou vrtulí?",
    "moznosti": ["Zalepit", "Vyměnit za novou", "Ignorovat", "Obrousit"],
    "odpoved": "Vyměnit za novou",
    "vysvetleni": "I malá prasklina může vést k rozpadu vrtule za letu a pádu dronu."
  },
  {
    "id": 123,
    "otazka": "Jaká je funkce telemetrie?",
    "moznosti": ["Natáčení videa", "Přenos dat o stavu UA (výška, baterie) do RC", "Dálkové ovládání", "Nabíjení ovladače"],
    "odpoved": "Přenos dat o stavu UA (výška, baterie) do RC",
    "vysvetleni": "Umožňuje pilotovi sledovat důležité parametry letu v reálném čase."
  },
  {
    "id": 124,
    "otazka": "Co je to 'home point'?",
    "moznosti": ["Dům pilota", "Místo uložené v GPS, kam se dron vrátí při RTH", "Sídlo ÚCL", "Kancelář"],
    "odpoved": "Místo uložené v GPS, kam se dron vrátí při RTH",
    "vysvetleni": "Bod, který se obvykle uloží automaticky při vzletu."
  },
  {
    "id": 125,
    "otazka": "Jaký je vliv větru na dosah signálu?",
    "moznosti": ["Žádný", "Vítr může odfouknout signál", "Zlepšuje dosah", "Závisí na směru"],
    "odpoved": "Žádný",
    "vysvetleni": "Rádiové vlny nejsou větrem ovlivněny, vítr ovlivňuje pouze fyzický pohyb dronu."
  },
  {
    "id": 126,
    "otazka": "Co je základním předpokladem pro kategorii A2?",
    "moznosti": ["Jen registrace", "Úspěšné složení teoretické zkoušky a prohlášení o praktickém výcviku", "Vlastnictví drahého dronu", "Práce u policie"],
    "odpoved": "Úspěšné složení teoretické zkoušky a prohlášení o praktickém výcviku",
    "vysvetleni": "Pro A2 musí pilot prokázat vyšší úroveň znalostí než pro základní A1/A3."
  },
  
    ]